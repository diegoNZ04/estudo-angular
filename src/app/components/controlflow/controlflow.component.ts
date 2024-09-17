import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  standalone: true,
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {
  // Variável de Média
  media:number = 5;

  // Vetor
  nomes:string[] = ['Ralf', 'Ana', 'Danilo', 'Camila'];

  // Linguagem
  linguagem:string = 'HTML';
}

