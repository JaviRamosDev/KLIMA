import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  titleValidado:string = 'Formulario Validado';
  formularioValidado:FormGroup = new FormGroup({}); 

  constructor(private formbuilder:FormBuilder, public userService:UserService, private toastr:ToastrService, private navigation:Router) { 
    this.formularioValidado = this.formbuilder.group({
      email:['eve.holt@reqres.in', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*")])], 
    })
  }

  public submit() {
    let email:string = this.formularioValidado.get('email')?.value;
    let password:string = this.formularioValidado.get('password')?.value;
    

    this.userService.login(email, password).subscribe( data => {
      if(data.token)  {
        this.navigation.navigate(['home']);
      }else {
        this.toastr.error("El usuario o password introducidos no son correctos");
      }
    });
  }

  ngOnInit(): void { 
    
  }
}