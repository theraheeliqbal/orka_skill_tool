import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";


const LatestNewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default LatestNewsLayout;
