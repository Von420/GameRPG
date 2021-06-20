import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/serviceRPG.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private register: AutenticacaoService) { }

  ngOnInit(): void {
  }

  SignUp(){
    this.register.SignUp(this.user, this.pass).subscribe(data => console.log(data));
  }
  user = "";
  pass = "";
}
