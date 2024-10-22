import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {}
