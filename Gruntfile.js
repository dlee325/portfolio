module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		concat: {
			dist: {
				src: 'src/js/*.js',
				dest: 'dist/js/app.js'
			}
		},
		watch: {
			concat: {
				files: 'src/css/*.css',
				tasks: ['concat']
			}

		}
	});

	grunt.registerTask('default',[
		'concat',
		'watch'
	]);
};