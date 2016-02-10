Package.describe({
  name: 'core-layouts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "react": "0.14.7"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.8');
  api.use(['ecmascript']);
  api.addFiles(['MainLayout.jsx'], 'client');
  api.mainModule('core-layouts.jsx', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('core-layouts');
  api.mainModule('core-layouts-tests.js');
});
