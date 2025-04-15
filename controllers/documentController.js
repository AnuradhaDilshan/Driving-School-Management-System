import submissionModel from "../models/submissionModel.js";
import fs from "fs";

export const documentPhotoController = async (req, res) => {
  try {
    console.log("Requested NIC:", req.params.nic);

    const submission = await submissionModel
      .findOne({ nic: req.params.nic })
      .select("nicImage");

    if (submission && submission.nicImage && submission.nicImage.data) {
      console.log("Sending photo data");
      res.set("Content-type", submission.nicImage.contentType);
      return res.status(200).send(submission.nicImage.data);
    } else {
      console.log("Photo not found");
      return res
        .status(404)
        .send({ success: false, message: "Photo not found" });
    }
  } catch (error) {
    console.log("Error while getting photo:", error);
    res.status(500).send({
      success: false,
      message: "Error while getting photo",
      error,
    });
  }
};
