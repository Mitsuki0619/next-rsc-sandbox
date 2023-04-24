import { Detail } from "@/components/dan-quiz/Detail";
import { Toggle } from "@/components/dan-quiz/Toggle";
import { NextPage } from "next";
import React from "react";

const DanQuizPage: NextPage = () => {
  return (
    <div>
      <Toggle>
        <Detail />
      </Toggle>
    </div>
  );
};

export default DanQuizPage;
