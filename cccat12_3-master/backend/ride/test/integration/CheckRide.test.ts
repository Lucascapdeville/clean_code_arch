import RideRepositoryDatabase from "../../src/infra/repository/RideRepositoryDatabase";
import RequestRide from "../../src/application/usecase/RequestRide";
import UUIDGenerator from "../../src/domain/UUIDGenerator";
import CheckRide from "../../src/application/usecase/CheckRide";

test.only("Deve checar as informações de uma corrida recem criada", async function () {
	const inputRequest = {
		passengerID: UUIDGenerator.create(),
	};
	const usecaseRequest = new RequestRide(new RideRepositoryDatabase());
	const outputRequest= await usecaseRequest.execute(inputRequest);
	const inputCheck = {rideID: outputRequest.rideId};
    const usecaseCheck = new CheckRide(new RideRepositoryDatabase());
    const outputCheck = await usecaseCheck.execute(inputCheck);
    console.log(outputCheck)
    expect(outputCheck.rideId).toBe(outputRequest.rideId);
    expect(outputCheck.passengerID).toBe(inputRequest.passengerID);
    expect(outputCheck.ridestatus).toBe('wating_driver');
    
});