const RegisterUser = require('../../application/useCases/auth/RegisterUser');
const LoginUser = require('../../application/useCases/auth/LoginUser');
const MySQLUserRepository = require('../../infrastructure/database/repositories/MySQLUserRepository');
const JWTService = require('../../infrastructure/security/JWTService');

const userRepository = new MySQLUserRepository();
const jwtService = new JWTService();

class AuthController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;
      const registerUser = new RegisterUser(userRepository);
      const user = await registerUser.execute(username, password);
      res.status(201).json({ message: 'Usuario registrado', user: { id: user.id, username: user.username } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const loginUser = new LoginUser(userRepository, jwtService);
      const token = await loginUser.execute(username, password);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AuthController;