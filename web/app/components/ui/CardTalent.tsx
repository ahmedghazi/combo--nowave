import React from "react";
import FigureUI from "./Figure";
import { _linkResolver, _localizeField } from "@/app/sanity-api/utils";
import AOS from "./AOS";
import Link from "next/link";
import { Talent } from "@/app/types/sanity.types";
import { PortableText } from "next-sanity";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";
import SanityExcerptToText from "./SanityExcerptToText";
import NavSocials from "./NavSocials";

type Props = {
  input: Talent;
};

const CardTalent = ({ input }: Props) => {
  const { name, text, links } = input;

  // console.log(input);

  return (
    <article className='card card--talent'>
      {/* <Link href={_linkResolver(input)}> */}
      <AOS>
        <div className='inner'>
          <div className='image'>
            {input.imageCover && <FigureUI asset={input.imageCover.image} />}
          </div>
          <div className='header flex justify-between items-start gap-05e'>
            {name && <h3>{name}</h3>}
          </div>
          {text && <SanityExcerptToText input={_localizeField(text)} />}
          {links && <NavSocials links={links} />}
          <Link href={_linkResolver(input)} className='cta'>
            En savoir plus
          </Link>
        </div>
      </AOS>
      {/* </Link> */}
    </article>
  );
};

export default CardTalent;
