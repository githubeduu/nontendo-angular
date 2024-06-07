import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFamiliarComponent } from './category-familiar.component';

describe('CategoryFamiliarComponent', () => {
  let component: CategoryFamiliarComponent;
  let fixture: ComponentFixture<CategoryFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFamiliarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
