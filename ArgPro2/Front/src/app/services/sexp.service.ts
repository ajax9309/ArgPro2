import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Explaboral } from '../model/explaboral';

@Injectable({
  providedIn: 'root'
})
export class SExpService {
  expURL='http://localhost:8080/explab/'

  constructor(private httpClient: HttpClient) { }
  
  public lista():Observable <Explaboral[]>{
    return this.httpClient.get<Explaboral[]>(this.expURL+'lista');
  }

  public detail(id: number): Observable<Explaboral>{
    return this.httpClient.get<Explaboral>(this.expURL+ `detail/${id}`)
  }

  public save(xp:Explaboral): Observable<any>{
    return this.httpClient.post<any>(this.expURL + `create`,xp);
  }

  public update(id:number,xp:Explaboral): Observable<any>{
    return this.httpClient.put<any>(this.expURL+ `update/${id}`,xp);
  }

  public delete (id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL+ `delete/${id}`);
  }
}
