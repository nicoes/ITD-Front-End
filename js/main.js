//Define Modernizr
define('modernizr', [], Modernizr);

require.config({
    "paths": {

    	jquery:		"vendor/jquery-2.0.3.min",
        'bootstrap': "vendor/bootstrap/bootstrap",
    },
    "shim": {
        'bootstrap/bootstrap-slider': { deps: ['jquery'], exports: '$.fn.slider' }, 
        'bootstrap/bootstrap-affix': { deps: ['jquery'], exports: '$.fn.affix' },
        'bootstrap/bootstrap-alert': { deps: ['jquery'], exports: '$.fn.alert' },
        'bootstrap/bootstrap-button': { deps: ['jquery'], exports: '$.fn.button' },
        'bootstrap/bootstrap-carousel': { deps: ['jquery'], exports: '$.fn.carousel' },
        'bootstrap/bootstrap-collapse': { deps: ['jquery'], exports: '$.fn.collapse' },
        'bootstrap/bootstrap-dropdown': { deps: ['jquery'], exports: '$.fn.dropdown' },
        'bootstrap/bootstrap-modal': { deps: ['jquery'], exports: '$.fn.modal' },
        'bootstrap/bootstrap-popover': { deps: ['jquery'], exports: '$.fn.popover' },
        'bootstrap/bootstrap-scrollspy': { deps: ['jquery'], exports: '$.fn.scrollspy'},
        'bootstrap/bootstrap-tab': { deps: ['jquery'], exports: '$.fn.tab' },
        'bootstrap/bootstrap-tooltip': { deps: ['jquery'], exports: '$.fn.tooltip' },
        'bootstrap/bootstrap-transition': { deps: ['jquery'], exports: '$.support.transition' },
        'bootstrap/bootstrap-typeahead': { deps: ['jquery'], exports: '$.fn.typeahead'  },
        jquery: {exports: "$"}
    }
});

require(['jquery', 'bootstrap'], function() { });