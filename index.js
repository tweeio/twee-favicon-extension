/**
 * Handling favicon
 */
module.exports.extension = function() {
    "use strict";

    var fs = require('fs')
        , path = require('path')
        , faviconFileName = twee.getConfig('twee:options:favicon:file')
        , faviconFile = path.join(twee.getBaseDirectory(), faviconFileName)
        , favicon = require('serve-favicon');

    if (twee.getConfig('twee:options:favicon:file') && fs.existsSync(faviconFile)) {
        twee.getApplication().use(favicon(faviconFile));
    }
};