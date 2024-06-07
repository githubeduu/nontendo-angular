import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCooperativoComponent } from './category-cooperativo.component';

describe('CategoryCooperativoComponent', () => {
  let component: CategoryCooperativoComponent;
  let fixture: ComponentFixture<CategoryCooperativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCooperativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCooperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
