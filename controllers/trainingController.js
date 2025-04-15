import trainModel1 from "../models/trainModel1.js";
import trainModel2 from "../models/trainModel2.js";
import trainModel3 from "../models/trainModel3.js";
import trainModel4 from "../models/trainModel4.js";

//Training Controller
export const training1Controller = async (req, res) => {
  try {
    const { nic, selectedDate, time } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!selectedDate) {
      return res.send({ message: "Date is Required" });
    }
    if (!time) {
      return res.send({ message: "Time is Required" });
    }

    //CHECK Submit
    const exisitingUSER = await trainModel1.findOne({ nic });

    //EXISTING User
    if (exisitingUSER) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE
    const classsubmit = await new trainModel1({
      nic,
      selectedDate,
      time,
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

//Training Controller
export const training2Controller = async (req, res) => {
  try {
    const { nic, selectedDate1, time } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!selectedDate1) {
      return res.send({ message: "Date is Required" });
    }
    if (!time) {
      return res.send({ message: "Time is Required" });
    }

    //CHECK Submit
    const exisitingUSER1 = await trainModel2.findOne({ nic });

    //EXISTING User
    if (exisitingUSER1) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE
    const testsubmit = await new trainModel2({
      nic,
      selectedDate1,
      time,
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

//Training Controller
export const training3Controller = async (req, res) => {
  try {
    const { nic, selectedDate2, time } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!selectedDate2) {
      return res.send({ message: "Date is Required" });
    }
    if (!time) {
      return res.send({ message: "Time is Required" });
    }

    //CHECK Submit
    const exisitingUSER2 = await trainModel3.findOne({ nic });

    //EXISTING User
    if (exisitingUSER2) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE
    const testsubmit1 = await new trainModel3({
      nic,
      selectedDate2,
      time,
    }).save();

    res.status(201).send({
      success: true,
      message: "Submit Successfully",
      testsubmit1,
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

//Training Controller
export const training4Controller = async (req, res) => {
  try {
    const { nic, selectedDate3, time } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!selectedDate3) {
      return res.send({ message: "Date is Required" });
    }
    if (!time) {
      return res.send({ message: "Time is Required" });
    }

    //CHECK Submit
    const exisitingUSER3 = await trainModel4.findOne({ nic });

    //EXISTING User
    if (exisitingUSER3) {
      return res.status(200).send({
        success: false,
        message: "Already Submitted",
      });
    }

    //SAVE
    const testsubmit2 = await new trainModel4({
      nic,
      selectedDate3,
      time,
    }).save();

    res.status(201).send({
      success: true,
      message: "Submit Successfully",
      testsubmit2,
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
