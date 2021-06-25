import { Component, OnInit } from '@angular/core';
import { ServiceRPGService } from 'src/app/services/serviceRPG.service';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceRPG: ServiceRPGService
    ,private playerservice: PlayerService,private router: Router) { }

  ngOnInit(): void {
  }

  
  login(nome:string, pass:string)
  {
    this.serviceRPG.login(nome,pass).subscribe((x:any)=> {
      console.log(x);
      this.idplayer=x['data'];
      console.log(this.idplayer);
      this.playerservice.playerID=this.idplayer;

      if (x['code'] <= 200){
        window.alert("Login sucessful");
        this.router.navigateByUrl('Home');
        this.playerservice.username=nome;
        this.playerservice.password=pass;
      }
      else{
        window.alert("Login Failed")
      }
    }
    )
    ;

  }

  
  idplayer:any;

}
