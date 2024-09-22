const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle JSON data
app.use(express.json());

// Define a test route
app.get('/api', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});