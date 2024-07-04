import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardsbuscadorComponent } from '../cardsbuscador/cardsbuscador.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, CardsbuscadorComponent, FormsModule],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  productos: any[] = [];
  productosFiltrados: any[] = [];
  termino: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    // Inicializa algunos productos para la demostración.
    this.productos = [
    { id: 1, nombre: 'Donuts', descripcion: 'Donuts con colores a eleccion', precio:  5.00, cantidad: 100, imagenurl: 'assets/img/Donuts.jpg' },
    { id: 2, nombre: 'Tortas', descripcion: 'Tortas con galletas champañeras', precio: 100, cantidad: 20, imagenurl: 'assets/img/Torta_Con_Galletas_Champaneras.jpg' },
    { id: 3, nombre: 'Tortas De Chocolate', descripcion: 'Tortas de chocolate con decoracion de frutilla', precio:  100, cantidad: 100, imagenurl: 'assets/img/Tortas(2).jpg' },
    { id: 4, nombre: 'Mousses', descripcion: 'De Oreo, Cafe Y Frutilla', precio: 5.00, cantidad: 20, imagenurl: 'assets/img/Mousses.jpg' },
    { id: 5, nombre: 'Manzanas ', descripcion: 'Acarameladas Con Esecia ', precio: 10.00, cantidad: 100, imagenurl: 'assets/img/Manzanas.jpg' },
    { id: 6, nombre: 'Mousses', descripcion: 'De Frutilla En Vasitos De 5ml', precio: 5.00, cantidad: 20, imagenurl: 'assets/img/Mousses(2).jpg' },
    { id: 7, nombre: 'Choco Bomba', descripcion: 'Masitas De Coco Con Decoracion', precio: 15.00, cantidad: 100, imagenurl: 'assets/img/Choco_Bomba.jpg' },
    { id: 8, nombre: 'Frutillas', descripcion: 'Decoracion Con Rosas Artificiales', precio: 50.00, cantidad: 20, imagenurl: 'assets/img/Frutillas.jpg' },
    { id: 9, nombre: 'Galletas', descripcion: 'En Formas De Winnie Pouh', precio: 15.00, cantidad: 20, imagenurl: 'assets/img/img3(3).jpg' }
    ];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.filtrarProductos(this.termino);
    });
  }

  filtrarProductos(termino: string) {
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
  }
}