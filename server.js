import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import resultsRoutes from "./routes/resultsRoute.js";
import datesRoutes from "./routes/datesRoute.js";
import submissionRoutes from "./routes/submissionRoute.js";
import checkingRoutes from "./routes/checkingRoute.js";
import trainingRoutes from "./routes/trainingRoute.js";
import feedbackRoutes from "./routes/feedbackRoute.js";
import paymentRoutes from "./routes/paymentRoute.js";
import documentRoutes from "./routes/documentRoutes.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import DocumentModel from "./models/documentModel.js";
import UserModel from "./models/userModel.js";
import resultModel from "./models/resultModel.js";
import finalmarksModel from "./models/finalmarksModel.js";
import drivingTestModel from "./models/drivingTestModel.js";
import drivingTestModelnew from "./models/drivingTestModel2.js";
import courseModel from "./models/courseModel.js";
import courseModel2 from "./models/courseModel2.js";
import submissionModel from "./models/submissionModel.js";
import classAttendModel from "./models/classAttendModel.js";
import examAttendModel from "./models/examAttendModel.js";
import testAttendModel from "./models/testAttendModel.js";
import trainModel1 from "./models/trainModel1.js";
import trainModel2 from "./models/trainModel2.js";
import trainModel3 from "./models/trainModel3.js";
import trainModel4 from "./models/trainModel4.js";
import feedbackModel from "./models/feedbackModel.js";
import paymentModel from "./models/paymentModel.js";

//Configure env
dotenv.config();

//DATABASE Config
connectDB();

//REST Object
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// app.use(express.static("public"));

