/**
 * Constantes globales de la aplicación Fletx
 * Centraliza URLs, mensajes, configuraciones y textos de la interfaz
 */

// ========== API ENDPOINTS ==========
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh'
  },
  PRODUCTS: {
    BASE: '/productos',
    CREATE: '/productos',
    UPDATE: '/productos',
    DELETE: '/productos',
    GET_BY_ID: '/productos'
  }
} as const;

// ========== CONFIGURACIONES ==========
export const APP_CONFIG = {
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [5, 10, 25, 50, 100],
    DEFAULT_PAGE_INDEX: 0
  },
  NOTIFICATIONS: {
    SUCCESS_DURATION: 3000,
    ERROR_DURATION: 5000,
    WARNING_DURATION: 4000
  },
  VALIDATION: {
    MIN_PASSWORD_LENGTH: 6,
    MAX_PRODUCT_NAME_LENGTH: 100,
    MAX_PRODUCT_DESCRIPTION_LENGTH: 500
  }
} as const;

// ========== MENSAJES DE ÉXITO ==========
export const SUCCESS_MESSAGES = {
  AUTH: {
    LOGIN_SUCCESS: 'Inicio de sesión exitoso',
    REGISTER_SUCCESS: 'Usuario creado exitosamente',
    LOGOUT_SUCCESS: 'Sesión cerrada exitosamente'
  },
  PRODUCTS: {
    CREATE_SUCCESS: 'Producto creado exitosamente',
    UPDATE_SUCCESS: 'Producto actualizado exitosamente',
    DELETE_SUCCESS: 'Producto eliminado exitosamente'
  },
  GENERAL: {
    OPERATION_SUCCESS: 'Operación realizada exitosamente',
    DATA_SAVED: 'Datos guardados correctamente'
  }
} as const;

// ========== MENSAJES DE ERROR ==========
export const ERROR_MESSAGES = {
  AUTH: {
    LOGIN_ERROR: 'Error al iniciar sesión. Verifique sus credenciales.',
    REGISTER_ERROR: 'Error al crear el usuario. Verifique los datos e intente nuevamente.',
    INVALID_CREDENTIALS: 'Credenciales inválidas',
    SESSION_EXPIRED: 'Su sesión ha expirado. Por favor, inicie sesión nuevamente.',
    UNAUTHORIZED: 'No tiene permisos para realizar esta acción.'
  },
  PRODUCTS: {
    LOAD_ERROR: 'Error al cargar los productos. Intente recargar la página.',
    CREATE_ERROR: 'Error al crear el producto. Verifique los datos e intente nuevamente.',
    UPDATE_ERROR: 'Error al actualizar el producto. Verifique los datos e intente nuevamente.',
    DELETE_ERROR: 'Error al eliminar el producto. Intente nuevamente.',
    NOT_FOUND: 'Producto no encontrado.',
    VALIDATION_ERROR: 'Los datos del producto no son válidos.'
  },
  NETWORK: {
    CONNECTION_ERROR: 'Error de conexión. Verifique su conexión a internet.',
    SERVER_ERROR: 'Error del servidor. Intente nuevamente más tarde.',
    TIMEOUT_ERROR: 'La solicitud tardó demasiado tiempo. Intente nuevamente.'
  },
  GENERAL: {
    UNEXPECTED_ERROR: 'Ha ocurrido un error inesperado. Intente nuevamente.',
    VALIDATION_ERROR: 'Los datos proporcionados no son válidos.',
    REQUIRED_FIELD: 'Este campo es obligatorio.'
  }
} as const;

