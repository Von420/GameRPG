import { Component, OnInit } from '@angular/core';
import { ServiceRPGService } from 'src/app/services/serviceRPG.service';


@Component({
  selector: 'app-createchar',
  templateUrl: './createchar.component.html',
  styleUrls: ['./createchar.component.css']
})
export class CreatecharComponent implements OnInit {

  constructor(private serviceRPG: ServiceRPGService) { }

  ngOnInit(): void {
  }

  registar(user: string, name: string, pass: string, isMonster: string, int: string, life: string, atack: string)
  {
    this.serviceRPG.createChar(user,name,pass,isMonster,int,life,atack).subscribe(data => console.log
(data));
    
  }

}
