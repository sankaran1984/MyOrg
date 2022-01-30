import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';
import { LightningElement } from 'lwc';

export default class SanApexImperativeComplexTypes extends LightningElement {

    someString;
    someInteger;
    listSize;

    apexResponse;
    error;

    handleTextChange(evt) {
        this.someString = evt.target.value;
    }

    handleNumChange(evt) {
        this.someInteger = evt.target.value;
    }

    handleListSizeChange(evt) {
        this.listSize = evt.target.value;
    }  
    
    handleButtonClick() {
        let reqData = {
            someString : this.someString,
            someInteger : this.someInteger
        }
        let someList = [];
        for (let i=0; i<this.listSize; i++) {
            someList.push({
                someInnerString : this.someString,
                someInnerInteger : this.someInteger
            });
        }
        reqData['someList'] = someList;

        checkApexTypes({wrapper : reqData})
            .then(result => {
                this.apexResponse = result;
            })
            .catch(err => {
                this.error = err;
            })
    }
}