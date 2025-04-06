"use client";
import { useState } from "react";

import QuestionnaireSection from "@/components/QuestionnaireSection";
import { fetchQuestions } from "@/lib/fetchQuestions";

export default function QuestionnaireUserSection() {
  const [hide, setHide] = useState<boolean>(false);
  const [level, setLevel] = useState<number | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState();
  const [isSurveyComplete, setIsSurveyComplete] = useState(false);

  const { data, isLoading, error } = fetchQuestions();

  return (
    <section className="bg-[#f9f8fa] py-[3.5rem] md:py-[7.5rem]">
      {isLoading ? (
        <div className="w-full flex justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="container mx-auto text-center">
            <h2>Determine your skill set</h2>
          </div>

          <div className="pt-[3.5rem]">
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
          </div>
        </>
      )}
    </section>
  );
}
