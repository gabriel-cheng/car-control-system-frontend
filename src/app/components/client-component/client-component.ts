import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientApiService } from '../../../services/api/client/client.service';
import { ClientResponseType } from '../../../model/client.model';

@Component({
  selector: 'app-client-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './client-component.html',
  styleUrl: './client-component.css'
})
export class ClientComponent {

  clients = signal<ClientResponseType[]>([]);

  constructor(
    private clientApiService: ClientApiService
  ) {
    effect(() => {
      this.clientApiService.getClients().subscribe((res) => {
        this.clients.set(res);
      });
    });
  }

  // ngOnInit(): void {
  //   this.loadClients();
  // }

  // loadClients(): void {
  //   const clients: Observable<ClientResponseType[]> = this.clientApiService.getClients();

  //   console.log(clients);
  // }

}
