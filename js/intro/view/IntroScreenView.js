// Copyright 2017, University of Colorado Boulder

/**
 * The view for the Intro screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var CircuitElementToolFactory = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitElementToolFactory' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  /**
   * @param {IntroScreenModel} model
   * @param {Tandem} tandem
   * @constructor
   */
  function IntroScreenView( model, tandem ) {
    var self = this;
    var circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty, function( point ) {
      return self.circuitLayerNode.globalToLocalPoint( point );
    } );

    var wireToolNode = circuitElementToolFactory.createWireToolNode( 25, tandem.createTandem( 'wireToolNode' ) );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    var circuitElementToolNodes = [

      // This page is duplicated in the Lab Screen View
      wireToolNode,
      circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
      circuitElementToolFactory.createResistorToolNode( 10, tandem.createTandem( 'resistorToolNode' ) ),
      circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ), // Wire should appear at the top of each carousel page
      circuitElementToolFactory.createDollarBillToolNode( 1, tandem.createTandem( 'dollarBillToolNode' ) ),
      circuitElementToolFactory.createPaperClipToolNode( 1, tandem.createTandem( 'paperClipToolNode' ) ),
      circuitElementToolFactory.createCoinToolNode( 1, tandem.createTandem( 'coinToolNode' ) ),
      circuitElementToolFactory.createEraserToolNode( 1, tandem.createTandem( 'eraserToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createPencilToolNode( 1, tandem.createTandem( 'pencilToolNode' ) ),
      circuitElementToolFactory.createHandToolNode( 1, tandem.createTandem( 'handToolNode' ) ),
      circuitElementToolFactory.createDogToolNode( 1, tandem.createTandem( 'dogToolNode' ) )
    ];

    CCKCScreenView.call( this, model, circuitElementToolNodes, tandem, {
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown.
      showResistivityControl: false,
      showBatteryResistanceControl: false
    } );
  }

  circuitConstructionKitDc.register( 'IntroScreenView', IntroScreenView );

  return inherit( CCKCScreenView, IntroScreenView );
} );