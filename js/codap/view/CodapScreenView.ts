// Copyright 2017-2024, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import { CCKCScreenViewOptions } from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import { combineOptions } from '../../../../phet-core/js/optionize.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';
import LabScreenView from '../../lab/view/LabScreenView.js';

class CodapScreenView extends LabScreenView {

  public constructor( model: CircuitConstructionKitModel, tandem: Tandem, providedOptions?: CCKCScreenViewOptions ) {

    const options = combineOptions<CCKCScreenViewOptions>( { showMeterPhetioIndex: true }, providedOptions );

    super( model, tandem, options );

    const collectDataButton = new RectangularPushButton( {
      content: new Text( 'Collect Data', { font: new PhetFont( 24 ), fill: 'rgb( 10, 10, 10 )' } ),
      baseColor: 'rgb(247, 147, 29)',
      centerX: this.layoutBounds.centerX,
      xMargin: 10,
      yMargin: 8,
      tandem: tandem.createTandem( 'collectDataButton' )
    } );

    this.addChild( collectDataButton );

    const anyMetersVisibleProperty = DerivedProperty.or( [ ...model.voltmeters.map( voltmeter => voltmeter.isActiveProperty ),
      ...model.ammeters.map( ammeter => ammeter.isActiveProperty ) ] );

    anyMetersVisibleProperty.link( visible => collectDataButton.setVisible( visible ) );

    const anyMetersActiveProperty = new DerivedProperty( [ model.voltmeters[ 0 ].voltageProperty, model.voltmeters[ 1 ].voltageProperty,
        model.ammeters[ 0 ].currentProperty, model.ammeters[ 1 ].currentProperty ],
      ( voltage1, voltage2, current1, current2 ) => {
        return typeof voltage1 === 'number' || typeof voltage2 === 'number' || typeof current1 === 'number' || typeof current2 === 'number';
      } );

    anyMetersActiveProperty.link( enable => { collectDataButton.setEnabled( enable ); } );

    this.visibleBoundsProperty.link( ( visibleBounds: Bounds2 ) => {
      collectDataButton.mutate( {
        centerX: 0.72 * visibleBounds.width,
        bottom: visibleBounds.bottom - CCKCConstants.HORIZONTAL_MARGIN
      } );
    } );
  }
}

circuitConstructionKitDc.register( 'CodapScreenView', CodapScreenView );
export default CodapScreenView;