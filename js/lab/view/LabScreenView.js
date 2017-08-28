// Copyright 2017, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var CircuitConstructionKitScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitConstructionKitScreenView' );
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {CircuitConstructionKitModel} circuitConstructionKitScreenModel
   * @param {Tandem} tandem
   * @param {Object} options
   * @constructor
   */
  function LabScreenView( circuitConstructionKitScreenModel, tandem, options ) {
    CircuitConstructionKitScreenView.call( this, circuitConstructionKitScreenModel, tandem, _.extend( {
      numberOfLeftBatteries: 0, // Only show right-facing batteries.
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown. REVIEW: doc repeats variable name
                                // REVIEW^(samreid): I'm not sure what to do, are you saying the doc is redundant?
      showSeriesAmmeters: true,
      numberOfCoins: 1,
      numberOfErasers: 1,
      numberOfDogs: 1,
      numberOfPencils: 1,
      numberOfHands: 1,
      numberOfDollarBills: 1,
      numberOfPaperClips: 1,
      numberOfHighVoltageBatteries: 4,
      numberOfHighResistanceResistors: 4,
      numberOfHighResistanceLightBulbs: 4
    }, options ) );
  }

  circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );

  return inherit( CircuitConstructionKitScreenView, LabScreenView );
} );