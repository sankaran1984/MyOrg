import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJ from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SanLdsCreateRecord extends LightningElement {
    
    accId;
    accName;

    nameChangeHandler(evt) {
        this.accName = evt.target.value;
    }

    createRecord(evt) {

        const recInp = {
            apiName : ACCOUNT_OBJ.objectApiName,
            fields : {}
        }
        recInp.fields[ACCOUNT_NAME.fieldApiName] = this.accName;

        createRecord(recInp)
            .then((account) => {
                this.accId = account.Id;
                this.dispatchEvent(new ShowToastEvent({
                    title : 'Success',
                    message : 'Account created successfully - ' + account.Id
                }));
            })
            .catch((err) => {
                this.dispatchEvent(new ShowToastEvent({
                    title : 'Error',
                    message : 'Account created failed - ' + err
                }));
                console.log(JSON.stringify(err));
            });
    }
}