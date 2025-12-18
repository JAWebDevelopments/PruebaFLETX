# PruebaFLETX
En este repositorio puede encontrar una prueba completa de Login y CRUD


1. Crea un frontend en Angular y un backend en Node.js (puedes usar Express o NestJS) con conexión a MySQL. Implementa un formulario de login y registro utilizando JWT.
2. Una vez logueado, implementa un CRUD protegido (validando el token) para una entidad simple. El uso de CSS para los formularios es opcional.
3. Crea servicios para las consultas en carpetas separadas (ej. services/usuario.service.ts) para una
mejor comprensión del código.
4. Crea 2 carpetas separadas: una para el Backend (Node.js) y otra para el Frontend (Angular).
5. Puedes usar librerías de autenticación con JWT (por ejemplo, jsonwebtoken, @nestjs/jwt, passport) o implementarlo desde cero


## Propuesta Backend

<div align="center" style="display: flex;">
    <img src="./assets/backend.png" alt="Propuesta Backend" title="Propuesta Backend" width=800 height=400/>
</div>

### Consumos desde Postman

1. Login

URL: http://localhost:3000/auth/login

Tipo: POST

Request:

```
{
    "username" : "admin",
    "password" : "12345"
}
```

Response:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTc2NjA5MDY5NiwiZXhwIjoxNzY2MDk0Mjk2fQ.CqSMLqE95a-ah2_OHfOvbDwOqBQaIut5sx4sQjR2Sgw"
}
```

2. Registro usuario

URL: http://localhost:3000/auth/register

Tipo: POST

```
{
    "username" : "admin",
    "password" : "12345"
}
```

Response

```
{
    "message": "Usuario registrado",
    "user": {
        "id": 1,
        "username": "admin"
    }
}
```

Productos

1. Crear

URL: http://localhost:3000/productos

Tipo: POST

Request:

```
{
    "nombre": "Smart TV",
    "precio": "900000"
}
```

Response:

```
{
    "id": 9,
    "nombre": "Smart TV",
    "precio": "900000"
}
```

2. Consultar por id

URL: http://localhost:3000/productos/9

Tipo: GET

Response:

```
{
    "id": 9,
    "nombre": "Smart TV",
    "precio": "900000.00"
}
```

3. Actualizar

URL: http://localhost:3000/productos/2

Tipo: PUT

Request:

```
{
    "nombre": "Aspiradora",
    "precio": "220000"
}
```
Response:

```
{
    "id": "2",
    "nombre": "Aspiradora",
    "precio": "220000"
}
```

4. Eliminar

URL: http://localhost:3000/productos/1

Tipo: DELETE

Response:

```
{
    "message": "Producto eliminado"
}

```

5. Listar todos

URL: http://localhost:3000/productos

Tipo: GET

Response:

```
[
    {
        "id": 3,
        "nombre": "Aspiradora",
        "precio": "250000.00"
    },
    {
        "id": 4,
        "nombre": "Audifonos",
        "precio": "25000.00"
    },
    {
        "id": 5,
        "nombre": "Cargadores",
        "precio": "50000.00"
    },
    {
        "id": 6,
        "nombre": "Impresoras",
        "precio": "650000.00"
    },
    {
        "id": 8,
        "nombre": "Tablet",
        "precio": "200000.00"
    },
    {
        "id": 9,
        "nombre": "Smart TV",
        "precio": "900000.00"
    },
    {
        "id": 14,
        "nombre": "Parlante",
        "precio": "60000.00"
    }
]
```

## Propuesta Frontend

### Login

<div align="center" style="display: flex;">
     <img src="./assets/login.png" alt="Propuesta Frontend" title="Propuesta Frontend" width=800 height=400/>
</div>

### CRUD Productos

<div align="center" style="display: flex;">
     <img src="./assets/productos.png" alt="Propuesta Frontend" title="Propuesta Frontend" width=800 height=400/>
</div>