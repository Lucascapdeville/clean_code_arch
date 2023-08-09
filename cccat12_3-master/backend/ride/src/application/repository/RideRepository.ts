import Ride from "../../domain/Ride";

export default interface RideRepository {
	save (ride: Ride,ride_id : String,ride_status : String, date : Date, passenger_id : string): Promise<void>;
	get (status: string): Promise<Ride>;
}
