import { v2 as cloudinary } from "cloudinary";

import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
  secure: true,
});

export { cloudinary };
