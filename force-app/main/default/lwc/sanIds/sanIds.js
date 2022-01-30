import { wire, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getSingleContact  from '@salesforce/apex/ContactController.getSingleContact';

export default class SanIds extends NavigationMixin(LightningElement) {

    @wire(getSingleContact) contact;
    
    handleClick () {
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                recordId : this.contact.data.Id,
                objectApiName : 'Contact',
                actionName : 'view'
            }
        });
    }
}