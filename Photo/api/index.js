const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Express on Vercel!');
});

// It's safe to leave this for local dev; Vercel ignores the port on deployment
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app; // Required for Vercel serverless handler