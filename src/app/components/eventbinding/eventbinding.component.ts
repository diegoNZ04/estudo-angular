import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  standalone: true,
  imports: [],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {
  // Função para exibir mensagem
  mensagem(){
    alert('Hello World!');
  }
}
