# GitHub Copilot Instructions for Fletx Frontend

## Project Overview
This is a modern Angular PWA (Progressive Web App) for product management with JWT authentication. The application provides a complete CRUD interface for managing products with a clean, responsive design using Angular Material and Bootstrap.

## Architecture
- **Framework**: Angular 16 with standalone components and lazy loading
- **UI Libraries**: Angular Material + Bootstrap for responsive design
- **Authentication**: JWT-based with @auth0/angular-jwt
- **State Management**: Service-based architecture
- **PWA Features**: Service workers, offline support
- **API Integration**: RESTful API consumption with HttpClient

## Project Structure
```
src/app/
├── core/
│   ├── guards/
│   │   └── auth.guard.ts          # Route protection
│   ├── models/
│   │   ├── product.model.ts       # Product interface with id, nombre, precio, descripcion, categoria
│   │   └── user.model.ts          # User interface
│   └── services/
│       ├── auth.service.ts        # Authentication logic
│       ├── product.service.ts     # Product CRUD operations
│       └── notification.service.ts # Toast notifications service (provided in products module)
├── features/
│   ├── login/                     # Login module with authentication and user registration
│   └── products/                  # Products module with CRUD, pagination, search and filter
├── app-routing.module.ts          # Main routing with lazy loading
├── app.component.*                # Main app component with toolbar and footer
└── app.module.ts                  # Root module with PWA setup
```

## Key Features
- **Modern Login**: Bootstrap + Material design with form validation
- **User Registration**: Complete registration form with validation and password confirmation
- **JWT Security**: Token-based authentication with HTTP interceptors
- **Product CRUD**: Create, Read, Update, Delete operations with confirmation dialogs
- **Search & Filter**: Real-time search by name, description, category with category dropdown filter
- **Sorting**: Click column headers to sort products ascending/descending by ID, name, or price
- **Pagination**: Navigate through large product lists with configurable page sizes
- **Pagination**: Angular Material paginator for large datasets
- **Corporate Footer**: Professional footer with company information
- **Responsive Design**: Mobile-first approach with Bootstrap grid
- **PWA Ready**: Offline support and installable
- **Type Safety**: Full TypeScript implementation

## Development Guidelines

### Code Style
- Use Angular CLI conventions
- Implement reactive forms for all user inputs
- Follow component-based architecture
- Use services for business logic and API calls
- Implement proper error handling and loading states

### Authentication Flow
1. User logs in via login form
2. JWT token stored in localStorage
3. AuthGuard protects product routes
4. HttpInterceptor adds Authorization header to API calls
5. Logout clears token and redirects to login

### API Integration
- Base URL configured in environment files
- HttpClient for all API calls
- Proper error handling with user feedback
- Loading indicators for async operations

### UI/UX Patterns
- Material Design components for consistency
- Bootstrap utilities for responsive layout
- Loading spinners for async operations
- Form validation with error messages
- Confirmation dialogs for destructive actions
- Toast notifications for operation feedback (success/error messages)

## Environment Configuration
- `environment.ts`: localhost:3000/api
- `environment.prod.ts`: api.fletx.com/api

## Build & Deployment
- Use `ng build --prod` for production builds
- PWA features enabled for offline support
- Service workers configured for caching

## Testing Strategy
- Unit tests for services and components
- Integration tests for critical user flows
- E2E tests for complete scenarios

## Security Considerations
- JWT tokens properly validated
- No sensitive data in localStorage
- HTTPS required for production
- Input validation on client and server side

## Performance Optimizations
- Lazy loading for feature modules
- OnPush change detection where appropriate
- Bundle optimization with Angular CLI
- PWA caching strategies

## Future Enhancements
- Add product categories management
- Implement real-time updates
- Add user profile management
- Add advanced reporting and analytics
- Implement product image upload