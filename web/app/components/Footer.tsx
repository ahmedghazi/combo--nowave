"use client";
import React from "react";
import { Settings } from "../types/sanity.types";
import AOS from "./ui/AOS";
import { _linkResolver, _localizeField } from "../sanity-api/utils";
import Link from "next/link";
import LogoAnimated from "./LogoAnimated";

type Props = {
  settings: Settings;
};

const Footer = ({ settings }: Props) => {
  // const {}
  return (
    <footer className={settings.footerDark ? "is-dark" : ""}>
      <div className='grid gap-lg'>
        <div className='logo'>
          {/* <svg
            width='85'
            height='85'
            viewBox='0 0 85 85'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 0V85H42.5046C42.5046 29.2763 23.4723 0 0 0Z'
              fill='black'
            />
            <path
              d='M42.5046 0C42.5046 55.7237 61.5369 85 85.0092 85V0H42.5046Z'
              fill='black'
            />
          </svg> */}
          {settings.logosLottie && (
            <LogoAnimated items={settings.logosLottie} />
          )}
          {/* {settings?.comboLogo && (
            <Image
              src={urlFor(settings.comboLogo?.asset, 230)}
              width={
                settings.comboLogo.asset?.metadata?.dimensions.width || 230
              }
              height={
                settings.comboLogo.asset?.metadata?.dimensions.height || 230
              }
              alt={"Combo Studio settings.comboLogo"}
              sizes='100vw'
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: `${settings.comboLogo.asset?.metadata?.dimensions.width} / ${settings.comboLogo.asset?.metadata?.dimensions.height}`,
                // objectFit: "cover",
              }}
              blurDataURL={settings.comboLogo.asset?.metadata?.lqip}
              // placeholder='blur'
              // placeholder={logo.asset?.metadata?.lqip}
            />
          )} */}
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
