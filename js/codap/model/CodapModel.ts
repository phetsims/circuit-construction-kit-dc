// Copyright 2017-2022, University of Colorado Boulder

/**
 * Model for the Lab Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';

class CodapModel extends CircuitConstructionKitModel {

  public constructor( tandem: Tandem ) {
    super( false, true, tandem );
  }
}

circuitConstructionKitDc.register( 'CodapModel', CodapModel );
export default CodapModel;