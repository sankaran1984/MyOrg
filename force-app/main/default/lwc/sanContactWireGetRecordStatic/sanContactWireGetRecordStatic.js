import { api, LightningElement, wire } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import CONTACT_TITLE from '@salesforce/schema/Contact.Title';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';


export default class SanContactWireGetRecord extends LightningElement {
    @api
    recordId;

    contact;
    error;

    __fields = [CONTACT_NAME, CONTACT_TITLE, CONTACT_PHONE, CONTACT_EMAIL];

    @wire(getRecord, {recordId : '$recordId', fields : '$__fields'})
    loadContact({data, error}) {
        console.log('wire getRecord called');
        this.contact = data;
        this.error = error;
    }

    constructor() {
        super();
        console.log('constructor called');
    }

    get name() {
        return getFieldValue(this.contact, CONTACT_NAME);
    }

    get title() {
        return getFieldValue(this.contact, CONTACT_TITLE);
    }

    get phone() {
        return getFieldValue(this.contact, CONTACT_PHONE);
    }

    get email() {
        return getFieldValue(this.contact, CONTACT_EMAIL);
    }
}