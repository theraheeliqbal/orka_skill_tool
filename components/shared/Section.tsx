import { SectionProps } from "@/types/types";

const Section = ({ className = "", children, ...otherProps }: SectionProps) => {
  return (
    <div
      {...otherProps}
      className={`py-8 sm:py-12 md:py-16 w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
