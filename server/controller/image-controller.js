import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:8000";
let gfs;
let gridFsBucket;
const connect = mongoose.connection;
connect.once(`open`, () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(connect.db, {
    bucketName: "fs",
  });
  gfs = grid(connect.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadFile = async (request, response) => {
  if (!request.file) {
    return response.status(404).json("File not found");
  }
  const imageUrl = `${url}/file/${request.file.filename}`;
  return response.status(200).json(imageUrl);
};

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });

    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  } catch (error) {
    response.status(500).json({ msg: error.message });
  }
};
