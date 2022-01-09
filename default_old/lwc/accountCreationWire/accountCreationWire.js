import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJ_NAME from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class AccountCreationWire extends LightningElement {

    accName;
    accIndustry;

    recordId;

    handleButtonClick(evt) {
        const inputParams = {
            apiName : ACCOUNT_OBJ_NAME.objectApiName,
            fields : {
                [NAME_FIELD.fieldApiName] : this.accName,
                [INDUSTRY_FIELD.fieldApiName] : this.accIndustry
            }
        }

        createRecord(inputParams).then(
            data => {
                this.recordId = data.id;
            }
        ).catch( 
            err => {
                alert('Error on creating the record - ' + err);
            }
        );
    }
}