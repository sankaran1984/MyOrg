import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class AccountCreationWire extends LightningElement {
    recordId;

    data;
    error;

    @wire(getRecord, {recordId : '$recordId', fields : [NAME_FIELD]})
    account({data, error}) {
        this.data = data;
        this.error = error;
    }
}