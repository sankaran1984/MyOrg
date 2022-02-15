import { LightningElement, wire } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';

export default class SanApexWireWithParams extends LightningElement {

    searchKey;

    @wire(findContacts, {searchKey : '$searchKey'})
    contacts;

    handleSearch(evt) {
        this.searchKey = evt.target.value;
    }
}