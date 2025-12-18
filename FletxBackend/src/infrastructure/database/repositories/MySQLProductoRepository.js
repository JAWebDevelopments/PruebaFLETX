const ProductoRepository = require('../../../domain/repositories/ProductoRepository');
const Producto = require('../../../domain/entities/Producto');
const connection = require('../mysqlConnection');

class MySQLProductoRepository extends ProductoRepository {
  async save(producto) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [producto.nombre, producto.precio], (err, result) => {
        if (err) reject(err);
        else resolve(new Producto(result.insertId, producto.nombre, producto.precio));
      });
    });
  }

  async findAll() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM productos', (err, results) => {
        if (err) reject(err);
        else resolve(results.map(row => new Producto(row.id, row.nombre, row.precio)));
      });
    });
  }

  async findById(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results.length > 0 ? new Producto(results[0].id, results[0].nombre, results[0].precio) : null);
      });
    });
  }

  async update(producto) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [producto.nombre, producto.precio, producto.id], (err, result) => {
        if (err) reject(err);
        else resolve(result.affectedRows > 0);
      });
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM productos WHERE id = ?', [id], (err, result) => {
        if (err) reject(err);
        else resolve(result.affectedRows > 0);
      });
    });
  }
}

module.exports = MySQLProductoRepository;