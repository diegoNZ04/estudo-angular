import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formsmodule',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formsmodule.component.html',
  styleUrl: './formsmodule.component.css'
})
export class FormsmoduleComponent {

  nome:string = '';
  cidade:string = '';

}
