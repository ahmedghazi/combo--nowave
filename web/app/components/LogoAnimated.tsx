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
import Logo from "./Logo";

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
            <Logo />
          )}
        </Link>
      </div>
    </div>
  );
};

export default LogoAnimated;
