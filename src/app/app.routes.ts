import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TemplateComponent } from './pages/template/template.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { AgregarproductosComponent } from './agregarproductos/agregarproductos.component';
import { ListasuscripcionComponent } from './listasuscripcion/listasuscripcion.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'template', component: TemplateComponent},
    {path: 'lista', component: ListaproductosComponent},
    {path: 'agregar', component: AgregarproductosComponent},
    {path: 'suscripcion', component: ListasuscripcionComponent},
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'detalle-producto/:id', component: DetalleproductoComponent },
    { path: '**', component: InicioComponent }
];
