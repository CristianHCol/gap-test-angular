import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarCompareDetailComponent } from './car-compare-detail.component';


describe('CarCompareDetailComponent', () => {
  let component: CarCompareDetailComponent;
  let fixture: ComponentFixture<CarCompareDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCompareDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCompareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
