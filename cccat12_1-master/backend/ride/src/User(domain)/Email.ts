import e from "express";

export class Email{
    address : string;

    constructor(address:string){
        if (this.validate_email(address)){
            this.address = address
        }
        else{
            throw new Error('Email não valido')
        }
    }

    validate_email(address:string){
        const validEmailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return validEmailRegex.test(address)
    }
}