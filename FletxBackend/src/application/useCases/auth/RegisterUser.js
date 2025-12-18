const bcrypt = require('bcryptjs');

class RegisterUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.save({ username, password: hashedPassword });
    return user;
  }
}

module.exports = RegisterUser;