/**
 * Created by rishabhkhanna on 26/07/18.
 */
/**
 * Created by rishabhkhanna on 26/07/18.
 */
const route = require('express').Router();

route.use("/student", require("./student"));
route.use("/marks", require("./marks"));
route.use("/subject", require("./subject"));
route.use("/exams", require("./exams"));

module.exports = route;

