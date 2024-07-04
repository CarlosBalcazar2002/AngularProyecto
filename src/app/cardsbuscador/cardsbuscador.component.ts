import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { __importDefault } from 'tslib';

@Component({
  selector: 'app-cardsbuscador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardsbuscador.component.html',
  styleUrl: './cardsbuscador.component.css'
})
export class CardsbuscadorComponent{

  @Input() productosFiltrados: any[] = [];

  verProducto(producto: any) {
    // Lógica para ver detalles del producto
    console.log('Ver detalles del producto:', producto);
  }
}
