import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class SanApexImperativeMethod extends LightningElement {

    contacts;
    err;

    handleLoad() {
        getContactList()
            .then(data => {
                this.contacts = data;
                this.err = undefined;
            })
            .catch(err => {
                this.contacts = undefined;
                this.err = err;
            })
    }
}