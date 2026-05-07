"use client";
import React from "react";
import { Settings } from "../types/sanity.types";
import AOS from "./ui/AOS";
import { _linkResolver, _localizeField } from "../sanity-api/utils";
import Link from "next/link";
import LogoAnimated from "./LogoAnimated";
import Logo from "./Logo";

type Props = {
  settings: Settings;
};

const Footer = ({ settings }: Props) => {
  // const {}
  return (
    <footer className={settings.footerDark ? "is-dark" : ""}>
      <div className='grid gap-lg'>
        <div className='logo'>
          {settings.logosLottie && (
            <LogoAnimated items={settings.logosLottie} />
          )}
          {!settings.logosLottie && <Logo />}
        </div>
        <div className='text-center'>
          <a href='mailto:contact@nowaveagency.com' className='text-xl'>
            contact@nowaveagency.com
          </a>
        </div>
        <nav id='nav-secondary'>
          <AOS delay={1}>
            <ul className='flex justify-center gap-md'>
              {settings?.navSecondary?.map((item, i) => (
                <li key={i}>
                  {item.link && item.label && item._type === "linkExternal" && (
                    <a
                      className='cta'
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'>
                      {item.label}
                    </a>
                  )}
                  {item.link && item.label && item._type === "linkInternal" && (
                    <Link href={_linkResolver(item.link)}>
                      {_localizeField(item.label)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </AOS>
        </nav>
        <div className='credits text-center'>
          Website designed by Ahmed Gazi / Art direction by Nicolas Malinowsky
        </div>
      </div>
      {/* <div className='grid md:grid-cols-3 gap-lg md:gap-md'>
        <div className='text'>
          {settings?.footerInfos && (
            <div className='text mx-auto'>
              <AOS>
                <PortableText
                  value={_localizeField(settings.footerInfos)}
                  components={portableTextComponents}
                />
              </AOS>
            </div>
          )}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
