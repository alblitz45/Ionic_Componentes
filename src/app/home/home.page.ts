import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  email: string = '';
  password: string ='';

constructor() { }

ngOnInit(){
}

login(formulario: NgForm) {

  console.log(formulario.value);
  console.log('form', formulario.value);

if(this.email === 'admin' && this.password === 'admin') {
    console.log('Login correcto');
  }
  else {
    console.log('Login incorrecto');
  }
  }
}