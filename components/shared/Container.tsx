import { ContainerProps } from "@/types/types";

const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div className={`max-w-container-width mx-auto px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
