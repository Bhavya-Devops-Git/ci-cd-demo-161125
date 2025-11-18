const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from CI/CD demo!' });
});

if (require.main === module) {
/* ADDED: /health endpoint for Docker healthcheck */
app.get(\"/health\", (req, res) => {
  res.status(200).json({ status: \"ok\" });
});
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
