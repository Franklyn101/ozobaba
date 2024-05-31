import React from "react";

import CardNoShadow from "./common/CardNoShadow";
import ImageCard from "@/public/asset/images/homless.jpg";
import ImageCard2 from "@/public/asset/images/landing.jpg";

type Props = {};

export default function RowCard2({}: Props) {
  return (
    <div className="container mx-auto ">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardNoShadow
          img={ImageCard}
          caption="It describes a strategy focused on improving processes, increasing quality, and cutting waste.To acheive continous delivery, a business should apply te continous improvement mindset"
          title="Child-Centric Approach"
        />
        <CardNoShadow
          // img={ImageCard2}
          caption="It describes a strategy focused on improving processes, increasing quality, and cutting waste.To acheive continous delivery, a business should apply te continous improvement mindset"
          title="Continuous Improvement"
        />
      </div>
    </div>
  );
}
