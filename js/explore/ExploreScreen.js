// Copyright 2015-2016, University of Colorado Boulder
// TODO: Review, document, annotate, i18n, bring up to standards

/**
 * The "Explore Screen", used in both Black Box Study and DC simulations.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var ExploreScreenModel = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/explore/model/ExploreScreenModel' );
  var ExploreScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/explore/view/ExploreScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );
  var CircuitConstructionKitConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CircuitConstructionKitConstants' );
  var Property = require( 'AXON/Property' );
  var CCKIcon = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKIcon' );

  // strings
  var exploreString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_COMMON/explore' );

  /**
   * @constructor
   */
  function ExploreScreen( tandem ) {

    var options = {
      name: exploreString, //TODO i18n
      backgroundColorProperty: new Property( CircuitConstructionKitConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new CCKIcon( tandem.createTandem( 'icon' ) ),
      tandem: tandem
    };

    Screen.call( this,
      function() {
        return new ExploreScreenModel( tandem.createTandem( 'model' ) );
      },
      function( model ) {
        return new ExploreScreenView( model, tandem.createTandem( 'view' ) );
      },
      options );
  }

  circuitConstructionKitDc.register( 'ExploreScreen', ExploreScreen );

  return inherit( Screen, ExploreScreen );
} );