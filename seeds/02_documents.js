/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('documents').del();
    await knex('documents').insert([
      {
        id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
        user_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        title: 'Chicago Restaurants',
        description:
          'A collection of restaurants that we visited in October 2022. The list features a variety of cuisines within the downtown core. I would recommend each and every one!',
      },
    ]);
  };
  