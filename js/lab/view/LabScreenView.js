// Copyright 2017-2020, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import Resistor from '../../../../circuit-construction-kit-common/js/model/Resistor.js';
import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import merge from '../../../../phet-core/js/merge.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';

import circuitConstructionKitCommonStrings from '../../../../circuit-construction-kit-common/js/circuitConstructionKitCommonStrings.js';

class LabScreenView extends CCKCScreenView {

  /**
   * @param {CircuitConstructionKitModel} model
   * @param {Tandem} tandem
   * @param {Object} [options]
   */
  constructor( model, tandem, options ) {
    const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
      point => this.circuitLayerNode.globalToLocalPoint( point )
    );

    // TODO: Better way to structure tandems
    const carouselTandem = tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'tools' );
    const wireToolNode = circuitElementToolFactory.createWireToolNode( CCKCConstants.NUMBER_OF_WIRES, carouselTandem.createTandem( 'wireToolNode' ) );

    const realLightBulbToolNode = circuitElementToolFactory.createLightBulbToolNode(
      10,
      carouselTandem.createTandem( 'realLightBulbToolNode' ),
      model.circuit.realLightBulbGroup,
      circuitConstructionKitCommonStrings.realBulb,
      true,
      model.addRealBulbsProperty
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

      // This page is duplicated in the Intro Screen View
      wireToolNode,
      circuitElementToolFactory.createRightBatteryToolNode( 10, carouselTandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createLightBulbToolNode( 10, carouselTandem.createTandem( 'lightBulbToolNode' ), model.circuit.lightBulbGroup ),
      circuitElementToolFactory.createResistorToolNode( 10, Resistor.ResistorType.RESISTOR, carouselTandem.createTandem( 'resistorToolNode' ) ),
      circuitElementToolFactory.createSwitchToolNode( 5, carouselTandem.createTandem( 'switchToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createFuseToolNode( 10, carouselTandem.createTandem( 'fuseToolNode' ) ),
      circuitElementToolFactory.createHighVoltageBatteryToolNode( 4, carouselTandem.createTandem( 'highVoltageBatteryToolNode' ) ),
      circuitElementToolFactory.createHighResistanceBulbToolNode( 4, carouselTandem.createTandem( 'highResistanceBulbToolNode' ) ),
      circuitElementToolFactory.createHighResistanceResistorToolNode( 4, carouselTandem.createTandem( 'highResistanceResistorToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createDollarBillToolNode( 1, carouselTandem.createTandem( 'dollarBillToolNode' ) ),
      circuitElementToolFactory.createPaperClipToolNode( 1, carouselTandem.createTandem( 'paperClipToolNode' ) ),
      circuitElementToolFactory.createCoinToolNode( 1, carouselTandem.createTandem( 'coinToolNode' ) ),
      circuitElementToolFactory.createEraserToolNode( 1, carouselTandem.createTandem( 'eraserToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createHandToolNode( 1, carouselTandem.createTandem( 'handToolNode' ) ),
      circuitElementToolFactory.createDogToolNode( 1, carouselTandem.createTandem( 'dogToolNode' ) ),
      circuitElementToolFactory.createPencilToolNode( 1, carouselTandem.createTandem( 'pencilToolNode' ) ),

      // The automatic scrolling function assumes this be on the last page.
      realLightBulbToolNode
    ];

    // Check the assumption that the real light bulb tool node remains on the last page, so we can scroll to it
    // without breaking the modularity of the pagination code.
    assert && assert( circuitElementToolNodes.indexOf( realLightBulbToolNode ) >= circuitElementToolNodes.length - 5, 'realLightBulbToolNode should be' +
                                                                                                                           ' on the last page' );

    super( model, circuitElementToolNodes, tandem, merge( {
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown. REVIEW: doc repeats variable name
                                // REVIEW^(samreid): I'm not sure what to do, are you saying the doc is redundant?
      showSeriesAmmeters: true
    }, options ) );
  }
}

circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );
export default LabScreenView;