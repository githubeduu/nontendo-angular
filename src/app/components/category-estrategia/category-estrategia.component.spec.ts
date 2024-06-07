import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEstrategiaComponent } from './category-estrategia.component';

describe('CategoryEstrategiaComponent', () => {
  let component: CategoryEstrategiaComponent;
  let fixture: ComponentFixture<CategoryEstrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryEstrategiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
