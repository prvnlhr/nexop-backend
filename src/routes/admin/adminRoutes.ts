import { Router } from "express";
// import filesController from "../controllers/filesController";
// import upload from "../middlewares/multerUpload";
const router = Router();

// // Route to get all files for the user
// router.get("/", filesController.getAllFiles);

// // Route to upload a file and save its metadata
// router.post("/upload", upload.any(), filesController.addFiles);

// // Route to get a specific file's metadata
// router.get("/:fileId", filesController.getFile);

// // Route to delete a file
// router.delete("/:fileId", filesController.deleteFiles);

// // Route to update file (e.g., rename)
// router.patch("/:fileId", filesController.updateFile);

export default router;
