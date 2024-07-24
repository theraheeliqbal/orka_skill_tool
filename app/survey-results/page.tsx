"use client";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import { fetchUserWithID } from "@/lib/fetchUserWithID";
import Link from "next/link";
import React from "react";

const SurveyResultPage = ({
  searchParams,
}: {
  searchParams: { [id: string]: string | string[] | undefined };
}) => {
  const { id } = searchParams;

  const { data, isLoading, error } = fetchUserWithID(id);

  return (
    <Section className="w-full min-h-screen">
      <Container>
        {isLoading && (
          <div className="py-8 sm:py-16">
            <h4 className="text-center font-medium"> Result Loading ...</h4>
          </div>
        )}

        {error && (
          <div className="py-8 sm:py-16">
            <h4 className="text-center font-medium">
              {" "}
              Something bad happened. Please referesh the page.
            </h4>
          </div>
        )}

        {!isLoading && !error && (
          <div className="w-full h-full">
            <p className="text-base sm:text-3xl text-center mb-5 sm:mb-11 pt-11 sm:py-t">
              {data.level ? "Your UTR" : "User not found"}
            </p>
            <p className="text-black text-base sm:text-3xl text-center">
              {data.level + ".0"}
            </p>
          </div>
        )}

        <div className="w-full flex justify-center items-center">
          <Link
            href={"/survey"}
            className={`mt-4 px-4 py-2 bg-blue-500 w-32  text-white font-bold rounded `}
          >
            Test Again...
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default SurveyResultPage;
