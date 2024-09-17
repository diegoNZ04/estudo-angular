import { Component } from '@angular/core';

@Component({
  selector: 'app-firs-component',
  standalone: true,
  imports: [],
  templateUrl: './firs-component.component.html',
  styleUrl: './firs-component.component.css'
})
export class FirsComponentComponent {

  name:string = "Diego"
  age:number = 20
  job:string = "Programador"
  hobbies = ["Treinar", "Estudar", "Ver Filmes"]
  car = {
    marca: "Hyndai",
    modelo: "HB20",
    ano: 2020,
    cor: "Prata"
  }

}
