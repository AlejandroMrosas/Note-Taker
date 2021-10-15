const fs = require('fs');
const express = require('express');
const path = require('path');

const app = require('express');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Use apiRoutes
//app.use('/', Routes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});