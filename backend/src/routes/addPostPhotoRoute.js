import { Router } from "express";
import { upload } from "../middleware/multer.js";

//import add photo post controller

import addPostPhoto from "../controllers/addPhotoPostController.js";

const addPostPhotoRouter = Router();

addPostPhotoRouter.post("/addphoto", upload.single("photo"), addPostPhoto);

export { addPostPhotoRouter };
