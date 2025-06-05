import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { VehicleRequestType, VehicleResponseType } from '../../../../model/vehicle.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientResponseType } from '../../../../model/client.model';
import { ClientApiService } from '../../../../services/api/client/client.service.api';

@Component({
  selector: 'app-vehicle-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vehicle-form.html',
  styleUrl: './vehicle-form.css',
})
export class VehicleForm {
  @Input() vehicle: VehicleRequestType = {
    description: '',
    plate: '',
    brand: '',
    model: '',
    color: '',
    client: '',
  };
  @Output() formSubmit = new EventEmitter<VehicleRequestType>();

  isFormVisible = false;

  selectedVehicle!: VehicleResponseType | null;

  availableClients: ClientResponseType[] = [];
  selectedClient!: ClientResponseType | null;

  vehicleForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientApiService: ClientApiService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadClients();
  }

  showCreateForm(): void {
    this.selectedVehicle = null;
    this.isFormVisible = true;
  }

  loadClients(): void {
    this.clientApiService.getClients().subscribe((data) => {
      this.availableClients = data;
    });
  }

  onClientToggle(client: ClientResponseType, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.selectedClient = client;

      return;
    }
  }

  isClientSelected(client: ClientResponseType): boolean {
    return this.selectedClient?.clientId === client.clientId;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vehicle'] && changes['vehicle'].currentValue) {
      if (this.vehicleForm) {
        this.vehicleForm.patchValue(changes['vehicle'].currentValue);
      }
    }
  }

  private buildForm(): void {
    this.vehicleForm = this.fb.group({
      description: [this.vehicle.description, Validators.required],
      plate: [this.vehicle.plate, Validators.required],
      brand: [this.vehicle.brand, Validators.required],
      model: [this.vehicle.model, Validators.required],
      color: [this.vehicle.color, Validators.required],
      client: [this.vehicle.client, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const formValue = this.vehicleForm.value;

      const result: VehicleRequestType = this.vehicle
        ? { ...this.vehicle, ...formValue }
        : formValue;

      this.formSubmit.emit(result);
    }
  }
}
