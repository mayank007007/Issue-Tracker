// connection to database
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://mayanksaraswat77:WLC14CHVVGXn49Et@issue-tracker.bhysxdn.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function () {
    console.log("Connected to Database :: mongodb");
});

module.exports = db;
//WLC14CHVVGXn49Et