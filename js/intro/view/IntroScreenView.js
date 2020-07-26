// Copyright 2017-2020, University of Colorado Boulder

/**
 * The view for the Intro screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import Resistor from '../../../../circuit-construction-kit-common/js/model/Resistor.js';
import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';

class IntroScreenView extends CCKCScreenView {

  /**
   * @param {IntroModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {
    const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
      point => this.circuitLayerNode.globalToLocalPoint( point ) );

    // TODO: Better way to structure tandems
    const carouselTandem = tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'items' );
    const wireToolNode = circuitElementToolFactory.createWireToolNode( CCKCConstants.NUMBER_OF_WIRES, carouselTandem.createTandem( 'wireToolNode' ) );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolNodes = [

      // This page is duplicated in the Lab Screen View
      wireToolNode,
      circuitElementToolFactory.createRightBatteryToolNode( 10, carouselTandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createLightBulbToolNode( 10, carouselTandem.createTandem( 'lightBulbToolNode' ) ),
      circuitElementToolFactory.createResistorToolNode( 10, Resistor.ResistorType.RESISTOR, carouselTandem.createTandem( 'resistorToolNode' ) ),
      circuitElementToolFactory.createSwitchToolNode( 5, carouselTandem.createTandem( 'switchToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ), // Wire should appear at the top of each carousel page
      circuitElementToolFactory.createFuseToolNode( 10, carouselTandem.createTandem( 'fuseToolNode' ) ),
      circuitElementToolFactory.createDollarBillToolNode( 1, carouselTandem.createTandem( 'dollarBillToolNode' ) ),
      circuitElementToolFactory.createPaperClipToolNode( 1, carouselTandem.createTandem( 'paperClipToolNode' ) ),
      circuitElementToolFactory.createCoinToolNode( 1, carouselTandem.createTandem( 'coinToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createEraserToolNode( 1, carouselTandem.createTandem( 'eraserToolNode' ) ),
      circuitElementToolFactory.createPencilToolNode( 1, carouselTandem.createTandem( 'pencilToolNode' ) ),
      circuitElementToolFactory.createHandToolNode( 1, carouselTandem.createTandem( 'handToolNode' ) ),
      circuitElementToolFactory.createDogToolNode( 1, carouselTandem.createTandem( 'dogToolNode' ) )
    ];

    super( model, circuitElementToolNodes, tandem, {
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown.
      showAdvancedControls: false
    } );
  }
}

circuitConstructionKitDc.register( 'IntroScreenView', IntroScreenView );
export default IntroScreenView;