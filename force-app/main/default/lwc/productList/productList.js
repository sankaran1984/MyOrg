import { LightningElement } from 'lwc';
import { bikes } from 'c/data';

export default class ProductList extends LightningElement {

    bikes = bikes;

    handleTileClick(evt) {
        const event = new CustomEvent('productselected',
            {detail : evt.detail}
        );

        this.dispatchEvent(event);
    }
}