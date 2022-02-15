import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class SanApexWireToFunction extends LightningElement {

    contacts;
    err;

    @wire(getContactList)
    wiredContacts({ data, error}) {
        if (data) {
            this.contacts = data;
            this.err = undefined;
        } else if (error) {
            this.err = error;
            this.contacts = undefined;
        }
    }
}