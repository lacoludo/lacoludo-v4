// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
    // directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // will output as web/build/lacoludo-javascript.js
    .addEntry(
        'lacoludo-javascript', [
            './assets/js/jquery-2.1.1.js',
            './assets/js/common.js',
            './assets/js/royal_preloader.min.js',
            './assets/js/retina-1.1.0.min.js',
            './assets/js/jquery.easing.js',
            './assets/js/header-anime.js',
            './assets/js/charming.min.js',
            './assets/js/anime.min.js',
            './assets/js/nav-anime.js'
        ]
    )

    // this creates a 'lacoludo-vendor.js' file with jQuery
    // these modules will *not* be included on each page anymore
    // .createSharedEntry(
    //   'lacoludo-vendor', [
    //     './assets/js/jquery-2.1.1.js',
    //     './assets/js/common.js',
    //     './assets/js/royal_preloader.min.js',
    //     './assets/js/retina-1.1.0.min.js',
    //     './assets/js/jquery.easing.js',
    //     './assets/js/header-anime.js',
    //     './assets/js/charming.min.js',
    //     './assets/js/anime.min.js',
    //   ]
    // )

    // will output as web/build/lacoludo-css.css + web/build/lacoludo-owl.css
    .addStyleEntry(
        'lacoludo-css', [
            './assets/css/base.css',
            './assets/css/skeleton.css',
            './assets/css/layout.css',
            './assets/css/font-awesome.css',
            './assets/css/retina.css',
        ]
    )
    .addStyleEntry(
        'lacoludo-css-owl', [
            './assets/css/owl.carousel.css',
            './assets/css/owl.transitions.css',
        ]
    )

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    // you can use this method to provide other common global variables,
    // such as '_' for the 'underscore' library
    // .autoProvideVariables({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery',
    // })

    .enableSourceMaps(!Encore.isProduction())

// create hashed filenames (e.g. app.abc123.css)
// .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
