// Copyright 2017-2023, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitCommonStrings from '../../../../circuit-construction-kit-common/js/CircuitConstructionKitCommonStrings.js';
import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import CCKCScreenView, { CCKCScreenViewOptions } from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import merge from '../../../../phet-core/js/merge.js';
import { CarouselItem } from '../../../../sun/js/Carousel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import circuitConstructionKitDc from '../../circuitConstructionKitDc.js';

class LabScreenView extends CCKCScreenView {

  public constructor( model: CircuitConstructionKitModel, tandem: Tandem, options?: CCKCScreenViewOptions ) {

    const circuitElementToolFactory = new CircuitElementToolFactory(
      model.circuit,
      model.showLabelsProperty,
      model.viewTypeProperty,
      point => this.circuitNode.globalToLocalPoint( point ),
      tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'circuitElementTools' )
    );

    const realBulbItem: CarouselItem = {
      createNode: ( tandem: Tandem ) => {
        return circuitElementToolFactory.createLightBulbToolNode(
          tandem,
          model.circuit.realLightBulbGroup!,
          CircuitConstructionKitCommonStrings.realBulbStringProperty,
          true,
          model.addRealBulbsProperty
        );
      },
      tandemName: 'realBulbToolNode',

      alignBoxOptions: {

        // PhET-iO clients can control the visibleProperty of the realBulbToolNode in studio, or through the checkbox.
        // It is the same Property
        visibleProperty: model.addRealBulbsProperty
      }
    };

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolNodes = [

      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode1' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createRightBatteryToolNode( tandem ), tandemName: 'batteryToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createLightBulbToolNode( tandem, model.circuit.lightBulbGroup ), tandemName: 'lightBulbToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createResistorToolNode( tandem ), tandemName: 'resistorToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createSwitchToolNode( tandem ), tandemName: 'switchToolNode' },

      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode2' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createFuseToolNode( tandem ), tandemName: 'fuseToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createExtremeBatteryToolNode( tandem ), tandemName: 'extremeBatteryToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createExtremeBulbToolNode( tandem ), tandemName: 'extremeBulbToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createExtremeResistorToolNode( tandem ), tandemName: 'extremeResistorToolNode' },

      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode3' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createDollarBillToolNode( tandem ), tandemName: 'dollarBillToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createPaperClipToolNode( tandem ), tandemName: 'paperClipToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createCoinToolNode( tandem ), tandemName: 'coinToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createEraserToolNode( tandem ), tandemName: 'eraserToolNode' },

      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode4' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createPencilToolNode( tandem ), tandemName: 'pencilToolNode' },
      { createNode: ( tandem: Tandem ) => circuitElementToolFactory.createThinPencilToolNode( tandem ), tandemName: 'thinPencilToolNode' },

      realBulbItem // The automatic scrolling function assumes this be on the last page.
    ];

    // Check the assumption that the real light bulb tool node remains on the last page, so we can scroll to it
    // without breaking the modularity of the pagination code.
    assert && assert( circuitElementToolNodes.indexOf( realBulbItem ) >= circuitElementToolNodes.length - 5, 'realLightBulbToolNode should be' +
                                                                                                             ' on the last page' );
    super( model, circuitElementToolNodes, tandem, merge( {
      showSeriesAmmeters: true
    }, options ) );

    // Scroll to the real bulbs if selected, but not on startup
    model.addRealBulbsProperty.link( addRealBulbs => {
      this.circuitElementToolbox.carousel.setItemVisible( realBulbItem, addRealBulbs );

      if ( addRealBulbs ) {
        this.circuitElementToolbox.carousel.scrollToItem( realBulbItem );
      }
    } );
  }
}

circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );
export default LabScreenView;