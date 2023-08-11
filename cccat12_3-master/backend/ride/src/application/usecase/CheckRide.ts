import RideRepository from "../repository/RideRepository";
import Ride from "../../domain/Ride";
import UUIDGenerator from "../../domain/UUIDGenerator";
import Passenger from "../../domain/Passenger";

// Application
export default class CheckRide {

	constructor (readonly RequestRide: RideRepository) {
		
	}

	async execute (input: Input): Promise<Output> {
		let Ridedata = await this.RequestRide.get(input.rideID);
        const ride_id = Ridedata.rideID
		const ridestatus = Ridedata.ridestatus
		const passengerID = Ridedata.passengerID
		return {
			rideId: Ridedata.ride_id,
			ridestatus: Ridedata.status,
            passengerID: Ridedata.passenger_id
		};
	}
}

// DTO - Data Transfer Object
type Input = {
	rideID : string
}

// DTO - Data Transfer Object
type Output = {
	rideId : string
	ridestatus: string
    passengerID: string
    
}
