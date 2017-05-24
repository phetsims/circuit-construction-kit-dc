// Copyright 2015-2016, University of Colorado Boulder

/**
 * The view for the Explore screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var inherit = require( 'PHET_CORE/inherit' );
  var CCKScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKScreenView' );

  /**
   * @param {CircuitConstructionKitModel} circuitConstructionKitScreenModel
   * @param {Tandem} tandem
   * @constructor
   */
  function ExploreScreenView( circuitConstructionKitScreenModel, tandem ) {
    CCKScreenView.call( this, circuitConstructionKitScreenModel, tandem, {
      numberOfLeftBatteriesInToolbox: 0, // Only show right-facing batteries.
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown.
      showResistivityControl: false,
      showBatteryResistanceControl: false,
      numberOfCoinsInToolbox: 4,
      numberOfDollarBillsInToolbox: 4,
      numberOfPaperClipsInToolbox: 4
    } );
  }

  circuitConstructionKitDc.register( 'ExploreScreenView', ExploreScreenView );

  return inherit( CCKScreenView, ExploreScreenView );
} );