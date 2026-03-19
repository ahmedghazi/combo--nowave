"use client";
import React from "react";
import NavPrimary from "./NavPrimary";
import { useScroll } from "../hooks/useScroll";
import Burger from "./ui/Burger";
import { Settings } from "../types/sanity.types";

import LogoAnimated from "./LogoAnimated";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  const { scrollDirection, scrollY } = useScroll();

  return (
    <header
      className={`is-${
        scrollY > 100 && scrollDirection ? scrollDirection : ""
      }`}>
      <div className='inner'>
        <div className='flex justify-between md:justify-start gap-xl  items-center'>
          {settings.logosLottie && (
            <LogoAnimated
              items={settings.logosLottie}
              logo={settings.logo}
              fallback={true}
            />
          )}
          <div className='flex-2'>
            <Burger />
            {settings.navPrimary && <NavPrimary input={settings.navPrimary} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