// ========== TEXTOS DE LA INTERFAZ ==========
export const UI_TEXTS = {
  APP: {
    TITLE: 'Fletx',
    SUBTITLE: 'Gestión de Productos'
  },
  NAVIGATION: {
    PRODUCTS: 'Productos',
    LOGIN: 'Iniciar Sesión',
    LOGOUT: 'Cerrar Sesión',
    REGISTER: 'Crear Cuenta'
  },
  PRODUCTS: {
    TITLE: 'Productos',
    CREATE_BUTTON: 'Crear Producto',
    EDIT_BUTTON: 'Editar',
    DELETE_BUTTON: 'Eliminar',
    SEARCH_PLACEHOLDER: 'Buscar por nombre, descripción...',
    SEARCH_LABEL: 'Buscar productos',
    NO_PRODUCTS: 'No se encontraron productos',
    LOADING: 'Cargando productos...',
    CONFIRM_DELETE_TITLE: 'Confirmar eliminación',
    CONFIRM_DELETE_MESSAGE: '¿Está seguro de que desea eliminar este producto?',
    TABLE_HEADERS: {
      ID: 'ID',
      NAME: 'Nombre',
      PRICE: 'Precio',
      DESCRIPTION: 'Descripción',
      CATEGORY: 'Categoría',
      ACTIONS: 'Acciones'
    }
  },
  AUTH: {
    LOGIN_TITLE: 'Iniciar Sesión',
    REGISTER_TITLE: 'Crear Cuenta',
    EMAIL_LABEL: 'Correo electrónico',
    EMAIL_PLACEHOLDER: 'Ingrese su correo electrónico',
    PASSWORD_LABEL: 'Contraseña',
    PASSWORD_PLACEHOLDER: 'Ingrese su contraseña',
    CONFIRM_PASSWORD_LABEL: 'Confirmar contraseña',
    CONFIRM_PASSWORD_PLACEHOLDER: 'Confirme su contraseña',
    NAME_LABEL: 'Nombre completo',
    NAME_PLACEHOLDER: 'Ingrese su nombre completo',
    LOGIN_BUTTON: 'Iniciar Sesión',
    REGISTER_BUTTON: 'Crear Cuenta',
    FORGOT_PASSWORD: '¿Olvidó su contraseña?',
    REMEMBER_ME: 'Recordarme',
    NO_ACCOUNT: '¿No tiene cuenta?',
    HAS_ACCOUNT: '¿Ya tiene cuenta?'
  },
  FORM: {
    SAVE: 'Guardar',
    CANCEL: 'Cancelar',
    CLOSE: 'Cerrar',
    CONFIRM: 'Confirmar',
    YES: 'Sí',
    NO: 'No',
    LOADING: 'Cargando...'
  },
  VALIDATION: {
    REQUIRED: 'Este campo es obligatorio',
    EMAIL_INVALID: 'Ingrese un correo electrónico válido',
    PASSWORD_MIN_LENGTH: `La contraseña debe tener al menos ${APP_CONFIG.VALIDATION.MIN_PASSWORD_LENGTH} caracteres`,
    PASSWORD_MISMATCH: 'Las contraseñas no coinciden',
    MAX_LENGTH: (field: string, max: number) => `${field} no puede exceder ${max} caracteres`
  }
} as const;

// ========== CONSTANTES DE CATEGORÍAS ==========
export const PRODUCT_CATEGORIES = [
  { value: 'electronica', label: 'Electrónica' },
  { value: 'ropa', label: 'Ropa y Accesorios' },
  { value: 'hogar', label: 'Hogar y Jardín' },
  { value: 'deportes', label: 'Deportes y Recreación' },
  { value: 'libros', label: 'Libros y Educación' },
  { value: 'salud', label: 'Salud y Belleza' },
  { value: 'automotriz', label: 'Automotriz' },
  { value: 'otros', label: 'Otros' }
] as const;

// ========== CONSTANTES DE ROLES Y PERMISOS ==========
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
} as const;

export const PERMISSIONS = {
  CREATE_PRODUCT: 'create_product',
  EDIT_PRODUCT: 'edit_product',
  DELETE_PRODUCT: 'delete_product',
  VIEW_PRODUCTS: 'view_products'
} as const;

// ========== CONSTANTES DE LOCAL STORAGE ==========
export const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER: 'user_data',
  THEME: 'app_theme',
  LANGUAGE: 'app_language'
} as const;

// ========== CONSTANTES DE RUTAS ==========
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PRODUCTS: '/products',
  PRODUCT_CREATE: '/products/create',
  PRODUCT_EDIT: '/products/edit'
} as const;

// ========== CONSTANTES DE HTTP ==========
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
} as const;

// ========== CONSTANTES DE REGEX ==========
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/,
  PHONE: /^\+?[\d\s\-\(\)]+$/
} as const;