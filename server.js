const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/dist/TripAdvisor'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/TripAdvisor', 'index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);