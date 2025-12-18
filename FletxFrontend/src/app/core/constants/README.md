# Constantes de la Aplicación Fletx

Este archivo documenta el uso de las constantes globales centralizadas en la aplicación.

## Estructura de Constantes

Las constantes están organizadas en categorías lógicas dentro del archivo `src/app/core/constants/app.constants.ts`.

### 1. API_ENDPOINTS
Contiene todas las rutas de endpoints de la API.

```typescript
import { API_ENDPOINTS } from '../core/constants';

// Uso en servicios
const loginUrl = `${environment.apiUrl}${API_ENDPOINTS.AUTH.LOGIN}`;
```

### 2. APP_CONFIG
Configuraciones generales de la aplicación.

```typescript
import { APP_CONFIG } from '../core/constants';

// Configuración de paginación
pageSizeOptions: APP_CONFIG.PAGINATION.PAGE_SIZE_OPTIONS
defaultPageSize: APP_CONFIG.PAGINATION.DEFAULT_PAGE_SIZE
```

### 3. SUCCESS_MESSAGES y ERROR_MESSAGES
Mensajes centralizados para notificaciones.

```typescript
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../core/constants';

// En lugar de texto hardcodeado
this.notificationService.showSuccess(SUCCESS_MESSAGES.PRODUCTS.CREATE_SUCCESS);
this.notificationService.showError(ERROR_MESSAGES.PRODUCTS.LOAD_ERROR);
```

### 4. UI_TEXTS
Textos de la interfaz de usuario.

```typescript
import { UI_TEXTS } from '../core/constants';

// En el componente
readonly UI_TEXTS = UI_TEXTS;

// En el template
<mat-card-title>{{ UI_TEXTS.PRODUCTS.TITLE }}</mat-card-title>
<button>{{ UI_TEXTS.PRODUCTS.CREATE_BUTTON }}</button>
```

### 5. PRODUCT_CATEGORIES
Lista de categorías disponibles para productos.

```typescript
import { PRODUCT_CATEGORIES } from '../core/constants';

// En un dropdown
categories = PRODUCT_CATEGORIES;
```

### 6. STORAGE_KEYS
Claves para localStorage y sessionStorage.

```typescript
import { STORAGE_KEYS } from '../core/constants';

localStorage.setItem(STORAGE_KEYS.TOKEN, token);
const user = localStorage.getItem(STORAGE_KEYS.USER);
```

### 7. ROUTES
Rutas de navegación de la aplicación.

```typescript
import { ROUTES } from '../core/constants';

this.router.navigate([ROUTES.PRODUCTS]);
```

### 8. REGEX_PATTERNS
Patrones de validación comunes.

```typescript
import { REGEX_PATTERNS } from '../core/constants';

if (REGEX_PATTERNS.EMAIL.test(email)) {
  // Email válido
}
```

## Beneficios

- **Mantenibilidad**: Cambiar un mensaje o configuración en un solo lugar
- **Consistencia**: Textos uniformes en toda la aplicación
- **Internacionalización**: Preparado para múltiples idiomas
- **Type Safety**: TypeScript proporciona autocompletado y validación
- **Organización**: Código más limpio y estructurado

## Cómo Agregar Nuevas Constantes

1. Agregar la constante en la categoría apropiada en `app.constants.ts`
2. Exportar desde `index.ts` si es necesario
3. Importar y usar en los componentes/servicios

## Ejemplo de Uso Completo

```typescript
// En product-list.component.ts
import {
  UI_TEXTS,
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  APP_CONFIG
} from '../../../core/constants';

export class ProductListComponent {
  readonly UI_TEXTS = UI_TEXTS;
  readonly APP_CONFIG = APP_CONFIG;

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.notificationService.showSuccess(SUCCESS_MESSAGES.PRODUCTS.DELETE_SUCCESS);
      },
      error: () => {
        this.notificationService.showError(ERROR_MESSAGES.PRODUCTS.DELETE_ERROR);
      }
    });
  }
}
```

```html
<!-- En product-list.component.html -->
<mat-card-title>{{ UI_TEXTS.PRODUCTS.TITLE }}</mat-card-title>
<button (click)="deleteProduct(product.id)">
  {{ UI_TEXTS.PRODUCTS.DELETE_BUTTON }}
</button>
```</content>
<parameter name="filePath">/media/jhonny/Datos/RepositoriosGit/PruebaFLETX/FletxFrontend/src/app/core/constants/README.md