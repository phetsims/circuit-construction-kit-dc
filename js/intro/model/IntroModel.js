// Copyright 2017, University of Colorado Boulder

/**
 * Model for the Intro Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  const CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );

  class IntroModel extends CircuitConstructionKitModel {

    /**
     * @param {Tandem} tandem
     * @constructor
     */
    constructor( tandem ) {
      super( tandem );
    }
  }

  return circuitConstructionKitDc.register( 'IntroModel', IntroModel );
} );