// //UPLOAD
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.filename + "_" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const storage1 = multer.diskStorage({
//   destination: (req, file1, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file1, cb) => {
//     cb(
//       null,
//       file1.filename + "_" + Date.now() + path.extname(file1.originalname)
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
//   storage: storage1,
// });

// app.post("/dashboard/user/my-journey", upload.single("file"), (req, res) => {
//   DocumentModel.create({ image: req.file.filename })
//     .then((result) => res.json(result))
//     .catch((err) => console.log(err));
// });

// app.post("/dashboard/user/my-journey", upload.single("file"), (req, res) => {
//   DocumentModel.create({ image: req.file1.filename })
//     .then((result) => res.json(result))
//     .catch((err) => console.log(err));
// });

//GET REQUESTS

app.get("/dashboard/user", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/learning-sessions", (req, res) => {
  resultModel
    .find()
    .then((writtentests) => res.json(writtentests))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/driving-test", (req, res) => {
  finalmarksModel
    .find()
    .then((drivingtests) => res.json(drivingtests))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/driving-test-dates", (req, res) => {
  drivingTestModel
    .find()
    .then((results) => res.json(results))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/driving-test-datesnew", (req, res) => {
  drivingTestModelnew
    .find()
    .then((results1) => res.json(results1))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/written-test-dates", (req, res) => {
  courseModel
    .find()
    .then((results) => res.json(results))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/written-test-datesnew", (req, res) => {
  courseModel2
    .find()
    .then((results1) => res.json(results1))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/vehicle-price", (req, res) => {
  submissionModel
    .find()
    .then((vehicleCat) => res.json(vehicleCat))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/classaccept", (req, res) => {
  const userNIC = req.query.nic;
  classAttendModel
    .findOne({ nic: userNIC })
    .then((classAccept) => {
      if (classAccept) {
        const nic = classAccept.nic;
        const status = classAccept.status;
        res.json({ nic, status });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/examaccept", (req, res) => {
  const userNIC1 = req.query.nic;
  examAttendModel
    .findOne({ nic: userNIC1 })
    .then((examAccept) => {
      if (examAccept) {
        const nic = examAccept.nic;
        const status = examAccept.status;
        res.json({ nic, status });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/testaccept", (req, res) => {
  const userNIC = req.query.nic;
  testAttendModel
    .findOne({ nic: userNIC })
    .then((testAccept) => {
      if (testAccept) {
        const nic = testAccept.nic;
        const status = testAccept.status;
        res.json({ nic, status });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/trainer1", (req, res) => {
  trainModel1
    .find()
    .then((trainer1) => res.json(trainer1))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/trainer2", (req, res) => {
  trainModel2
    .find()
    .then((trainer2) => res.json(trainer2))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/trainer3", (req, res) => {
  trainModel3
    .find()
    .then((trainer3) => res.json(trainer3))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/trainer4", (req, res) => {
  trainModel4
    .find()
    .then((trainer4) => res.json(trainer4))
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/training-session1", (req, res) => {
  const userNIC = req.query.nic;
  trainModel1
    .findOne({ nic: userNIC })
    .then((trainingSelection1) => {
      if (trainingSelection1) {
        const nic = trainingSelection1.nic;
        const selectedDate = trainingSelection1.selectedDate;
        const time = trainingSelection1.time;
        res.json({ nic, selectedDate, time });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/training-session2", (req, res) => {
  const userNIC1 = req.query.nic;
  trainModel2
    .findOne({ nic: userNIC1 })
    .then((trainingSelection2) => {
      if (trainingSelection2) {
        const nic = trainingSelection2.nic;
        const selectedDate1 = trainingSelection2.selectedDate1;
        const time = trainingSelection2.time;
        res.json({ nic, selectedDate1, time });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/training-session3", (req, res) => {
  const userNIC2 = req.query.nic;
  trainModel3
    .findOne({ nic: userNIC2 })
    .then((trainingSelection3) => {
      if (trainingSelection3) {
        const nic = trainingSelection3.nic;
        const selectedDate2 = trainingSelection3.selectedDate2;
        const time = trainingSelection3.time;
        res.json({ nic, selectedDate2, time });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/user/training-session4", (req, res) => {
  const userNIC3 = req.query.nic;
  trainModel4
    .findOne({ nic: userNIC3 })
    .then((trainingSelection4) => {
      if (trainingSelection4) {
        const nic = trainingSelection4.nic;
        const selectedDate3 = trainingSelection4.selectedDate3;
        const time = trainingSelection4.time;
        res.json({ nic, selectedDate3, time });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/test", (req, res) => {
  drivingTestModel
    .findOne()
    .then((testData) => {
      if (testData) {
        const selectedDate = testData.selectedDate;
        const selectedTime = testData.selectedTime;
        res.json({ selectedDate, selectedTime });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/test2", (req, res) => {
  drivingTestModelnew
    .findOne()
    .then((testData1) => {
      if (testData1) {
        const selectedDate1 = testData1.selectedDate1;
        const selectedTime1 = testData1.selectedTime1;
        res.json({ selectedDate1, selectedTime1 });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/course", (req, res) => {
  courseModel
    .findOne()
    .then((classData) => {
      if (classData) {
        const selectedDate = classData.selectedDate;
        const selectedTime = classData.selectedTime;
        const selectedDate1 = classData.selectedDate1;
        const selectedTime1 = classData.selectedTime1;
        res.json({ selectedDate, selectedTime, selectedDate1, selectedTime1 });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/course2", (req, res) => {
  courseModel2
    .findOne()
    .then((classData1) => {
      if (classData1) {
        const selectedDate2 = classData1.selectedDate2;
        const selectedTime2 = classData1.selectedTime2;
        const selectedDate3 = classData1.selectedDate3;
        const selectedTime3 = classData1.selectedTime3;
        res.json({
          selectedDate2,
          selectedTime2,
          selectedDate3,
          selectedTime3,
        });
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/vehicle-category", (req, res) => {
  submissionModel
    .find()
    .then((vehicleCat) => res.json(vehicleCat))
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/class-status", (req, res) => {
  classAttendModel
    .find()
    .then((classStatus) => res.json(classStatus))
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/exam-status", (req, res) => {
  examAttendModel
    .find()
    .then((examStatus) => res.json(examStatus))
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/test-status", (req, res) => {
  testAttendModel
    .find()
    .then((testStatus) => res.json(testStatus))
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/feedbacks", (req, res) => {
  feedbackModel
    .find()
    .then((feedback) => res.json(feedback))
    .catch((err) => res.json(err));
});

app.get("/dashboard/admin/payments", (req, res) => {
  paymentModel
    .find()
    .then((payment) => res.json(payment))
    .catch((err) => res.json(err));
});

//ROUTES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/marks", resultsRoutes);
app.use("/api/v1/dates", datesRoutes);
app.use("/api/v1/submission", submissionRoutes);
app.use("/api/v1/checking", checkingRoutes);
app.use("/api/v1/training", trainingRoutes);
app.use("/api/v1/opinion", feedbackRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/document", documentRoutes);

//REST API
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Driving School Management System",
  });
});

//PORT
const PORT = process.env.PORT || 8080;

//RUN Listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
