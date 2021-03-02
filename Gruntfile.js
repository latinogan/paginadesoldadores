module.exports = function(grunt){

    grunt.initConfig({

        sass: {

            dist: {

                files: [{

                    expand: true,

                    cwd: 'carpeta-donde-esta-el-css',

                    src: ['*.scss'],

                    dest: 'css',

                    ext: '.css'

                }]

            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('css',['sass']);



};