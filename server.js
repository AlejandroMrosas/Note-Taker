const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app =express();
require('./routes/apiRoutes');
require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Website server now on port ${PORT}!`);
});