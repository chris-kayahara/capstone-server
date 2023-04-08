const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');

const secretKey = "58yuht4jrgkv9sdf8uht";

module.exports = {
    getByUser: async (req, res) => {
        try {
            const { sort_by = 'updated_at', order_by = 'dec' } = req.query;
            const documents = await knex('documents')
                .select(
                    'documents.id',
                    'documents.user_id',
                    'documents.title',
                    'documents.description',
                    'documents.updated_at',
                ).where({ user_id: req.params.userId }).orderBy(sort_by, order_by);
                if (!documents) {
                    res.status(404).json({ error: 'Documents not found' });
                } else {
                    res.status(200).json(documents);
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Unable to get documents" });
        }
    },

    getById: async (req, res) => {
        try {
            const document = await knex('documents')
                .select(
                    'id',
                    'user_id',
                    'title',
                    'description',
                    'updated_at',
                ).where({ id: req.params.id }).first();
                if (!document) {
                    res.status(404).json({ error: 'Document not found' });
                } else {
                    res.status(200).json(document);
                }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Unable to get document" });
        }
    },

    create: async (req, res) => {

        // If authorization header does not exist...
        if (!req.headers.authorization) {
            res.status(401);
            res.json({
                error: "Login required"
            });
        }
        // Get token portion of header
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];

        const id = req.body.document_id;
        const title = req.body.document_title;
        const description = req.body.document_description;

        try {
            // Try verifying & decoding JWT
            const decoded = jwt.verify(token, secretKey);
            const user_id = decoded.id;

            const document = await knex('documents')
                .insert({ id, user_id, title, description })
                .then((data) => {
                    const newDocumentURL = `/document/${id}`;
                    res.status(201).location(newDocumentURL).send(id);
        })
        } catch (err) {
            res.status(400).send(`Error creating Document: ${err}`)
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        const title = req.body.title;
        const description = req.body.description;

        try {
          const document = await knex('documents').where({ id }).first();
          if (!document) {
            res.status(404).json({ error: 'Document not found' });
          } else {
            await knex('documents').where({ id }).update({ title, description });
            res.status(200).json({ id, title, description });
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Unable to update document' });
        }
    },
    
    delete: async (req, res) => {
        const { id } = req.params;
        try {
          const document = await knex('documents').where({ id }).first();
          if (!document) {
            res.status(404).json({ error: 'Document not found' });
          } else {
            await knex('documents').where({ id }).del();
            res.status(204).send();
          }
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Unable to delete document' });
        }
    },
}