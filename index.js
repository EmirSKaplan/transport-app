const Customer = require("./models/customer");
const Driver = require("./models/driver");
const Transporter = require("./models/transporter");
const db = require("./database/database");

const emir = db.findByName("customers", "betul");
console.log(emir);