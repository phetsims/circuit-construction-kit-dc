// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import circuitConstructionKitDc from './circuitConstructionKitDc.js';

type StringsType = {
  'circuit-construction-kit-dc': {
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'introStringProperty': LinkableProperty<string>;
    'labStringProperty': LinkableProperty<string>;
    'codapStringProperty': LinkableProperty<string>;
  }
};

const CircuitConstructionKitDcStrings = getStringModule( 'CIRCUIT_CONSTRUCTION_KIT_DC' ) as StringsType;

circuitConstructionKitDc.register( 'CircuitConstructionKitDcStrings', CircuitConstructionKitDcStrings );

export default CircuitConstructionKitDcStrings;
