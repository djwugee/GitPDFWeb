const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  // Serve your HTML interface here (e.g., res.sendFile).
  });

  app.get('/convert', async (req, res) => {
    const repoUrl = req.query.repoUrl;
      // Perform the conversion logic here.
        // Respond with the result.
        });

        app.listen(port, () => {
          console.log(`Server listening at http://localhost:${port}`);
          });
          