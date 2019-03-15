const arrayTiberiumHelper = require("./sections/array");
const valuesTiberiumHelper = require("./sections/values");

const tf = {
  array: arrayTiberiumHelper,
  value: valuesTiberiumHelper
};

module.exports = { tf, arrayTiberiumHelper, valuesTiberiumHelper };
