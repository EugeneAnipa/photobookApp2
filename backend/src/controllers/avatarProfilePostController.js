import { cloudinary } from "../middleware/cloudinary.js";

import { loginappdb } from "../middleware/mysql2.js";

const avatarPostProfile = async function (req, res) {
  var reqUser = "me2@i.com";
  console.log(req.file);
  var tyfile = req.file;
  console.log(typeof tyfile);
  console.log("email here " + req.user);
  /****************** */
  const uploadResult = cloudinary.uploader
    .upload_stream(
      {
        resource_type: "image",
        asset_folder: "profilephotos",
        public_id: req.user + "_" + "avatar",
        overwrite: true,
        unique_filename: true,
      },
      function (error, result) {
        console.log(error);
        console.log(result);

        var secureUrlSQL = "UPDATE login SET avatar= ?  WHERE email = ? ";
        loginappdb.query(
          secureUrlSQL,
          [result.secure_url, req.user],
          function (err, inREsult) {
            console.log("secure url inserted");
          }
        );
      }
    )
    .end(req.file.buffer);

  res.send("complete");
};

export default avatarPostProfile;
