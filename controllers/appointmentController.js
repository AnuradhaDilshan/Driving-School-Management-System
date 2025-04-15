import drivingTestModel from "../models/drivingTestModel.js";
import courseModel from "../models/courseModel.js";

//CLASS DATES Controller
export const classDatesController = async (req, res) => {
  try {
    const {
      selectedUsers,
      selectedDate,
      selectedTime,
      selectedDate1,
      selectedTime1,
    } = req.body;

    //VALIDATION
    if (
      !selectedUsers ||
      !Array.isArray(selectedUsers) ||
      selectedUsers.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or missing selectedUsers" });
    }
    if (!selectedDate) {
      return res.send({ message: "Date is Required" });
    }
    if (!selectedTime) {
      return res.send({ message: "Time is Required" });
    }
    if (!selectedDate1) {
      return res.send({ message: "Date is Required" });
    }
    if (!selectedTime1) {
      return res.send({ message: "Time is Required" });
    }

    //CHECK Date
    const exisitingDate = await courseModel.findOne({ selectedDate });

    //EXISTING Date
    if (exisitingDate) {
      return res.status(200).send({
        success: false,
        message: "Already Sent Date and Time",
      });
    }

    //SAVE Date & Time
    const userDates = await new courseModel({
      selectedUsers,
      selectedDate,
      selectedTime,
      selectedDate1,
      selectedTime1,
    }).save();

    res.status(201).send({
      success: true,
      message: "Dates & Times Sent Successfully",
      userDates,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Dates & Times Submitting",
      error,
    });
  }
};

//CLASS DATES Controller
export const testDatesController = async (req, res) => {
  try {
    const { selectedUsers, selectedDate, selectedTime } = req.body;

    // VALIDATION
    if (
      !selectedUsers ||
      !Array.isArray(selectedUsers) ||
      selectedUsers.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or missing selectedUsers" });
    }
    if (!selectedDate) {
      return res
        .status(400)
        .json({ success: false, message: "Date is required" });
    }
    if (!selectedTime) {
      return res
        .status(400)
        .json({ success: false, message: "Time is required" });
    }

    // CHECK Date
    const existingDate = await drivingTestModel.findOne({ selectedDate });

    // EXISTING Date
    if (existingDate) {
      return res
        .status(200)
        .json({ success: false, message: "Date and Time already exists" });
    }

    // SAVE Date & Time
    const userDates = await new drivingTestModel({
      selectedUsers,
      selectedDate,
      selectedTime,
    }).save();

    res.status(201).json({
      success: true,
      message: "Date & Time submitted successfully",
      userDates,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in Date & Time submission",
      error: error.message,
    });
  }
};
