// import { urlFor } from "@/app/sanity-api/sanity-utils";
// import Image from "next/image";
// import React from "react";
// import AOS from "../ui/AOS";
// import { HeroVideo, HeroVideoUI } from "@/app/types/sanity.types";
// import { _date, _linkResolver, _localizeField } from "@/app/sanity-api/utils";
// import Link from "next/link";
// import MuxVideoPlayer from "../ui/MuxPlayer";
// import useDeviceDetect from "@/app/hooks/useDeviceDetect";
// import Figure from "../ui/Figure";
// import HeroVideoComponent from "../ui/HeroVideo";
// // import MuxVideoPlayer from "../ui/MuxVideo";

// type Props = {
//   input: HeroVideoUI;
// };

// const ModuleHeroVideoUI = ({ input }: Props) => {
//   const { title, image, videoLandscape, videoPortrait, brand, talent, date } =
//     input;
//   const { isMobile } = useDeviceDetect();
//   const playbackId = isMobile
//     ? videoPortrait?.asset?.playbackId
//     : videoLandscape?.asset?.playbackId;

//   return (
//     <section className='module module--hero-video-ui'>
//       <HeroVideoComponent input={input} />
//     </section>
//   );
// };

// export default ModuleHeroVideoUI;
