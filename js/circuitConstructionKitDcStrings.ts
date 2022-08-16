// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import circuitConstructionKitDc from './circuitConstructionKitDc.js';

type StringsType = {
  'circuit-construction-kit-dc': {
    'title': string;
    'titleProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'intro': string;
    'introProperty': TReadOnlyProperty<string>;
    'lab': string;
    'labProperty': TReadOnlyProperty<string>;
  }
};

const circuitConstructionKitDcStrings = getStringModule( 'CIRCUIT_CONSTRUCTION_KIT_DC' ) as StringsType;

circuitConstructionKitDc.register( 'circuitConstructionKitDcStrings', circuitConstructionKitDcStrings );

export default circuitConstructionKitDcStrings;
