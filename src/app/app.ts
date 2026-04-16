import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from './tarjeta/tarjeta';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-app');

  nuevoNombre: string = '';
  nuevaEdad: number | null = null;

  tarjetas = [
    { nombre: 'Brayan', edad: 22 }
  ];

  agregarTarjeta() {
    if (this.nuevoNombre && this.nuevaEdad !== null) {
      this.tarjetas.push({ nombre: this.nuevoNombre, edad: this.nuevaEdad });
      this.nuevoNombre = '';
      this.nuevaEdad = null;
    }
  }
}
