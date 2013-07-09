'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'build/bigfoot.css': 'sass/main.scss'
        },
        options: {
          style: 'compressed'
        }
      },
      dev: {
        files: {
          'build/bigfoot-dev.css': 'sass/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', 'sass');
};
