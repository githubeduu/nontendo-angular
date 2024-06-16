import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-estrategia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-estrategia.component.html',
  styleUrl: './category-estrategia.component.css'
})
export class CategoryEstrategiaComponent implements AfterViewInit {
  showSubMenu: boolean = false;
  
  ngAfterViewInit(): void {}
  
}

  