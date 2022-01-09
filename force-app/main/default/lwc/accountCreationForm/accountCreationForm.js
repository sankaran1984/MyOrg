import { LightningElement } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class AccountCreationForm extends LightningElement {
    objectName = ACCOUNT_NAME;

    fields = [NAME_FIELD, INDUSTRY_FIELD];

    handleSuccess(evt) {
        const event = new ShowToastEvent({
            title : 'Successfuly created',
            message : 'Account name ' + evt.detail.name,
            variant : 'success'
        });
        this.dispatchEvent(event);
    }
}