/* jshint node: true */
'use strict';

var UITheme = require('untitled-ui/theme');
var fs = require('fs');
var path = require('path');

module.exports = UITheme.extend({
  name: 'ui-base-theme',

  included: function(app, parentAddon) {
    this._super.included(app);

    var target = (parentAddon || app);
    var fontsPath = ('vendor/font-awesome/fonts');

    app.import('vendor/normalize.css');

    fs.readdirSync(fontsPath).forEach(function(fontFilename){
      target.import(
        path.join(fontsPath, fontFilename),
        { destDir:'/fonts' }
      );
    });

    app.import('vendor/font-awesome/css/font-awesome.css');
  }
});
