import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsmoduleComponent } from './formsmodule.component';

describe('FormsmoduleComponent', () => {
  let component: FormsmoduleComponent;
  let fixture: ComponentFixture<FormsmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsmoduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
