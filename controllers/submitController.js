import submissionModel from "../models/submissionModel.js";
import fs from "fs";

//VEHICLE CATEGORY Controller
export const vehicleCategoryController = async (req, res) => {
  try {
    const { nic, category, selectedOptions, practice, totalPrice } = req.fields;
    const { nicImage, birthImage, photoImage, medicalImage } = req.files;

    //VALIDATION
    switch (true) {
      case !nic:
        return res.status(500).send({ message: "Nic is Required" });
      case !category:
        return res.status(500).send({ message: "Category is Required" });
      case !selectedOptions:
        return res
          .status(500)
          .send({ message: "Category Selection is Required" });
      case !practice:
        return res
          .status(500)
          .send({ message: "Practice Selection is Required" });
      case !nicImage && nicImage.size > 1000000:
        return res.status(500).send({ message: "Upload - NIC or Passport" });
      case !birthImage && birthImage.size > 1000000:
        return res.status(500).send({ message: "Upload - Birth Certificate" });
      case !photoImage && photoImage.size > 1000000:
        return res.status(500).send({ message: "Upload - B&W Photo" });
      case !medicalImage && medicalImage.size > 1000000:
        return res
          .status(500)
          .send({ message: "Upload - Medical Certificate" });
    }

    //CHECK Submit
    const exisitingSubmit = await submissionModel.findOne({ nic });

    //EXISTING User
    if (exisitingSubmit) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE VEHICLE CATEGORY & PRICE
    const userSubmit = new submissionModel({ ...req.fields });
    if (nicImage) {
      userSubmit.nicImage.data = fs.readFileSync(nicImage.path);
      userSubmit.nicImage.contentType = nicImage.type;
    }
    if (birthImage) {
      userSubmit.birthImage.data = fs.readFileSync(birthImage.path);
      userSubmit.birthImage.contentType = birthImage.type;
    }
    if (photoImage) {
      userSubmit.photoImage.data = fs.readFileSync(photoImage.path);
      userSubmit.photoImage.contentType = photoImage.type;
    }
    if (medicalImage) {
      userSubmit.medicalImage.data = fs.readFileSync(medicalImage.path);
      userSubmit.medicalImage.contentType = medicalImage.type;
    }
    await userSubmit.save();

    res.status(201).send({
      success: true,
      message: "Submit Successfully",
      userSubmit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Submitting",
      error,
    });
  }
};
