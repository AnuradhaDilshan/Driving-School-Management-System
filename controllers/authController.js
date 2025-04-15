import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const {
      name,
      nic,
      passport,
      email,
      phone,
      address,
      password,
      age,
      gender,
      dob,
    } = req.body;

    //VALIDATION
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!nic) {
      return res.send({ message: "NIC or Passport ID is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone Number is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }

    //CHECK USER
    const exisitingUser = await userModel.findOne({ nic });

    //EXISTING USER
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register, Please LOGIN",
      });
    }

    //REGISTER USER
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      nic,
      passport,
      email,
      phone,
      age,
      gender,
      dob,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //VALIDATION
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //CHECK USER
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //TOKEN
    const token = await JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        nic: user.nic,
        passport: user.passport,
        email: user.email,
        dob: user.dob,
        age: user.age,
        gender: user.gender,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//Forgot-Password Controller
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, nic, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is required" });
    }
    if (!nic) {
      res.status(400).send({ message: "NIC is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //check
    const user = await userModel.findOne({ email, nic });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or NIC",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

//TEST Controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
