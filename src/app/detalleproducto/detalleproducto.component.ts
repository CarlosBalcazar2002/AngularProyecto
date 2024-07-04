import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sproducto } from '../pages/services/producto.service';

@Component({
  selector: 'app-detalleproducto',
  standalone: true,
  imports: [],
  templateUrl: './detalleproducto.component.html',
  styleUrl: './detalleproducto.component.css'
})
export class DetalleproductoComponent implements OnInit {

  producto: any = {}; // Inicializa producto como un objeto vacío o con las propiedades necesarias

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: Sproducto
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.productosService.getProducto(parseInt(id)).subscribe(
      (data: any) => {
        if (data) {
          this.producto = data; // Asigna los datos del producto recibido al objeto producto en el componente
        } else {
          console.log('Producto no encontrado');
        }
      },
      error => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }
}