// Copyright 2017-2019, University of Colorado Boulder

/**
 * The view for the Intro screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const CCKCConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CCKCConstants' );
  const CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );
  const circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  const CircuitElementToolFactory = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitElementToolFactory' );
  const Node = require( 'SCENERY/nodes/Node' );

  class IntroScreenView extends CCKCScreenView {

    /**
     * @param {IntroModel} model
     * @param {Tandem} tandem
     */
    constructor( model, tandem ) {
      const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
        point => this.circuitLayerNode.globalToLocalPoint( point ) );

      const wireToolNode = circuitElementToolFactory.createWireToolNode( CCKCConstants.NUMBER_OF_WIRES, tandem.createTandem( 'wireToolNode' ) );

      // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
      const circuitElementToolNodes = [

        // This page is duplicated in the Lab Screen View
        wireToolNode,
        circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
        circuitElementToolFactory.createResistorToolNode( 10, tandem.createTandem( 'resistorToolNode' ) ),
        circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) ),

        new Node( { children: [ wireToolNode ] } ), // Wire should appear at the top of each carousel page
        circuitElementToolFactory.createFuseToolNode( 10, tandem.createTandem( 'fuseToolNode' ) ),
        circuitElementToolFactory.createDollarBillToolNode( 1, tandem.createTandem( 'dollarBillToolNode' ) ),
        circuitElementToolFactory.createPaperClipToolNode( 1, tandem.createTandem( 'paperClipToolNode' ) ),
        circuitElementToolFactory.createCoinToolNode( 1, tandem.createTandem( 'coinToolNode' ) ),

        new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
        circuitElementToolFactory.createEraserToolNode( 1, tandem.createTandem( 'eraserToolNode' ) ),
        circuitElementToolFactory.createPencilToolNode( 1, tandem.createTandem( 'pencilToolNode' ) ),
        circuitElementToolFactory.createHandToolNode( 1, tandem.createTandem( 'handToolNode' ) ),
        circuitElementToolFactory.createDogToolNode( 1, tandem.createTandem( 'dogToolNode' ) )
      ];

      super( model, circuitElementToolNodes, tandem, {
        toolboxOrientation: 'vertical', // The toolbox should be vertical
        showResetAllButton: true, // The reset all button should be shown.
        showResistivityControl: false,
        showBatteryResistanceControl: false
      } );
    }
  }

  return circuitConstructionKitDc.register( 'IntroScreenView', IntroScreenView );
} );