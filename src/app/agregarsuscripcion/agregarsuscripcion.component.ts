import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SuscriptorModel } from '../pages/models/suscripcionModel.model';
import Swal from 'sweetalert2';
import { Ssuscripcion } from '../pages/services/suscripcion.component';

@Component({
  selector: 'app-agregarsuscripcion',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './agregarsuscripcion.component.html',
  styleUrls: ['./agregarsuscripcion.component.css']
})
export class AgregarsuscripcionComponent implements OnInit {
  suscripcionModel: SuscriptorModel = new SuscriptorModel();

  constructor(private ssuscripcion: Ssuscripcion) {}

  ngOnInit(): void {
    console.log('Esta en la página de agregar suscripciones');
  }

  guardar(forma: NgForm) {
    if (forma.valid) {
      this.ssuscripcion.addSuscriptores(this.suscripcionModel)
        .subscribe((resp) => {
          console.log('Se registró el usuario');
          Swal.fire({
            allowOutsideClick: false,
            title: 'Suscripción Exitosa',
            text: 'Gracias por suscribirse, recibirá variedades de ofertas',
            icon: 'success'
          });
          forma.resetForm();
        }, (error) => {
          console.error('Error al registrar el usuario', error);
          Swal.fire({
            allowOutsideClick: false,
            title: 'Error',
            text: 'Hubo un problema al suscribirse. Por favor, intente nuevamente.',
            icon: 'error'
          });
        });
    }
  }
}
