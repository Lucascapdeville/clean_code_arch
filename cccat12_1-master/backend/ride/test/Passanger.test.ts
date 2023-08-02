import { Passanger } from "../src/User(domain)/Passanger";

test('Deve criar um passageiro', function(){
    const name = 'John Doe';
    const email = 'john.doe@gmail.com'
    const cpf = '138.816.264-41'
    const driver = Passanger.create(name,cpf,email);
    expect(driver.name.name).toBe(name);
    expect(driver.email.address).toBe(email);
    expect(driver.document.document).toBe(cpf);
    expect(driver.driverID).toBeDefined;
});

test('Não deve criar um passageiro com nome invalido', function(){
    const name = 'John';
    const email = 'john.doe@gmail.com'
    const cpf = '138.816.264-41'
    expect(() => {Passanger.create(name,cpf,email)}).toThrow(new Error("Nome não valido"));
});

test('Não deve criar um passageiro com email invalido', function(){
    const name = 'John Doe';
    const email = 'john.doe@gmail.'
    const cpf = '138.816.264-41'
    expect(() => {Passanger.create(name,cpf,email)}).toThrow(new Error("Email não valido"));
});

test('Não  eve criar um passageiro com CPF invalido', function(){
    const name = 'John Doe';
    const email = 'john.doe@gmail.com'
    const cpf = '670.213.661-76'
    expect(() => {Passanger.create(name,cpf,email)}).toThrow(new Error("CPF não valido"));
});