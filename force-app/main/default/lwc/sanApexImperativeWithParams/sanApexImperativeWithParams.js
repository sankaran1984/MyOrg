import findContacts from '@salesforce/apex/ContactController.findContacts';
import { LightningElement } from 'lwc';

export default class SanApexImperativeWithParams extends LightningElement {

    searchKey;
    contacts;
    error;

    handleSearchkeyChange(evt) {
        this.searchKey = evt.target.value;
    }

    handleSearchButton() {
        findContacts({searchKey : this.searchKey})
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            })
    }
}