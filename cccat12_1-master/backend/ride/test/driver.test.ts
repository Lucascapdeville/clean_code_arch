import { Driver } from "../src/User(domain)/Driver";


test('Deve criar um Motorista', function(){
    const name = 'John Doe';
    const email = 'john.doe@gmail.com'
    const cpf = '138.816.264-41'
    const car_plate = 'AAA9999'
    const driver = Driver.create(name,cpf,email,car_plate);
    expect(driver.name.name).toBe(name);
    expect(driver.email.address).toBe(email);
    expect(driver.document.document).toBe(cpf);
    expect(driver.car_plate.plate).toBe(car_plate);
    expect(driver.driverID).toBeDefined;
});


test('Não deve criar um Motorista com nome invalido', function(){
    const name = 'John ';
    const email = 'john.doe@gmail.com'
    const cpf = '138.816.264-41'
    const car_plate = 'AAA9999'
    expect(() => {Driver.create(name,cpf,email,car_plate)}).toThrow(new Error("Nome não valido"));
});


test('Não deve criar um Motorista com email invalido', function(){
    const name = 'John Doe';
    const email = 'john.doe@gmail.'
    const cpf = '138.816.264-41'
    const car_plate = 'AAA9999'
    expect(() => {Driver.create(name,cpf,email,car_plate)}).toThrow(new Error("Email não valido"));
});


test('Não deve criar um Motorista com cpf invalido', function(){
    const name = 'John Doe';
    const email = 'john.doe@gmail.com'
    const cpf = '670.213.661-76'
    const car_plate = 'AAA9999'
    expect(() => {Driver.create(name,cpf,email,car_plate)}).toThrow(new Error("CPF não valido"));
});


test('Não deve criar um Motorista com placa invalida', function(){
    const name = 'John Doe';
    const email = 'john.doe@gmail.com'
    const cpf = '138.816.264-41'
    const car_plate = 'AAA999'
    expect(() => {Driver.create(name,cpf,email,car_plate)}).toThrow(new Error("Placa não valida"))
});