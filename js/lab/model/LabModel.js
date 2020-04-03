// Copyright 2017-2020, University of Colorado Boulder

/**
 * Model for the Lab Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';

class LabModel extends CircuitConstructionKitModel {

  /**
   * @param {Tandem}
   */
  constructor( tandem ) {
    super( tandem );
  }
}

circuitConstructionKitDc.register( 'LabModel', LabModel );
export default LabModel;