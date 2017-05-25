// Copyright 2015-2016, University of Colorado Boulder
// TODO: Review, document, annotate, i18n, bring up to standards

/**
 * The "Intro Screen", used in both Black Box Study and DC simulations.
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
  var CircuitConstructionKitConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CircuitConstructionKitConstants' );
  var Property = require( 'AXON/Property' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var CCKLightBulbNode = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKLightBulbNode' );
  var LightBulb = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/LightBulb' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var BACKGROUND_COLOR = CircuitConstructionKitConstants.BACKGROUND_COLOR;

  /**
   * @constructor
   */
  function IntroScreen( tandem ) {

    var icon = new Rectangle( 0, 0, Screen.MINIMUM_HOME_SCREEN_ICON_SIZE.width, Screen.MINIMUM_HOME_SCREEN_ICON_SIZE.height, {
      fill: BACKGROUND_COLOR
    } );

    var groupTandem = tandem.createGroupTandem( 'lightBulbIconGroup' );
    var lightBulbIconModel = LightBulb.createAtPosition( new Vector2( 0, 0 ), groupTandem, groupTandem.createNextTandem() );
    var lightBulbIcon = new CCKLightBulbNode( null, null, lightBulbIconModel, new Property( true ), new Property( 'lifelike' ), tandem.createTandem( 'lightBulbIcon' ), { icon: true } );

    lightBulbIcon.mutate( { scale: icon.height * 0.8 / lightBulbIcon.height } );
    lightBulbIcon.center = icon.center;
    icon.addChild( lightBulbIcon );

    var options = {
      name: 'Intro', //TODO i18n
      backgroundColorProperty: new Property( CircuitConstructionKitConstants.BACKGROUND_COLOR ),
      homeScreenIcon: icon,
      tandem: tandem
    };

    Screen.call( this,
      function() {
        return new IntroScreenModel( tandem.createTandem( 'model' ) );
      },
      function( model ) {
        return new IntroScreenView( model, tandem.createTandem( 'view' ) );
      },
      options );
  }

  circuitConstructionKitDc.register( 'IntroScreen', IntroScreen );

  return inherit( Screen, IntroScreen );
} );