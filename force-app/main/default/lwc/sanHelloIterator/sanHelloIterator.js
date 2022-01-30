import { LightningElement } from 'lwc';

export default class SanHelloIterator extends LightningElement {
    contacts = [{
        Id : '1',
        Name : 'ABCD'
    },{
        Id : '2',
        Name : 'BCDA'
    },{
        Id : '3',
        Name : 'CDAB'
    },{
        Id : '4',
        Name : 'DABC'
    },{
        Id : '5',
        Name : 'EFGH'
    }];
}