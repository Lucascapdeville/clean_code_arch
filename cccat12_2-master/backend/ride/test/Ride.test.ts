
import Ride from "../src/Ride";
import { calculate } from "../src/RideCalculator";

test("Deve fazer o cálculo do preço de uma corrida durante o dia", function () {
	const ride = new Ride();
	const lat_inicial = -27.584905257808835;
    const lon_inicial = -48.545022195325124;
    const lat_final = -27.496887588317275;
    const lon_final = -48.522234807851476;
	ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("2021-03-01T10:00:00"));
	expect(ride.calculate()).toBe(21);
});

test("Deve fazer o cálculo do preço de uma corrida durante a noite", function () {
	const ride = new Ride();
	const lat_inicial = -27.584905257808835;
    const lon_inicial = -48.545022195325124;
    const lat_final = -27.496887588317275;
    const lon_final = -48.522234807851476;
	ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("2021-03-01T23:00:00"));
	expect(ride.calculate()).toBe(39);
});

test("Deve fazer o cálculo do preço de uma corrida no domingo de dia", function () {
	const ride = new Ride();
	const lat_inicial = -27.584905257808835;
    const lon_inicial = -48.545022195325124;
    const lat_final = -27.496887588317275;
    const lon_final = -48.522234807851476;
	ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("2021-03-07T10:00:00"));
	expect(ride.calculate()).toBe(29);
});

test("Deve fazer o cálculo do preço de uma corrida no domingo de noite", function () {
	const ride = new Ride();
	const lat_inicial = -27.584905257808835;
    const lon_inicial = -48.545022195325124;
    const lat_final = -27.496887588317275;
    const lon_final = -48.522234807851476;
	ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("2021-03-07T23:00:00"));
	expect(ride.calculate()).toBe(50);
});

test.skip("Deve retornar -1 se a distância for inválida", function () {
	const ride = new Ride();
	const lat_final = -27.584905257808835;
    const lon_final = -48.545022195325124;
    const lat_inicial = -27.496887588317275;
    const lon_inicial = -48.522234807851476;
	expect(() =>ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("2023-03-01T10:00:00"))).toThrow(new Error("Invalid distance"));
});

test("Deve retornar -2 se a data for inválida", function () {
	const ride = new Ride();
	const lat_inicial = -27.584905257808835;
    const lon_inicial = -48.545022195325124;
    const lat_final = -27.496887588317275;
    const lon_final = -48.522234807851476;
	expect(() => ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("javascript"))).toThrow(new Error("Invalid date"));
});

test("Deve fazer o cálculo do preço de uma corrida durante o dia com preço mínimo", function () {
	const ride = new Ride();
	const lat_inicial = -27.584905257808835;
    const lon_inicial = -48.545022195325124;
    const lat_final = -27.584905257808835;
    const lon_final = -48.522234807851476;
	ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("2021-03-01T10:00:00"));
	expect(ride.calculate()).toBe(10);
});

test("Deve fazer o cálculo do preço de uma corrida com múltiplos segmentos", function () {
	const ride = new Ride();
	const lat_inicial = -27.584905257808835;
    const lon_inicial = -48.545022195325124;
    const lat_final = -27.496887588317275;
    const lon_final = -48.522234807851476;
	ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("2021-03-01T10:00:00"));
	ride.addSegment(lat_inicial,lon_inicial,lat_final,lon_final, new Date("2021-03-01T10:00:00"));
	expect(ride.calculate()).toBe(42);
});
