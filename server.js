const express = require("express");
const { engine } = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up Handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

// Import routes and give the server access to them
const routes = require("./controllers/burgersController");
app.use(routes);

// Start our server so that it can begin listening to client requests
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
