// Copyright 2017-2026, University of Colorado Boulder

/**
 * Model for the Intro Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import Tandem from '../../../../tandem/js/Tandem.js';

class IntroModel extends CircuitConstructionKitModel {

  public constructor( tandem: Tandem ) {
    super( false, false, tandem, { showNoncontactAmmeters: true } );
  }
}

export default IntroModel;
