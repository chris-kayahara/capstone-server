const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

// Function to validate email inputs
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/; //eslint-disable-line
    return re.test(email);
}

module.exports = {
    getAll: async (_req, res) => {
        try {
            const users = await knex('users')
              .select(
                'id',
                'email',
                'password',
                'first_name',
                'last_name',
              )
            res.status(200).json(users);
          } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Unable to get users' });
          }
    },

    getById: async (req, res) => {
        const { id } = req.params;

        try {
            const user = await knex('users')
                .select(
                    'id',
                    'email',
                    'password',
                    'first_name',
                    'last_name',
                ).where({ id }).first();
                if (!user) {
                    res.status(404).json({ error: 'User not found' });
                } else {
                    res.status(200).json(user);
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Unable to get user' });
        }
    },

    create: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const first_name = req.body.firstName;
        const last_name = req.body.lastName;
    
        if (!validateEmail(email) || password.length < 8 || first_name.length < 2 || last_name < 1) {
          return res.status(400).send('Please make sure to fill out all fields as indicated');
        }
        const id = uuid();
        knex('users')
          .insert({ id, email, password, first_name, last_name })
          .then((data) => {
            const newUserURL = `/user/${data[0]}`;
            res.status(201).location(newUserURL).send(newUserURL);
          })
          .catch((err) => res.status(400).send(`Error creating user: ${err}`)); 
    },

    update: async (req, res) => {
        const { id } = req.params;
        const email = req.body.email;
        const password = req.body.password;
        const first_name = req.body.firstName;
        const last_name = req.body.lastName;

        try {
          const user = await knex('users').where({ id }).first();
          if (!user) {
            res.status(404).json({ error: 'User not found' });
          } else {
            await knex('users').where({ id }).update({ email, password, first_name, last_name });
            res.status(200).json({ id, email, password, first_name, last_name });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Unable to update user' });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
          const user = await knex('users').where({ id }).first();
          if (!user) {
            res.status(404).json({ error: 'User not found' });
          } else {
            await knex('users').where({ id }).del();
            res.status(204).send();
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Unable to delete user' });
        }
    },
}