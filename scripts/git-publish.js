'use strict'

var ghpages = require('gh-pages');
ghpages.publish('dist', {history: false}, function(err) { console.error(err); });