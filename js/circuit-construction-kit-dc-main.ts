// Copyright 2016-2026, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKCQueryParameters from '../../circuit-construction-kit-common/js/CCKCQueryParameters.js';
import CCKCSim from '../../circuit-construction-kit-common/js/view/CCKCSim.js';
import CCKCSimulationPreferencesContentNode from '../../circuit-construction-kit-common/js/view/CCKCSimulationPreferencesContentNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import CircuitConstructionKitDcStrings from './CircuitConstructionKitDcStrings.js';
import IntroScreen from './intro/IntroScreen.js';
import LabScreen from './lab/LabScreen.js';


// constants
const tandem = Tandem.ROOT;

const circuitConstructionKitDcTitleStringProperty = CircuitConstructionKitDcStrings[ 'circuit-construction-kit-dc' ].titleStringProperty;

simLauncher.launch( async () => {

  // Initialize EEcircuit solver if using that solver
  if ( CCKCQueryParameters.solver === 'spice' ) {

    // Commented out for the upcoming build, since the next DC build does not use spice
    // const { default: EEcircuitSolverManager } = await import(
    //   '../../circuit-construction-kit-common/js/model/analysis/spice/SpiceSolverManager.js'
    //   );
    // await EEcircuitSolverManager.instance.initialize();
  }

  // Launch the simulation once everything is ready
  const sim = new CCKCSim( circuitConstructionKitDcTitleStringProperty, [
    new IntroScreen( tandem.createTandem( 'introScreen' ) ),
    new LabScreen( tandem.createTandem( 'labScreen' ), {
      showNoncontactAmmeters: true
    } )
  ], {
    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new CCKCSimulationPreferencesContentNode( tandem )
        } ]
      }
    } ),
    credits: CCKCConstants.CREDITS,
    phetioDesigned: true
  } );
  sim.start();
} );