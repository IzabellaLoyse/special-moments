import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMomentComponent } from './details-moment.component';

describe('DetailsMomentComponent', () => {
  let component: DetailsMomentComponent;
  let fixture: ComponentFixture<DetailsMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
