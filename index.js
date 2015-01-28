/**
 * Handling favicon
 */
module.exports.extension = function() {
    "use strict";

    var fs = require('fs')
        , path = require('path')
        , faviconFileName = twee.getConfig('twee:extension:twee-favicon:file')
        , faviconFile = path.join(twee.getBaseDirectory(), faviconFileName)
        , favicon = require('serve-favicon');

    if (twee.getConfig('twee:extension:twee-favicon:file') && fs.existsSync(faviconFile)) {
        twee.getApplication().use(favicon(faviconFile));
    }
};

module.exports.configNamespace = 'twee-favicon';

module.exports.config = {
    "file": "public/favicon.ico"
};
