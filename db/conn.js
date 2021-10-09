const path = require('path');
const Database = require('./Database');

const db = new Database(path.join(__dirname, 'db.json'));

module.exports = db;