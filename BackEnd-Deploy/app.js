var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const database = require("./SQL/connection");

const customerRouter = require("./SQL/Routes/customer-routes.js");
const orderRouter = require("./SQL/Routes/order-routes");
const productRouter = require("./SQL/Routes/product-routes");
const productConn = require("./SQL/Routes/products-conn-orders-routes");
const customerConn = require("./SQL/Routes/customer-conn-csr-routes");


var app = express();

var corsOptions = {
  origin: 'https://capstone-csr.azurewebsites.net'
};

app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/customers', customerRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', productRouter);
app.use("/api/products_connect_orders", productConn);
app.use("/api/customers_connect_csr", customerConn);
require("./SQL/Routes/auth-routes")(app);
require("./SQL/Routes/user-routes")(app);


(async function () {
  try {
    await database.connection.sync({
      logging: console.log,
      force: false,
    });
    console.log("Successful connection");
  } catch (err) {
    console.error("Database error:", err);
  }
})();
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
