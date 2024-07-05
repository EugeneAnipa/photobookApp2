import { cloudinary } from "../middleware/cloudinary.js";

import { loginappdb } from "../middleware/mysql2.js";

const addPostPhoto = function (req, res) {
  const photoUpload = cloudinary.uploader
    .upload_stream(
      {
        resource_type: "image",
        asset_folder: "displayphotos",

        unique_filename: true,
        public_id: req.body.photoname,
      },
      function (error, result) {
        console.log(error);
        console.log(result);

        loginappdb.query(
          "INSERT INTO imagephotos(photos,email) Values(?,?)",
          [result.secure_url, req.user],
          function (err, inREsult) {
            console.log("photo secure url inserted");
          }
        );
      }
    )
    .end(req.file.buffer);
  res.send("photo added");
};

export default addPostPhoto;
