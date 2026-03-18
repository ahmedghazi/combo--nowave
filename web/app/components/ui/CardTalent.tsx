import React from "react";
import FigureUI from "./Figure";
import { _linkResolver, _localizeField } from "@/app/sanity-api/utils";
import AOS from "./AOS";
import Link from "next/link";
import { Talent } from "@/app/types/sanity.types";
import { PortableText } from "next-sanity";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";

type Props = {
  input: Talent;
};

const CardTalent = ({ input }: Props) => {
  const { imageCover, name, text, links } = input;

  // console.log(input);

  return (
    <article className='card card--talent'>
      {/* <Link href={_linkResolver(input)}> */}
      <AOS>
        <div className='inner'>
          <div className='image'>
            {imageCover && <FigureUI asset={imageCover.image} />}
          </div>
          <div className='header flex justify-between items-start gap-05e'>
            {name && <h3>{name}</h3>}
          </div>
          {text && (
            <PortableText
              value={_localizeField(text)}
              components={portableTextComponents}
            />
          )}
          {links && (
            <ul className='links'>
              {links.map((item, i) => (
                <li key={i}>
                  <a href={item.link}>
                    {/* {link.label} */}
                    {item.icon && (
                      <img
                        src={item.icon.asset?.url || ""}
                        width={36}
                        height={36}
                        alt={item.label}
                      />
                    )}
                    {!item.icon && <span>{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          )}
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
