import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Pagenotfound from "./pages/Pagenotfound";
import Journey from "./pages/Journey";
import Gallery from "./pages/Gallery";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import TrainSessions from "./pages/user/TrainSessions";
import MyJourney from "./pages/user/MyJourney";
import MyPayments from "./pages/user/MyPayments";
import LearnSessions from "./pages/user/LearnSessions";
import Trail from "./pages/user/Trail";
import Feedback from "./pages/user/Feedback";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Documents from "./pages/Admin/Documents";
import Test from "./pages/Admin/Test";
import Results from "./pages/Admin/Results";
import Bookings from "./pages/Admin/Bookings";
import Courses from "./pages/Admin/Courses";
import Payments from "./pages/Admin/Payments";
import Feedbacks from "./pages/Admin/Feedbacks";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import ForgotPasssword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/training-sessions" element={<TrainSessions />} />
          <Route path="user/my-journey" element={<MyJourney />} />
          <Route path="user/learning-sessions" element={<LearnSessions />} />
          <Route path="user/driving-test" element={<Trail />} />
          <Route path="user/feedback" element={<Feedback />} />
          <Route path="user/my-payments" element={<MyPayments />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/documents" element={<Documents />} />
          <Route path="admin/courses" element={<Courses />} />
          <Route path="admin/bookings" element={<Bookings />} />
          <Route path="admin/test" element={<Test />} />
          <Route path="admin/results" element={<Results />} />
          <Route path="admin/payments" element={<Payments />} />
          <Route path="admin/feedbacks" element={<Feedbacks />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
