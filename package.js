Package.describe({
  name: 'mirrorcell:stripe-jquery-payment',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for stripe-jquery-payment',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
    api.use('jquery');
    api.imply('jquery');

    
    api.addFiles('lib/jquery.payment.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('mirrorcell:stripe-jquery-payment-tests.js');
});
