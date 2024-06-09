import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-familiar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-familiar.component.html',
  styleUrl: './category-familiar.component.css'
})
export class CategoryFamiliarComponent implements AfterViewInit {
  showSubMenu: boolean = false;
  
  ngAfterViewInit(): void {}
  
  
  toggleSubMenu(event: Event) {
    event.preventDefault(); 
    this.showSubMenu = !this.showSubMenu;
  }
}
