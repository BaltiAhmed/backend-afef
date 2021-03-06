const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const utilisateurRoutes = require("./routes/utilisteur");
const allocationRoute = require("./routes/allocation");
const reclamationRoutes = require("./routes/reclamation");
const pensionCivileRoute = require("./routes/pensionCivile");
const capitalDecesRoutes = require("./routes/capitalDeces");
const pensionConjointRoute = require("./routes/pensionConjoint");
const pensionMiseEnRetraite = require("./routes/pensionretraite");
const pretPersonnelRoutes = require("./routes/pretPersonnel");
const pretUniversitaireRoutes = require("./routes/pretUniversitaire");
const prestationSoutien = require("./routes/prestationSoutien");
const pensionOrphelin = require("./routes/pensionOrphelin");
const attestationNonAffiliationroutes = require("./routes/attestation-non-affiliation");
const attestationAffiliation = require("./routes/attestation-affiliation");
const nonBenifisPret = require("./routes/non-benifis-pret");
const agenceRoutes = require("./routes/agence");
const NotificationRoutes = require("./routes/notification");

const httperror = require("./models/error");

const mongoose = require("mongoose");

app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/admin", adminRoutes);
app.use("/api/utilisateur", utilisateurRoutes);
app.use("/api/agence", agenceRoutes);
app.use("/api/allocation", allocationRoute);
app.use("/api/reclamation", reclamationRoutes);
app.use("/api/pensioncivile", pensionCivileRoute);
app.use("/api/capitalDeces", capitalDecesRoutes);
app.use("/api/pensionConjoint", pensionConjointRoute);
app.use("/api/pensionretraite", pensionMiseEnRetraite);
app.use("/api/pretPersonnel", pretPersonnelRoutes);
app.use("/api/pretUniversitaire", pretUniversitaireRoutes);
app.use("/api/prestationSoutien", prestationSoutien);
app.use("/api/pensionOrphelin", pensionOrphelin);
app.use("/api/attestationNonAffiliation", attestationNonAffiliationroutes);
app.use("/api/attestationAffiliation", attestationAffiliation);
app.use("/api/nonBenifisPret", nonBenifisPret);
app.use("/api/notification", NotificationRoutes);

app.use((req, res, next) => {
  const error = new httperror("could not find that page", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "an unknown error occurred " });
});

mongoose
  .connect(
    "mongodb+srv://afef2019:afef@cluster0.okais.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
