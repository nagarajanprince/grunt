module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	jshint: {
      files: ['gruntfile.js', 'src/*.js', 'build/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
	 configFiles: {
		files: [ 'Gruntfile.js'],
		options: {
		  reload: true
		}
	  },	
      files: ['gruntfile.js', 'src/*.js', 'build/*.js'],
      tasks: ['uglify']
    }
	
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');  

  // Default task(s).
  grunt.registerTask('default', ['uglify','watch']);

};