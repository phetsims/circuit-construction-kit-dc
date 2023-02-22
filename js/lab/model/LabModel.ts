// Copyright 2017-2023, University of Colorado Boulder

/**
 * Model for the Lab Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';
import { LabScreenOptions } from '../LabScreen.js';

class LabModel extends CircuitConstructionKitModel {

  public constructor( tandem: Tandem, providedOptions: LabScreenOptions ) {
    super( false, true, tandem, providedOptions );
  }
}

circuitConstructionKitDc.register( 'LabModel', LabModel );
export default LabModel;