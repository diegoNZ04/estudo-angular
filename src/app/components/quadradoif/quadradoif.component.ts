import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-quadradoif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quadradoif.component.html',
  styleUrl: './quadradoif.component.css'
})
export class QuadradoifComponent {
  // Variável para exibir ou ocultar quadrado
  exibir:boolean = true;

  // Função para exibir ou ocultar quadrado
  acao(){
    if(this.exibir === true){
      this.exibir = false;
    }else{
      this.exibir = true;
    }
  }
}
