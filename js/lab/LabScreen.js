// Copyright 2015-2016, University of Colorado Boulder
// TODO: Review, document, annotate, i18n, bring up to standards

/**
 * The "Lab Screen", used in both Black Box Study and DC simulations.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var LabScreenModel = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/lab/model/LabScreenModel' );
  var LabScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/lab/view/LabScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );
  var CircuitConstructionKitConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CircuitConstructionKitConstants' );
  var Property = require( 'AXON/Property' );
  var CCKIcon = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/common/view/CCKIcon' );

  /**
   * @constructor
   */
  function LabScreen( tandem ) {

    var options = {
      name: 'Lab', //TODO i18n
      backgroundColorProperty: new Property( CircuitConstructionKitConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new CCKIcon( tandem.createTandem( 'icon' ) ),
      tandem: tandem
    };

    Screen.call( this,
      function() {
        return new LabScreenModel( tandem.createTandem( 'model' ) );
      },
      function( model ) {
        return new LabScreenView( model, tandem.createTandem( 'view' ) );
      },
      options );
  }

  circuitConstructionKitDc.register( 'LabScreen', LabScreen );

  return inherit( Screen, LabScreen );
} );