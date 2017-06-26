// Copyright 2015-2016, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var IntroScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/intro/IntroScreen' );
  var ExploreScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/explore/ExploreScreen' );
  var LabScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/lab/LabScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var Tandem = require( 'TANDEM/Tandem' );
  var Input = require( 'SCENERY/input/Input' );
  var ChargeNode = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/ChargeNode' );
  var SwitchNode = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/SwitchNode' );

  // constants
  var tandem = Tandem.createRootTandem();

  // strings
  var circuitConstructionKitDcTitleString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_DC/circuit-construction-kit-dc.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Amy Rouinfar',
      softwareDevelopment: 'Sam Reid',
      team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Denzell Barnett',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Elise Morgan, Ben Roberts',
      graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
    },
    tandem: tandem,
    accessibility: true
  };

  // Support accessibility for deleting selected circuit elements, but don't support broader tab navigation until it
  // is complete
  document.addEventListener( 'keydown', function( event ) {
    var keyCode = event.keyCode || event.which;
    if ( keyCode === Input.KEY_TAB ) {
      event.preventDefault();
    }
  } );

  // Circuit Construction Kit has unit tests for checking the mathematics for the Modified Nodal Analysis algorithm.  In
  // order to load the classes into an accessible namespace, the *-config.js and *-main.js are loaded however, when
  // running the unit tests we don't also want to launch the simulation.
  // TODO: use todatanodeurl
  if ( !window.circuitConstructionKitTestSuite ) {
    SimLauncher.launch( function() {

      // Create any simulation-specific raster images
      ChargeNode.init( function() {

        // Launch the simulation once everything is ready
        var sim = new Sim( circuitConstructionKitDcTitleString, [
          new IntroScreen( tandem.createTandem( 'introScreen' ) ),
          new ExploreScreen( tandem.createTandem( 'exploreScreen' ) ),
          new LabScreen( tandem.createTandem( 'labScreen' ) )
        ], simOptions );
        sim.start();
      } );
    } );
  }
} );