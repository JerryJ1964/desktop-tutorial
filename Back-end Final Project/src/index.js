// The error handler must be registered before any other error middleware and after all controllers
import express from "express";
import * as Sentry from "@sentry/node";
import "dotenv/config";

import bookingsRouter from "./routes/bookings.js";
import hostsRouter from "./routes/hosts.js";
import usersRouter from "./routes/users.js";
import reviewsRouter from "./routes/reviews.js";
import amenitiesRouter from "./routes/amenities.js";
import propertiesRouter from "./routes/properties.js";
import log from "./middleware/logMiddleware.js";
import loginRouter from "./routes/login.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({
      tracing: true,
    }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({
      app,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!,
});

// Trace incoming requests
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// Global middleware
app.use(express.json());
app.use(log);

// Resource routes
app.use("/users", usersRouter);
app.use("/reviews", reviewsRouter);
app.use("/bookings", bookingsRouter);
app.use("/hosts", hostsRouter);
app.use("/amenities", amenitiesRouter);
app.use("/properties", propertiesRouter);

// Login
app.use("/login", loginRouter);

// Trace errors
// The error handler must be registered before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Error handling
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
