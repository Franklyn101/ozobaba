import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import ImageProfile from "../../../public/asset/images/download.jpg";
import { MdiSignOut } from "@/app/icons/MdiSignOut";
import Tabs from "./Tabs";
import LogoTab from "./LogoTab";

type Props = {};

export default function DashboardNav({}: Props) {
  return (
    <div className="w-full h-16 bg-white fixed z-20 px-24 pl-48 pr-24">
      <div className="h-full hidden lg:flex justify-between gap-2">
        <LogoTab />
        <div className="w-4/5 h-full  flex justify-end ">
          <div className="flex h-full w-1/2 flex-row  pl-5 items-center justify-end gap-6">
            <Image
              width={40}
              height={40}
              alt="photo"
              className={`w-10 h-10 rounded-full ${styles.avatar} `}
              src={ImageProfile}
            />

            <Tabs title="Log-out" href="/" icon={<MdiSignOut />} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styless = {
  font: { fontFamily: "Jost" },
};
