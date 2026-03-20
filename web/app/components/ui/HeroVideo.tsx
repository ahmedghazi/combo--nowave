import useDeviceDetect from "@/app/hooks/useDeviceDetect";
import { HeroVideo } from "@/app/types/sanity.types";
import React from "react";
import Figure from "./Figure";
import { _date, _linkResolver, _localizeField } from "@/app/sanity-api/utils";
import MuxVideoPlayer from "./MuxPlayer";
import Link from "next/link";

type Props = {
  input: HeroVideo;
  paused?: boolean;
};

const HeroVideoComponent = ({ input, paused }: Props) => {
  const { title, image, videoLandscape, videoPortrait, brand, talent, date } =
    input;
  const { isMobile } = useDeviceDetect();
  const playbackId = isMobile
    ? videoPortrait?.asset?.playbackId
    : videoLandscape?.asset?.playbackId;

  return (
    <div className='hero-video'>
      {!videoLandscape && !videoPortrait && image && image.asset && (
        <Figure asset={image.asset} alt={_localizeField(title)} />
      )}
      {playbackId && (
        <MuxVideoPlayer
          playbackId={playbackId}
          title={_localizeField(title)}
          controls={true}
          paused={paused}
        />
      )}
      <div className='overlay'>
        <div className='inner'>
          <div className='title'>{_localizeField(title)}</div>
          <div className='brand'>{brand}</div>
          <div className='talent'>
            <Link href={_linkResolver(talent)}>{talent?.name}</Link>
          </div>
          <div className='date'>{_date(date)}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideoComponent;
