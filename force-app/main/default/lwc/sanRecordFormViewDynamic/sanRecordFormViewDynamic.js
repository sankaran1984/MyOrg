import { LightningElement, api } from 'lwc';

export default class SanRecordFormDynamic extends LightningElement {

    @api recordId;
    @api objectApiName;

    fields = ['AccountId', 'Name', 'FirstName', 'LastName', 'Title', 'Phone', 'Email'];
}