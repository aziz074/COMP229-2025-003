var express = require('express');
var cors = require('cors');
var createError = require('http-errors');
var logger = require('morgan');

var configDb = require('./config/db');
const { admin } = require('./config/firebaseAdmin.js'); // <-- Correct import

var indexRouter = require('./app/routers/index.js');
var userRouter = require('./app/routers/users.js');
var contactRouter = require('./app/routers/contact.js');
var inventoryRouter = require('./app/routers/inventory.js');
const projectRoutes = require('./app/routers/projects');
const serviceRoutes = require('./app/routers/services');

var app = express();

// INIT
app.use(cors());
configDb(); // OK

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/', indexRouter);
app.use('/api/users', userRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/inventory', inventoryRouter);
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);

// ERROR HANDLERS
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    success: false,
    message: err.message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

