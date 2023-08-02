export class CarPlate{
    plate: string;

    constructor(plate:string){
        if (this.validateplate(plate)){
            this.plate = plate
        }
        else{
            throw new Error('Placa não valida')
        }
        }
    

    validateplate(plate: string){
        var plate_regex = new RegExp(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/);
        return plate_regex.test(plate)
    }
}