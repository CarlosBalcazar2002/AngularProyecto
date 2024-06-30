import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TemplateComponent } from './pages/template/template.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'template', component: TemplateComponent}
];
