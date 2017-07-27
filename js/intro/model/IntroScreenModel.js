// Copyright 2017, University of Colorado Boulder

/**
 * Model for the Intro Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function IntroScreenModel( tandem ) {
    CircuitConstructionKitModel.call( this, tandem );
  }

  circuitConstructionKitDc.register( 'IntroScreenModel', IntroScreenModel );

  return inherit( CircuitConstructionKitModel, IntroScreenModel );
} );