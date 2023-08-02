import CPF from "./CPF";
import { Email } from "./Email";
import Name from "./Name";
import { CarPlate } from "./CarPlate";
import UUIDGenerator from "./UUID";

export class Driver{
    name :  Name;
    document : CPF;
    email : Email;
    car_plate : CarPlate;

    constructor(readonly driverID:string,name:string,document:string, email:string, carplate: string){
        this.name = new Name(name);
        this.document = new CPF(document);
        this.email = new Email(email);
        this.car_plate = new CarPlate(carplate);
    }

    static create (name:string,email:string,document:string,car_plate:string){
        const driverID = UUIDGenerator.create()
        return new Driver(driverID,name,email,document,car_plate)
    }
}