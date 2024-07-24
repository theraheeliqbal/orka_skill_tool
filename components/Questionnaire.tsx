"use client";

import React, { useState } from "react";
import { QuestionnaireProps } from "@/types/types";
import { questions } from "@/content/questions";
import { type } from "os";
import { Console } from "console";

const Questionnaire = ({
  setHide,
  setLevel,
  level,
  questionsList,
  isLoading,
}: QuestionnaireProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(null | boolean)[]>(
    Array(questionsList?.length).fill(null)
  );

  const handleAnswerChange = (value: boolean): void => {
    // RR
    //answers[currentQuestionIndex] = value;
    // RR

    console.log("Current Answer: " + answers[currentQuestionIndex]);

    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = value;
      return newAnswers;
    });

    //console.log("Current Answer: " + answers[currentQuestionIndex]);
  };

  const handleNext = (): void => {
    if (currentQuestionIndex < questionsList.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      calculateLevel();
    }
  };

  const handlePrev = (): void => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const calculateLevel = (): void => {
    const trueCount = answers.filter((answer) => answer === true).length;
    // Questions 1-3
    if (currentQuestionIndex == 2) {
      if (
        answers[0] === false &&
        answers[1] === false &&
        answers[2] === false
      ) {
        setLevel(1.0);
        setHide(true);
      } else if (
        answers[0] === true &&
        answers[1] === false &&
        answers[2] === false
      ) {
        setLevel(1.5);
        setHide(true);
      } else if (
        answers[0] === true &&
        (answers[1] === true || answers[2] === true)
      ) {
        setLevel(2.0);
      }
    }

    //Questions 4-7
    if (currentQuestionIndex == 6) {
      const newAnswers = answers.slice(3, 7);
      const newTrueCount = newAnswers.filter(
        (answer) => answer === true
      ).length;

      if (newTrueCount < 1) {
        setLevel(2.0);
        setHide(true);
      }

      if (newTrueCount == 1) {
        setLevel(2.5);
        setHide(true);
      }

      if (newTrueCount == 2) {
        setLevel(3.0);
        setHide(true);
      }

      if (newTrueCount >= 3) {
        setLevel(3.5);
      }
    }

    //Question 8
    if (currentQuestionIndex == 7) {
      if (answers[7]) {
        setLevel(3.5);
      } else {
        setLevel(3.5);
        setHide(true);
      }
    }

    // Questions 9-11
    if (currentQuestionIndex == 10) {
      const newAnswers = answers.slice(8, 11);
      const newTrueCount = newAnswers.filter(
        (answer) => answer === true
      ).length;

      if (newTrueCount < 1) {
        setLevel(3.5);
        setHide(true);
      }

      if (newTrueCount == 1) {
        setLevel(4.0);
        setHide(true);
      }

      if (newTrueCount == 2) {
        setLevel(4.0);
      }

      if (newTrueCount > 2) {
        setLevel(4.5);
      }
    }

    //Question 12-13
    if (currentQuestionIndex == 12) {
      const newAnswers = answers.slice(11, 13);
      const newTrueCount = newAnswers.filter(
        (answer) => answer === true
      ).length;

      if (level === 4.0) {
        if (newTrueCount < 1) {
          setLevel(4.0);
          setHide(true);
        }

        if (newTrueCount == 1) {
          setLevel(4.5);
          setHide(true);
        }

        if (newTrueCount > 1) {
          setLevel(4.5);
        }
      }

      if (level === 4.5) {
        if (newTrueCount < 1) {
          setLevel(4.5);
          setHide(true);
        }

        if (newTrueCount == 1) {
          setLevel(5.0);
          setHide(true);
        }

        if (newTrueCount > 1) {
          setLevel(5.0);
        }
      }
    }

    // Questions 14-15
    if (currentQuestionIndex == 14) {
      const newAnswers = answers.slice(13, 15);
      const newTrueCount = newAnswers.filter(
        (answer) => answer === true
      ).length;

      if (level === 4.5) {
        if (newTrueCount < 1) {
          setLevel(4.5);
          setHide(true);
        }
        if (newTrueCount > 1) {
          setLevel(5.0);
          setHide(true);
        }
      }

      if (level === 5.0) {
        if (newTrueCount < 1) {
          setLevel(5.0);
          setHide(true);
        }
        if (newTrueCount == 1) {
          setLevel(5.5);
          setHide(true);
        }

        if (newTrueCount > 1) {
          setLevel(5.5);
        }
      }
    }

    // Questions 16-20
    if (currentQuestionIndex == 19) {
      const newAnswers = answers.slice(15, 21);
      const newTrueCount = newAnswers.filter(
        (answer) => answer === true
      ).length;

      if (newTrueCount < 3) {
        setLevel(5.5);
        setHide(true);
      }

      if (newTrueCount > 2 && newTrueCount < 5) {
        setLevel(6.0);
        setHide(true);
      }
      if (newTrueCount === 5) {
        setLevel(6.5);
      }
    }

    // Question 21
    if (currentQuestionIndex == 20) {
      if (answers[20] === true) {
        setLevel(7.0);
        setHide(true);
      }
    }
  };

  return (
    <div className="flex items-center justify-center py-6 sm:py-8">
      <div>
        <p className="text-base sm:text-3xl text-center mb-5 sm:mb-11">
          Determine Your Skill Level:{level}
        </p>
        {isLoading ? (
          <h4 className="text-center font-medium"> Loading ...</h4>
        ) : (
          <div>
            <h2 className="text-xl font-light mb-4 text-center">
              {questions[currentQuestionIndex]}
            </h2>

            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="space-y-3">
                <div>
                  <label className="inline-flex items-center mr-4 cursor-pointer">
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
                </div>
                <div>
                  <label className="inline-flex cursor-pointer items-center">
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
              </div>
            </div>
            <div className="flex justify-center items-center flex-row gap-5">
              {currentQuestionIndex != 0 && (
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="bg-blue-500 text-white w-32 px-8 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
              )}
              {currentQuestionIndex != questionsList.length - 1 && (
                <button
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-8 py-2 rounded w-32 disabled:cursor-not-allowed disabled:opacity-50 "
                  disabled={
                    answers[currentQuestionIndex] === null ||
                    answers[currentQuestionIndex] === undefined
                  }
                >
                  Next
                </button>
              )}
              {currentQuestionIndex === 20 && (
                <button
                  onClick={calculateLevel}
                  className="bg-green-500 text-white w-32 px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={
                    answers[currentQuestionIndex] === null ||
                    answers[currentQuestionIndex] === undefined
                  }
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
