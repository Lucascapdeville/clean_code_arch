import pgp from "pg-promise";
import RideRepository from "../../application/repository/RideRepository";
import Ride from "../../domain/Ride";

export default class RideRepositoryDatabase implements RideRepository {

	async save (ride: Ride,ride_id : String,ride_status : String, date : Date, passenger_id : string) {
		const connection = pgp()("postgres://postgres:652479@localhost:5432/postgres");
		const price = ride.calculate()
		await connection.query("insert into cccat12.ride (ride_id, passenger_id, price, status, request_date) values ($1, $2, $3, $4, $5)",
                     [ride_id, passenger_id, price, ride_status, date]);
		await connection.$pool.end();
	}

	async get (ride_status: string) {
		const connection = pgp()("postgres://postgres:652479@localhost:5432/postgres");
		const [RideData] = await connection.query("select * from cccat12.driver where ride_id = $1", [ride_status]);
		await connection.$pool.end();
		return RideData.status;
	}
}