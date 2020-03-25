const express = require("express");
const connection = require("./database/connection");

const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/ongs", async (req, res) => {
  const ongs = await connection("ongs").select("*");

  return res.json(ongs);
});

routes.post("/sessions", SessionController.store);

routes.post("/ongs", OngController.store);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
