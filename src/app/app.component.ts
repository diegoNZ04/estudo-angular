import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirsComponentComponent } from './components/firs-component/firs-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { QuadradoifComponent } from './components/quadradoif/quadradoif.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { ControlflowComponent } from './components/controlflow/controlflow.component';
import { FormsmoduleComponent } from './components/formsmodule/formsmodule.component';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FirsComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    QuadradoifComponent,
    NgforComponent,
    NgswitchComponent,
    NgclassComponent,
    EventbindingComponent,
    ControlflowComponent,
    FormsmoduleComponent,
    ReactiveformsComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayDataBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'curso-angular';
}
