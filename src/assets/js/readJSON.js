'use strict';

// TODO #8 This function is unable to be imported in TypeScript files

const fs = require('fs');
const path = require('path');

const dir = './src/assets/js/data/character_data/';

function read() {
    let ls = fs.readdirSync (dir)
    .filter(name => path.extname(name) === '.json')
    .map(name => JSON.parse(fs.readFileSync(path.join(dir, name))))
    console.log(ls)
    console.log(ls[0])
    console.log(ls[1])
}
read()