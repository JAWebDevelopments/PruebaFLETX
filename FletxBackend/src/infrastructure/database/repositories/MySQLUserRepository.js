const UserRepository = require('../../../domain/repositories/UserRepository');
const User = require('../../../domain/entities/User');
const connection = require('../mysqlConnection');

class MySQLUserRepository extends UserRepository {
  async save(user) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, user.password], (err, result) => {
        if (err) reject(err);
        else resolve(new User(result.insertId, user.username, user.password));
      });
    });
  }

  async findByUsername(username) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) reject(err);
        else resolve(results.length > 0 ? new User(results[0].id, results[0].username, results[0].password) : null);
      });
    });
  }

  async findById(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results.length > 0 ? new User(results[0].id, results[0].username, results[0].password) : null);
      });
    });
  }
}

module.exports = MySQLUserRepository;