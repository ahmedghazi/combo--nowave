import { urlFor } from "@/app/sanity-api/sanity-utils";
import Image from "next/image";
import React from "react";
import AOS from "../ui/AOS";
import { HeroVideoUI } from "@/app/types/sanity.types";
import { _localizeField } from "@/app/sanity-api/utils";

type Props = {
  input: HeroVideoUI;
};

const ModuleHeroVideoUI = ({ input }: Props) => {
  const { title, image, videoLandscape, videoPortrait, brand, talent, date } =
    input;
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
      <div className='overlay'>
        <div className='inner'>
          <div className='title'>{_localizeField(title)}</div>
          <div className='brand'>{brand}</div>
          <div className='talent'>{talent?.name}</div>
          <div className='date'>{date}</div>
        </div>
      </div>
      <pre>{JSON.stringify(talent, null, 2)}</pre>
    </section>
  );
};

export default ModuleHeroVideoUI;
