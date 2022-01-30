import { LightningElement } from 'lwc';

export default class SanHelloExpressions extends LightningElement {

    firstName;
    lastName;

    hanleChange (evt) {
        if (evt.target.name == 'firstName') {
            this.firstName = evt.target.value;
        } else if (evt.target.name == 'lastName') {
            this.lastName = evt.target.value;
        } 
    }

    get upperCaseText () {
        return (this.firstName && this.firstName.toUpperCase()) + ' ' + 
            (this.lastName && this.lastName.toUpperCase());
    }
}