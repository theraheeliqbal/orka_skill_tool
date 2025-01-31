import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const InsurancePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default InsurancePageLayout;
