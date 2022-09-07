// Copyright 2017-2022, University of Colorado Boulder

/**
 * The "Lab" Screen for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import { Image } from '../../../scenery/js/imports.js';
import Tandem from '../../../tandem/js/Tandem.js';
import labScreenIcon_png from '../../images/labScreenIcon_png.js';
import circuitConstructionKitDc from '../circuitConstructionKitDc.js';
import CircuitConstructionKitDcStrings from '../CircuitConstructionKitDcStrings.js';
import LabModel from './model/LabModel.js';
import LabScreenView from './view/LabScreenView.js';

const labStringProperty = CircuitConstructionKitDcStrings.screen.labStringProperty;

class LabScreen extends Screen<LabModel, LabScreenView> {

  public constructor( tandem: Tandem ) {

    super(
      () => new LabModel( tandem.createTandem( 'model' ) ),
      model => new LabScreenView( model, tandem.createTandem( 'view' ) ), {
        name: labStringProperty,
        backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
        homeScreenIcon: new ScreenIcon( new Image( labScreenIcon_png ), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem,
        maxDT: CCKCConstants.MAX_DT
      }
    );
  }
}

circuitConstructionKitDc.register( 'LabScreen', LabScreen );
export default LabScreen;