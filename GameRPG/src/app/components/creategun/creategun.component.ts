import { Component, OnInit } from '@angular/core';
import { ServiceRPGService } from 'src/app/services/serviceRPG.service';

@Component({
  selector: 'app-creategun',
  templateUrl: './creategun.component.html',
  styleUrls: ['./creategun.component.css']
})
export class CreategunComponent implements OnInit {

  constructor(private serviceRPG: ServiceRPGService) { }

  ngOnInit(): void {
  }

  registar(nome: string, atk: string, durabilidade: string, life: string, user: string, pass: string, idPerso: string, tipoArma: string){
    this.serviceRPG.createWeapon(nome,atk,durabilidade,life,user,pass,idPerso,tipoArma).subscribe(data => console.log
      (data));
      
  }
}
