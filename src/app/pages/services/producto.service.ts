import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProcedureParam } from '../models/procedureparam';
import { ProductoModel } from '../models/productoModel.models';
import { DatePipe } from '@angular/common';

const apiUlr = 'https://disweb.jokamaliva.com/ceb/';

@Injectable({ providedIn: 'root' })
export class Sproducto {
    constructor(private http: HttpClient, public datepipe: DatePipe) { }

    selProductos(procedureParam: any): Observable<any> {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data');
        let body = new HttpParams();
        body = body.set('idusuario', '1');
        body = body.set('llave', '2');
        body = body.set('pCampo0', procedureParam.pCampo0);
        body = body.set('pValor0', procedureParam.pValor0);
        body = body.set('pCampo1', procedureParam.pCampo1);
        body = body.set('pValor1', procedureParam.pValor1);
        body = body.set('pCampo2', procedureParam.pCampo2);
        body = body.set('pValor2', procedureParam.pValor2);
        body = body.set('pCampo3', procedureParam.pCampo3);
        body = body.set('pValor3', procedureParam.pValor3);
        body = body.set('pCampo4', procedureParam.pCampo4);
        body = body.set('pValor4', procedureParam.pValor4);
        body = body.set('pCampo5', procedureParam.pCampo5);
        body = body.set('pValor5', procedureParam.pValor5);
        body = body.set('pCampo6', procedureParam.pCampo6);
        body = body.set('pValor6', procedureParam.pValor6);
        body = body.set('pCampo7', procedureParam.pCampo7);
        body = body.set('pValor7', procedureParam.pValor7);

        return this.http.post(apiUlr + 'selProductos', body)
            .pipe(map((resp: any) => {
                if (resp['info'] != null) {
                    if (resp['mesaje'] != null) {
                        return resp['info'].item;
                    } else {
                        console.log('FAILD');
                        return null;
                    }
                } else { 
                    console.log('error coneccion'); 
                    return null; 
                }
            }));
            
    }

    getProducto(id: number): Observable<any> {
        const procedureParam: ProcedureParam = {
            pCampo0: 'id', // Ajusta este campo según la estructura de tu backend
            pValor0: id.toString(),
            pCampo1: '',
            pValor1: '',
            pCampo2: '',
            pValor2: '',
            pCampo3: '',
            pValor3: '',
            pCampo4: '',
            pValor4: '',
            pCampo5: '',
            pValor5: '',
            pCampo6: '',
            pValor6: '',
            pCampo7: '',
            pValor7: '',
            inicia: function (): void {
                throw new Error('Function not implemented.');
            }
        };

        return this.selProductos(procedureParam).pipe(
            map((productos: any[]) => productos.find(producto => producto.id === id))
        );
    }

    addProductos(producto: ProductoModel): Observable<any> {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data');
        let body = new HttpParams();
        body = body.set('pidproductos', producto.idproductos.toString());
        body = body.set('pnombre', producto.nombre.toString()); 
        body = body.set('pdescripcion', producto.descripcion.toString());
        body = body.set('pprecio', producto.precio.toString());
        body = body.set('pcantidad', producto.cantidad.toString());
        body = body.set('pimagenurl', producto.imagenurl.toString());

        return this.http.post(apiUlr + 'addProductos', body)
            .pipe(map((resp: any) => {
                if (resp['info'] != null) {
                    if (resp['mesaje'] != null) {
                        return resp['info'].item;
                    } else {
                        console.log('FAILD');
                        return null;
                    }
                } else {
                    console.log('error coneccion');
                    return null;
                }
            }));
    }
}
