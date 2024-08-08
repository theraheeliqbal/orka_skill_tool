"use client";
import { useEffect, useState } from "react";

import { fetchQuestions } from "@/lib/fetchQuestions";
import HeroSection from "@/components/HeroSection";
import QuestionnaireSection from "@/components/QuestionnaireSection";
import MainFooter from "@/components/mainFooter/MainFooter";

export default function Home() {
  const [hide, setHide] = useState<boolean>(false);
  const [level, setLevel] = useState<number | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState();
  const [isSurveyComplete, setIsSurveyComplete] = useState(false);

  const { data, isLoading, error } = fetchQuestions();

  return (
    <div className="">
      {isLoading ? (
        <div className="w-full h-[90vh] flex items-center justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <HeroSection
            description={data[currentIndex].description}
            imageUrl={data[currentIndex].image}
            hide={hide}
          />

          <QuestionnaireSection
            hide={hide}
            setHide={setHide}
            level={level}
            setLevel={setLevel}
            success={success}
            setSuccess={setSuccess}
            questionsList={data || []}
            isLoading={isLoading}
            setCurrentIndex={setCurrentIndex}
            setSurveyAnswers={setSurveyAnswers}
            surveyAnswers={surveyAnswers}
          />
        </>
      )}
    </div>
  );
}
