Package.describe({
  summary: "Generate slugs with smart urlify supporting unicode, minifiable"
});

Package.on_use(function (api) {
  api.export('URLify2');

  api.add_files([
    'urlify2.js',
    // 'n11n.js',
    'urlify.js',
    'urlify-more.js'
  ], ['client', 'server']);
});

// Package.on_test(function (api) {
//   api.use(['urlify2', 'tinytest', 'test-helpers'], ['client', 'server']);
//   api.add_files('tests.js', ['client', 'server']);
// });