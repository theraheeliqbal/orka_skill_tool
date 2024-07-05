"use client";
import { useState } from "react";
import UserForm from "@/components/forms/UserForm";
import Questionnaire from "@/components/Questionnaire";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import { fetchQuestions } from "@/lib/fetchQuestions";

export default function Home() {
  const [hide, setHide] = useState<boolean>(false);
  const [level, setLevel] = useState<number | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const { data, isLoading, error } = fetchQuestions();

  console.log("questions==>", data);

  return (
    <Section className="h-full w-full">
      <Container>
        {!hide && (
          <Questionnaire
            setHide={setHide}
            setLevel={setLevel}
            level={level}
            questionsList={data || []}
            isLoading={isLoading}
          />
        )}

        {hide && !success && (
          <UserForm
            level={level}
            setSuccess={setSuccess}
            success={success}
            setLevel={setLevel}
          />
        )}

        {hide && (
          <div
            className={`flex items-center justify-center flex-col ${
              success && "py-14 sm:py-36"
            }`}
          >
            {success && (
              <div>
                <p className="text-base sm:text-3xl text-center mb-5 sm:mb-11">
                  Thank You!
                </p>
                <p className="bg-green-300 p-2 rounded">
                  Check your email to see the result.
                </p>
              </div>
            )}

            <button
              onClick={() => {
                setHide(!hide);
                setLevel(null);
                setSuccess(false);
              }}
              className={`mt-4 px-4 py-2 bg-blue-500 w-32  text-white font-bold rounded `}
            >
              Test Again
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
