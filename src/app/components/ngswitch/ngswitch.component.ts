import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
  // Variável contendo uma linguagem (HTML, CSS, JS)
  linguagem:string = 'JS';

}
