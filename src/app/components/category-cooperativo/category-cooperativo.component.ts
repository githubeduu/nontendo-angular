import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-cooperativo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-cooperativo.component.html',
  styleUrl: './category-cooperativo.component.css'
})
export class CategoryCooperativoComponent implements AfterViewInit {
  showSubMenu: boolean = false;
  
  ngAfterViewInit(): void {}
  

}

  

