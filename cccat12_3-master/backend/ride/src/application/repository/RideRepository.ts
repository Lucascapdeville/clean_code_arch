import Passenger from "../../domain/Passenger";
import Ride from "../../domain/Ride";

export default interface RideRepository {
	save (ride: Ride,rideID : String,ride_status : String, date : Date, passengerID : string): Promise<void>;
	get (rideID: string): Promise<any>;
}
