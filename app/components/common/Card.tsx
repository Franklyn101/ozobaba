import React from "react";
import ImageCard from "@/public/asset/images/landing.jpg";
import Image from "next/image";
// import Motion from "framer-motion";
import styles from "../common/style.module.css";

type Props = {};

export default function Card({}: Props) {
  return (
    // <Motion>
      <div className="relative h-fit overflow-hidden flex flex-col  w-full bg-white rounded-lg shadow-md gap-2">
        <div
          className={`w-full h-52 relative cursor-pointer ${styles.socialIcon}`}
        >
          <Image
            className={`w-full relative  md:w-full md:h-auto`}
            src={ImageCard}
            alt=""
          />
        </div>
        <p
          style={{ fontFamily: "Jost" }}
          className="text-lg font-medium text-black p-3"
        >
        
        </p>
      </div>
    // </Motion>
  );
}
