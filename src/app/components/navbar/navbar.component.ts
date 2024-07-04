import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  terminoBusqueda: string = '';

  constructor(private router: Router) {}

  buscarProductos() {
    if (this.terminoBusqueda.trim()) {
      this.router.navigate(['/buscar', this.terminoBusqueda]);
    }
  }
}

