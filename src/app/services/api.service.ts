import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = 'http://localhost:3000/products/'

  constructor(private http: HttpClient) { }
  getAllProducts():Observable<any>{
   return this.http.get<any>(this.baseUrl);
  };
  
  addProduct(input:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,input);
  };

  deleteProduct(id:any):Observable<any>{
    return this.http.delete<any>(this.baseUrl+id);
  }

  editProduct(input:any, id:any):Observable<any>{
    return this.http.put<any>(this.baseUrl,input+id);
  }
  


}
