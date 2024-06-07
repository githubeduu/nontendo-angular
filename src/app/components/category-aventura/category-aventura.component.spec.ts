import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAventuraComponent } from './category-aventura.component';

describe('CategoryAventuraComponent', () => {
  let component: CategoryAventuraComponent;
  let fixture: ComponentFixture<CategoryAventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryAventuraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
