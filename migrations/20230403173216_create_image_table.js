/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('images', (table) => {
        table.uuid('id').primary();
        table
            .uuid('document_id')
            .references('documents.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('image_url').notNullable();
        table.integer('image_order').notNullable();
        table.string('image_title').notNullable();
        table.string('image_description').notNullable();
        table.string('image_lat').notNullable();
        table.string('image_long').notNullable();
        table.string('image_date').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('images');
};
