import { LightningElement, wire } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';

export default class SanApexWireComplexTypes extends LightningElement {

    someString;
    someNum;

    wireProps;

    @wire(checkApexTypes, {wrapper : '$wireProps'})
    apexResponse;

    handleTextChange(evt) {
        this.wireProps = {
            ...this.wireProps,
            someString : (this.someString = evt.target.value)
        }
    }

    handleNumChange(evt) {
        this.wireProps = {
            ...this.wireProps,
            someInteger : (this.someNum = evt.target.value)
        }
    }

    handleListChange(evt) {
        let listVals = [];
        for (let i=0; i<evt.target.value; i++) {
            listVals.push({
                someString : this.someString,
                someNum : this.someNum
            });
        }
        this.wireProps = {
            ...this.wireProps,
            someList : listVals
        }
    }    
}