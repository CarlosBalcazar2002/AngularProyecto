import { Component, OnInit } from '@angular/core';
import { ProcedureParam } from '../pages/models/procedureparam';
import { Ssuscripcion } from '../pages/services/suscripcion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listasuscripcion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listasuscripcion.component.html',
  styleUrl: './listasuscripcion.component.css'
})
export class ListasuscripcionComponent implements OnInit{
  procedureParam : ProcedureParam = new ProcedureParam();
  suscripciones: any[] = [];
  constructor(private suscripcion:Ssuscripcion){}
  ngOnInit(): void {
    
    this.procedureParam.inicia();    
    // this.procedureParam.pCampo0='Cnombre';
    // this.procedureParam.pValor0='a';
    // Cnombre => C = like nombre=nombrecolumna (where like nombre '%%')
    // Nidpaciente=> N = idpaciente=nombrecolumna(where idpaciente=1)
    console.log('1');
    this.suscripcion.selSuscriptores(this.procedureParam)
      .subscribe((resp:any) => {
        this.suscripciones = resp;

      });
    }
}
