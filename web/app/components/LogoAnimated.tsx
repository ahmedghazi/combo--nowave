import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import LottiePlayer from "./ui/LottiePlayer";
import { urlForFile } from "../sanity-api/sanity-utils";
import {
  SanityFileAssetReference,
  SanityImageAssetReference,
  SanityImageCrop,
  SanityImageHotspot,
} from "../types/sanity.types";

type Props = {
  fallback?: boolean;
  items: Array<{
    asset?: SanityFileAssetReference;
    media?: unknown;
    _type: "file";
    _key: string;
  }>;
  logo?: {
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

const LogoAnimated = ({ items, fallback = false, logo }: Props) => {
  const [randomLogo, setRandomLogo] = useState<string>("");
  const hasInitialized = useRef(false);

  useEffect(() => {
    // return
    // Only set random logo if logosLottie changes or on first mount
    if (!hasInitialized.current || items) {
      if (items && items.length > 0) {
        const randomIndex = Math.floor(Math.random() * items.length);
        if (items[randomIndex] && items[randomIndex].asset) {
          // Use the async urlForFile function
          urlForFile(items[randomIndex].asset).then((url) => {
            if (url) {
              // Defer setState to avoid synchronous calls within effect
              setTimeout(() => setRandomLogo(url), 0);
            }
          });
        }
      }
      hasInitialized.current = true;
    }
  }, [items]);

  return (
    <div className='logo-animated'>
      <div className='logo logo--nowave'>
        <Link href={"/"}>
          {randomLogo && !fallback ? (
            <LottiePlayer file={randomLogo} loop={true} />
          ) : (
            <svg
              width='150'
              height='37'
              viewBox='0 0 150 37'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_15_103)'>
                <path
                  d='M0 0V37H18.5384C18.5384 12.7438 10.2374 0 0 0Z'
                  fill='#010101'
                />
                <path
                  d='M131.466 0C131.466 24.2562 139.767 37 150.004 37V0H131.466Z'
                  fill='#010101'
                />
                <path
                  d='M25.7974 8.24879H28.6083L39.792 24.5591V8.24879H42.3114V28.4882H39.5005L28.3168 12.2377V28.4882H25.7974V8.24879Z'
                  fill='#010101'
                />
                <path
                  d='M44.4873 21.0882C44.4873 16.6649 47.7614 13.4531 52.1933 13.4531C56.6253 13.4531 59.8994 16.661 59.8994 21.0882C59.8994 25.5155 56.6253 28.7512 52.1933 28.7512C47.7614 28.7512 44.4873 25.5433 44.4873 21.0882ZM57.4358 21.0882C57.4358 17.8803 55.1759 15.7086 52.1933 15.7086C49.2107 15.7086 46.9508 17.8764 46.9508 21.0882C46.9508 24.3001 49.2107 26.4957 52.1933 26.4957C55.1759 26.4957 57.4358 24.3279 57.4358 21.0882Z'
                  fill='#010101'
                />
                <path
                  d='M59.041 8.53969V8.24879H61.7082L66.0244 24.3837L70.7757 8.24879H73.6146L78.4259 24.3837L82.7141 8.24879H85.4092V8.53969L79.7874 28.4922H77.1522L72.2251 12.3851L67.2142 28.4922H64.6069L59.045 8.53969H59.041Z'
                  fill='#010101'
                />
                <path
                  d='M84.9697 23.9813C84.9697 21.5505 86.7066 19.4703 90.2442 19.4703H95.1712V19.0957C95.1712 17.446 94.0413 15.6568 91.3462 15.6568C89.0583 15.6568 87.9843 16.9877 87.7247 18.2589H85.4089C85.8721 15.3977 88.1599 13.4571 91.3502 13.4571C95.4627 13.4571 97.523 16.2904 97.523 19.0957V26.3244H98.9723V28.4922H97.1197C95.846 28.4922 95.323 27.7988 95.323 26.7588V26.2088C94.6562 27.6554 93.0032 28.7552 90.34 28.7552C87.4732 28.7552 84.9817 26.9062 84.9817 23.9852L84.9697 23.9813ZM95.1672 22.6503V21.6381H90.0964C88.7908 21.6381 87.4293 22.3913 87.4293 23.9813C87.4293 25.5712 88.8507 26.5555 90.6434 26.5555C93.5701 26.5555 95.1632 24.7623 95.1632 22.6503H95.1672Z'
                  fill='#010101'
                />
                <path
                  d='M98.2378 14.003V13.7121H100.817L105.772 25.5673L110.551 13.7121H113.187V14.003L107.074 28.4882H104.439L98.2378 14.003Z'
                  fill='#010101'
                />
                <path
                  d='M112.608 21.0882C112.608 16.6649 115.678 13.4531 120.11 13.4531C123.616 13.4531 127.325 15.7086 127.325 21.0882V22.0127H115.127C115.475 24.7025 117.387 26.4957 120.17 26.4957C121.995 26.4957 123.62 25.6589 124.43 24.0092H127.01C126.083 26.9859 123.444 28.7512 120.17 28.7512C115.622 28.7512 112.608 25.5433 112.608 21.0882ZM124.806 19.817C124.315 16.6928 122.083 15.7125 120.11 15.7125C117.475 15.7125 115.65 17.3025 115.183 19.817H124.802H124.806Z'
                  fill='#010101'
                />
                <path
                  d='M119.643 8.84653H118.677V8.24879H121.228V8.84653H120.27V11.4048H119.643V8.84653ZM121.915 8.24879H122.642L123.668 10.6039L124.694 8.24879H125.421V11.4048H124.822V9.31276L123.943 11.4048H123.4L122.522 9.31276V11.4048H121.923V8.24879H121.915Z'
                  fill='#010101'
                />
              </g>
              <defs>
                <clipPath id='clip0_15_103'>
                  <rect width='150' height='37' fill='white' />
                </clipPath>
              </defs>
            </svg>
          )}
        </Link>
      </div>
    </div>
  );
};

export default LogoAnimated;
