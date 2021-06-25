import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceRPGService {

  constructor(private http: HttpClient) { }


   // variaveis
  linkLogin: string = "http://moreiramoises.pt/server/apis/login.php";
  linkSignUp: string = 'http://moreiramoises.pt/server/apis/signup.php';
  linkCreateChar: string = 'http://moreiramoises.pt/server/apis/createChart.php';
  linkGetArma: string ="http://moreiramoises.pt/server/apis/createArma.php";
  linkCharId: string = 'http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=';
  linkEnemy: string ="http://moreiramoises.pt/server/apis/get/getRandomChar.php?";

  //login
  login(nome:string, pass:string)
  {
    let dataToSend : FormData = new FormData();
    dataToSend.append("username", nome);
    dataToSend.append("password", pass);
    return this.http.post(this.linkLogin,dataToSend);
  }

//sign up
 signUp(nome:string, pass:string)
 {
  let dataToSend : FormData = new FormData();
  dataToSend.append("username", nome);
  dataToSend.append("password", pass);
  return this.http.post(this.linkSignUp,dataToSend);
 }

//criar arma
 createWeapon(name:string,attack:string,durabilidade:string,life:string,user:string,pass:string,idPerso:string,tipoArma:string)
 {
  let dataToSend : FormData = new FormData();
  dataToSend.append("name",name);
  dataToSend.append("atk", attack);
  dataToSend.append("durabilidade", durabilidade);
  dataToSend.append("vida", life);
  dataToSend.append("username", user);
  dataToSend.append("password", pass);
  dataToSend.append("idPersonagem", idPerso);
  dataToSend.append("tipoDeArma", tipoArma);

  return this.http.post(this.linkGetArma,dataToSend);
 }

 //criar personagem
 createChar(user:string,name:string, pass:string, isMonster:string,int:string,life:string ,attack:string )
 {
  let dataToSend : FormData = new FormData();
  dataToSend.append("name", name);
  dataToSend.append("atk", attack);
  dataToSend.append("isMonster", isMonster);
  dataToSend.append("int", int);
  dataToSend.append("vida", life);
  dataToSend.append("username", user);
  dataToSend.append("password", pass);
  return this.http.post(this.linkCreateChar,dataToSend);
 }

 //obter personagem
 getcharacter(id :String)
 {
    return this.http.get(this.linkCharId +id);
 }

 //obter inimigo
 getenemy()
 {
    return this.http.get(this.linkEnemy);
 }
}
