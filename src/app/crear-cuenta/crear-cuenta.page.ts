import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
  standalone: false,
})
export class CrearCuentaPage implements OnInit {

  nombre: string = '';
  email: string = '';
  telefono: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  ngOnInit() {
  }

  crearCuenta(formularioCrearCuenta: NgForm) {
    if (this.password !== this.confirmPassword) {
      console.log("Contraseñas diferentes.");
      return;
    }

    console.log('¡Cuenta creada con éxito!');
  }
}
