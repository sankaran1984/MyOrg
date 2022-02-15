import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import cometd from '@salesforce/resourceUrl/cometd';

export default class CometIdDemo extends LightningElement {

    error = '';
    payload = '';
    isConnectionOn;

    productNames = ['test1', 'test2'];  

    //Handles the error
    handleError(event){
        //Error is coming in the event.detail.error
        this.error = JSON.stringify(event.detail.error);
    }

    //Handles the message/payload from streaming api
    handleMessage(event){
        //Message is coming in event.detail.payload
        this.payload = this.payload + JSON.stringify(event.detail.payload);
        this.productNames = [...this.productNames, event.detail.payload.data.sobject.Name];
    }

    //This method is subscribing the channel
    restart(){
        this.template.querySelector('.lwc_streaming_api-1').subscribe();
    }

    //This method is unsubscribing the channel
    destroy(){
        this.template.querySelector('.lwc_streaming_api-1').unsubscribe();

        this.payload = '';
        this.error = '';
    }

    //This method is checking if the channel is subscribed or not
    checkConnection(){
        this.isConnectionOn = this.template.querySelector('.lwc_streaming_api-1').checkConnection();
    }

    /*
    _cometd;

    renderedCallback() {
        if (this._cometd) {
            return;
        } else {
            loadScript(this, cometd)
                .then(() => {
                    this._cometd = new org.cometd.CometD();
                    this.subscribeEvent();
                });
        }
    }

    subscribeEvent() {
        this._cometd.subscribe('/topic/MerchantCreate', this.receiveMessage);
    }

    receiveMessage(message) {
        console.dir(message);
    }*/
}