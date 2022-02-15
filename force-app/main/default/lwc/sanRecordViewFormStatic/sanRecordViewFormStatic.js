import { LightningElement, api } from 'lwc';
import CONTACT_ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName';
import CONTACT_TITLE from '@salesforce/schema/Contact.Title';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';


export default class SanRecordFormDynamic extends LightningElement {

    @api recordId;
    @api objectApiName;

    fields = {
        accountId : CONTACT_ACCOUNT_ID, 
        name : CONTACT_NAME, 
        firstName : CONTACT_FIRSTNAME, 
        lastName : CONTACT_LASTNAME, 
        title : CONTACT_TITLE, 
        phone : CONTACT_PHONE,
        email : CONTACT_EMAIL
    };
}