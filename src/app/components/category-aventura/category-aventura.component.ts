import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../../../services/productos.services';

@Component({
  selector: 'app-category-aventura',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-aventura.component.html',
  styleUrls: ['./category-aventura.component.css']
})
export class CategoryAventuraComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProducts().subscribe(
      (data: any) => {
        console.log('Received data:', data); // Verificar los datos recibidos
        if (data._embedded && data._embedded.productosList) {
          this.products = data._embedded.productosList;
          this.filteredProducts = this.products.filter(product => product.categoriaid === 1);
          console.log('Filtered products:', this.filteredProducts); // Verificar productos filtrados
        } else {
          console.error('Response format is unexpected:', data);
          this.products = []; // Manejo de respuesta inesperada
        }
      },
      error => {
        console.error('Error fetching products:', error);
        // Manejo de errores
      }
    );
  }
}
