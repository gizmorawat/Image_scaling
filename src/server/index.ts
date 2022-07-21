import express from 'express';
import { url_Image_Resizer } from '../resizer/url_Image_Resizer';

const app = express();
const port = 5000;

app.get('/resize', function (req, res) {
  res.send(
    url_Image_Resizer(
      'https://miami.pfsrealty.com/wp-content/uploads/2020/02/Miami-y-su-bahia-con-nubes-al-atardecer-Compressed.jpg'
    )
  );
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
