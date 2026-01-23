// Copyright 2017-2025, University of Colorado Boulder

/**
 * The "Intro" for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKKeyboardHelpNode from '../../../circuit-construction-kit-common/js/view/CCKKeyboardHelpNode.js';
import CCKCColors from '../../../circuit-construction-kit-common/js/view/CCKCColors.js';
import lightBulbMiddle_png from '../../../circuit-construction-kit-common/mipmaps/lightBulbMiddle_png.js';
import lightBulbMiddleIcon_png from '../../../circuit-construction-kit-common/mipmaps/lightBulbMiddleIcon_png.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import Rectangle from '../../../scenery/js/nodes/Rectangle.js';
import Tandem from '../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../circuitConstructionKitDc.js';
import CircuitConstructionKitDcFluent from '../CircuitConstructionKitDcFluent.js';
import CircuitConstructionKitDcStrings from '../CircuitConstructionKitDcStrings.js';
import IntroModel from './model/IntroModel.js';
import IntroScreenView from './view/IntroScreenView.js';

const introStringProperty = CircuitConstructionKitDcStrings.screen.introStringProperty;

class IntroScreen extends Screen<IntroModel, IntroScreenView> {

  public constructor( tandem: Tandem ) {

    // Create the icon
    const homeScreenIcon = Rectangle.dimension( Screen.MINIMUM_HOME_SCREEN_ICON_SIZE, {
      fill: CCKCColors.screenBackgroundColorProperty
    } );
    homeScreenIcon.addChild( new Image( lightBulbMiddle_png, {
      scale: 0.95,
      center: homeScreenIcon.center
    } ) );

    // Render a smaller icon for Edge because it is aliasing the image (even with mipmap on)
    // see https://github.com/phetsims/circuit-construction-kit-dc/issues/120
    const navigationBarIcon = Rectangle.dimension( Screen.MINIMUM_NAVBAR_ICON_SIZE, {
      fill: CCKCColors.screenBackgroundColorProperty
    } );
    navigationBarIcon.addChild( new Image( lightBulbMiddleIcon_png, {
      scale: 1.05,
      center: navigationBarIcon.center
    } ) );

    const options = {
      name: introStringProperty,
      backgroundColorProperty: CCKCColors.screenBackgroundColorProperty,
      homeScreenIcon: new ScreenIcon( homeScreenIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      navigationBarIcon: new ScreenIcon( navigationBarIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      createKeyboardHelpNode: () => new CCKKeyboardHelpNode(),
      screenButtonsHelpText: CircuitConstructionKitDcFluent.a11y.introScreen.screenButtonsHelpTextStringProperty,
      tandem: tandem,
      maxDT: CCKCConstants.MAX_DT
    };

    super(
      () => new IntroModel( tandem.createTandem( 'model' ) ),
      model => new IntroScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

circuitConstructionKitDc.register( 'IntroScreen', IntroScreen );
export default IntroScreen;
