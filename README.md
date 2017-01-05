# GulpStarter <br/><br/>

The directions below, will help you get your production workflow in place. After the following steps, your Sass files should automatically (on save) process a "styles.css" file that will appear in the CSS folder. Each time an html, css, or js file is updated, the browser should automatically refresh. Once GULP is in place.

## Starter Pack for new projects for Gulp <br/><br/>

1. Must install Node and NPM, then Gulp to your local machine<br/>
2. Create your folder that your project will reside in<br/>
3. Copy files into that folder<br/>
4. Open terminal to the folder you just created<br/>
5. type "npm install" This will install all of the packets that are mentioned in the package.json file<br/>

Packets that will install to get started: sass, browserSync, useref, uglify, gulpIf, imagemin, cache, del and runSequence 

6. With terminal still launched from the project's root folder, type "Gulp". This will run the script we set to default in "gulpfile.js". It will constantly check to see if any files are updated, then automatically process any new sass as well as update the browser.
7. When your file is ready for production, you may type in the browser (still at your project's root folder) "Gulp build". This will minify all images, css and js, then copy all production ready files to a folder structure call "dist" that will be generated in your project's root.
