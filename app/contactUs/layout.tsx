import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";


const ContactPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default ContactPageLayout;
