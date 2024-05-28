import React from "react";
import { Banner, LogementsList } from "../../components";

const Home = () => {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        image={require("../../assets/banner1.png")}
      />
      <LogementsList />
    </div>
  );
};

export default Home;
