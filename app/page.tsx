import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Page = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};
export default Page;
