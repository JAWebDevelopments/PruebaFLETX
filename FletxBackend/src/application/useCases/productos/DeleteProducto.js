class DeleteProducto {
  constructor(productoRepository) {
    this.productoRepository = productoRepository;
  }

  async execute(id) {
    const deleted = await this.productoRepository.delete(id);
    if (!deleted) throw new Error('Producto no encontrado');
    return true;
  }
}

module.exports = DeleteProducto;