import {Distance} from '../src/Distance';


test("Deve calcular a distancia entre duas coordenadas", function () {
	const lat_inicial = -27.584905257808835;
    const lon_inicial = -48.545022195325124;
    const lat_final = -27.496887588317275;
    const lon_final = -48.522234807851476;
	const distance = Distance.calculate(lat_inicial,lon_inicial,lat_final,lon_final);
	expect(distance).toBe(10);
});
