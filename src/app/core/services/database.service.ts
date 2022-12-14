import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { services } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  UrlService:string=""; 
  constructor(
    private http:HttpClient
  ) { 
    this.buildUrl();
  }
  buildUrl(){
    if(services.SslWeb){
      this.UrlService = "https://"+services.apiUrl+":"+services.Port+"/"+services.EndPoint+"/";
    }else{
      this.UrlService = "http://"+services.apiUrl+":"+services.Port+"/"+services.EndPoint+"/";
    } 
  }

  //
  getUser(requets:any){
    return this.http.post<any>(this.UrlService+"User/list_user", requets);
  }

  setUser(requets:any){
    return this.http.post<any>(this.UrlService+"User/ins_upd_user", requets);
  }
}
