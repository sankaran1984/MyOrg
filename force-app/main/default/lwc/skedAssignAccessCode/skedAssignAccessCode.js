import getConfig from '@salesforce/apex/skedAssignAccessCodeController.getConfig';
import SkedBase from "c/skedBase";

export default class SkedAssignAccessCode extends SkedBase {
    config;

    connectedCallback() {
        this.getConf();
    }

    getConf(){
        getConfig()
        .then(result => {
            this.config = result;
        });
    }

    handleChange(event){

    }

    get ageRanges(){
        if (!this.config) return [];
        return this.config.ageRanges;
    }

    get zipCodes(){
        if (!this.config) return [];
        return this.config.zipCodes;
    }
}