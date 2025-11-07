const express = require('express');
const healthRoutes = require('./routes/healthRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use('/health', healthRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});