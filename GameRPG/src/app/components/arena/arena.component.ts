import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { ServiceRPGService } from 'src/app/services/serviceRPG.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  constructor(private playerService: PlayerService, private serviceRPG: ServiceRPGService, router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  router: Router;

  vida:any="";
  ataque:any="";

  vidaE:any="";
  ataqueE:any="";

  setInitialValue(){
    this.vida=Number(this.playerService.player.life)*10;
    this.ataque=Number(this.playerService.player.atk);

    this.vidaE=Number(this.playerService.enemy.life)*10;
    this.ataqueE=Number(this.playerService.enemy.atk);
  }

  final(){ //esta função serve para identificar qual o resultado da luta
    if(this.vida<this.vidaE)
    window.alert("The fight is over, won the enemy!");
    else
    window.alert("The fight is over, you won!");

  }

  fight() //função lutar
  {
    if(this.vida>0 &&  this.vidaE>0){
      this.vida=this.vida-this.ataqueE;
      this.vidaE=this.vidaE-this.ataque;
      
    }
    else{
      if(this.vida<this.vidaE)
      window.alert("The fight is over, won the enemy!");
      else
      window.alert("The fight is over, you won!");

    }
  }

  getChar() //estar função vais buscar a personagem
  {
    this.serviceRPG.getcharacter(this.playerService.playerID).subscribe((x:any) => {

        console.log(x);
        this.playerService.player.name = x['data'].Personagens[0].Nome;
        this.playerService.player.id = x['data'].Personagens[0].ID;
        this.playerService.player.atk = x['data'].Personagens[0].Atk;
        this.playerService.player.isMonset = x['data'].Personagens[0].IsMonset;
        this.playerService.player.int = x['data'].Personagens[0].Int;
        this.playerService.player.life = x['data'].Personagens[0].Vida;
        this.playerService.player.idPlayer = x['data'].Personagens[0].ID_Player;
        this.changetxt();
    });
  }

  getChar2() //estar função vais buscar a personagem inimiga
  {
    this.serviceRPG.getenemy().subscribe((x:any) => {

        console.log(x);
        this.playerService.enemy.name = x['data'].Nome;
        this.playerService.enemy.id = x['data'].ID;
        this.playerService.enemy.atk = x['data'].Atk;
        this.playerService.enemy.isMonset = x['data'].IsMonset;
        this.playerService.enemy.int = x['data'].Int;
        this.playerService.enemy.life = x['data'].Vida;
        this.playerService.enemy.idPlayer = x['data'].ID_Player;
        this.changetxt2();
    });
  }

  changetxt(){ //esta função muda os valores predefinidos referentes ao personagem, para o inserido na base de dados
    let atk1:any = document.getElementById('atk');
    atk1.innerText =  this.playerService.player.atk;

    let vida1:any = document.getElementById('vida');
    vida1.innerText =  this.playerService.player.life;

    let int1:any = document.getElementById('int');
    int1.innerText =  this.playerService.player.int;

    let cName1:any = document.getElementById('cName');
    cName1.innerText =  this.playerService.player.name;

  }

  changetxt2(){ //esta função muda os valores predefinidos referentes ao personagem inimigo, para o inserido na base de dados
    let atk2:any = document.getElementById('atk2');
    atk2.innerText =  this.playerService.enemy.atk;

    let vida2:any = document.getElementById('vida2');
    vida2.innerText =  this.playerService.enemy.life;

    let int2:any = document.getElementById('int2');
    int2.innerText =  this.playerService.enemy.int;

    let eName2:any = document.getElementById('eName2');
    eName2.innerText =  this.playerService.enemy.name;


    this.setInitialValue(); 
  }
}

//No que toca as status de cada personagem, não estão funcionais devido ao aparecimento de alguns erros