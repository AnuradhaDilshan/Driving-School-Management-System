import classAttendModel from "../models/classAttendModel.js";
import examAttendModel from "../models/examAttendModel.js";
import testAttendModel from "../models/testAttendModel.js";

//Class Attendence Controller
export const classAttendController = async (req, res) => {
  try {
    const { nic, status } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!status) {
      return res.send({ message: "Reservation is Required" });
    }

    //CHECK Submit
    const exisitingUSER = await classAttendModel.findOne({ nic });

    //EXISTING User
    if (exisitingUSER) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE
    const classsubmit = await new classAttendModel({
      nic,
      status,
    }).save();

    res.status(201).send({
      success: true,
      message: "Submit Successfully",
      classsubmit,
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

//Exam Attendence Controller
export const examAttendController = async (req, res) => {
  try {
    const { nic, status } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!status) {
      return res.send({ message: "Reservation is Required" });
    }

    //CHECK Submit
    const exisiting = await examAttendModel.findOne({ nic });

    //EXISTING User
    if (exisiting) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE
    const examsubmit = await new examAttendModel({
      nic,
      status,
    }).save();

    res.status(201).send({
      success: true,
      message: "Submit Successfully",
      examsubmit,
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

//Driving Test Attendence Controller
export const testAttendController = async (req, res) => {
  try {
    const { nic, status } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!status) {
      return res.send({ message: "Reservation is Required" });
    }

    //CHECK Submit
    const exisiting1 = await testAttendModel.findOne({ nic });

    //EXISTING User
    if (exisiting1) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE
    const testsubmit = await new testAttendModel({
      nic,
      status,
    }).save();

    res.status(201).send({
      success: true,
      message: "Submit Successfully",
      testsubmit,
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
