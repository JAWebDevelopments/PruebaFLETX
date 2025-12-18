class GetProductoById {
  constructor(productoRepository) {
    this.productoRepository = productoRepository;
  }

  async execute(id) {
    const producto = await this.productoRepository.findById(id);
    if (!producto) throw new Error('Producto no encontrado');
    return producto;
  }
}

module.exports = GetProductoById;