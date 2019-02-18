// Copyright 2017-2019, University of Colorado Boulder

/**
 * Model for the Lab Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  const CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );

  class LabModel extends CircuitConstructionKitModel {

    /**
     * @param {Tandem}
     */
    constructor( tandem ) {
      super( tandem );
    }
  }

  return circuitConstructionKitDc.register( 'LabModel', LabModel );
} );