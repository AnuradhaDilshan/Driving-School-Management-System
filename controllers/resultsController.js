import resultModel from "../models/resultModel.js";
import finalmarksModel from "../models/finalmarksModel.js";

//WRITTEN TEST Controller
export const resultsController = async (req, res) => {
  try {
    const { selectedNic, selectedWMarks } = req.body;

    //VALIDATION
    if (!selectedNic) {
      return res.send({ message: "Nic is Required" });
    }
    if (!selectedWMarks) {
      return res.send({ message: "Written Test Marks are Required" });
    }

    //CHECK NIC
    const exisitingNIC = await resultModel.findOne({ selectedNic });

    //EXISTING NIC
    if (exisitingNIC) {
      return res.status(200).send({
        success: false,
        message: "Already Sent Marks",
      });
    }

    //SAVE NIC & MARKS
    const userMarks = await new resultModel({
      selectedNic,
      selectedWMarks,
    }).save();

    res.status(201).send({
      success: true,
      message: "Marks Sent Successfully",
      userMarks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Marks Submitting",
      error,
    });
  }
};

//PRACTICAL TEST Controller
export const marksController = async (req, res) => {
  try {
    const { selectedNic1, selectedTMarks } = req.body;

    //VALIDATION
    if (!selectedNic1) {
      return res.send({ message: "Nic is Required" });
    }
    if (!selectedTMarks) {
      return res.send({ message: "Driving Test Marks are Required" });
    }

    //CHECK NIC
    const exisitingNIC1 = await finalmarksModel.findOne({ selectedNic1 });

    //EXISTING NIC
    if (exisitingNIC1) {
      return res.status(200).send({
        success: false,
        message: "Already Sent Marks",
      });
    }

    //SAVE NIC & MARKS
    const userFinalMarks = await new finalmarksModel({
      selectedNic1,
      selectedTMarks,
    }).save();

    res.status(201).send({
      success: true,
      message: "Marks Sent Successfully",
      userFinalMarks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Marks Submitting",
      error,
    });
  }
};
