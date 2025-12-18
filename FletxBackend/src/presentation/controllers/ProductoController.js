const CreateProducto = require('../../application/useCases/productos/CreateProducto');
const GetProductos = require('../../application/useCases/productos/GetProductos');
const GetProductoById = require('../../application/useCases/productos/GetProductoById');
const UpdateProducto = require('../../application/useCases/productos/UpdateProducto');
const DeleteProducto = require('../../application/useCases/productos/DeleteProducto');
const MySQLProductoRepository = require('../../infrastructure/database/repositories/MySQLProductoRepository');

const productoRepository = new MySQLProductoRepository();

class ProductoController {
  static async create(req, res) {
    try {
      const { nombre, precio } = req.body;
      const createProducto = new CreateProducto(productoRepository);
      const producto = await createProducto.execute(nombre, precio);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const getProductos = new GetProductos(productoRepository);
      const productos = await getProductos.execute();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const getProductoById = new GetProductoById(productoRepository);
      const producto = await getProductoById.execute(id);
      res.json(producto);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nombre, precio } = req.body;
      const updateProducto = new UpdateProducto(productoRepository);
      const producto = await updateProducto.execute(id, nombre, precio);
      res.json(producto);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteProducto = new DeleteProducto(productoRepository);
      await deleteProducto.execute(id);
      res.json({ message: 'Producto eliminado' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = ProductoController;