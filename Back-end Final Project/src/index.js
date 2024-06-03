// The error handler must be registered before any other error middleware and after all controllers
//Sentry.setupExpressErrorHandler(app);

import express from 'express'
import bookingsRouter from '../routes/bookings.js'
import hostsRouter from '../routes/hosts.js'
import usersRouter from '../routes/users.js'
import reviewsRouter from '../routes/reviews.js'
import amenitiesRouter from '../routes/amenities.js'
import propertiesRouter from '../routes/properties.js'
import log from '../middleware/logMiddleware.js'
import loginRouter from '../routes/login.js'
import * as Sentry from "@sentry/node"

const app = express()
app.use(express.json())

app.use(log)

app.use('/users', usersRouter);
app.use('/reviews', reviewsRouter);
app.use('/bookings', bookingsRouter);
app.use('/hosts', hostsRouter);
app.use('/login', loginRouter);
app.use('/amenities', amenitiesRouter);
app.use('/properties', propertiesRouter)

app.get('/', (_req, res) => {
  res.send('Hello World!')

})

app.get("/debug-sentry", function mainHandler(_req, _res) {
  throw new Error("My first Sentry error!");
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
});


// IMPORTANT: Make sure to import `instrument.js` at the top of your file.
// If you're using ECMAScript Modules (ESM) syntax, use `import "./instrument.js";`
//require("./instrument.js");

//app.use('/instrument', instrumentRouter)
// All other imports below
// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
//const Sentry = require("@sentry/node");
//const express = require("express");

// All your controllers should live here

app.get("/", function rootHandler(_req, res) {
  res.end("Hello world!");
});


// Optional fallthrough error handler
app.use(function onError(_err, _req, res, _next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

//app.listen(3000);
