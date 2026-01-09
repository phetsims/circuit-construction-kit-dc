// Copyright 2017-2026, University of Colorado Boulder

/**
 * The view for the Intro screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';
import IntroModel from '../model/IntroModel.js';

class IntroScreenView extends CCKCScreenView {

  public constructor( model: IntroModel, tandem: Tandem ) {

    const circuitElementToolFactory = new CircuitElementToolFactory(
      model.circuit,
      model.showLabelsProperty,
      model.viewTypeProperty,
      point => this.circuitNode.globalToLocalPoint( point ),
      tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'circuitElementTools' )
    );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolItems = [

      // This page is duplicated in the Lab Screen View
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode1' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createRightBatteryToolNode( tandem ), tandemName: 'batteryToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createLightBulbToolNode( tandem ), tandemName: 'lightBulbToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createResistorToolNode( tandem ), tandemName: 'resistorToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createSwitchToolNode( tandem ), tandemName: 'switchToolNode' },

      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode2' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createFuseToolNode( tandem ), tandemName: 'fuseToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createDollarBillToolNode( tandem ), tandemName: 'dollarBillToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createPaperClipToolNode( tandem ), tandemName: 'paperClipToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createCoinToolNode( tandem ), tandemName: 'coinToolNode' },

      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode3' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createEraserToolNode( tandem ), tandemName: 'eraserToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createPencilToolNode( tandem ), tandemName: 'pencilToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createThinPencilToolNode( tandem ), tandemName: 'thinPencilToolNode' }
    ];

    super( model, circuitElementToolItems, tandem, {
      showAdvancedControls: false,
      circuitElementToolboxOptions: { carouselScale: CCKCConstants.DC_CAROUSEL_SCALE }
    } );
  }
}

circuitConstructionKitDc.register( 'IntroScreenView', IntroScreenView );
export default IntroScreenView;