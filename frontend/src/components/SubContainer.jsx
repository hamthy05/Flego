import Hom from "../assets/home.webp";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function SubContainer({ title }) {
  return (
    <div>
      <div
        className=" pt-52 py-12"
        style={{
          backgroundImage: `url(${Hom})`,
          filter: "brightness(0.8)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white  mb-4 animate-slide-in">
            Flego innovation | {title}
          </h1>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white hover:text-white/70 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-white" />
            <span className="text-white/70">{title}</span>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default SubContainer;
