## How to setup jsdoc and docco with javsacript project ? 

*There are the official documantation to start with jsdoc and docct*

__But i am creating a sample to installation , setu, run using npm or manually__


## jsDoc 

1. open the command line in your current project
2. init npm and fille the data as per your project.
3. Once package.json file created. I means npm setuo properly
4. now run the ``npm install --save-dev jsdoc``. I will let you to install jsDoc 
5. make sure it saved to your package.json file
6. Now, open your projct javascript file and start commenting 


### commenting 
Please open or clone my project and please open the app.js file.
Now, you can see that hwo i have commenting the project for documantation.


#### generating documantation.
in your command line run the following command 

jsdoc your/file/path
it will genarate the out folder in your project.

*Example: * ``jsdoc app.js``

*Demo:* if built is successful then you can see out filder in your project. 
please open the dir. and run the index.htl file in your broeser.

For mor details, please visite link: https://www.npmjs.com/package/gulp-ngdocs



## DOCCO

1.  now run the ``npm install -save-dev doco``. I will let you to install doco 
1. make sure it saved to your package.json file
3. Now, open your projct javascript file and you can start commenting 

### commenting
Please open the ``app2.js`` file from my project for commenting.

### generate the documantation
in the command line run the following code

``doco your/file/path``
*example :* ``doco app2.js``

.it will generate the docs dir. in your project.
And you can see the documantation after running index.html file from docs filder.

Please open the ``app2.js`` file file for documeatation. 
Visite link : https://www.npmjs.com/package/doco


## run using npm 

*Setps*
1. Once you install and setup the jsdoc and doco. You can setup for npm setup.
2. create a file `jsdoc.generate.conf.js`


paste the following scripts 

```
var filesForDocco = 'docco ./app.js ';

// if you have multiple file then plese use + and start new line 

// example 
//var createjsDoc = 'jsdoc ./src/app.js ' +
//  './src/modules/config/*.js ';


var exec = require('child_process').exec;
// var createDoccoDocs = filesForDocco;
var createjsDoc = 'jsdoc ./src/app.js ';

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

```


now, open the package.json file 
in the script section 

```
"scripts": {
        
  },
```

Please paste the folowing line 
``"generate-docs": "DEBUG=* node jsdoc.generate.conf.js"``

now, we ca see

```
"scripts" :{
    "generate-docs": "DEBUG=* node jsdoc.generate.conf.js"
}
```

Great works!

everything is setup properly.

now delete the docs an dout filder you have already in your project. And run the following command in  you comand line 

``npm run generate-docs`` 
it will generate both the docs and out folder for documantation.


![Alt text](https://2.bp.blogspot.com/-DZ97o1A9tzI/U_3E7Gz5D-I/AAAAAAAAAK4/ZsdyFNslHfE-yK3RafWONiLwGwErVO6EACPcB/w1200-h630-p-k-no-nu/all-the-best-scraps.gif "All the best")


__please comment for any suggestion__