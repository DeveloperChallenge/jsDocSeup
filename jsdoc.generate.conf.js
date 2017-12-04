'use strict';

var filesForDocco = 'doco ./app2.js';


var exec = require('child_process').exec;

var createjsDoc = 'jsdoc ./app.js';

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
