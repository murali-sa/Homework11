// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================
console.log("html routes js");
module.exports = function(app) {
  console.log("html routes js - inside module exports");
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
/*
  app.get("/tables", function(req, res) {
    console.log("html routes js app get tables-calling tables html");
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });
*/
  app.get("/notes", function(req, res) {
    console.log("html routes js app get reserve-calling notes html");
    res.sendFile(path.join(__dirname, "../public/reserve-orig.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    console.log("html routes js app get default-calling index html");
    res.sendFile(path.join(__dirname, "../public/tables-orig.html"));
  });
};
