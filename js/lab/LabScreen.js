// Copyright 2017-2020, University of Colorado Boulder

/**
 * The "Lab" Screen for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import Screen from '../../../joist/js/Screen.js';
import Image from '../../../scenery/js/nodes/Image.js';
import labScreenIcon from '../../images/lab-screen-icon_png.js';
import circuitConstructionKitDcStrings from '../circuit-construction-kit-dc-strings.js';
import circuitConstructionKitDc from '../circuitConstructionKitDc.js';
import LabModel from './model/LabModel.js';
import LabScreenView from './view/LabScreenView.js';

const labString = circuitConstructionKitDcStrings.screen.lab;


class LabScreen extends Screen {

  /**
   * @param {Tandem} tandem
   * @param {Object} [options]
   */
  constructor( tandem, options ) {

    super(
      () => new LabModel( tandem.createTandem( 'model' ) ),
      model => new LabScreenView( model, tandem.createTandem( 'view' ), options ), {
        name: labString,
        backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
        homeScreenIcon: new Image( labScreenIcon ),
        tandem: tandem,
        maxDT: CCKCConstants.MAX_DT
      }
    );
  }
}

circuitConstructionKitDc.register( 'LabScreen', LabScreen );
export default LabScreen;