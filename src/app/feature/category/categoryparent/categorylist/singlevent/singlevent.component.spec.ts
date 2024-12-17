import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleventComponent } from './singlevent.component';

describe('SingleventComponent', () => {
  let component: SingleventComponent;
  let fixture: ComponentFixture<SingleventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
