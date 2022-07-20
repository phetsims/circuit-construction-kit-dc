// Copyright 2017-2021, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import circuitConstructionKitCommonStrings from '../../../../circuit-construction-kit-common/js/circuitConstructionKitCommonStrings.js';
import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import merge from '../../../../phet-core/js/merge.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';

class LabScreenView extends CCKCScreenView {

  /**
   * @param {CircuitConstructionKitModel} model
   * @param {Tandem} tandem
   * @param {Object} [options]
   */
  constructor( model, tandem, options ) {

    const circuitElementToolFactory = new CircuitElementToolFactory(
      model.circuit,
      model.showLabelsProperty,
      model.viewTypeProperty,
      point => this.circuitLayerNode.globalToLocalPoint( point ),
      tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'circuitElementTools' )
    );

    const realLightBulbToolNode = circuitElementToolFactory.createLightBulbToolNode(
      model.circuit.realLightBulbGroup,
      circuitConstructionKitCommonStrings.realBulb,
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
    const circuitElementToolNodes = [

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
      circuitElementToolFactory.createHandToolNode(),
      circuitElementToolFactory.createDogToolNode(),
      circuitElementToolFactory.createPencilToolNode(),
      realLightBulbToolNode // The automatic scrolling function assumes this be on the last page.
    ];

    // Check the assumption that the real light bulb tool node remains on the last page, so we can scroll to it
    // without breaking the modularity of the pagination code.
    assert && assert( circuitElementToolNodes.indexOf( realLightBulbToolNode ) >= circuitElementToolNodes.length - 5, 'realLightBulbToolNode should be' +
                                                                                                                      ' on the last page' );

    super( model, circuitElementToolNodes, tandem, merge( {
      showSeriesAmmeters: true
    }, options ) );
  }
}

circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );
export default LabScreenView;