import UUIDGenerator from "../src/User(domain)/UUID";


test('Deve validar um nome valido', function(){
    expect(UUIDGenerator.create()).toBeDefined;
});