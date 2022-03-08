// Challenge1.js

import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/LWCHelper.getRecords';

export default class Challenge1 extends LightningElement {
    data;

    connectedCallback() {
        this.initDefaultValues();
        this.getData();
    }

    initDefaultValues() {
        this.searchStr = 'Test';

        this.columns = [
            {
                label: 'Name',
                fieldName: 'Name',
                type: 'Text'
            },
            {
                label: 'Industry',
                fieldName: 'Industry',
                type: 'Text'
            },
            {
                label: 'PhotoURL',
                fieldName: 'PhotoUrl',
                type: 'Text'
            },
            {
                label: 'Action',
                type: 'button',
                typeAttributes: {
                    label: 'click here'
                }
            }
        ];
    }

    searchChangeHandler(event) {
        this.searchStr = event.target.value;
        this.getData();
    }

    async getData() {
        try {
            this.data = await getAccounts({
                searchQuery: `Select Id, Name, Industry, PhotoURL From Account Where name like '%${this.searchStr}%' LIMIT 10`
            });
        } catch (e) {
            console.error(JSON.stringify(e));
        }
    }

    handleRowAction(event) {
        alert('Row selected - ' + JSON.stringify(event.detail.row));
    }
}
