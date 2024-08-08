"use client";
import React, { useState } from "react";
import Section from "./shared/Section";
import Container from "./shared/Container";
import Description from "./Description";
import QuestionImage from "./QuestionImage";

type QuestionDetailsType = {
  description: string;
  imageUrl: string;
};

const QuestionsDetails: React.FC<QuestionDetailsType> = ({
  description,
  imageUrl,
}) => {
  console.log(imageUrl);
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };
  return (
    <Section className="flex justify-center items-center md:py-5">
      <Container className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 max-w-[900px] mx-auto">
        <div
          className={`${
            !imageLoaded ? "w-full" : "sm:w-1/2"
          }  flex justify-center items-center sm:h-[300px]`}
        >
          <Description description={description} />
        </div>
        {imageLoaded && (
          <div className="sm:w-[40%] w-[300px] flex justify-center items-center sm:h-[300px] ">
            <QuestionImage imageUrl={imageUrl} onError={handleImageError} />
          </div>
        )}
      </Container>
    </Section>
  );
};

export default QuestionsDetails;
