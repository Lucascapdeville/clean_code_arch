import Name from "../src/User(domain)/Name";

test('Deve validar um nome valido', function(){
    let value = 'John Doe';
    let name = new Name(value);
    expect(name.name).toBe(value);
});

test('Deve não validar um nome invalido',function(){
    let value = 'John'
    expect(() => {new Name(value)}).toThrow(new Error("Nome não valido"));
})