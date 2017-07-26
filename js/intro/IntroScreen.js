// Copyright 2017, University of Colorado Boulder

/**
 * The "Intro" for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var IntroScreenModel = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/intro/model/IntroScreenModel' );
  var IntroScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/intro/view/IntroScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );
  var CircuitConstructionKitCommonConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CircuitConstructionKitCommonConstants' );
  var Property = require( 'AXON/Property' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var CircuitConstructionKitLightBulbNode = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitConstructionKitLightBulbNode' );
  var LightBulb = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/LightBulb' );
  var Vector2 = require( 'DOT/Vector2' );

  // strings
  var introString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_DC/intro' );

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
    var groupTandem = tandem.createGroupTandem( 'lightBulbIconGroup' );
    var lightBulbIconModel = LightBulb.createAtPosition(
      new Vector2( 0, 0 ),
      groupTandem,
      CircuitConstructionKitCommonConstants.DEFAULT_RESISTANCE,
      groupTandem.createNextTandem()
    );
    var lightBulbIcon = new CircuitConstructionKitLightBulbNode(
      null,
      null,
      lightBulbIconModel,
      new Property( true ),
      new Property( 'lifelike' ),
      tandem.createTandem( 'lightBulbIcon' ), {
        icon: true
      } );
    lightBulbIcon.mutate( { scale: icon.height * 0.8 / lightBulbIcon.height } );
    lightBulbIcon.center = icon.center;
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