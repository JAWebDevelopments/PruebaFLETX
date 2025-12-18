# FletxBackend

Proyecto backend Node.js con Express, MySQL, JWT y arquitectura DDD.

## Arquitectura

- **Domain**: Entidades y repositorios.
- **Application**: Casos de uso.
- **Infrastructure**: Implementaciones de repositorios y servicios.
- **Presentation**: Controladores, rutas y middlewares.

## Instalación

1. Instala las dependencias:
   ```
   npm install
   ```

2. Configura las variables de entorno en `.env`:
   - JWT_SECRET: Tu secreto para JWT
   - DB_HOST, DB_USER, DB_PASSWORD, DB_NAME: Credenciales de MySQL

3. Crea las tablas en MySQL:
   ```sql
   CREATE DATABASE fletx_db;
   USE fletx_db;
   CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) UNIQUE, password VARCHAR(255));
   CREATE TABLE productos (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), precio DECIMAL(10,2));
   ```

## Documentación

La documentación de la API está disponible en `/api-docs` usando Swagger UI.

Accede a http://localhost:3000/api-docs para ver la documentación interactiva.

## Endpoints

### Autenticación
- POST /auth/register: Registrar usuario (body: {username, password})
- POST /auth/login: Iniciar sesión (body: {username, password}) - Devuelve token

### CRUD Productos (requiere token en header: Authorization: Bearer <token>)
- GET /productos: Obtener todos los productos
- GET /productos/:id: Obtener producto por ID
- POST /productos: Crear producto (body: {nombre, precio})
- PUT /productos/:id: Actualizar producto (body: {nombre, precio})
- DELETE /productos/:id: Eliminar producto