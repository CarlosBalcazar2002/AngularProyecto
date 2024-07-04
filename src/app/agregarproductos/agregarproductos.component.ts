import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../pages/models/productoModel.models';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Sproducto } from '../pages/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarproductos',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './agregarproductos.component.html',
  styleUrl: './agregarproductos.component.css'
})
export class AgregarproductosComponent implements OnInit {
  productoModel: ProductoModel = new ProductoModel();
  constructor(private sproducto: Sproducto) {}
  ngOnInit(): void {
    console.log('esta en la pagina de agregar productos');
  }

  guardar(forma: NgForm){
    this.sproducto.addProductos(this.productoModel)
    .subscribe((resp) => {
      console.log('se registro el producto');
      Swal.fire({
        allowOutsideClick: false,
        title: 'Producto Agregado',
        text: 'Se registro el producto correctamente',
      });
    });
  }
}
