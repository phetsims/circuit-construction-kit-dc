// Copyright 2016-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCQueryParameters from '../../circuit-construction-kit-common/js/CCKCQueryParameters.js';
import CCKCSim from '../../circuit-construction-kit-common/js/view/CCKCSim.js';
import CCKCSimulationPreferencesContentNode from '../../circuit-construction-kit-common/js/view/CCKCSimulationPreferencesContentNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import CircuitConstructionKitDcStrings from './CircuitConstructionKitDcStrings.js';
import CodapScreen from './codap/CodapScreen.js';
import IntroScreen from './intro/IntroScreen.js';
import LabScreen from './lab/LabScreen.js';


// constants
const tandem = Tandem.ROOT;

const circuitConstructionKitDcTitleStringProperty = CircuitConstructionKitDcStrings[ 'circuit-construction-kit-dc' ].titleStringProperty;

simLauncher.launch( async () => {

  const showCodapScreen = CCKCQueryParameters.codap;

  const screensToShow = showCodapScreen ? [ new CodapScreen( tandem.createTandem( 'codapScreen' ) ) ] : [
    new IntroScreen( tandem.createTandem( 'introScreen' ) ),
    new LabScreen( tandem.createTandem( 'labScreen' ), {
      showNoncontactAmmeters: true
    } )
  ];

  // Launch the simulation once everything is ready
  const sim = new CCKCSim( circuitConstructionKitDcTitleStringProperty, screensToShow, {
    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new CCKCSimulationPreferencesContentNode( tandem )
        } ]
      }
    } ),
    credits: {
      leadDesign: 'Amy Rouinfar',
      softwareDevelopment: 'Sam Reid, Denzell Barnett, Matthew Blackman',
      team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Wendy Adams, Carl Wieman',
      qualityAssurance: 'Jaspe Arias, Steele Dalton, Amanda Davis, Alex Dornan, Jaron Droder, Bryce Griebenow, Clifford Hardin, Ethan Johnson, Megan Lai, Brooklyn Lash, Emily Miller, Matthew Moore, Ashton Morris, Liam Mulhall, Devon Quispe, Ben Roberts, Jacob Romero, Nancy Salpepi, Marla Schulz, Ethan Ward, Kathryn Woessner',
      graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
    },
    phetioDesigned: true
  } );
  sim.start();

  // EEcircuit hello world test
  // @ts-expect-error
  const eesim = new window.EEcircuit.Simulation();
  await eesim.start();

  // Simple RC circuit netlist
  const netlist = `RC Circuit Test
v1 1 0 dc 5
r1 1 2 1k
c1 2 0 1u
.tran 0.01m 5m
.end`;

  eesim.setNetList( netlist );
  const result = await eesim.runSim();
  console.log( 'EEcircuit result:', result );
} );