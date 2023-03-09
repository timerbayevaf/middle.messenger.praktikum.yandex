const path = require('path');

const ROOT_DIR = path.join(__dirname, '../');

const DIST_DIR = path.join(ROOT_DIR, 'build');
const SERVER_DIR = path.join(ROOT_DIR, 'server');
const CLIENT_DIR = path.join(ROOT_DIR, 'client');

module.exports = { DIST_DIR, ROOT_DIR, SERVER_DIR, CLIENT_DIR };
