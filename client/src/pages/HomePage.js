import React from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Layout/Slider";
import Body from "../components/Layout/Body";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"Savingo Driving School | Home Page"}>
      <Slider />
      <Body />
    </Layout>
  );
};

export default HomePage;
