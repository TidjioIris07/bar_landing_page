import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-full bg-black">Hello</div>
    </main>
  );
};
export default Page;
