## AngularJS project template



### Author
--------------------------------------

- [Ariel Duarte](https://github.com/iarielduarte)


### Project description
--------------------------------------

The project uses:

- [npm](https://www.npmjs.com/) v3.4.0
- [Angular.js](https://angularjs.org/) v1.4.2
- [Bower](http://bower.io/) v1.6.8
- [Gulp.js](http://gulpjs.com/) v3.9.0
- [Bootstrap](http://getbootstrap.com/getting-started/) v3.0.3
- [Jasmine](http://jasmine.github.io/2.0/boot.html) v0.3.6
- [Karma](https://karma-runner.github.io/0.13/index.html) v0.13.10
- [Browsersync](https://www.browsersync.io/) v2.9.11

### Setup
--------------------------------------

##### 1. Install node.js+npm (generally you get `npm` when you install node)

```

https://nodejs.org/en/
```

##### 2. Install Bower

```

npm install -g bower
```

##### 3. Install Gulp

```

npm install -g gulp
```

### Run Project
--------------------------------------

##### 1. `cd` into this app's directory and run `npm install` to install all needed node packages.

```

npm install
```

All dependencies are defined in `package.json`. If you add a dependency in the future, just add it in `package.json` manually or include `--save` when you're installing a package and it will be written there. Ex. `npm install somecoolnewpackage --save`

##### 2. Install dependencies using bower

```

bower install
```


##### 3.1 Run Local (for the development environment)

```

gulp serve
```

```

Note:  The application automatically runs with the following url `http://localhost:3000/#/` and you don't need to restart the server for each code change, the project is using `BrowserSync`.
Run commands in the Terminal app if you’re on Mac, your shell in Linux, or cmder (preferably) / PowerShell / cmd.exe if you are on Windows with administrator permission.
```

##### 3.2 Run Build (for deploy in a server)

```

npm start
```

##### 3.3 Run Unit Tests

```

npm test
```
