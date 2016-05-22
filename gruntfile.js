module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['src/js/*.js'],
        dest: 'build/js/script.main.js'
      },
      css: {
        src: ['src/css/*.css'],
        dest: 'build/css/style.css'
      },
      dist: {
        src: ['src/css/style1.css', 'src/css/style2.css'],
        dest: 'build/css/style.css'
      }
    },
    uglify: {
      dist: {
        src: ['build/js/script.main.js'],
        dest: 'build/js/script.main.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
          'build/css/style.min.css': ['src/css/style1.css', 'src/css/style2.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
