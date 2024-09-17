import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsComponentComponent } from './firs-component.component';

describe('FirsComponentComponent', () => {
  let component: FirsComponentComponent;
  let fixture: ComponentFixture<FirsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
