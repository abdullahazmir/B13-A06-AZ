import { LuCircleDot } from "react-icons/lu";
import BannerImage from "../../assets/banner.png";
import { MdPlayArrow } from "react-icons/md";

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-5 py-2 rounded-full">
                        <LuCircleDot /> New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter ">

                        <span className="text-7xl">
                            Supercharge Your <br />
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="btn bg-linear-to-r from-blue-500 to-blue-400   px-6 py-4 rounded-2xl font-semibold text-lg  flex items-center gap-3  text-white">
                            Explore Products
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </button>

                        <button className="btn btn-outline  px-6 py-4 rounded-2xl font-semibold text-lg  flex items-center gap-3 text-blue-400">
                          <MdPlayArrow />  Watch Video
                          
                        </button>
                    </div>

                   
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain  rounded-3xl "
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;