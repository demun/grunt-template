module.exports = function(grunt) {

    'use strict';

    // 자동으로 grunt 태스크를 로드합니다. grunt.loadNpmTasks 를 생략한다.
    require('load-grunt-tasks')(grunt);

    // 작업시간 표시
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        ' ======================================================================== \n' +
        ' * Project   : <%= pkg.name %>(<%= pkg.description %>) v<%= pkg.version %>\n' +
        ' * Publisher : <%= pkg.make.publisher %> (<%= pkg.make.email %>), (<%= pkg.make.blog %>)\n' +
        ' * Build     : <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * License   : <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
        ' ======================================================================== \n' +
        ' */\n',

// html task
        includes: {
            build: {
                cwd: 'app/docs/html/',
                src: ['**/*.html'],
                dest: 'dist',
                options: {
                    flatten: true,
                    // debug: true,
                    includePath: 'app/docs/include/'
                }
            }
        },
        htmlhint: {
            options: {
                htmlhintrc: 'grunt/.htmlhintrc'
            },
            dist: 'dist/**/*.html'
        },

        // css task
        less: {
            dist: {
                options: {
                    banner: '<%= banner %>',
                    dumpLineNumbers : 'comments'
                },
                src: 'app/less/style.less',
                dest: 'app/css/style.css'
            },
        },

        sass: {
            dist: {
              files: {
                'widgets.css': 'test.scss'
              }
            }
          }

        // sass: {                              // Task 
        //     options: {                       // Target options 
        //         style: 'expanded'
        //     },
        //     dist: {
        //         src: 'app/sass/test.scss',
        //         dest: 'app/css/test.css'
        //     }
        // },

        csslint: {
            options: {
                csslintrc: 'grunt/.csslintrc'
            },
            dist: {
                src: 'app/css/style.css'
            }
        },

        autoprefixer: {
             options: {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24', // Firefox 24 is the latest ESR
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            },
            dist: { // app -> dest 이동
                src: 'app/css/style.css',
                dest: 'dist/css/style.css'
            }
        },
        
        csscomb: {
            options: {
                config: 'grunt/.csscomb.json'
            },
            dist: {
                src: 'app/css/style.css',
                dest: 'dist/css/style.css'
            }
        },

        cssmin: {
            options: {
                // compatibility: 'ie8',
                keepSpecialComments: 1,
                // default - '!'가 붙은 주석은 보존,
                // 1 - '!'가 붙은 주석 중 첫번째 주석만 보존
                // 0 - 모든 주석 제거
                // noAdvanced: true,
            },
            dist: {
                src: 'dist/css/style.css',
                dest: 'dist/css/style.min.css'
            }
        },
        
        // javascript task
        jshint: {
            options: {
                jshintrc: 'grunt/.jshintrc',
                force: true, // error 검출시 task를 fail 시키지 않고 계속 진단
                reporter: require('jshint-stylish') // output을 수정 할 수 있는 옵션
            },
            grunt: {
                src: ['Gruntfile.js']
            },
            dist: {
                expand: true,
                cwd: 'app/js/site',
                src: ['*.js'],
                dest: 'app/js/site'
            }
        },

        concat: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: 'app/js/site/*.js',
                dest: 'dist/js/site.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: 'dist/js/site.js',
                dest: 'dist/js/site.min.js'
            }
        },

        // others task
        imagemin: {
            options: {
                title: 'Build complete',  // optional
                message: '<%= pkg.name %> build finished successfully.' //required
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images/',
                    src: '**/*.{png,jpeg,jpg,gif}',
                    dest: 'dist/images/'
                }]
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'app/css',
                        'dist/**/*'
                    ]
                }]
            },
        },
        copy: {
            dist: {
                files: [ 
                    // fonts
                    {
                        expand: true,
                        cwd: 'app/fonts/',
                        src: '**',
                        dest: 'dist/fonts/'
                    },
                    // js/lib
                    {
                        expand: true,
                        cwd: 'app/js/lib',
                        src: ['*.js'],
                        dest: 'dist/js/lib'
                    }
                ]
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            dist: [
                'copy',
                'imagemin'
            ]
        },

        // watch task
        watch: {
            options: {livereload: true},
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['newer:jshint:grunt']
            },
            js: {
                files: ['app/js/**/*.js'],
                tasks: ['newer:jshint:dist','concat','uglify']
            },
            less: {
                files: ['app/less/**/*.less'],
                tasks: ['less','csslint','autoprefixer','csscomb','concat']
            },
            img: {
                files: ['app/images/**/*.{gif,jpeg,jpg,png}'],
                tasks: ['newer:imagemin']
            },
            html: {
                files: ['app/docs/**/*.html'],
                tasks: ['htmlhint','includes']
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: 35729,
                    // keepalive: true,
                    base: 'dist',
                    open: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>/category1/page-02.html'
                }
            }
        },

    });


    
    // server
    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['connect', 'watch']);
        }
        grunt.task.run([
            'default', 
            'connect', 
            'watch'
        ]);
    });

    // html task
    grunt.registerTask('html', [
            'htmlhint',
            'includes'
        ]
    );
    // css task
    grunt.registerTask('css', [
            'less',
            'csslint',
            'autoprefixer',
            'csscomb',
            'cssmin'
        ]
    );

    // javascript task
    grunt.registerTask('js', [
            'newer:jshint',
            'concat',
            'uglify'
        ]
    );


    grunt.registerTask('default', [
            'clean:dist',
            'html',
            'css',
            'js',
            'concurrent'
        ]
    );

};
