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

  // EEcircuit integration test - comparing with PhET's MNA solver
  await testEECircuitIntegration();
} );

/**
 * Test EEcircuit integration by comparing results with PhET's MNA solver.
 */
async function testEECircuitIntegration(): Promise<void> {
  // Import the necessary modules
  const { default: MNABattery } = await import( '../../circuit-construction-kit-common/js/model/analysis/mna/MNABattery.js' );
  const { default: MNACircuit } = await import( '../../circuit-construction-kit-common/js/model/analysis/mna/MNACircuit.js' );
  const { default: MNAResistor } = await import( '../../circuit-construction-kit-common/js/model/analysis/mna/MNAResistor.js' );
  const { default: EECircuitAdapter } = await import( '../../circuit-construction-kit-common/js/model/analysis/EECircuitAdapter.js' );

  console.log( '=== EEcircuit Integration Test ===' );

  // Initialize EEcircuit
  // @ts-expect-error - EEcircuit is loaded as a preload script
  const eesim = new window.EEcircuit.Simulation();
  await eesim.start();
  console.log( 'EEcircuit initialized' );

  // Test 1: Simple battery and resistor (same as MNACircuitTests)
  console.log( '\n--- Test 1: Simple Battery + Resistor ---' );
  const battery1 = new MNABattery( '0', '1', 4.0 );
  const resistor1 = new MNAResistor( '1', '0', 2.0 );

  // PhET MNA solution
  const mnaSolution1 = new MNACircuit( [ battery1 ], [ resistor1 ], [] ).solve();
  console.log( 'PhET MNA Solution:' );
  console.log( `  V(0) = ${mnaSolution1.getNodeVoltage( '0' )}` );
  console.log( `  V(1) = ${mnaSolution1.getNodeVoltage( '1' )}` );
  console.log( `  I(battery) = ${mnaSolution1.getSolvedCurrent( battery1 )}` );

  // EEcircuit solution
  const adapter1 = new EECircuitAdapter( [ battery1 ], [ resistor1 ] );
  const netlist1 = adapter1.generateTransientNetlist();
  console.log( 'Generated netlist:\n', netlist1 );

  eesim.setNetList( netlist1 );
  const result1 = await eesim.runSim();
  console.log( 'EEcircuit raw result:', result1 );

  const eeSolution1 = adapter1.parseResult( result1 );
  console.log( 'EEcircuit Parsed Solution:' );
  console.log( `  V(0) = ${eeSolution1.getNodeVoltage( '0' )}` );
  console.log( `  V(1) = ${eeSolution1.getNodeVoltage( '1' )}` );
  console.log( `  I(battery) = ${eeSolution1.getSolvedCurrent( battery1 )}` );

  // Test 2: Voltage divider
  console.log( '\n--- Test 2: Voltage Divider ---' );
  const battery2 = new MNABattery( '0', '1', 5.0 );
  const resistor2a = new MNAResistor( '1', '2', 10.0 );
  const resistor2b = new MNAResistor( '2', '0', 10.0 );

  // PhET MNA solution
  const mnaSolution2 = new MNACircuit( [ battery2 ], [ resistor2a, resistor2b ], [] ).solve();
  console.log( 'PhET MNA Solution:' );
  console.log( `  V(0) = ${mnaSolution2.getNodeVoltage( '0' )}` );
  console.log( `  V(1) = ${mnaSolution2.getNodeVoltage( '1' )}` );
  console.log( `  V(2) = ${mnaSolution2.getNodeVoltage( '2' )}` );
  console.log( `  I(battery) = ${mnaSolution2.getSolvedCurrent( battery2 )}` );

  // EEcircuit solution
  const adapter2 = new EECircuitAdapter( [ battery2 ], [ resistor2a, resistor2b ] );
  const netlist2 = adapter2.generateTransientNetlist();
  console.log( 'Generated netlist:\n', netlist2 );

  eesim.setNetList( netlist2 );
  const result2 = await eesim.runSim();
  console.log( 'EEcircuit raw result:', result2 );

  const eeSolution2 = adapter2.parseResult( result2 );
  console.log( 'EEcircuit Parsed Solution:' );
  console.log( `  V(0) = ${eeSolution2.getNodeVoltage( '0' )}` );
  console.log( `  V(1) = ${eeSolution2.getNodeVoltage( '1' )}` );
  console.log( `  V(2) = ${eeSolution2.getNodeVoltage( '2' )}` );
  console.log( `  I(battery) = ${eeSolution2.getSolvedCurrent( battery2 )}` );

  // Test 3: Two batteries in series
  console.log( '\n--- Test 3: Two Batteries in Series ---' );
  const battery3a = new MNABattery( '0', '1', 4.0 );
  const battery3b = new MNABattery( '1', '2', 4.0 );
  const resistor3 = new MNAResistor( '2', '0', 2.0 );

  // PhET MNA solution - note: PhET uses negative voltages differently
  const mnaSolution3 = new MNACircuit( [ battery3a, battery3b ], [ resistor3 ], [] ).solve();
  console.log( 'PhET MNA Solution:' );
  console.log( `  V(0) = ${mnaSolution3.getNodeVoltage( '0' )}` );
  console.log( `  V(1) = ${mnaSolution3.getNodeVoltage( '1' )}` );
  console.log( `  V(2) = ${mnaSolution3.getNodeVoltage( '2' )}` );
  console.log( `  I(battery3a) = ${mnaSolution3.getSolvedCurrent( battery3a )}` );
  console.log( `  I(battery3b) = ${mnaSolution3.getSolvedCurrent( battery3b )}` );

  // EEcircuit solution
  const adapter3 = new EECircuitAdapter( [ battery3a, battery3b ], [ resistor3 ] );
  const netlist3 = adapter3.generateTransientNetlist();
  console.log( 'Generated netlist:\n', netlist3 );

  eesim.setNetList( netlist3 );
  const result3 = await eesim.runSim();
  console.log( 'EEcircuit raw result:', result3 );

  const eeSolution3 = adapter3.parseResult( result3 );
  console.log( 'EEcircuit Parsed Solution:' );
  console.log( `  V(0) = ${eeSolution3.getNodeVoltage( '0' )}` );
  console.log( `  V(1) = ${eeSolution3.getNodeVoltage( '1' )}` );
  console.log( `  V(2) = ${eeSolution3.getNodeVoltage( '2' )}` );
  console.log( `  I(battery3a) = ${eeSolution3.getSolvedCurrent( battery3a )}` );
  console.log( `  I(battery3b) = ${eeSolution3.getSolvedCurrent( battery3b )}` );

  console.log( '\n=== EEcircuit Integration Test Complete ===' );
}