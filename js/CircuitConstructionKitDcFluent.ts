// Copyright 2026, University of Colorado Boulder
// AUTOMATICALLY GENERATED – DO NOT EDIT.
// Generated from circuit-construction-kit-dc-strings_en.yaml

/* eslint-disable */
/* @formatter:off */

import FluentLibrary from '../../chipper/js/browser-and-node/FluentLibrary.js';
import FluentComment from '../../chipper/js/browser/FluentComment.js';
import FluentConstant from '../../chipper/js/browser/FluentConstant.js';
import FluentContainer from '../../chipper/js/browser/FluentContainer.js';
import circuitConstructionKitDc from './circuitConstructionKitDc.js';
import CircuitConstructionKitDcStrings from './CircuitConstructionKitDcStrings.js';

// This map is used to create the fluent file and link to all StringProperties.
// Accessing StringProperties is also critical for including them in the built sim.
// However, if strings are unused in Fluent system too, they will be fully excluded from
// the build. So we need to only add actually used strings.
const fluentKeyToStringPropertyMap = new Map();

const addToMapIfDefined = ( key: string, path: string ) => {
  const sp = _.get( CircuitConstructionKitDcStrings, path );
  if ( sp ) {
    fluentKeyToStringPropertyMap.set( key, sp );
  }
};

addToMapIfDefined( 'circuit_construction_kit_dc_title', 'circuit-construction-kit-dc.titleStringProperty' );
addToMapIfDefined( 'screen_intro', 'screen.introStringProperty' );
addToMapIfDefined( 'screen_lab', 'screen.labStringProperty' );
addToMapIfDefined( 'a11y_introScreen_screenButtonsHelpText', 'a11y.introScreen.screenButtonsHelpTextStringProperty' );
addToMapIfDefined( 'a11y_labScreen_screenButtonsHelpText', 'a11y.labScreen.screenButtonsHelpTextStringProperty' );

// A function that creates contents for a new Fluent file, which will be needed if any string changes.
const createFluentFile = (): string => {
  let ftl = '';
  for (const [key, stringProperty] of fluentKeyToStringPropertyMap.entries()) {
    ftl += `${key} = ${FluentLibrary.formatMultilineForFtl( stringProperty.value )}\n`;
  }
  return ftl;
};

const fluentSupport = new FluentContainer( createFluentFile, Array.from(fluentKeyToStringPropertyMap.values()) );

const CircuitConstructionKitDcFluent = {
  "circuit-construction-kit-dc": {
    _comment_0: new FluentComment( {"comment":"Strings for PhET's Circuit Construction Kit: DC simulation","associatedKey":"circuit-construction-kit-dc.title"} ),
    titleStringProperty: _.get( CircuitConstructionKitDcStrings, 'circuit-construction-kit-dc.titleStringProperty' )
  },
  screen: {
    introStringProperty: _.get( CircuitConstructionKitDcStrings, 'screen.introStringProperty' ),
    labStringProperty: _.get( CircuitConstructionKitDcStrings, 'screen.labStringProperty' )
  },
  a11y: {
    introScreen: {
      screenButtonsHelpTextStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_introScreen_screenButtonsHelpText', _.get( CircuitConstructionKitDcStrings, 'a11y.introScreen.screenButtonsHelpTextStringProperty' ) )
    },
    labScreen: {
      screenButtonsHelpTextStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_labScreen_screenButtonsHelpText', _.get( CircuitConstructionKitDcStrings, 'a11y.labScreen.screenButtonsHelpTextStringProperty' ) )
    }
  }
};

export default CircuitConstructionKitDcFluent;

circuitConstructionKitDc.register('CircuitConstructionKitDcFluent', CircuitConstructionKitDcFluent);
