import feedbackModel from "../models/feedbackModel.js";

//Class Attendence Controller
export const feedbackController = async (req, res) => {
  try {
    const { nic, drivingSchoolRating, instructorRating, opinion } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!drivingSchoolRating) {
      return res.send({ message: "School Rating is Required" });
    }
    if (!instructorRating) {
      return res.send({ message: "Instructor Rating is Required" });
    }

    //CHECK Submit
    const exisitingUSER = await feedbackModel.findOne({ nic });

    //EXISTING User
    if (exisitingUSER) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE
    const feedbacksubmit = await new feedbackModel({
      nic,
      drivingSchoolRating,
      instructorRating,
      opinion,
    }).save();

    res.status(201).send({
      success: true,
      message: "Submit Successfully",
      feedbacksubmit,
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
