import React, { useState } from "react";

const Home = () => {
  const [color1, setColor1] = useState("red");
  //   const [color2, setColor2] = useState(true);
  //   const [color3, setColor3] = useState(true);

  return (
    <>
      <div className="support"></div>
      <div className="container traffic-light ">
        <div
          onClick={() => setColor1("red")}
          className={"light red" + (color1 === "red" ? " red glow" : "")}
        ></div>
        <div
          onClick={() => setColor1("yellow")}
          className={
            "light yellow" + (color1 === "yellow" ? " yellow glow" : "")
          }
        ></div>
        <div
          onClick={() => setColor1("green")}
          className={"light green" + (color1 === "green" ? " green glow" : "")}
        ></div>
      </div>
    </>
  );
};

export default Home;
