import CreateDriver from "../../src/application/usecase/CreateDriver";
import GetDriver from "../../src/application/usecase/GetDriver";
import sinon from "sinon";
import RideRepository from "../../src/infra/repository/RideRepositoryDatabase";
import RideRepositoryDatabase from "../../src/infra/repository/RideRepositoryDatabase";
import RequestRide from "../../src/application/usecase/RequestRide";
import UUIDGenerator from "../../src/domain/UUIDGenerator";

test.only("Deve Solicitar uma corrida", async function () {
	const input = {
		passengerID: UUIDGenerator.create(),
	};
	const usecase = new RequestRide(new RideRepositoryDatabase());
	const output = await usecase.execute(input);
	expect(output.ridestatus).toBe('wating_driver');
});