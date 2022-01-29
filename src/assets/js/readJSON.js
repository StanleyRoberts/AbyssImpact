'use strict';

const fs = require('fs');
const path = require('path');

const dir = './data';

function read() {
    return fs.readdirSync (dir)
    .filter(name => path.extname(name) === '.json')
    .map(name => require(path.join(dir, name)))
}