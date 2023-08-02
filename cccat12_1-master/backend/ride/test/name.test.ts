import Name from "../src/User(domain)/Name";

test('Deve validar um nome valido', function(){
    let value = 'John Doe';
    let name = new Name(value);
    expect(name.name).toBe(value);
});