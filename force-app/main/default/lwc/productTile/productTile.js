import { LightningElement, api } from 'lwc';

export default class ProductTile extends LightningElement {
    @api product;

    handleTileClicked() {
        const evt = new CustomEvent('tileclick', {
            detail : this.product.id
        });

        this.dispatchEvent(evt);
    }
}