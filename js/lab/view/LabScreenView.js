// Copyright 2015-2016, University of Colorado Boulder

/**
 * The view for the Lab screen.
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
  function LabScreenView( circuitConstructionKitScreenModel, tandem ) {
    CCKScreenView.call( this, circuitConstructionKitScreenModel, tandem, {
      numberOfLeftBatteriesInToolbox: 0, // Only show right-facing batteries.
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown.
      showSeriesAmmeters: true,
      numberOfCoinsInToolbox: 4,
      numberOfErasersInToolbox: 4,
      numberOfDogsInToolbox: 4,
      numberOfPencilsInToolbox: 4,
      numberOfHandsInToolbox: 4,
      numberOfDollarBillsInToolbox: 4,
      numberOfPaperClipsInToolbox: 4
    } );
  }

  circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );

  return inherit( CCKScreenView, LabScreenView );
} );