const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });