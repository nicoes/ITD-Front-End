require.config({
    baseUrl: './js',
    paths: {
        'jquery'   : "vendor/jquery-1.9.1",
        'bootstrap': 'vendor/bootstrap',
        'csscontext': 'itd-lib/csscontext'
    },
    shim: {
        'bootstrap/bootstrap-slider': { deps: ['jquery'], exports: '$.fn.slider' },
        'bootstrap/bootstrap-affix': { deps: ['jquery'], exports: '$.fn.affix' },
        'bootstrap/bootstrap-alert': { deps: ['jquery'], exports: '$.fn.alert' },
        'bootstrap/bootstrap-button': { deps: ['jquery'], exports: '$.fn.button' },
        'bootstrap/bootstrap-carousel': { deps: ['jquery'], exports: '$.fn.carousel' },
        'bootstrap/bootstrap-collapse': { deps: ['jquery'], exports: '$.fn.collapse' },
        'bootstrap/bootstrap-dropdown': { deps: ['jquery'], exports: '$.fn.dropdown' },
        'bootstrap/bootstrap-modal': { deps: ['jquery'], exports: '$.fn.modal' },
        'bootstrap/bootstrap-scrollspy': { deps: ['jquery'], exports: '$.fn.scrollspy'        },
        'bootstrap/bootstrap-tab': { deps: ['jquery'], exports: '$.fn.tab' },
        'bootstrap/bootstrap-tooltip': { deps: ['jquery'], exports: '$.fn.tooltip' },
        'bootstrap/bootstrap-popover': { deps: ['jquery'], exports: '$.fn.popover' },
        'bootstrap/bootstrap-transition': { deps: ['jquery'], exports: '$.support.transition' },
        'bootstrap/bootstrap-typeahead': { deps: ['jquery'], exports: '$.fn.typeahead'  },
    }
});
