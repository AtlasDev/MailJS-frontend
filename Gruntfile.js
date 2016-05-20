module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks("grunt-modernizr");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            fonts: {
                expand: true,
                cwd: 'src/fonts/',
                src: '**',
                dest: 'dist/fonts'
            },
        },
        less: {
            build: {
                options: {
                    plugins: [
                        new (require('less-plugin-clean-css'))()
                    ]
                },
                files: {
                  './dist/style.min.css': './src/less/**/*{.less,.css}'
                }
            }
        },
        jshint: {
            options: {
                esversion: 6,
                curly: true
            },
            all: [
                'src/js/**/*.js',
                '!src/js/external/*.js'
            ],
        },
        uglify: {
            public: {
                files: {
                    'dist/app.min.js': 'dist/app.min.js'
                }
            }
        },
        concat: {
            public: {
                files: {
                    'dist/app.min.js': [
                        'src/js/external/angular.js',
	                    'src/js/external/modernizr.js',
                        'src/js/**/*.js'
                    ]
                }
            }
        },
        watch: {
            all: {
                files: [
                    '**/*',
                    '!dist/*'
                ],
                tasks: [
                    'jshint:all',
                    'less:build',
                    'concat:public'
                ]
            },
        },
		modernizr: {
			build: {
				"crawl": false,
				"customTests": [],
				"dest": "src/js/external/modernizr.js",
				"tests": [
					"cookies",
					"cryptography",
					"fullscreen",
					"json",
					"notification",
					"websockets",
					"mediaqueries",
					"rgba",
					"csstransforms",
					"csstransitions",
					"cssvhunit",
					"cssvwunit",
					"es5",
					"promises",
					"filesystem",
					"xhrresponsetypejson",
					"datauri",
					[
						"atobbtoa"
					]
				],
				"options": [
					"setClasses"
				],
				"uglify": false
			}
		}
    });

    grunt.registerTask('dev', 'watch:all');
    grunt.registerTask('hint', [
        'jshint:all'
    ]);
    grunt.registerTask('build', [
		'modernizr:build',
        'jshint:all',
        'less:build',
        'concat:public',
        'uglify:public'
    ]);
};
