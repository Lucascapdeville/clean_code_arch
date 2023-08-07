drop table cccat12.passenger;
drop schema cccat12;
create schema cccat12;

create table cccat12.passenger (
	passenger_id uuid primary key,
	name text,
	email text,
	document text
);

create table cccat12.driver (
	driver_id uuid primary key,
	name text,
	email text,
	document text,
	car_plate text
);

create table cccat12.ride (
	ride_id uuid primary key,
	driver_id uuid,
	passenger_id uuid,
	lat_inicial numeric,
	lon_inicial numeric,
	lat_final numeric,
	lon_final numeric
	request_date date,
);