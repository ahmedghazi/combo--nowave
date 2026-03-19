import React from "react";
import FigureUI from "./Figure";
import { _linkResolver, _localizeField } from "@/app/sanity-api/utils";
import AOS from "./AOS";
import Link from "next/link";
import { PageModulaire } from "@/app/types/sanity.types";

type Props = {
  input: PageModulaire;
};

const CardPage = ({ input }: Props) => {
  const { imageCover, title, subTitle, excerpt } = input;

  // console.log(input);

  return (
    <article className='card card--page'>
      <Link href={_linkResolver(input)}>
        <AOS>
          <div className='inner'>
            <div className='image'>
              {imageCover && <FigureUI asset={imageCover.image} />}
            </div>
            <div className='header flex justify-between items-start gap-05e'>
              {title && <h3>{_localizeField(title)}</h3>}
              {subTitle && (
                <span className='cartouche cartouche--sm'>
                  {_localizeField(subTitle)}
                </span>
              )}
            </div>
            {excerpt && <p className='excerpt'>{_localizeField(excerpt)}</p>}
          </div>
        </AOS>
      </Link>
    </article>
  );
};

export default CardPage;
