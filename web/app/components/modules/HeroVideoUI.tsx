import { urlFor } from "@/app/sanity-api/sanity-utils";
import Image from "next/image";
import React from "react";
import AOS from "../ui/AOS";
import { HeroVideoUI } from "@/app/types/sanity.types";
import { _date, _linkResolver, _localizeField } from "@/app/sanity-api/utils";
import Link from "next/link";
import MuxVideoPlayer from "../ui/MuxPlayer";
import useDeviceDetect from "@/app/hooks/useDeviceDetect";
// import MuxVideoPlayer from "../ui/MuxVideo";

type Props = {
  input: HeroVideoUI;
};

const ModuleHeroVideoUI = ({ input }: Props) => {
  const { title, image, videoLandscape, videoPortrait, brand, talent, date } =
    input;
  const { isMobile } = useDeviceDetect();
  const playbackId = isMobile
    ? videoPortrait?.asset?.playbackId
    : videoLandscape?.asset?.playbackId;
  return (
    <section className='module module--hero-video-ui'>
      {!videoLandscape && !videoPortrait && image && image.asset && (
        // <AOS>
        <Image
          src={urlFor(image.asset, 2000)}
          width={image.asset?.metadata?.dimensions?.width || 2000}
          height={image.asset?.metadata?.dimensions?.height || 2000}
          alt={_localizeField(title) || ""}
          sizes='100vw'
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: `${image.asset?.metadata?.dimensions?.width} / ${image.asset?.metadata?.dimensions?.height}`,
            // objectFit: "cover",
          }}
          blurDataURL={image.asset?.metadata?.lqip}
          // placeholder='blur'
          // placeholder={logo.asset?.metadata?.lqip}
        />
        // </AOS>
      )}
      {playbackId && (
        <MuxVideoPlayer
          playbackId={playbackId}
          title={_localizeField(title)}
          controls={true}
        />
      )}

      <div className='overlay'>
        <div className='inner'>
          <svg
            width='85'
            height='85'
            viewBox='0 0 85 85'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 0V85H42.5046C42.5046 29.2763 23.4723 0 0 0Z'
              fill='white'
            />
            <path
              d='M42.5046 0C42.5046 55.7237 61.5369 85 85.0092 85V0H42.5046Z'
              fill='white'
            />
          </svg>

          <div className='title'>{_localizeField(title)}</div>
          <div className='brand'>{brand}</div>
          <div className='talent'>
            <Link href={_linkResolver(talent)}>{talent?.name}</Link>
          </div>
          <div className='date'>{_date(date)}</div>
        </div>
      </div>
    </section>
  );
};

export default ModuleHeroVideoUI;
