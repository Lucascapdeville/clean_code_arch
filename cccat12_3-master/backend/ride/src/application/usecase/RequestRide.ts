import RideRepository from "../repository/RideRepository";
import Ride from "../../domain/Ride";
import UUIDGenerator from "../../domain/UUIDGenerator";
import Passenger from "../../domain/Passenger";

// Application
export default class RequestRide {

	constructor (readonly RequestRide: RideRepository) {
		
	}

	async execute (input: Input): Promise<Output> {
		const ride = new Ride();
		const rideID = UUIDGenerator.create();
		const ridestatus = 'wating_driver'
		await this.RequestRide.save(ride,rideID,ridestatus, new Date(),input.passengerID);
		return {
			rideId: rideID,
			ridestatus: ridestatus
		};
	}
}

// DTO - Data Transfer Object
type Input = {
	passengerID : string
}

// DTO - Data Transfer Object
type Output = {
	rideId : string
	ridestatus: string
}
