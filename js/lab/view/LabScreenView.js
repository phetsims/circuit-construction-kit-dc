// Copyright 2017-2019, University of Colorado Boulder

/**
 * The view for the Lab screen.
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

  class LabScreenView extends CCKCScreenView {

    /**
     * @param {CircuitConstructionKitModel} model
     * @param {Tandem} tandem
     * @param {Object} options
     */
    constructor( model, tandem, options ) {
      const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
        point => this.circuitLayerNode.globalToLocalPoint( point )
      );

      const wireToolNode = circuitElementToolFactory.createWireToolNode( CCKCConstants.NUMBER_OF_WIRES );

      // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
      const circuitElementToolNodes = [

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

      super( model, circuitElementToolNodes, tandem, _.extend( {
        toolboxOrientation: 'vertical', // The toolbox should be vertical
        showResetAllButton: true, // The reset all button should be shown. REVIEW: doc repeats variable name
                                  // REVIEW^(samreid): I'm not sure what to do, are you saying the doc is redundant?
        showSeriesAmmeters: true
      }, options ) );
    }
  }

  return circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );
} );