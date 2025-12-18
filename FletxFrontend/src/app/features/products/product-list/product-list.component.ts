import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../../core/services/product.service';
import { NotificationService } from '../../../core/services/notification.service';
import { Product } from '../../../core/models/product.model';
import { ConfirmDialogComponent, ConfirmDialogData } from '../confirm-dialog/confirm-dialog.component';
import { ERROR_MESSAGES, SUCCESS_MESSAGES, APP_CONFIG, UI_TEXTS } from '../../../core/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products = new MatTableDataSource<Product>([]);
  allProducts: Product[] = []; // Mantener todos los productos para filtrado
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'actions'];
  categories: string[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';

  // Constantes para el template
  readonly UI_TEXTS = UI_TEXTS;
  readonly APP_CONFIG = APP_CONFIG;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private router: Router,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    this.products.paginator = this.paginator;
    this.products.sort = this.sort;
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.allProducts = data;
        this.products.data = data;
        
        // Aplicar filtros iniciales
        this.applyFilters();
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.notificationService.showError(ERROR_MESSAGES.PRODUCTS.LOAD_ERROR);
      }
    });
  }

  editProduct(id: string): void {
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: string): void {
    const dialogData: ConfirmDialogData = {
      title: 'Eliminar Producto',
      message: '¿Está seguro de que desea eliminar este producto? Esta acción no se puede deshacer.',
      confirmText: 'Eliminar',
      cancelText: 'Cancelar'
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(id).subscribe({
          next: () => {
            this.loadProducts();
            this.notificationService.showSuccess(SUCCESS_MESSAGES.PRODUCTS.DELETE_SUCCESS);
          },
          error: (error) => {
            console.error('Error deleting product:', error);
            this.notificationService.showError(ERROR_MESSAGES.PRODUCTS.DELETE_ERROR);
          }
        });
      }
    });
  }

  createProduct(): void {
    this.router.navigate(['/products/create']);
  }

  applyFilters(): void {
    let filteredProducts = this.allProducts;

    // Filtrar por categoría
    if (this.selectedCategory) {
      filteredProducts = filteredProducts.filter(product => 
        product.categoria === this.selectedCategory
      );
    }

    // Filtrar por término de búsqueda
    if (this.searchTerm.trim()) {
      const searchTerm = this.searchTerm.toLowerCase().trim();
      filteredProducts = filteredProducts.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm) ||
        (product.descripcion && product.descripcion.toLowerCase().includes(searchTerm)) ||
        (product.categoria && product.categoria.toLowerCase().includes(searchTerm))
      );
    }

    // Actualizar el data source
    this.products.data = filteredProducts;
    
    // Resetear paginación a la primera página
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }
}