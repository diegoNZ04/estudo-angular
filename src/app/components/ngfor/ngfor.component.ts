import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  //Vetor de Nomes
  nomes:string[] = ['Ariane', 'Bruna', 'Caio', 'Denis']
}
