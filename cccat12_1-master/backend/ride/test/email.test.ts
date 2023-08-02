import { Email } from "../src/User(domain)/Email";

test('deve validar um email valido',function(){
    const address= 'ze.couves@gmail.com';
    let email = new  Email(address);
    expect(email.address).toBe(address);
});

test('deve não validar um email invalido',function(){
    const address= 'ze.couves@gmail';
    expect(() => {new Email(address)}).toThrow(new Error("Email não valido"));
});

test('deve não validar um email invalido',function(){
    const address= 'ze.couves';
    expect(() => {new Email(address)}).toThrow(new Error("Email não valido"));
});