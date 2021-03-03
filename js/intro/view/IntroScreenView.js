// Copyright 2017-2020, University of Colorado Boulder

/**
 * The view for the Intro screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';

class IntroScreenView extends CCKCScreenView {

  /**
   * @param {IntroModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {

    // TODO: Better way to structure tandems
    const carouselTandem = tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'tools' );

    const circuitElementToolFactory = new CircuitElementToolFactory(
      model.circuit,
      model.showLabelsProperty,
      model.viewTypeProperty,
      point => this.circuitLayerNode.globalToLocalPoint( point ),
      carouselTandem
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
      circuitElementToolFactory.createPencilToolNode(),
      circuitElementToolFactory.createHandToolNode(),
      circuitElementToolFactory.createDogToolNode()
    ];

    super( model, circuitElementToolNodes, tandem, {
      showAdvancedControls: false
    } );
  }
}

circuitConstructionKitDc.register( 'IntroScreenView', IntroScreenView );
export default IntroScreenView;