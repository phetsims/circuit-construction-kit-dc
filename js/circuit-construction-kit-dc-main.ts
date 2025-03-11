// Copyright 2016-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCQueryParameters from '../../circuit-construction-kit-common/js/CCKCQueryParameters.js';
import CCKCSimulationPreferencesContentNode from '../../circuit-construction-kit-common/js/view/CCKCSimulationPreferencesContentNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import affirm from '../../perennial-alias/js/browser-and-node/affirm.js';
import soundManager from '../../tambo/js/soundManager.js';
import Tandem from '../../tandem/js/Tandem.js';
import CircuitConstructionKitDcStrings from './CircuitConstructionKitDcStrings.js';
import CodapScreen from './codap/CodapScreen.js';
import IntroScreen from './intro/IntroScreen.js';
import LabScreen from './lab/LabScreen.js';

// constants
const tandem = Tandem.ROOT;

const circuitConstructionKitDcTitleStringProperty = CircuitConstructionKitDcStrings[ 'circuit-construction-kit-dc' ].titleStringProperty;

simLauncher.launch( () => {

  const showCodapScreen = CCKCQueryParameters.codap;

  const screensToShow = showCodapScreen ? [ new CodapScreen( tandem.createTandem( 'codapScreen' ) ) ] : [
    new IntroScreen( tandem.createTandem( 'introScreen' ) ),
    new LabScreen( tandem.createTandem( 'labScreen' ), {
      showNoncontactAmmeters: true
    } )
  ];

  // Launch the simulation once everything is ready
  const sim = new Sim( circuitConstructionKitDcTitleStringProperty, screensToShow, {
    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new CCKCSimulationPreferencesContentNode( tandem.createTandem( 'simPreferences' ) )
        } ]
      }
    } ),
    credits: {
      leadDesign: 'Amy Rouinfar',
      softwareDevelopment: 'Sam Reid, Denzell Barnett, Matthew Blackman',
      team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Wendy Adams, Carl Wieman',
      qualityAssurance: 'Jaspe Arias, Steele Dalton, Amanda Davis, Alex Dornan, Jaron Droder, Bryce Griebenow, Clifford Hardin, Ethan Johnson, Megan Lai, Brooklyn Lash, Emily Miller, Matthew Moore, Liam Mulhall, Devon Quispe, Ben Roberts, Jacob Romero, Nancy Salpepi, Ethan Ward, Kathryn Woessner',
      graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
    },
    phetioDesigned: true
  } );
  sim.start();

  // TODO: Make a CCKCSim() that factors this out? https://github.com/phetsims/circuit-construction-kit-common/issues/1027
  const element = sim.display.getFocusablePlaceholder();
  affirm( element );
  sim.display.addInputListener( {
    down: () => {

      // Only if there isn't another item focused already.
      if ( document.activeElement === document.body ) {
        element.focus();
      }
    }
  } );

  // Disable sounds for joist/home screen/navigation bar/carousel, but leave sound for the dog bark
  soundManager.setOutputLevelForCategory( 'user-interface', 0 );
} );