import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      this.isLoading = true;
      const productData = this.productForm.value;
      this.productService.createProduct(productData).subscribe({
        next: (product) => {
          this.isLoading = false;
          this.notificationService.showSuccess('Producto creado exitosamente');
          this.router.navigate(['/products']);
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error creating product:', error);
          this.notificationService.showError('Error al crear el producto. Verifique los datos e intente nuevamente.');
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}