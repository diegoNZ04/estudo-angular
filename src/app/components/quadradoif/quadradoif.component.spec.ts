import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadradoifComponent } from './quadradoif.component';

describe('QuadradoifComponent', () => {
  let component: QuadradoifComponent;
  let fixture: ComponentFixture<QuadradoifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadradoifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadradoifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
