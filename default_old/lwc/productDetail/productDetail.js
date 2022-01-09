import { LightningElement, api } from 'lwc';
import { bikes } from 'c/data';

export default class ProductDetail extends LightningElement {
    product;

    set productId(value) {
        this.product = bikes.find( bike => bike.id === value);
    }

    @api get productId() {
        return this.product.id;
    }
}