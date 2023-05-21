import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private _endPoint: string = `${environment.api}`;

  constructor(
    private _http: HttpClient
  ) { }

  setEndPoint(endPoint: string) {
    this._endPoint = endPoint;
  }

  create(model: any) {
    return this._http.post<any>(`${this._endPoint}`, model);
  }

  getById<IGeneric>(id: number) {
    return this._http.get<IGeneric>(`${this._endPoint}/${id}`);
  }

  getAll<IGeneric>() {
    return this._http.get<IGeneric>(this._endPoint);
  }

  update(id: number, body: any) {
    return this._http.patch(`${this._endPoint}/${id}`, body)
      .pipe(map(x => x))
  }
  delete(id: number) {
    return this._http.delete(`${this._endPoint}/${id}`)
      .pipe(map(x => { return x }))
  }
}
