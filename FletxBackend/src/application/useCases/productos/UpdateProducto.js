class UpdateProducto {
  constructor(productoRepository) {
    this.productoRepository = productoRepository;
  }

  async execute(id, nombre, precio) {
    const producto = { id, nombre, precio };
    const updated = await this.productoRepository.update(producto);
    if (!updated) throw new Error('Producto no encontrado');
    return producto;
  }
}

module.exports = UpdateProducto;