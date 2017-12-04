'use strict';

var filesForDocco = 'docco ./src/app.js ' +
    './src/modules/config/*.js ' +
    './src/modules/core/directives/*.directive.js ' +
    './src/modules/core/filters/*.filter.js ' +
    './src/modules/core/services/*.service.js ' +
    './src/app.controller.js ' +
    './src/modules/**/*.js'


var exec = require('child_process').exec;
// var createDoccoDocs = filesForDocco;
var createjsDoc = 'jsdoc ./src/app.js ' +
    './src/modules/config/*.js ' +
    './src/modules/core/directives/*.directive.js ' +
    './src/modules/core/filters/*.filter.js ' +
    './src/modules/core/services/*.service.js ' +
    './src/app.routes.js ' +
    './src/modules/**/*.js';

var debug = require('debug'),
    error = debug('error'),
    log = debug('log-app');

exec(filesForDocco, function(err, stdout, stderr) {
    if (err) {
        return error('DOCCO: Please check file loading. it might be files are not loading correctly');
    }
    log('Create');
    exec(createjsDoc, function(err, stdout, stderr) {
        if (err) {
            return error('JSDOC: Please check file loading. it might be files are not loading correctly');
        }
        log('Create');
    });
});
