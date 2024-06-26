import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/usuario/productos';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
