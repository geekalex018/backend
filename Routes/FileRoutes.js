
const express = require('express')
const router = express.Router();
const Image = require("../Modals/Image")
const { MulterUpload } = require('../Controllers/FileController')

router.route("/").post(MulterUpload.single('profileImage'), async (req, res) => {

    const savedImage = await Image.create(req.file)
    console.log(req.file);

    res.status(200).json({
        status: "success",
        data: savedImage
    })
});

module.exports = router;