import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient, private playerService: PlayerService) { }


   // vars
  linkLogin: string = "http://moreiramoises.pt/server/apis/login.php";
  linkSignUp: string = 'http://moreiramoises.pt/server/apis/signup.php';
  linkCreateChar: string = 'http://moreiramoises.pt/server/apis/createChart.php';
  linkCharId: string = 'http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=';
  linkRndChar: string = 'http://moreiramoises.pt/server/apis/get/getRandomChar.php?';
  linkUpdateChar: string = 'http://moreiramoises.pt/server/apis/updateChart.php';

  // log in to an account
  logIn(user: string, pass: string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append("username", user);
    dataToSend.append("password", pass);

    return this.http.post(this.linkLogin, dataToSend);
  }

  
  SignUp(user: string, pass: string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('username', user);
    dataToSend.append('password', pass);

    return this.http.post(this.linkSignUp, dataToSend);
  }

  
  createChar(name: string, atk: string, int: string, vida: string, user: string, pass: string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('isMonster', 'false');
    dataToSend.append('int', int);
    dataToSend.append('vida', vida);
    dataToSend.append('username', user);
    dataToSend.append('password', pass);

    return this.http.post(this.linkCreateChar, dataToSend);
  }

  
  getCharID(id: string) {
    return this.http.get(this.linkCharId + id);
  }

  
  getRndChar() {
    return this.http.get(this.linkRndChar);
  }

  updateStats(atk: string, int: string, vida: string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('name', this.playerService.player.name);
    dataToSend.append('atk', atk);
    dataToSend.append('isMonster', 'false');
    dataToSend.append('int', int);
    dataToSend.append('vida', vida);
    dataToSend.append('username', this.playerService.username);
    dataToSend.append('password', this.playerService.password);

    return this.http.post(this.linkUpdateChar, dataToSend);
  }
}
