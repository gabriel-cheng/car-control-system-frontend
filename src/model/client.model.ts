import { Phone } from "./phone.model";
import { VehicleClientResponse } from "./vehicle.model";

export class ClientRequestType {
  firstname: string;
  surname: string;
  email: string;
  address: string;
  phone: string[];

  constructor(
    firstname: string,
    surname: string,
    email: string,
    address: string,
    phone: string[]
  ) {
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
}

export class ClientResponseType {
  clientId: string;
  firstname: string;
  surname: string;
  email: string;
  address: string;
  phone: Phone[];
  vehicle: VehicleClientResponse[];

  constructor(
    clientId: string,
    firstname: string,
    surname: string,
    email: string,
    address: string,
    phone: Phone[],
    vehicle: VehicleClientResponse[]
  ) {
    this.clientId = clientId;
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.vehicle = vehicle;
  }
}
