'use strict';

const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderResume() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/resume/.');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/resume/.');
    
    sh.cp('-R', sourcePath, destPath)
};