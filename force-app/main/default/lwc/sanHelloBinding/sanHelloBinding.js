import { LightningElement } from 'lwc';

export default class SanHelloBinding extends LightningElement {
    
    inputVal = 'World';
    
    inputValChanged (evt) {
        this.inputVal = evt.target.value;
    }
}