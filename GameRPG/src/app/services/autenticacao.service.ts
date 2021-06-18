import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  linkLogin: string = "http://moreiramoises.pt/server/apis/login.php";
  linkLogon = 'http://moreiramoises.pt/server/apis/signup.php';

  
}
