import paymentModel from "../models/paymentModel.js";

//Class Attendence Controller
export const paymentController = async (req, res) => {
  try {
    const { nic, paymentStatus, paymentId } = req.body;

    //VALIDATION
    if (!nic) {
      return res.send({ message: "Nic is Required" });
    }

    //CHECK Submit
    const exisitingUSER = await paymentModel.findOne({ nic });

    //EXISTING User
    if (exisitingUSER) {
      return res.status(200).send({
        success: false,
        message: "Already Paid",
      });
    }

    //SAVE
    const paymentsubmit = await new paymentModel({
      nic,
      paymentStatus,
      paymentId,
    }).save();

    res.status(201).send({
      success: true,
      message: "Paid Successfully",
      paymentsubmit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Paying",
      error,
    });
  }
};
