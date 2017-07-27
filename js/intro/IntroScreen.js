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
  var introString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_DC/intro' );

  // images
  var lightBulbImage = require( 'mipmap!CIRCUIT_CONSTRUCTION_KIT_COMMON/lightbulb-middle.png' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function IntroScreen( tandem ) {

    // Create the icon
    var icon = new Rectangle( 0, 0,
      Screen.MINIMUM_HOME_SCREEN_ICON_SIZE.width, Screen.MINIMUM_HOME_SCREEN_ICON_SIZE.height, {
        fill: CircuitConstructionKitCommonConstants.BACKGROUND_COLOR
      } );
    var lightBulbIcon = new Image( lightBulbImage, {
      scale: 0.95,
      center: icon.center
    } );
    icon.addChild( lightBulbIcon );

    var options = {
      name: introString,
      backgroundColorProperty: new Property( CircuitConstructionKitCommonConstants.BACKGROUND_COLOR ),
      homeScreenIcon: icon,
      tandem: tandem
    };

    Screen.call(
      this,
      function() { return new IntroScreenModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new IntroScreenView( model, tandem.createTandem( 'view' ) ); },
      options );
  }

  circuitConstructionKitDc.register( 'IntroScreen', IntroScreen );

  return inherit( Screen, IntroScreen );
} );