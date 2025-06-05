import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { ClientResponseType } from "../../../model/client.model";

const apiUrl = '/api/client';

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root',
})
export class ClientApiService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<ClientResponseType[]> {
    return this.http.get<ClientResponseType[]>(apiUrl).pipe(
      tap((clients) => console.log('Read clients')),
      catchError(this.handleError('getClients', []))
    );
  }

  deleteClient(clientId: string): Observable<string> {
    const url = `${apiUrl}/${clientId}`;

    return this.http.delete(url, { responseType: 'text' }).pipe(
      tap(() => console.log(`Deleted client with id ${clientId}`)),
      catchError(this.handleError<string>('deleteClient'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }
}

