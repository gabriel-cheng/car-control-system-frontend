import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientApiService } from '../../../services/api/client/client.service.api';
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

  clients: ClientResponseType[] = [];

  constructor(
    private clientApiService: ClientApiService,
  ) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientApiService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  deleteClient(clientId: string): void {
    if(confirm("Tem certeza que deseja deletar este cliente?")) {
      this.clientApiService.deleteClient(clientId).subscribe({
        next: () => {
          this.clients = this.clients.filter(c => c.clientId !== clientId);
        },
        error: err => console.error("Erro ao deletar cliente!", err)
      });
    }
  }

}
