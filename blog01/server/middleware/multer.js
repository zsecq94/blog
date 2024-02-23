import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname === "md") {
        cb(null, "fileMd/");
      } else if (file.fieldname === "thumb") {
        cb(null, "fileThumb/");
      }
    },
    filename: function (req, file, cb) {
      console.log(req);
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
}).fields([
  { name: "md", maxCount: 1 },
  { name: "thumb", maxCount: 1 },
]);
