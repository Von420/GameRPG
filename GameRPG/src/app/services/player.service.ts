import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  pointsEvolve: number=2;
  backgroundImg:any="";
   password: any;
   username: any;
   playerID: any = "" ;


   //personagem criada
   player: any = {
     name: "",
     id: "",
     atk: "",
     isMonset: "",
     int: "",
     life: "",
     img: "",
     idPlayer: "",
     weapon: "not"
   }


   //personagem inimiga
   enemy: any = {
    name: "",
    id: "",
    atk: "",
    isMonset: "",
    int: "",
    life: "",
    img: "",
    idPlayer: "",
    weapon: "not"
  }

  //arma 
   weapon: any = {
    name : "",
    atk : "",
    durabilidade : "",
    vida : "",
    idPersonagem : "",
    tipoDeArma : "",
   }
}