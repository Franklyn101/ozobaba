import React from "react";

import CardNoShadow from "./common/CardNoShadow";
import ImageCard from "@/public/asset/images/homless.jpg";
import ImageCard2 from "@/public/asset/images/landing.jpg";

type Props = {};

export default function RowCard({}: Props) {
  return (
    <div className="container mx-auto ">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardNoShadow
          // img={ImageCard}
          caption="it gives all children the same oppurtunity to access and participate in all parts of the service; Adjusts and tailors activities towards all children unique needs; including the child,their family and support team in decision making, makes the child's voice and prefrences a priority."
          title="Child-Centric Approach:"
        />
        <CardNoShadow
          img={ImageCard2}
          caption="We are committed to constant improvement and innovation. Feedback mechanisms built into our system enable us to gather insights, identify areas for enhancement, and adapt our practices to best serve the children entrusted to our care.

Join us in making a difference in the lives of orphaned and vulnerable children. Together, we can create a brighter future filled with hope, opportunity, and love. Welcome to  where every child matters."
          title="Continuous Improvement:"
        />
      </div>
    </div>
  );
}
