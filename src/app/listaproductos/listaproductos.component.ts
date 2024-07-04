import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProcedureParam } from '../pages/models/procedureparam';
import { Sproducto } from '../pages/services/producto.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listaproductos',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './listaproductos.component.html',
  styleUrl: './listaproductos.component.css'
})
export class ListaproductosComponent implements OnInit{
  procedureParam : ProcedureParam = new ProcedureParam();
  productos: any[] = [];
  constructor(private producto:Sproducto){}
  ngOnInit(): void {
    
    this.procedureParam.inicia();    
    // this.procedureParam.pCampo0='Cnombre';
    // this.procedureParam.pValor0='a';
    // Cnombre => C = like nombre=nombrecolumna (where like nombre '%%')
    // Nidpaciente=> N = idpaciente=nombrecolumna(where idpaciente=1)
    console.log('1');
    this.producto.selProductos(this.procedureParam)
      .subscribe((resp:any) => {
        this.productos = resp;

      });
    }
}
