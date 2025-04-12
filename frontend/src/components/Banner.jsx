import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to My Website
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Start your Blog today and join a comunity of writers and reader who
          are passionate about sharing their stories and ideas. We offer
          everything you need to get started, from helful tips
        </p>
        <div>
          <Link
            to={"/"}
            className="font-medium hover:text-orange-500 inline-flex items-center py-1"
          >
            Lern more <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
