var Imagekit = require("imagekit");
const mongoose = require('mongoose')

var imagekit = new Imagekit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: file.buffer,
        fileName: new mongoose.Types.ObjectId().toString(),
        folder:"moody-player-audio"
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

module.exports = uploadFile;
