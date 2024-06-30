import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaisService } from '../services/pais.service';


@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: '',
  };

  usuarios: any[] = [];  // Lista para almacenar usuarios añadidos
  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
      this.paises.unshift({ nombre: '[ Seleccione Pais]', codigo: '' });
    });
  }

  guardar(forma: NgForm) {
    console.log('Formulario enviado');
    console.log(forma);

    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        control.markAsTouched();
      });

    }

    console.log('Usuario añadido:', forma.value);

    // Añadir el usuario a la lista de usuarios
    this.usuarios.push({ ...this.usuario });

    // Reiniciar el formulario
    forma.resetForm({
      nombre: '',
      apellido: '',
      correo: '',
      pais: '',
      genero: '',
    });

    console.log('Lista de usuarios:', this.usuarios);
  }
}
