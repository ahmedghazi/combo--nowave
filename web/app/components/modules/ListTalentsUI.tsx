import { SanityKeyedReference, Tag } from "@/app/types/schema";
import { _linkResolver, _localizeField } from "@/app/sanity-api/utils";
import React, { useState } from "react";
import AOS from "../ui/AOS";
import clsx from "clsx";
import { ListTalentsUI } from "@/app/types/sanity.types";
import CardTalent from "../ui/CardTalent";
import Link from "next/link";
// import Slider from "../ui/slick-slider";

type Props = {
  input: ListTalentsUI;
};

const ModuleListTalentsUI = ({ input }: Props) => {
  const { title, items, gridSize, cta } = input;
  // const [tag, setTag] = useState<string>("");

  // console.log(input);
  // const updateTag = (val: string) => {
  //   if (!val) return;
  //   setTag(val === tag ? "" : val);
  // };

  // // const getIsInTag = (val: string) => {
  // //   if (!val) return "";
  // //   console.log(val, tag);
  // //   return tag !== "" && val === tag ? "is-selected" : "";
  // // };

  // const getIsInTag = (val: SanityKeyedReference<Tag>[] | undefined) => {
  //   if (!val) return "";
  //   const tagsSlug = val.map((el) => el.slug?.current);
  //   return tag !== "" && tagsSlug.includes(tag) ? "is-selected" : "";
  // };

  return (
    <section className='module module--list-card-image-text-ui'>
      <div className='inner'>
        <h2 className='headline'>{_localizeField(title)}</h2>

        <div
          className={clsx(
            "grid gap-xl md:gap-y-xl md:gap-md",
            `grid-cols-1 md:grid-cols-${gridSize || 3}`,
            // tag !== "" && "is-filtering",
          )}>
          {items?.map((item, i) => (
            <div className={clsx("item")} key={i}>
              <AOS delay={i / 5}>
                <CardTalent key={i} input={item} />
              </AOS>
            </div>
          ))}
        </div>
      </div>
      {cta && (
        <Link href={_linkResolver(cta.link)} className='cta cta--block'>
          {_localizeField(cta.label)}
        </Link>
      )}
    </section>
  );
};

export default ModuleListTalentsUI;
