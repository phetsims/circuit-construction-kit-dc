// Copyright 2017-2022, University of Colorado Boulder

/**
 * The view for the Intro screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

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
      point => this.circuitLayerNode.globalToLocalPoint( point ),
      tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'circuitElementTools' )
    );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolNodes = [

      // This page is duplicated in the Lab Screen View
      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createRightBatteryToolNode(),
      circuitElementToolFactory.createLightBulbToolNode(),
      circuitElementToolFactory.createResistorToolNode(),
      circuitElementToolFactory.createSwitchToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createFuseToolNode(),
      circuitElementToolFactory.createDollarBillToolNode(),
      circuitElementToolFactory.createPaperClipToolNode(),
      circuitElementToolFactory.createCoinToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createEraserToolNode(),
      circuitElementToolFactory.createPencilToolNode()
    ];

    super( model, circuitElementToolNodes, tandem, {
      showAdvancedControls: false,
      circuitElementToolboxOptions: {},
      tandem: tandem
    } );
  }
}

circuitConstructionKitDc.register( 'IntroScreenView', IntroScreenView );
export default IntroScreenView;