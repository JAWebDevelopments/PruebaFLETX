import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  isLoading = false;
  productId: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    this.productId = this.route.snapshot.params['id'];
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    this.isLoading = true;
    this.productService.getProduct(this.productId).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading product:', error);
        this.notificationService.showError('Error al cargar el producto. Redirigiendo a la lista de productos.');
        this.router.navigate(['/products']);
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.isLoading = true;
      const productData = this.productForm.value;
      this.productService.updateProduct(this.productId, productData).subscribe({
        next: (product) => {
          this.isLoading = false;
          this.notificationService.showSuccess('Producto actualizado exitosamente');
          this.router.navigate(['/products']);
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error updating product:', error);
          this.notificationService.showError('Error al actualizar el producto. Verifique los datos e intente nuevamente.');
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}