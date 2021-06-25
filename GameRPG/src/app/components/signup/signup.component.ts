import { Component, OnInit } from '@angular/core';
import { ServiceRPGService } from 'src/app/services/serviceRPG.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private serviceRPG: ServiceRPGService, router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
  }

  router: Router;

  registar(nome: string, pass: string)
  {
    this.serviceRPG.signUp(nome,pass).subscribe(data => console.log(data));
    this.router.navigateByUrl('Home');
  }

}
