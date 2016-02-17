module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    requirejs: {
      compile: {
        options: {
          baseUrl: "public/js",
          mainConfigFile: "public/js/main.js",
          name: "main",
          out: "public/js/main-min.js",
          optimize: "uglify2",
          uglify2: {
            mangle: false
          },
          generateSourceMaps: true,
          preserveLicenseComments: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);
};