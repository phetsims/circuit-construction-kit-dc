// Copyright 2015-2016, University of Colorado Boulder

/**
 * Model for the Intro Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function IntroScreenModel( tandem ) {
    CircuitConstructionKitModel.call( this, tandem );
  }

  circuitConstructionKitDc.register( 'IntroScreenModel', IntroScreenModel );

  return inherit( CircuitConstructionKitModel, IntroScreenModel );
} );