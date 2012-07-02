module.exports = function(grunt)
{

  grunt.loadNpmTasks('grunt-closure-tools');
  
  // Project configuration.
  grunt.initConfig({
    closureBuilder: {
      build: {
        closureLibraryPath: 'closure-library',
        inputs: ['lib/name.export.js'],
        output_file: 'build/{%= name %}.concatenated.js',
        root: ['lib/', 'closure-library/'],
        output_mode: 'script'
      }
    },
    closureCompiler: {
      target: {
        closureCompiler: '../closure_compiler/superstartup-compiler/build/sscompiler.jar',
        js: ['closure-library/closure/goog/base.js', 'lib/{%= name %}.export.js', 'lib/{%= name %}.js'],
        output_file: 'dist/{%= name %}.min.js',
        options: {
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          warning_level: 'verbose',
          summary_detail_level: 3,
          output_wrapper: '"(function(){%= compilerWrap %}).call(this);"'
        }
      }
    },
    closureDepsWriter: {
       // any name that describes your operation
      targetName: {
        closureLibraryPath: 'closure-library', // path to closure library
        files: ['lib/name.js', 'lib/name.export.js'],
        output_file: 'lib/deps.js'
      }
    },
		qunit: {
			files: "test/index.html"
		}
  });

  // Default task.
  grunt.registerTask('default', 'closureCompiler');
};