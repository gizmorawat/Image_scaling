'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var url_Image_Resizer_1 = require('../resizer/url_Image_Resizer');
var app = (0, express_1.default)();
var port = 8081;
app.get('/resize', function (req, res) {
  res.send(
    (0, url_Image_Resizer_1.readAndSave)(
      'https://miami.pfsrealty.com/wp-content/uploads/2020/02/Miami-y-su-bahia-con-nubes-al-atardecer-Compressed.jpg'
    )
  );
});
app.listen(port, function () {
  console.log('server started at localhost:'.concat(port));
});
