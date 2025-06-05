import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VehicleResponseType } from "../../../model/vehicle.model";
import { catchError, Observable, of, tap } from "rxjs";

const apiUrl = '/api/vehicle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class VehicleApiService {
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<VehicleResponseType[]> {
    return this.http.get<VehicleResponseType[]>(apiUrl).pipe(
      tap((vehicle) => console.log('Read vehicles')),
      catchError(this.handleError('getVehicles', []))
    );
  }

  deleteVehicle(vehicleId: string): Observable<string> {
    const url = `${apiUrl}/${vehicleId}`;

    return this.http.delete(url, { responseType: 'text' }).pipe(
      tap(() => console.log(`Deleted vehicle with id ${vehicleId}`)),
      catchError(this.handleError<string>('deleteVehicle'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }
}
