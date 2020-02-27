// Copyright 2017-2019, University of Colorado Boulder

/**
 * Model for the Intro Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitModel
  from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';

class IntroModel extends CircuitConstructionKitModel {

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  constructor( tandem ) {
    super( tandem );
  }
}

circuitConstructionKitDc.register( 'IntroModel', IntroModel );
export default IntroModel;