import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import {refreshApex} from '@salesforce/apex';
import {deleteRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class SanLdsDeleteRecord extends LightningElement {

    accounts = [{apiName : 'Account', fields: {id : 'ABCD', Name : 'Test1'}}];
    err = undefined;

    wiredRes;

    @wire(getAccountList)
    loadAccounts(res) {
        this.wiredRes = res;
        if (res.data) {
            this.accounts = res.data;
        } else if (res.error) {
            this.err = res.error;
        }
    }

    handleDelete(evt) {
        deleteRecord(evt.target.dataset.recordId)
            .then(res => {
                this.dispatchEvent(new ShowToastEvent({
                    title : 'success',
                    message : 'Deleted successfully',
                    variant : 'success'
                }));
                refreshApex(this.wiredRes);
            })
            .catch(err => {
                this.dispatchEvent(new ShowToastEvent({
                    title : 'Failed',
                    message : 'Delete failed',
                    variant : 'error'
                }));
            })
    }
}