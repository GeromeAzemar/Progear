import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
_http:HttpClient
  constructor(_httpref:HttpClient) { 
    this._http=_httpref;
  }
  register(user:any){
    return this._http.post("https://localhost:44310/api/User/createUser", user,{headers:new HttpHeaders({"Content-Type":"application/json"})});
  }
}