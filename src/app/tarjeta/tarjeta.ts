import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  @Input() nombre: string = 'Usuario';
  @Input() edad: number = 25;
  
  likes: number = 0;
  dislikes: number = 0;

  darLike() {
    this.likes++;
  }

  darDislike() {
    this.dislikes++;
  }
}
