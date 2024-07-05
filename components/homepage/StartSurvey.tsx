import Link from "next/link";
import React from "react";
import Section from "../shared/Section";
import Container from "../shared/Container";

const StartSurvey = () => {
  return (
    <Section>
      <Container className="">
        <p className="text-base sm:text-3xl text-center mb-5 sm:mb-11">
          Do you want to analyse your skills?
        </p>
        <div className="flex items-center justify-center">
          <Link
            href={"/survey"}
            className={`mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded `}
          >
            Start Survey
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default StartSurvey;
