import { LightningElement } from 'lwc';

export default class SanHelloConditionalRendering extends LightningElement {

    showDetails;

    handleToggle (evt) {
        this.showDetails = evt.target.checked;
    }
}