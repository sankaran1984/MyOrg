import id from '@salesforce/user/Id';
import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/User.Name'

export default class ProductDisplay extends LightningElement {
    bikeid;
    
    handleProductSelected(event) {
        this.bikeid = event.detail;
    }

    @wire(getRecord, {recordId : id, fields: [NAME_FIELD]})
    user;

    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }
}