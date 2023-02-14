// Copyright 2017-2023, University of Colorado Boulder

/**
 * Model for the Lab Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Tandem from '../../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';
import LabModel from '../../lab/model/LabModel.js';

class CodapModel extends LabModel {

  public constructor( tandem: Tandem ) {
    super( tandem );
  }
}

circuitConstructionKitDc.register( 'CodapModel', CodapModel );
export default CodapModel;