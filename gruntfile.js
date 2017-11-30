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
                src: ['js/*.es6']
            }

        },
        browserify: {
            dist: {
                files: {
                    // destination for transpiled js : source js
                    'js/index.js': 'js/main.es6'
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
                files: ['js/*.es6'],
                tasks: ['jshint','browserify']
            }
        }
        
       
    });

    grunt.registerTask('default', []);

};