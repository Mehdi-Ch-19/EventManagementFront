import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryparentComponent } from './categoryparent.component';

describe('CategoryparentComponent', () => {
  let component: CategoryparentComponent;
  let fixture: ComponentFixture<CategoryparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
