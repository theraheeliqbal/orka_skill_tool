"use client";
import React, { useState } from "react";
import { questions } from "@/content/questions";

const Survey: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(null | boolean)[]>(
    Array(questions.length).fill(null)
  );
  const [level, setLevel] = useState<number | null>(null);
  const [endSurvey, setEndSurvey] = useState<boolean>(true);

  const handleAnswerChange = (value: boolean) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = value;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      calculateLevel();
    }
    // } else {
    //   calculateLevel();
    // }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const calculateLevel = () => {
    const trueCount = answers.filter((answer) => answer === true).length;

    if (answers[0] === false && answers[1] === false) {
      setLevel(1.0);
      setEndSurvey(false);
    } else if (
      answers[0] === true &&
      answers[1] === false &&
      answers[2] === false
    ) {
      setLevel(1.5);
      setEndSurvey(false);
    } else if (
      answers[0] === true &&
      (answers[1] === true || answers[2] === true)
      //   (answers[3] === false &&
      //     answers[4] === false &&
      //     answers[5] === false &&
      //     answers[6] === false)
    ) {
      setLevel(2.0);
    }

    if (currentQuestionIndex >= 3 && currentQuestionIndex <= 6) {
      if (
        answers[3] === false &&
        answers[4] === false &&
        answers[5] === false &&
        answers[6] === false
      ) {
        setLevel(2.0);
        setEndSurvey(false);
      }

      if (currentQuestionIndex == 6) {
        if (trueCount < 2) {
          setLevel(2.5);
          setEndSurvey(false);
        } else if (trueCount == 2) {
          setLevel(3);
        } else if (trueCount >= 3) {
          setLevel(3.5);
        }
      }
    }

    if (currentQuestionIndex == 7) {
      if (!answers[7]) {
        setLevel(3.5);
        setEndSurvey(false);
      } else {
        setLevel(3.5);
      }
    }

    if (currentQuestionIndex >= 8 && currentQuestionIndex <= 12) {
      if (
        answers[8] === false &&
        answers[9] === false &&
        answers[10] === false &&
        answers[11] === false
      ) {
        setLevel(3.5);
        setEndSurvey(false);
      }

      if (currentQuestionIndex == 12) {
        if (trueCount < 2) {
          setLevel(4.0);
          setEndSurvey(false);
        } else if (trueCount == 2) {
          setLevel(4.0);
        } else if (trueCount >= 3) {
          setLevel(4.5);
        }
      }
    }
  };

  return (
    <div className="survey-container">
      <h2 className="text-2xl font-bold mb-4">
        {questions[currentQuestionIndex].question}
      </h2>
      <p>Question No: {currentQuestionIndex + 1}</p>

      <div className="mb-4">
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="answer"
            value="true"
            checked={answers[currentQuestionIndex] === true}
            onChange={() => handleAnswerChange(true)}
            className="form-radio"
          />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="answer"
            value="false"
            checked={answers[currentQuestionIndex] === false}
            onChange={() => handleAnswerChange(false)}
            className="form-radio"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
      <div className="flex justify-start">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:cursor-not-allowed disabled:bg-slate-600"
            disabled={!endSurvey}
          >
            Next
          </button>
        ) : (
          <button
            onClick={calculateLevel}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
      </div>
      {level && (
        <p className="mt-4">
          Your skill level is: <strong>{level}</strong>
        </p>
      )}
    </div>
  );
};

export default Survey;
