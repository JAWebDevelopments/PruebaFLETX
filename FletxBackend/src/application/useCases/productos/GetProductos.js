class GetProductos {
  constructor(productoRepository) {
    this.productoRepository = productoRepository;
  }

  async execute() {
    return await this.productoRepository.findAll();
  }
}

module.exports = GetProductos;