module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {

        src: 'client/scripts/client.js',
        dest: 'server/public/scripts/client.min.js'

      }
    },
    copy: {
      main: {

        expand: true,
        cwd: 'node_modules/jquery/dist/',
        src: 'jquery.js',
        dest: 'server/public/vendors/'

      },
      html: {

        expand: true,
        cwd: 'client/',
        src: 'index.html',
        dest: 'server/public/'

      },
      bootstrap: {

        expand: true,
        cwd: 'node_modules/bootstrap/dist/css/',
        src: 'bootstrap.css',
        dest: 'server/public/css/'

      },
    },
    watch: {

      options: {
        livereload: true,
      },
      
      files: ['client/scripts/*.js', 'client/*.html', 'client/css/*.css'],
      tasks: ['uglify', 'copy'],

      }

  });

};
