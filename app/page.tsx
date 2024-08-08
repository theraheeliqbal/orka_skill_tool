import Image from "next/image";
import HomePageHeader from "@/components/homepage/HomePageHeader";
import HomePageFooter from "@/components/homepage/HomePageFooter";

export default function Home() {
  return (
    <main className="h-screen bg-[linear-gradient(99.32deg,_#ED374D_0.56%,_#FA793F_59.52%,_#F7F651_117.27%)] flex flex-col justify-between">
      <HomePageHeader />
      <HomePageFooter />
    </main>
  );
}
