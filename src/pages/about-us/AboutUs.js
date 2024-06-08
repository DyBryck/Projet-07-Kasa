import React from "react";
import { Banner } from "../../components";
import Collapse from "../../components/collapse/Collapse";
import auboutUsContent from "../../data/about_us.json";

const AboutUs = () => {
  return (
    <div>
      <Banner
        title=""
        image={require("../../assets/banner2.png")}
        opacity="light"
      />
      <div>
        {auboutUsContent.map((aboutUsItem, index) => (
          <div key={aboutUsItem.id + "" + index} className="about-us-collapse">
            <Collapse title={aboutUsItem.title} content={aboutUsItem.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
