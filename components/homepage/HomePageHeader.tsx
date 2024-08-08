import React from "react";
import Link from "next/link";
import Section from "../shared/Section";
import Container from "../shared/Container";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import SocialFooter from "../Socials";

const HomePageHeader = () => {
  return (
    <Section className="flex items-center h-full justify-center text-center">
      <Container className="flex flex-col items-center">
        <p className="text-lg sm:text-2xl text-white mb-2 sm:mb-4 uppercase">
          It Always Starts With
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase text-white mb-4 sm:mb-8">
          Know You Game
        </h1>
        <Link href={"/survey"} passHref className="mb-6 sm:mb-12">
          <Button className="uppercase bg-[#f9a144] text-white gap-2 px-6 py-3 rounded-full ">
            Get Started <FaArrowRight />
          </Button>
        </Link>
        <SocialFooter textClassName="hidden" />
      </Container>
    </Section>
  );
};

export default HomePageHeader;
