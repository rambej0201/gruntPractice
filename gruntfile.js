module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			t1: {
				src: 'dir1/**',
				dest: 'dir2/'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-copy');
};