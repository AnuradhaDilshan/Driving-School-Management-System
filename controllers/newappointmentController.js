import drivingTestModelnew from "../models/drivingTestModel2.js";
import courseModelnew from "../models/courseModel2.js";

//CLASS DATES Controller
export const classDatesnewController = async (req, res) => {
  try {
    const {
      selectedUsers1,
      selectedDate2,
      selectedTime2,
      selectedDate3,
      selectedTime3,
    } = req.body;

    //VALIDATION
    if (
      !selectedUsers1 ||
      !Array.isArray(selectedUsers1) ||
      selectedUsers1.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or missing selectedUsers" });
    }
    if (!selectedDate2) {
      return res.send({ message: "Date is Required" });
    }
    if (!selectedTime2) {
      return res.send({ message: "Time is Required" });
    }
    if (!selectedDate3) {
      return res.send({ message: "Date is Required" });
    }
    if (!selectedTime3) {
      return res.send({ message: "Time is Required" });
    }

    //CHECK Date
    const exisitingDate1 = await courseModelnew.findOne({ selectedDate2 });

    //EXISTING Date
    if (exisitingDate1) {
      return res.status(200).send({
        success: false,
        message: "Already Sent Date and Time",
      });
    }

    //SAVE Date & Time
    const userDates = await new courseModelnew({
      selectedUsers1,
      selectedDate2,
      selectedTime2,
      selectedDate3,
      selectedTime3,
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
export const testDatesnewController = async (req, res) => {
  try {
    const { selectedUsers1, selectedDate1, selectedTime1 } = req.body;

    // VALIDATION
    if (
      !selectedUsers1 ||
      !Array.isArray(selectedUsers1) ||
      selectedUsers1.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or missing selectedUsers" });
    }
    if (!selectedDate1) {
      return res
        .status(400)
        .json({ success: false, message: "Date is required" });
    }
    if (!selectedTime1) {
      return res
        .status(400)
        .json({ success: false, message: "Time is required" });
    }

    // CHECK Date
    const existingDate = await drivingTestModelnew.findOne({ selectedDate1 });

    // EXISTING Date
    if (existingDate) {
      return res
        .status(200)
        .json({ success: false, message: "Date and Time already exists" });
    }

    // SAVE Date & Time
    const userDates = await new drivingTestModelnew({
      selectedUsers1,
      selectedDate1,
      selectedTime1,
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
