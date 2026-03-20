"use client";
import React, { useEffect, useMemo, useState } from "react";
import { _localizeField } from "../sanity-api/utils";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { usePageContext } from "../context/PageContext";
import LogoAnimated from "./LogoAnimated";
import { Settings } from "../types/sanity.types";

type Props = {
  settings: Settings;
};

const Splash = ({ settings }: Props) => {
  const pathname = usePathname();
  const [collapse, setCollapse] = useState(false);
  const [del, setDel] = useState(false);
  const { userHistory } = usePageContext();
  const { logosLottie, logo, baseline } = settings;
  const canDisplay = useMemo(
    () => userHistory.length === 1 && pathname === "/",
    [userHistory, pathname],
  );

  useEffect(() => {
    if (!canDisplay) return;
    setTimeout(() => {
      setCollapse(true);
    }, 2000);
  }, [canDisplay]);

  useEffect(() => {
    if (collapse) {
      window.scrollTo(0, window.innerHeight);
      setTimeout(() => {
        setDel(true);
      }, 1000);
    }
  }, [collapse]);

  return pathname === "/" ? (
    <div
      className={clsx(
        "splash",
        // { "is-collapsed": collapse },
        // { hidden: !canDisplay },
        { hidden: del },
      )}
      onMouseMove={() => setCollapse(true)}
      onClick={() => setCollapse(true)}>
      <div className='flex'>
        <div className='loading'>Loading...</div>
        {logosLottie && <LogoAnimated items={logosLottie} logo={logo} />}
        <div className='baseline'>{_localizeField(baseline)}</div>
      </div>
    </div>
  ) : null;
};

export default Splash;
