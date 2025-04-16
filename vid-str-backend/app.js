const express = require("express");
const cors = require("cors");

const {
  directFileGetController,
} = require("./controller/directFIleGet.controller");
const { hideM3urlController } = require("./controller/hideUrl.controller");
const app = express();
const PORT = 3000;

app.use(cors());

// Stream video from local file for testing (can be replaced with S3)
app.get("/video/direct-file-send/:filename", directFileGetController);
app.get("/video/hls-file-send", hideM3urlController);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
