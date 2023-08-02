import CPF from "./CPF";
import { Email } from "./Email";
import Name from "./Name";
import UUIDGenerator from "./UUID";

export class Passanger{
    name :  Name;
    document : CPF;
    email : Email;

    constructor(readonly driverID:string,name:string,document:string, email:string){
        this.name = new Name(name);
        this.document = new CPF(document);
        this.email = new Email(email);
    }

    static create (name:string,email:string,document:string){
        const driverID = UUIDGenerator.create()
        return new Passanger(driverID,name,email,document)
    }
}