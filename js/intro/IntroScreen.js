// Copyright 2017, University of Colorado Boulder

/**
 * The "Intro" for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var Property = require( 'AXON/Property' );
  var CircuitConstructionKitCommonConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CircuitConstructionKitCommonConstants' );
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var IntroScreenModel = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/intro/model/IntroScreenModel' );
  var IntroScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/intro/view/IntroScreenView' );
  var Screen = require( 'JOIST/Screen' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Image = require( 'SCENERY/nodes/Image' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // strings
  var introString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_DC/screen.intro' ); // eslint-disable-line

  // images
  var lightBulbImage = require( 'mipmap!CIRCUIT_CONSTRUCTION_KIT_COMMON/lightbulb-middle.png' );
  var lightBulbImageIcon = require( 'mipmap!CIRCUIT_CONSTRUCTION_KIT_COMMON/lightbulb-middle-icon.png' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function IntroScreen( tandem ) {

    // Create the icon
    var homeScreenIcon = Rectangle.dimension( Screen.MINIMUM_HOME_SCREEN_ICON_SIZE, {
      fill: CircuitConstructionKitCommonConstants.BACKGROUND_COLOR
    } );
    homeScreenIcon.addChild( new Image( lightBulbImage, {
      scale: 0.95,
      center: homeScreenIcon.center
    } ) );

    // Render a smaller icon for Edge because it is aliasing the image (even with mipmap on)
    // see https://github.com/phetsims/circuit-construction-kit-dc/issues/120
    var navigationBarIcon = Rectangle.dimension( Screen.MINIMUM_NAVBAR_ICON_SIZE, {
      fill: CircuitConstructionKitCommonConstants.BACKGROUND_COLOR
    } );
    navigationBarIcon.addChild( new Image( lightBulbImageIcon, {
      scale: 1.05,
      center: navigationBarIcon.center
    } ) );

    var options = {
      name: introString,
      backgroundColorProperty: new Property( CircuitConstructionKitCommonConstants.BACKGROUND_COLOR ),
      homeScreenIcon: homeScreenIcon,
      navigationBarIcon: navigationBarIcon,
      tandem: tandem
    };

    Screen.call(
      this,
      function() { return new IntroScreenModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new IntroScreenView( model, tandem.createTandem( 'view' ) ); },
      options
    );
  }

  circuitConstructionKitDc.register( 'IntroScreen', IntroScreen );

  return inherit( Screen, IntroScreen );
} );