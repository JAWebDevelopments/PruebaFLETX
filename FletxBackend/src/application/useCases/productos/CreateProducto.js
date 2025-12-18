class CreateProducto {
  constructor(productoRepository) {
    this.productoRepository = productoRepository;
  }

  async execute(nombre, precio) {
    const producto = await this.productoRepository.save({ nombre, precio });
    return producto;
  }
}

module.exports = CreateProducto;