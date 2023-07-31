import { validatecpf } from "../src/CpfValidator"; 

test('Deve validar um cpf valido', function(){
    const cpf = '138.816.264-41'
    console.log(validatecpf(cpf))
    expect(validatecpf(cpf)).toBe(true)

});

test('Deve validar um cpf valido', function(){
    const cpf = '715.748.568-04'
    console.log(validatecpf(cpf))
    expect(validatecpf(cpf)).toBe(true)

});

test('Deve validar um cpf valido', function(){
    const cpf = '373.935.250-70'
    console.log(validatecpf(cpf))
    expect(validatecpf(cpf)).toBe(true)

});


test('Deve não validar um cpf invalido', function(){
    const cpf = '670.213.661-76'
    expect(validatecpf(cpf)).not.toBeTruthy

});

test('Deve não validar um cpf pequenho', function(){
    const cpf = '670.213.'
    expect(validatecpf(cpf)).not.toBeTruthy

});

test('Deve não validar um cpf igual', function(){
    const cpf = '999.999.999-99'
    expect(validatecpf(cpf)).not.toBeTruthy

});