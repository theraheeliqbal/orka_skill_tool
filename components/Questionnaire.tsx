"use client";

import React, { useState } from "react";
import { QuestionnaireProps } from "@/types/types";
import { questions } from "@/content/questions";

const Questionnaire = ({
  setHide,
  setLevel,
  level,
  questionsList,
  isLoading,
  setCurrentIndex,
  setSurveyAnswers,
}: QuestionnaireProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(null | boolean)[]>(
    Array(questionsList?.length).fill(null)
  );

  const handleAnswerChange = (value: boolean): void => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = value;
      return newAnswers;
    });
  };

  const handleNext = (): void => {
    if (currentQuestionIndex < questionsList.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCurrentIndex(currentQuestionIndex + 1);
      calculateLevel();
    }
  };

  const handlePrev = (): void => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setCurrentIndex(currentQuestionIndex - 1);
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
        setSurveyAnswers(answers);
      } else if (
        answers[0] === true &&
        answers[1] === false &&
        answers[2] === false
      ) {
        setLevel(1.5);
        setHide(true);
        setSurveyAnswers(answers);
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
        setSurveyAnswers(answers);
      }

      if (newTrueCount == 1) {
        setLevel(2.5);
        setHide(true);
        setSurveyAnswers(answers);
      }

      if (newTrueCount == 2) {
        setLevel(3.0);
        setHide(true);
        setSurveyAnswers(answers);
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
        setSurveyAnswers(answers);
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
        setSurveyAnswers(answers);
      }

      if (newTrueCount == 1) {
        setLevel(4.0);
        setHide(true);
        setSurveyAnswers(answers);
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
          setSurveyAnswers(answers);
        }

        if (newTrueCount == 1) {
          setLevel(4.5);
          setHide(true);
          setSurveyAnswers(answers);
        }

        if (newTrueCount > 1) {
          setLevel(4.5);
        }
      }

      if (level === 4.5) {
        if (newTrueCount < 1) {
          setLevel(4.5);
          setHide(true);
          setSurveyAnswers(answers);
        }

        if (newTrueCount == 1) {
          setLevel(5.0);
          setHide(true);
          setSurveyAnswers(answers);
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
          setSurveyAnswers(answers);
        }
        if (newTrueCount > 1) {
          setLevel(5.0);
          setHide(true);
          setSurveyAnswers(answers);
        }
      }

      if (level === 5.0) {
        if (newTrueCount < 1) {
          setLevel(5.0);
          setHide(true);
          setSurveyAnswers(answers);
        }
        if (newTrueCount == 1) {
          setLevel(5.5);
          setHide(true);
          setSurveyAnswers(answers);
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
        setSurveyAnswers(answers);
      }

      if (newTrueCount > 2 && newTrueCount < 5) {
        setLevel(6.0);
        setHide(true);
        setSurveyAnswers(answers);
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
        setSurveyAnswers(answers);
      }
    }
  };

  return (
    <div className="">
      {isLoading ? (
        <h4 className="text-center font-medium"> Loading ...</h4>
      ) : (
        <div>
          <div className='container'>
            <div className="flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="w-2/2 md:w-1/2">
                <div className='pr-[4rem]'>
                  <div className='rare-box'></div>
                  <img src="/about.jpg" className="image-about relative w-[100%]" alt="" />
                </div>
              </div>

              {/*Right Content */}
              <div className="w-2/2 md:w-1/2">
                <h5 className="pb-3 sm-pt-3 text-capitalize">Lorem ipsum dolor sit amet consectetur</h5>

                <h2 className="text-[42px]" data-wow-delay="400ms">{questions[currentQuestionIndex]}</h2>


                <p className="pt-[14px] text-[#9da0b2] about-p mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue diam, accumsan vitae justo non, euismod aliquam lectus.
                  Etiam elementum tortor quis risus posuere, in cursus arcu lobortis.
                </p>

                <div className="mb-4 flex items-center gap-[20px] bg-white px-[20px] py-[30px]">
                  <div className="flex-1">
                    <input
                      id="yes"
                      type="radio"
                      name="answer"
                      value="true"
                      checked={answers[currentQuestionIndex] === true}
                      onChange={() => handleAnswerChange(true)}
                      className="custom-radio"
                    />

                    <label htmlFor="yes" className="mx-auto">
                      <span>Yes</span>
                    </label>
                  </div>

                  <div className="flex-1">
                    <input
                      id="no"
                      type="radio"
                      name="answer"
                      value="false"
                      checked={answers[currentQuestionIndex] === false}
                      onChange={() => handleAnswerChange(false)}
                      className="custom-radio"
                    />

                    <label htmlFor="no" className="mx-auto">
                      <span>No</span>
                    </label>
                  </div>
                </div>


                <div className="flex items-center flex-row gap-5 mt-10">
                  {currentQuestionIndex != 0 && (
                    <button
                      onClick={handlePrev}
                      disabled={currentQuestionIndex === 0}
                      className="btn !rounded-[50px]  w-32 btn-large btn-green text-capitalize disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                  )}

                  {currentQuestionIndex != questionsList.length - 1 && (
                    <button
                      onClick={handleNext}
                      className="btn !rounded-[50px] w-32 btn-large btn-green text-capitalize disabled:cursor-not-allowed disabled:opacity-50 "
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
                      className="btn !rounded-[50px] w-32 btn-large btn-green text-capitalize disabled:opacity-50 disabled:cursor-not-allowed"
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
