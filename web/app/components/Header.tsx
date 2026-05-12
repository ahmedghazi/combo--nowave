"use client";
import React from "react";
import NavPrimary from "./NavPrimary";
import { useScroll } from "../hooks/useScroll";
import Burger from "./ui/Burger";
import { Settings } from "../types/sanity.types";

import LogoAnimated from "./LogoAnimated";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  const { scrollDirection, scrollY } = useScroll();
  const [isAboveViewport, setIsAboveViewport] = React.useState(true);
  const pathname = usePathname();
  React.useEffect(() => {
    setIsAboveViewport(scrollY >= window.innerHeight);
  }, [scrollY]);

  return (
    <header
      className={clsx(
        `is-${scrollY > 100 && scrollDirection ? scrollDirection : ""}`,
        isAboveViewport ? "is-above-viewport" : "",
        pathname === "/" ? "is-home" : "",
      )}>
      <div className='inner'>
        <div className='flex justify-between md:justify-start gap-xl  items-center'>
          <Link href='/'>
            <>
              {settings.logosLottie && (
                <LogoAnimated
                  items={settings.logosLottie}
                  logo={settings.logo}
                  fallback={true}
                />
              )}
              {!settings.logosLottie && <Logo />}
            </>
          </Link>
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
