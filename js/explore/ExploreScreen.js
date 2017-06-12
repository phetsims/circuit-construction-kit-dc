// Copyright 2015-2017, University of Colorado Boulder

/**
 * The "Explore" Screen for the Circuit Construction Kit DC simulations.
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
  var Image = require( 'SCENERY/nodes/Image' );

  // strings
  var exploreString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_COMMON/explore' );

  // images
  var exploreScreenIcon = require( 'mipmap!CIRCUIT_CONSTRUCTION_KIT_DC/explore-screen-icon.png' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function ExploreScreen( tandem ) {

    var options = {
      name: exploreString,
      backgroundColorProperty: new Property( CircuitConstructionKitConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new Image( exploreScreenIcon ),
      tandem: tandem
    };

    Screen.call(
      this,
      function() { return new ExploreScreenModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new ExploreScreenView( model, tandem.createTandem( 'view' ) ); },
      options
    );
  }

  circuitConstructionKitDc.register( 'ExploreScreen', ExploreScreen );

  return inherit( Screen, ExploreScreen );
} );