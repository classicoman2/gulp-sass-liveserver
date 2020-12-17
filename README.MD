# gulp-sass-liveserver

Un entorn de desenvolupament basat en **Gulp 4.0.2** que integra:

- Compilador Sass/SCSS
- Live Server per a poder fer canvis en temps real
- Bootstrap integrat amb npm

1- Sass/SCSS converter with **gulp-sass** package

2- Live Server that reloades on changes in the *.html, *scss or *.js files using **browsersync**

    npm install gulp gulp-sass browser-sync --save-dev

3- Bootstrap 4 with Theming easily integrated (change predefined vars., themes & load only the scss files you need). Needs:

    npm install bootstrap --save-dev

## Per iniciar la tasca,

    gulp watch

## Webgraphy

- [Setting up Gulp 4 for Bootstrap, SASS, and BrowserSync](https://medium.com/swlh/setting-up-gulp-4-0-2-for-bootstrap-sass-and-browsersync-7917f5f5d2c5) - I had to change the routes for the .html and .js watch task
- [Gulp for Beginners (CSS-Tricks)](https://css-tricks.com/gulp-for-beginners) - Good intro to Gulp but **Watch!!** it's outdated, version <4.0.0
- [Bootstrap theming tutorial](https://getbootstrap.com/docs/4.1/getting-started/theming/)


Classicoman2, 2020