import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VehicleRequestType, VehicleResponseType } from '../../../model/vehicle.model';
import { VehicleApiService } from '../../../services/api/vehicle/vehicle.service.api';
import { VehicleForm } from '../forms/vehicle-form/vehicle-form';

@Component({
  selector: 'app-vehicle-component',
  standalone: true,
  imports: [CommonModule, RouterModule, VehicleForm],
  templateUrl: './vehicle-component.html',
  styleUrl: './vehicle-component.css',
})
export class VehicleComponent {
  vehicles: VehicleResponseType[] = [];

  constructor(private vehicleApiService: VehicleApiService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleApiService.getVehicles().subscribe((data) => {
      this.vehicles = data;
    });
  }

  deleteClient(vehicleId: string): void {
    if (confirm('Tem certeza que deseja deletar este veículo?')) {
      this.vehicleApiService.deleteVehicle(vehicleId).subscribe({
        next: () => {
          this.vehicles = this.vehicles.filter((v) => v.vehicleId !== vehicleId);
        },
        error: (err) => console.error('Erro ao deletar veículo!', err),
      });
    }
  }

}
