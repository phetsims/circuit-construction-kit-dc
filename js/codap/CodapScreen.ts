// Copyright 2017-2023, University of Colorado Boulder

/**
 * The "Codap" Screen for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKCColors from '../../../circuit-construction-kit-common/js/view/CCKCColors.js';
import lightBulbMiddleHigh_png from '../../../circuit-construction-kit-common/mipmaps/lightBulbMiddleHigh_png.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import Rectangle from '../../../scenery/js/nodes/Rectangle.js';
import Tandem from '../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../circuitConstructionKitDc.js';
import CircuitConstructionKitDcStrings from '../CircuitConstructionKitDcStrings.js';
import CodapModel from './model/CodapModel.js';
import CodapScreenView from './view/CodapScreenView.js';

const codapStringProperty = CircuitConstructionKitDcStrings.screen.codapStringProperty;

class CodapScreen extends Screen<CodapModel, CodapScreenView> {

  public constructor( tandem: Tandem ) {

    // Create the icon
    const homeScreenIcon = Rectangle.dimension( Screen.MINIMUM_HOME_SCREEN_ICON_SIZE, {
      fill: CCKCColors.screenBackgroundColorProperty
    } );
    homeScreenIcon.addChild( new Image( lightBulbMiddleHigh_png, {
      scale: 0.95,
      center: homeScreenIcon.center
    } ) );

    // Render a smaller icon for Edge because it is aliasing the image (even with mipmap on)
    // see https://github.com/phetsims/circuit-construction-kit-dc/issues/120
    const navigationBarIcon = Rectangle.dimension( Screen.MINIMUM_NAVBAR_ICON_SIZE, {
      fill: CCKCColors.screenBackgroundColorProperty
    } );
    navigationBarIcon.addChild( new Image( lightBulbMiddleHigh_png, {
      scale: 0.26,
      center: navigationBarIcon.center
    } ) );

    const options = {
      name: codapStringProperty,
      backgroundColorProperty: CCKCColors.screenBackgroundColorProperty,
      homeScreenIcon: new ScreenIcon( homeScreenIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      navigationBarIcon: new ScreenIcon( navigationBarIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem,
      maxDT: CCKCConstants.MAX_DT
    };

    super(
      () => new CodapModel( tandem.createTandem( 'model' ) ),
      model => new CodapScreenView( model, tandem.createTandem( 'view' ), {
        circuitElementToolboxOptions: { carouselScale: CCKCConstants.DC_CAROUSEL_SCALE }
      } ), options
    );
  }
}

circuitConstructionKitDc.register( 'CodapScreen', CodapScreen );
export default CodapScreen;