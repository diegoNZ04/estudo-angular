import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
  //Lista de aprovados e Reprovados
  lista:string[] = ["Aprovado", "Aprovado", "Reprovado"]
}
