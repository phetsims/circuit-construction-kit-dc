// Copyright 2017, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );
  var CircuitElementToolFactory = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitElementToolFactory' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  /**
   * @param {CircuitConstructionKitModel} model
   * @param {Tandem} tandem
   * @param {Object} options
   * @constructor
   */
  function LabScreenView( model, tandem, options ) {
    var self = this;
    var circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty, function( point ) {
      return self.circuitLayerNode.globalToLocalPoint( point );
    } );

    var wireToolNode = circuitElementToolFactory.createWireToolNode( 20 );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    var circuitElementToolNodes = [

      // This page is duplicated in the Intro Screen View
      wireToolNode,
      circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
      circuitElementToolFactory.createResistorToolNode( 10, tandem.createTandem( 'resistorToolNode' ) ),
      circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createHighVoltageBatteryToolNode( 4, tandem.createTandem( 'highVoltageBatteryToolNode' ) ),
      circuitElementToolFactory.createHighResistanceBulbToolNode( 4, tandem.createTandem( 'highResistanceBulbToolNode' ) ),
      circuitElementToolFactory.createHighResistanceResistorToolNode( 4, tandem.createTandem( 'highResistanceResistorToolNode' ) ),
      circuitElementToolFactory.createDollarBillToolNode( 1, tandem.createTandem( 'dollarBillToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createPaperClipToolNode( 1, tandem.createTandem( 'paperClipToolNode' ) ),
      circuitElementToolFactory.createCoinToolNode( 1, tandem.createTandem( 'coinToolNode' ) ),
      circuitElementToolFactory.createEraserToolNode( 1, tandem.createTandem( 'eraserToolNode' ) ),
      circuitElementToolFactory.createPencilToolNode( 1, tandem.createTandem( 'pencilToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createHandToolNode( 1, tandem.createTandem( 'handToolNode' ) ),
      circuitElementToolFactory.createDogToolNode( 1, tandem.createTandem( 'dogToolNode' ) )
    ];

    CCKCScreenView.call( this, model, circuitElementToolNodes, tandem, _.extend( {
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown. REVIEW: doc repeats variable name
                                // REVIEW^(samreid): I'm not sure what to do, are you saying the doc is redundant?
      showSeriesAmmeters: true
    }, options ) );
  }

  circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );

  return inherit( CCKCScreenView, LabScreenView );
} );