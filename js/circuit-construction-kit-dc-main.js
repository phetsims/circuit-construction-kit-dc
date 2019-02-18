// Copyright 2016-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  require( 'SCENERY/nodes/Image' ); // Image is required for making toDataURLNodeSynchronous work in the built version
  const IntroScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/intro/IntroScreen' );
  const KeyboardUtil = require( 'SCENERY/accessibility/KeyboardUtil' );
  const LabScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/lab/LabScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // constants
  const tandem = Tandem.rootTandem;

  // strings
  const circuitConstructionKitDcTitleString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_DC/circuit-construction-kit-dc.title' );

  const simOptions = {
    credits: {
      leadDesign: 'Amy Rouinfar',
      softwareDevelopment: 'Sam Reid, Denzell Barnett',
      team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Wendy Adams, Carl Wieman',
      qualityAssurance: 'Steele Dalton, Amanda Davis, Alex Dornan, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts',
      graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
    },
    tandem: tandem,
    accessibility: true
  };

  // Support accessibility for deleting selected circuit elements, but don't support broader tab navigation until it
  // is complete
  document.addEventListener( 'keydown', event => {
    const keyCode = event.keyCode || event.which;
    if ( keyCode === KeyboardUtil.KEY_TAB ) {
      event.preventDefault();
    }
  } );

  // Circuit Construction Kit has unit tests for checking the mathematics for the Modified Nodal Analysis algorithm.  In
  // order to load the classes into an accessible namespace, the *-config.js and *-main.js are loaded however, when
  // running the unit tests we don't also want to launch the simulation.
  if ( !window.circuitConstructionKitTestSuite ) {
    SimLauncher.launch( () => {

      // Launch the simulation once everything is ready
      const sim = new Sim( circuitConstructionKitDcTitleString, [
        new IntroScreen( tandem.createTandem( 'introScreen' ) ),
        new LabScreen( tandem.createTandem( 'labScreen' ) )
      ], simOptions );
      sim.start();
    } );
  }
} );
