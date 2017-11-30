module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       
        jshint: {
            options: {
                
              curly: true,
              eqeqeq: true,
              esversion: 6,
              eqnull: true,
              browser: true,
              devel: true,
              globals: {
                d3:true
              },
              undef: true,
              unused: true
            },
            files: {
                src: ['js/*.js', '!js/index.js']
            }

        },
        browserify: {
            dist: {
                files: {
                    // destination for transpiled js : source js
                    'js/index.js': 'js/main.js'
                },
                options: {
                    transform: [['babelify', { presets: "env" }]],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        
        watch: {
           
            js: {
                files: ['js/*.js', '!js/index.js'],
                tasks: ['jshint','browserify']
            }
        }
        
       
    });

    grunt.registerTask('default', []);

};