import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";


const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default HomePageLayout;
