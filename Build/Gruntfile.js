/* Grunt config for ITD projects
	
	to add: grunt-modernizr for js & (s)css	
	
*/

module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	    uglify: {
	      bootstrap: {
	        src: ['js/vendor/bootstrap/bootstrap.js'],
	        dest: 'dist/js/vendor/bootstrap/bootstrap.min.js'
	      }
	    },
		htmlhint: {
		    build: {
		        options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'style-disabled': true,
                    'doctype-first': true
		        },
		        src: ['*.html']
		    }
		},
		imageEmbed: {
		    dist: {
		      src: [ "css/itd.css" ],
		      dest: "dist/css/itd.css",
		      options: {
		        baseDir: "/../../../",
		        deleteAfterEncoding : false
		      }
		    }
		},
		modernizr: {
		    // [REQUIRED] Path to the build you're using for development.
		    "devFile" : "js/vendor/modernizr.js",
		
		    // [REQUIRED] Path to save out the built file.
		    "outputFile" : "dist/js/vendor/modernizr-min.js",
		
		    // Based on default settings on http://modernizr.com/download/
		    "extra" : {
		        "shiv" : true,
		        "printshiv" : false,
		        "load" : true,
		        "mq" : false,
		        "cssclasses" : true
		    },
		
		    // Based on default settings on http://modernizr.com/download/
		    "extensibility" : {
		        "addtest" : false,
		        "prefixed" : false,
		        "teststyles" : false,
		        "testprops" : false,
		        "testallprops" : false,
		        "hasevents" : false,
		        "prefixes" : false,
		        "domprefixes" : false
		    },
		
		    // By default, source is uglified before saving
		    "uglify" : true,
		
		    // Define any tests you want to implicitly include.
		    "tests" : [],
		
		    // By default, this task will crawl your project for references to Modernizr tests.
		    // Set to false to disable.
		    "parseFiles" : true,
		
		    // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
		    // You can override this by defining a "files" array below.
		    // "files" : [],
		
		    // When parseFiles = true, matchCommunityTests = true will attempt to
		    // match user-contributed tests.
		    "matchCommunityTests" : false,
		
		    // Have custom Modernizr tests? Add paths to their location here.
		    "customTests" : []
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "js/",
					mainConfigFile: "js/main.js",
					paths: {
						requireLib: "vendor/require"
					},
					name: "main",
					out: "dist/js/vendor/require-optimized.js",
					include: ["requireLib"]
				}
			}
		},
		responsive_images: {
			processImages: {
				options: {
				sizes: [{
				  	width: 320,
				  	quality: 0.7,
				},{
				  	width: 580,
				  	quality: 0.8,
				},{
				  	width: 800,
				  	quality: 0.9,
				},{
				  	width: 1024,
				  	quality: 0.95,
				}]
				},
				files: [{
					expand: true,
					src: ['blogs/*.jpg','showcase/*.jpg'],
					cwd: 'images/content/',
					dest: 'dist/images',
				}]
			}
		},
		concat: {
			options: {
		      separator: ';',
		    },
		    dist: {
		      src: ['dist/js/vendor/modernizr-min.js','dist/js/vendor/require-optimized.js'],
		      dest: 'dist/js/built.js'
		    }
		},
        watch: {
		    html: {
		        files: [ '*.html'],
		        tasks: ['buildhtml'],
		    },
		    scripts:
		    {
			    files: ['js/*.js','js/**/*.js'],
			    tasks: ['buildjs'],
		    }
		}
    });
    grunt.registerTask('default', []);
    
	// HTML distribution task.
    grunt.registerTask('buildhtml', ['htmlhint']);
    
	// HTML distribution task.
    grunt.registerTask('processimages', ['responsive_images:processImages']);
    
	// JS distribution task.
	grunt.registerTask('buildjs', ['modernizr','requirejs','concat']);
	
	// Distribute all task.
	grunt.registerTask('buildall', ['buildhtml','buildjs']);
    
    //Potentie, maar werkt nog niet goed: https://github.com/ehynds/grunt-image-embed/issues/22
    grunt.registerTask('base64',  ['imageEmbed']);
};