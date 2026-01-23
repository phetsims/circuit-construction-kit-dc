// Copyright 2017-2025, University of Colorado Boulder

/**
 * The "Lab" Screen for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKKeyboardHelpNode from '../../../circuit-construction-kit-common/js/view/CCKKeyboardHelpNode.js';
import CCKCColors from '../../../circuit-construction-kit-common/js/view/CCKCColors.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import Tandem from '../../../tandem/js/Tandem.js';
import labScreenIcon_png from '../../images/labScreenIcon_png.js';
import circuitConstructionKitDc from '../circuitConstructionKitDc.js';
import CircuitConstructionKitDcFluent from '../CircuitConstructionKitDcFluent.js';
import CircuitConstructionKitDcStrings from '../CircuitConstructionKitDcStrings.js';
import LabModel from './model/LabModel.js';
import LabScreenView from './view/LabScreenView.js';

const labStringProperty = CircuitConstructionKitDcStrings.screen.labStringProperty;

export type LabScreenOptions = {
  showNoncontactAmmeters: boolean;
};

class LabScreen extends Screen<LabModel, LabScreenView> {

  public constructor( tandem: Tandem, providedOptions: LabScreenOptions ) {

    super(
      () => new LabModel( tandem.createTandem( 'model' ), providedOptions ),
      model => new LabScreenView( model, tandem.createTandem( 'view' ), {
        circuitElementToolboxOptions: { carouselScale: CCKCConstants.DC_CAROUSEL_SCALE }
      } ), {
        name: labStringProperty,
        backgroundColorProperty: CCKCColors.screenBackgroundColorProperty,
        homeScreenIcon: new ScreenIcon( new Image( labScreenIcon_png ), {
          fill: CCKCColors.screenBackgroundColorProperty,
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        createKeyboardHelpNode: () => new CCKKeyboardHelpNode(),
        screenButtonsHelpText: CircuitConstructionKitDcFluent.a11y.labScreen.screenButtonsHelpTextStringProperty,
        tandem: tandem,
        maxDT: CCKCConstants.MAX_DT
      }
    );
  }
}

circuitConstructionKitDc.register( 'LabScreen', LabScreen );
export default LabScreen;
