import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchJob from '@salesforce/apex/customerLookupController.searchJob';
import BRAND_NAME_FIELD from '@salesforce/schema/skedbg__Vaccine__c.skedbg__Brand__c';
import VACCINE_FIELD from '@salesforce/schema/sked__Job__c.skedbg__Vaccine__c';
import VACCINE_NAME_FIELD from '@salesforce/schema/sked__Job__c.Vaccine_Brand_Name__c';

import ADVERSEREACTION_MultiPicklist_FIELD from '@salesforce/schema/sked__Job__c.Adverse_Reaction_Multiselect__c';
//import DOSE_NUMBER_FIELD from '@salesforce/schema/Contact.Dose_Number__c';
//import VACCINE_NAME_FIELD from '@salesforce/schema/Contact.Vaccine_Name__c';
import VACCINATED_ARM_FIELD from '@salesforce/schema/sked__Job__c.Vaccinated_Arm__c';
import ADVERSEREACTION_FIELD from '@salesforce/schema/sked__Job__c.Adverse_Reaction__c';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import EMAIL_FIELD from '@salesforce/schema/Account.PersonEmail';
import Address_FIELD from '@salesforce/schema/Account.PersonMailingAddress';
import Phone_FIELD from '@salesforce/schema/Account.PersonMobilePhone';
import JOB_NAME_FIELD from '@salesforce/schema/sked__Job__c.Name';
import DOSE_FIELD from '@salesforce/schema/sked__Job__c.skedbg__Dose_Number__c';
import JOB_STATUS_FIELD from '@salesforce/schema/sked__Job__c.sked__Job_Status__c';
import BOOKING_STATUS_FIELD from '@salesforce/schema/sked__Job__c.skedbg__Booking_Status__c';
import CUSTOMER_CONFIRMATION_STATUS_FIELD from '@salesforce/schema/sked__Job__c.sked__Customer_Confirmation_Status__c';
import VACCINATION_DATE_FIELD from '@salesforce/schema/sked__Job__c.Vaccination_Date__c';






export default class CustomerLookup extends LightningElement {
    selectedValue = 'conCode';
    showName=false;
    showEmail=false;
    showPhone=false;
    showConCode=true;
    searchString='';
    confirmationCode='';
    recordFound=false;
    job1Found=false;
    job2Found=false;
    recordId='';
    job2recordId='';
    job1recordId='';
    job1Mode='edit';

    fields = [NAME_FIELD,EMAIL_FIELD,Address_FIELD,Phone_FIELD];
    jobfields=[JOB_NAME_FIELD,VACCINE_FIELD,VACCINE_NAME_FIELD,VACCINATED_ARM_FIELD,BRAND_NAME_FIELD,ADVERSEREACTION_MultiPicklist_FIELD,ADVERSEREACTION_FIELD];
    jobReadonlyfields=[JOB_NAME_FIELD,VACCINE_FIELD,VACCINE_NAME_FIELD,VACCINATED_ARM_FIELD,BRAND_NAME_FIELD,ADVERSEREACTION_MultiPicklist_FIELD,ADVERSEREACTION_FIELD,VACCINATION_DATE_FIELD];
    get options() {
        return [
            { label: 'Confirmation Code', value: 'conCode' },
            { label: 'Name', value: 'name' },
            { label: 'Email', value: 'email' },
            { label: 'Mobile', value: 'phone' },
            
        ];
    }
    handleConfirmationCodeChange(event){
        this.confirmationCode = event.detail.value;
    }
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
        this.toastMsg('Success', 'success', 'Record Updated Successfully.');
    }
    handleSearchStringChange(event){
        this.searchString = event.detail.value;
    }
    handleChange(event) {
        this.selectedValue = event.detail.value;
        console.log('sel value: '+event.detail.value);
        if(this.selectedValue=='name'){
            this.showName=true;
            this.showEmail=false;
            this.showPhone=false;
            this.showConCode=false;
        }
        else if(this.selectedValue=='email'){
            this.showName=false;
            this.showEmail=true;
            this.showPhone=false;
            this.showConCode=false;
        }
        else if(this.selectedValue=='phone'){
            this.showName=false;
            this.showEmail=false;
            this.showPhone=true;
            this.showConCode=false;
        }
        else if(this.selectedValue=='conCode'){
            this.showName=false;
            this.showEmail=false;
            this.showPhone=false;
            this.showConCode=true;
        }
    }
    toastMsg(title, vari, msg) {
        const event = new ShowToastEvent({
            title: title,
            variant: vari,
            message: msg
        });
        this.dispatchEvent(event);
    }
    handleSearch(event){
      console.log('selectedValue: '+this.selectedValue);
      console.log('searchString: '+this.searchString);
      console.log('con code: '+this.confirmationCode);
      if(this.selectedValue !='' && (this.searchString !='' || this.confirmationCode !='')){
        searchJob({
            searchString: this.searchString,
            searchType: this.selectedValue,
            confirmationNumber: this.confirmationCode
        })
        .then((result) => {
            console.log('result returned: '+JSON.stringify(result));
            //console.log('Id: '+result.Id);
            if(result !=null){
                //var parsedResponse=JSON.parse(result);
                //console.log('result parsed: '+JSON.stringify(parsedResponse));
                //console.log('result parsed obj: '+parsedResponse);
            
                //this.recordId=result.Id;
                //this.recordId=result.sked__Contact__c;
                if(result.accountRecord.Id != null){
                    console.log('id returned: '+result.accountRecord.Id);
                    this.recordId=result.accountRecord.Id;
                    this.recordFound=true;
                }
                if(result.job1 != null && result.job1.Id != null){
                    this.job1recordId=result.job1.Id;
                    this.job1Found=true;
                    if(result.job1.sked__Job_Status__c =='Complete')
                     this.job1Mode='readonly';
                    console.log('job1 id: '+result.job1.Id);
                }
                if(result.job2 != null && result.job2.Id != null){
                    this.job2recordId=result.job2.Id;
                    this.job2Found=true;
                    console.log('job2 id: '+result.job2.Id);
                }
                  
                
            }
             
        })
        .catch((error) => {
            console.log('In catch '+JSON.stringify(error));
            this.toastMsg('Error', 'error', 'No Record exist with these details.');
            //console.log('error: '+error.body.message);
        });
      }
      else{
        console.log('In else con');
        this.toastMsg('Error', 'error', 'Please fill required values.');
      }

    }
    handleSubmit(event){
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        console.log('Fields : '+event.detail.fields);
        console.log('web form: '+this.template.querySelector("lightning-record-form[data-fieldname='jobForm1']"));
        /*if(fields.Street){
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }else{
        }*/
     } 
}