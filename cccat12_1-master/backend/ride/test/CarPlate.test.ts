import { CarPlate } from "../src/User(domain)/CarPlate";

test('Deve validar uma placa de carro', function(){
    const plate = 'AAA9999';
    let car_plate = new CarPlate(plate);
    expect(car_plate.plate).toBe(plate);
});

test('Deve não validar uma placa de carro errada', function(){
    const plate = 'AAA999';
    expect(() => {new CarPlate(plate)}).toThrow(new Error("Placa não valida"));
});