// Copyright 2020-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
import circuitConstructionKitDc from './circuitConstructionKitDc.js';

type StringsType = {
  'circuit-construction-kit-dc': {
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'introStringProperty': LocalizedStringProperty;
    'labStringProperty': LocalizedStringProperty;
    'codapStringProperty': LocalizedStringProperty;
  }
};

const CircuitConstructionKitDcStrings = getStringModule( 'CIRCUIT_CONSTRUCTION_KIT_DC' ) as StringsType;

circuitConstructionKitDc.register( 'CircuitConstructionKitDcStrings', CircuitConstructionKitDcStrings );

export default CircuitConstructionKitDcStrings;
