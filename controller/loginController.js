const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');

const secretKey = "58yuht4jrgkv9sdf8uht";

const getUsers = async () => {
    try {
        const users = await knex('users')
        .select(
          'id',
          'email',
          'password',
        )
      return users;
    } catch {
        console.log("Could not get users");
    }           
};

module.exports = {
    login: async (req, res) => {
        const users = await getUsers();

        const email = req.body.email;
        const password = req.body.password;

        const user = users.find(user => user.email === email);

        // If the user exists...
        if (user) {
            // Check if the password matches
            if (user.password === password) {
                // Login successful
                const token = jwt.sign({email: email, id: user.id}, secretKey);
                res.json({
                    token: token
                });
            } else {
                // Incorrect password
                res.status(401);
                res.json({
                    error: "Password is incorrect."
                });
            }
        } else {
            // Username doesn't exist in our list of users
            res.status(404);
            res.json({
                error: "User not found"
            });
        }
    }
}