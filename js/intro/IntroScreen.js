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
  var CCKIcon = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKIcon' );
  var CircuitConstructionKitConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CircuitConstructionKitConstants' );
  var Property = require( 'AXON/Property' );

  /**
   * @constructor
   */
  function IntroScreen( tandem ) {

    var options = {
      name: 'Intro', //TODO i18n
      backgroundColorProperty: new Property( CircuitConstructionKitConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new CCKIcon( tandem.createTandem( 'icon' ) ),
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