import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AgregarsuscripcionComponent } from '../../agregarsuscripcion/agregarsuscripcion.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AgregarsuscripcionComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
