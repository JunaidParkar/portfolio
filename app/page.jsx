import CursorClient from "@/components/cursor";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/home/hero";

export default function Home() {
  // useEffect(() => {

  // return () => {
  //   dom.revert();
  //   c.revert();
  // };
  // }, []);
  const text = "Code Reducer Library • Next.js Edition • ";

  return (
    <>
      <CursorClient cursor="cursor-element" />
      <div id="cursor-element" className="w-62.5 h-62.5 rounded-[50%] z-[-1] fixed bg-radial from-gray-400 from-0% via-gray-600 via-40% to-gray-800 to-80% to-transparent-100% opacity-0"></div>
      <div className="z-0 backdrop-blur-3xl min-h-dvh">
        <Navbar />
        <div className="w-full h-dvh relative">
            <Hero />
        </div>
        <div className="w-full h-dvh relative">
            <Hero />
        </div>
      </div>


      {/* MARQUEE SECTION: Placed at the bottom of the screen */}
      

      
    </>
  );
}
