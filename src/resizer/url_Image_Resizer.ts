import sharp from 'sharp';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export function url_Image_Resizer(url: string, width = 300, height = 300) {
  axios
    .get(url, { responseType: 'arraybuffer' })
    .then(
      (response: {
        data:
          | WithImplicitCoercion<string>
          | { [Symbol.toPrimitive](hint: 'string'): string };
      }) => {
        return Buffer.from(response.data, 'utf-8');
      }
    )
    .then(async (buffer: Buffer) => {
      try {
        return await new Promise<void>((resolve, reject) => {
          sharp(buffer)
            .resize(height, width)
            .toFile(
              `F:/Image scaling/assets/output/output_image_${uuidv4()}.jpeg`
            );
          resolve();
        });
      } catch (error) {
        // error handeling
        reject(error);
      }
    })
    .catch((error: any) => {
      console.log('error', error);
    });
}

function reject(error: unknown) {
  throw new Error('Function not implemented.');
}
