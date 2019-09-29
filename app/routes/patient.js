const express = require("express");
const PatientCtrl = require("./../controlers/PatientControler");
const { validateCompleteFields } = require("./../middleware/patientMiddleware");

const Router = express.Router();

Router.get("/", PatientCtrl.index) //listar pacientes
    .post("/", PatientCtrl.create) //
    .get("/:key/:value", validateCompleteFields, PatientCtrl.show)
    .put("/:key/:value", validateCompleteFields, PatientCtrl.update)
    .delete("/:key/:value", validateCompleteFields, PatientCtrl.remove);

module.exports = Router;