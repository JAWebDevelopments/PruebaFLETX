const bcrypt = require('bcryptjs');

class LoginUser {
  constructor(userRepository, jwtService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
  }

  async execute(username, password) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new Error('Usuario no encontrado');
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Contraseña incorrecta');
    const token = this.jwtService.generateToken({ id: user.id, username: user.username });
    return token;
  }
}

module.exports = LoginUser;