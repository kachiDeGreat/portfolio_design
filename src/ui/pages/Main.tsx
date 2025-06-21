import React from "react";
import Intro from "./Intro";
import { MotionDiv } from "../components/animations/pageTransitions";

const Main: React.FC = () => {
  return (
    <>
      <MotionDiv>
        <div className="main-content">
          <Intro />
        </div>
      </MotionDiv>
    </>
  );
};

export default Main;
