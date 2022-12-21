// Copyright 2017-2022, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitCommonStrings from '../../../../circuit-construction-kit-common/js/CircuitConstructionKitCommonStrings.js';
import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import CCKCScreenView, { CCKCScreenViewOptions } from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import { Node, Text } from '../../../../scenery/js/imports.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';
import { combineOptions } from '../../../../phet-core/js/optionize.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import DerivedProperty from '../../../../axon/js/DerivedProperty.js';

class CodapScreenView extends CCKCScreenView {

  public constructor( model: CircuitConstructionKitModel, tandem: Tandem, providedOptions?: CCKCScreenViewOptions ) {

    const options = combineOptions<CCKCScreenViewOptions>( { showMeterPhetioIndex: true }, providedOptions );

    const circuitElementToolFactory = new CircuitElementToolFactory(
      model.circuit,
      model.showLabelsProperty,
      model.viewTypeProperty,
      point => this.circuitLayerNode.globalToLocalPoint( point ),
      tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'circuitElementTools' )
    );

    const realLightBulbToolNode = circuitElementToolFactory.createLightBulbToolNode(
      model.circuit.realLightBulbGroup,
      CircuitConstructionKitCommonStrings.realBulbStringProperty,
      true,
      model.addRealBulbsProperty,
      'realLightBulbToolNode'
    );

    // Show the real bulbs if selected
    // model.addRealBulbsProperty.link( addRealBulbs => realLightBulbToolNode.setVisible( addRealisticBulbs ) );

    // Scroll to the real bulbs if selected, but not on startup
    model.addRealBulbsProperty.lazyLink( addRealBulbs => {
      if ( addRealBulbs ) {
        this.circuitElementToolbox.carousel.scrollToItem( realLightBulbToolNode );
      }
    } );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolNodes: Node[] = [

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createRightBatteryToolNode(),
      circuitElementToolFactory.createLightBulbToolNode( model.circuit.lightBulbGroup ),
      circuitElementToolFactory.createResistorToolNode(),
      circuitElementToolFactory.createSwitchToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createFuseToolNode(),
      circuitElementToolFactory.createHighVoltageBatteryToolNode(),
      circuitElementToolFactory.createHighResistanceBulbToolNode(),
      circuitElementToolFactory.createHighResistanceResistorToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createDollarBillToolNode(),
      circuitElementToolFactory.createPaperClipToolNode(),
      circuitElementToolFactory.createCoinToolNode(),
      circuitElementToolFactory.createEraserToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createPencilToolNode(),

      realLightBulbToolNode // The automatic scrolling function assumes this be on the last page.
    ];

    // Check the assumption that the real light bulb tool node remains on the last page, so we can scroll to it
    // without breaking the modularity of the pagination code.
    assert && assert( circuitElementToolNodes.indexOf( realLightBulbToolNode ) >= circuitElementToolNodes.length - 5, 'realLightBulbToolNode should be' +
                                                                                                                      ' on the last page' );
    super( model, circuitElementToolNodes, tandem, options );

    const collectDataButton = new RectangularPushButton( {
      content: new Text( 'Collect Data', { font: new PhetFont( 24 ), fill: 'rgb( 10, 10, 10 )' } ),
      baseColor: 'rgb(247, 147, 29)',
      centerX: this.layoutBounds.centerX,
      xMargin: 10,
      yMargin: 8,
      tandem: tandem.createTandem( 'collectDataButton' )
    } );

    this.addChild( collectDataButton );

    const anyMetersVisibleProperty = DerivedProperty.or( [ ...model.voltmeters.map( voltmeter => voltmeter.visibleProperty ),
      ...model.ammeters.map( ammeter => ammeter.visibleProperty ) ] );

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