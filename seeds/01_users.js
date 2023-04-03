/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
      {
        id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        email: 'kayahara.christopher@gmail.com',
        password: 'password123',
        first_name: 'Chris',
        last_name: 'Kayahara',
      },
      {
        id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        email: 'john.user@gmail.com',
        password: 'password456',
        first_name: 'John',
        last_name: 'User',
      },
    ]);
  };
  