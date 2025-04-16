const { default: axios } = require("axios");

const hideM3urlController = async (req, res) => {
  const videoId = req.params.videoId;
  const file = req.query.file; // example: master.m3u8 OR 720p-00001.ts

  // 🔐 Replace with your real S3/GCP base URL or signed URL generator
  // const realHLSBaseURL = `https://s3-bucket-url.com/videos/${videoId}/`;
  // const targetUrl = realHLSBaseURL + file;

  const url =
    "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8";

  console.log(url);

  try {
    const response = await axios.get(url, {
      responseType: "stream",
    });

    res.set(response.headers);
    response.data.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Video segment not found or expired." });
  }
};

module.exports = { hideM3urlController };
