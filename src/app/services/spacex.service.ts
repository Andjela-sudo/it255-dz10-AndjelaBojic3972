import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {



  constructor(private http: HttpClient) { }

  public getAllRockets(){
    return  this.http.get('https://api.spacexdata.com/v4/rockets');
  }
  public getRocketById(id: string){
    return this.http.get('https://api.spacexdata.com/v4/rockets/'+ id);
  }
}
