import { Routes } from '@angular/router';
import { ClientComponent } from './components/client-component/client-component';
import { VehicleComponent } from './components/vehicle-component/vehicle-component';

export const routes: Routes = [
  {
    path: "client",
    component: ClientComponent,
    data: {
      title: "Clientes"
    }
  },
  {
    path: "vehicle",
    component: VehicleComponent,
    data: {
      title: "Veículos"
     }
  }
];
