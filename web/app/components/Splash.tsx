"use client";
import React, { useEffect, useState } from "react";
import { Settings } from "../types/sanity.types";
import { _localizeField } from "../sanity-api/utils";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { usePageContext } from "../context/PageContext";
import LogoAnimated from "./LogoAnimated";

type Props = {
  settings: Settings;
};

const Splash = ({ settings }: Props) => {
  const pathname = usePathname();
  const [collapse, setCollapse] = useState(false);
  const { userHistory } = usePageContext();
  const canDisplay = userHistory.length === 1 && pathname === "/";
  const { logosLottie, logo, baseline } = settings;
  console.log(userHistory);
  useEffect(() => {
    if (!canDisplay) return;
    setTimeout(() => {
      setCollapse(true);
    }, 2000);
  }, [canDisplay]);

  return (
    <div
      className={clsx(
        "splash",
        { "is-collapsed": collapse },
        { hidden: !canDisplay },
      )}
      onMouseMove={() => setCollapse(true)}
      onClick={() => setCollapse(true)}>
      <div className='flex'>
        <div className='loading'>Loading...</div>
        {logosLottie && <LogoAnimated items={logosLottie} logo={logo} />}
        <div className='baseline'>{_localizeField(baseline)}</div>
      </div>
    </div>
  );
};

export default Splash;
