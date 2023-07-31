import CPF from "../src/User(domain)/CPF";
import { validatecpf } from "../src/CpfValidator";

test('Deve validar um cpf valido', function(){
    const document = '138.816.264-41'
    let cpf = new CPF(document)
    expect(cpf.document).toBe(document)

});

test('Deve validar um cpf valido', function(){
    const document = '715.748.568-04'
    let cpf = new CPF(document)
    expect(cpf.document).toBe(document)

});

test('Deve validar um cpf valido', function(){
    const document = '373.935.250-70'
    let cpf = new CPF(document)
    expect(cpf.document).toBe(document)

});


test('Deve não validar um cpf invalido', function(){
    const document = '670.213.661-76'
    expect(() => {new CPF(document)}).toThrow(new Error("CPF não valido"));

});

test('Deve não validar um cpf pequenho', function(){
    const document = '670.213.'
    expect(() => {new CPF(document)}).toThrow(new Error("CPF não valido"));

});

test('Deve não validar um cpf igual', function(){
    const document = '999.999.999-99'
    expect(() => {new CPF(document)}).toThrow(new Error("CPF não valido"));

});