/*
 * jslib template for grunt
 */

// Basic template description.
exports.description = 'Create a js library including QUnit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Hola!';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  grunt.helper('prompt', {}, [
    // Prompt for these values.
    grunt.helper('prompt_for', 'name'),

    grunt.helper('prompt_for', 'description', 'The best javascript library ever.'),

    {
      name: 'gitname',
      message: 'Github repo name (url friendly).',
      default: '',
      warning: 'A warning'
    },

  ], function(err, props) {
    props.gitrepo = 'git@github.com:thanpolas/' + props.gitname + '.git';
    props.gitpublicrepo = 'https://github.com/thanpolas/' + props.gitname + '.git';
    // hack: grunt gets confused with this closure compiler directive
    props.compilerWrap = "{%output%}";

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
