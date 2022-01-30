import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SkedBase extends LightningElement {

    notifyParent(act, d) {
        const event = new CustomEvent('notifyparent', {
            detail: {
                action: act,
                data: d
            }
        });
        this.dispatchEvent(event);
    }

    handleResult(result, callback){
        console.log('===result', result);
        if (result.success == false) {
            this.showError(result.errorMessage);
        } else {
            //this.showMessage('Sync Started');
            callback(result);
        }
    }

    showError(msg){
        var error = msg.substring(
            msg.lastIndexOf("{") + 1, 
            msg.lastIndexOf("}")
        );
        if (!error) error = msg;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: error,
                variant: 'error'
            })
        );
    }

    showMessage(msg){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: msg,
                variant: 'success'
            })
        );
    }
}