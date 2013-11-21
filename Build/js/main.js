//Define Modernizr
define('modernizr', [], Modernizr);

require.config({
    "paths": {
    	jquery:		"vendor/jquery-2.0.3.min",
        bootstrap:		"vendor/bootstrap/bootstrap"
    },
    "shim": {
        jquery: {exports: "$"}
    }
});

require(['jquery', 'bootstrap'], function() { });