import { Driver } from "../src/User(domain)/Driver";

test('Deve validar um nome valido', function(){
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