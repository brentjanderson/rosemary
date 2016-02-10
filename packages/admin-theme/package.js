Package.describe({
  name: 'admin-theme',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.8');
  api.use(['ecmascript', 'jquery']);
  api.addFiles(['css/styles.css', 'js/scripts.js'], 'client');
  api.mainModule('admin-theme.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('admin-theme');
  api.mainModule('admin-theme-tests.js');
});
