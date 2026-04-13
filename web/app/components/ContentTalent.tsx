"use client";
import React from "react";
import Modules from "./modules";
import { ModulesList } from "../types/extra-types";
import { Talent } from "../types/sanity.types";
import Image from "next/image";
import { urlFor } from "../sanity-api/sanity-utils";
import { PortableText } from "next-sanity";
import { _localizeField } from "../sanity-api/utils";
import portableTextComponents from "../sanity-api/portableTextComponents";

type Props = {
  input: Talent;
};
const ContentTalent = ({ input }: Props) => {
  return (
    <div className='content content--talent'>
      {input?.imageCover &&
        input?.imageCover.image &&
        input?.imageCover.image.asset && (
          <div className='hero'>
            <Image
              src={urlFor(input?.imageCover?.image?.asset, 1500)}
              alt={input?.imageCover?.caption || ""}
              priority={true}
              width={
                input?.imageCover?.image?.asset?.metadata?.dimensions?.width ||
                1500
              }
              height={
                input?.imageCover?.image?.asset?.metadata?.dimensions?.height ||
                1500
              }
              // blurDataURL={input?.imageCover?.image?.asset?.metadata?.lqip}
              // placeholder='blur'
            />
          </div>
        )}
      <div className='header'>
        <h1 className='headline'>{input.name}</h1>
        <div className='text'>
          <PortableText
            value={_localizeField(input.text)}
            components={portableTextComponents}
          />
        </div>
        {input.links && (
          <ul className='links'>
            {input.links.map((item, i) => (
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
      </div>
      <div className='body'>
        {input.modules && <Modules modules={input.modules} />}
      </div>
      {/* <pre>{JSON.stringify(input, null, 2)}</pre> */}
      {/* {modules && <Modules modules={modules} />} */}
    </div>
  );
};

export default ContentTalent;
