Package.describe({
    name: "jplatimer:urlif2-minifiable",
  	summary: "Generate slugs with smart urlify supporting unicode, minifiable",
    git: "https://github.com/manybothans/meteor-urlify2-minifiable.git",
    version: "1.0.0"
});

Package.onUse(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
  api.versionsFrom('0.9.0');

  api.addFiles([
    'urlify2.js',
    // 'n11n.js',
    'urlify.js',
    'urlify-more.js'
  ]);

  api.export('URLify2');
});

// Package.on_test(function (api) {
//   api.use(['urlify2', 'tinytest', 'test-helpers'], ['client', 'server']);
//   api.add_files('tests.js', ['client', 'server']);
// });