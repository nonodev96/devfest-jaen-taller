import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PonentesComponent } from './ponentes.component';

describe('PonentesComponent', () => {
  let component: PonentesComponent;
  let fixture: ComponentFixture<PonentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonentesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PonentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
