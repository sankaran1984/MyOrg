import { LightningElement, wire } from 'lwc';
import ACCOUNT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_AREANUM from '@salesforce/schema/Account.AreaNumber__c';
import { createRecord, generateRecordInputForCreate, getRecordCreateDefaults } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SanLdsGenRecForCreate extends LightningElement {

    recInp;
    accFieldApiName = ACCOUNT_NAME.fieldApiName;
    accAreaNumApiName = ACCOUNT_AREANUM.fieldApiName;
    areaNumber;
    err;

    @wire(getRecordCreateDefaults, {objectApiName : ACCOUNT.objectApiName})
    loadRecord({data, error}) {
        if (data) {
            this.recInp = generateRecordInputForCreate(
                data.record, 
                data.objectInfos[ACCOUNT.objectApiName]
            )
            this.areaNumber = this.recInp.fields[this.accAreaNumApiName];
        }else if (error) {
            this.err = error;
            this.recInp = undefined;
        }
    }

    handleChange(evt) {
        this.recInp.fields[evt.target.dataset.name] = evt.target.value;
    }

    createRecord() {
        createRecord(this.recInp)
            .then(rec => {
                this.dispatchEvent(new ShowToastEvent({
                    title : 'Success',
                    message : 'Created Record - ' + rec.id,
                    variant : 'success'
                }));
            })
            .catch(err => {
                this.dispatchEvent(new ShowToastEvent({
                    title : 'Error',
                    message : 'Create Record Failed - ' + err,
                    variant : 'error'
                }));
            })
    }
}