// Copyright 2017, University of Colorado Boulder

/**
 * The "Lab" Screen for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const CCKCConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CCKCConstants' );
  const circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  const Image = require( 'SCENERY/nodes/Image' );
  const LabModel = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/lab/model/LabModel' );
  const LabScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/lab/view/LabScreenView' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const labString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_DC/screen.lab' ); // eslint-disable-line

  // images
  const labScreenIcon = require( 'image!CIRCUIT_CONSTRUCTION_KIT_DC/lab-screen-icon.png' );

  class LabScreen extends Screen {

    /**
     * @param {Tandem} tandem
     * @param {Object} options
     */
    constructor( tandem, options ) {

      super(
        () => new LabModel( tandem.createTandem( 'model' ) ),
        model => new LabScreenView( model, tandem.createTandem( 'view' ), options ), {
          name: labString,
          backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
          homeScreenIcon: new Image( labScreenIcon ),
          tandem: tandem
        }
      );
    }
  }

  return circuitConstructionKitDc.register( 'LabScreen', LabScreen );
} );