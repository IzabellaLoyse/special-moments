import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IMoment } from '../interfaces/imoment';
import { IResponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root',
})
export class MomentsService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  public getMoments(): Observable<IResponse<IMoment[]>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<IResponse<IMoment[]>>(this.apiUrl, { headers });
  }

  public getMomentById(id: number): Observable<IResponse<IMoment>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<IResponse<IMoment>>(`${this.apiUrl}/${id}`, {
      headers,
    });
  }

  public createMoment(formData: IMoment): Observable<IMoment> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<IMoment>(this.apiUrl, formData, { headers });
  }

  public deleteMoment(id: number): Observable<IResponse<IMoment>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete<IResponse<IMoment>>(`${this.apiUrl}/${id}`, {
      headers,
    });
  }
}
