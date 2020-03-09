function log(message) {
  console.log("this module exports", exports);
  console.log("this module filename", __filename);
  console.log("this module dirname", __dirname);
  console.log(`logged message: ${message}`);
}
module.exports = log;
