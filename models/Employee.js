var mongoose = require("mongoose");

var EmplyeeSchema = new mongoose.Schema({
  name: String,
  address: string,
  position: String,
  salary: Number,
  udated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', EmployeeSchema);