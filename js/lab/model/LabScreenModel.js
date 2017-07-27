// Copyright 2017, University of Colorado Boulder

/**
 * Model for the Lab Screen.
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
   * @param {Tandem}
   * @constructor
   */
  function LabScreenModel( tandem ) {
    CircuitConstructionKitModel.call( this, tandem );
  }

  circuitConstructionKitDc.register( 'LabScreenModel', LabScreenModel );

  return inherit( CircuitConstructionKitModel, LabScreenModel );
} );