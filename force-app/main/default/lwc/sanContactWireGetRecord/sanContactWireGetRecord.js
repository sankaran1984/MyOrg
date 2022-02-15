import { api, LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';



export default class SanContactWireGetRecord extends LightningElement {
    @api
    recordId;

    contact;
    error;

    __fields = ['Contact.Name', 'Contact.Title', 'Contact.Phone', 'Contact.Email'];

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
}