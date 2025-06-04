import { ClientResponseType } from "./client.model";

export class VehicleRequestType {
  description: string;
	plate: string;
	brand: string;
	model: string;
	color: string;
	client: string;

  constructor(
    description: string,
    plate: string,
    brand: string,
    model: string,
    color: string,
    client: string
  ) {
    this.description = description;
    this.plate = plate;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.client = client;
  }
}

export class VehicleResponseType {
  description: string;
  plate: string;
  brand: string;
  model: string;
  color: string;
  client: ClientResponseType;

  constructor(
    description: string,
    plate: string,
    brand: string,
    model: string,
    color: string,
    client: ClientResponseType
  ) {
    this.description = description;
    this.plate = plate;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.client = client;
  }
}
