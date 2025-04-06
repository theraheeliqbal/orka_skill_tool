import React from "react";
import Questionnaire from "@/components/Questionnaire";
import UserForm from "@/components/forms/UserForm";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import SuccessMessage from "./SuccessMessage";

type QuestionnaireSectionProps = {
  hide: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
  level: number | null;
  setLevel: React.Dispatch<React.SetStateAction<number | null>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  questionsList: any[];
  isLoading: boolean;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setSurveyAnswers: React.Dispatch<React.SetStateAction<any>>;
  surveyAnswers: any;
};

const QuestionnaireSection: React.FC<QuestionnaireSectionProps> = ({
  hide,
  setHide,
  level,
  setLevel,
  success,
  setSuccess,
  questionsList,
  isLoading,
  setCurrentIndex,
  setSurveyAnswers,
  surveyAnswers,
}) => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        {!hide && (
          <Questionnaire
            setHide={setHide}
            setLevel={setLevel}
            level={level}
            questionsList={questionsList}
            isLoading={isLoading}
            setCurrentIndex={setCurrentIndex}
            setSurveyAnswers={setSurveyAnswers}
          />
        )}

        <div className="pb-10">
          {hide && !success && (
            <UserForm
              level={level}
              setSuccess={setSuccess}
              success={success}
              setLevel={setLevel}
              surveyAnswers={surveyAnswers}
            />
          )}

          {hide && (
            <SuccessMessage
              success={success}
              setHide={setHide}
              setLevel={setLevel}
              setSuccess={setSuccess}
              setCurrentIndex={setCurrentIndex}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionnaireSection;
