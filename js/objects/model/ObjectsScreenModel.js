// Copyright 2015-2016, University of Colorado Boulder

/**
 * Model for the Objects Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/common/model/CircuitConstructionKitModel' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function ObjectsScreenModel( tandem ) {
    CircuitConstructionKitModel.call( this, tandem );
  }

  circuitConstructionKitDc.register( 'ObjectsScreenModel', ObjectsScreenModel );

  return inherit( CircuitConstructionKitModel, ObjectsScreenModel );
} );