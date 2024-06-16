import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-aventura',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-aventura.component.html',
  styleUrl: './category-aventura.component.css'
})
export class CategoryAventuraComponent implements AfterViewInit {
  showSubMenu: boolean = false;
  
  ngAfterViewInit(): void {}

}
