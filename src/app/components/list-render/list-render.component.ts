import { Component } from '@angular/core';
import { Animal } from '../../Interfaces/Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Zeus', type: 'Dog', age: 8 },
    { name: 'Raj', type: 'Cat', age: 3 },
    { name: 'Carpeado', type: 'Dog', age: 12 },
  ];

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
