import { CallOutUI } from "@/app/types/schema";
import React from "react";
import AOS from "../ui/AOS";
import { _localizeField } from "@/app/sanity-api/utils";
import { urlFor } from "@/app/sanity-api/sanity-utils";

type Props = {
  input: CallOutUI;
};

const ModuleCallOutUI = ({ input }: Props) => {
  const {
    title,

    backgroundImage,
  } = input;
  const style = {
    // "--backgroundImage": backgroundImage?.asset ? urlFor(backgroundImage.asset, 2000) : undefined,
    backgroundImage: `url(${backgroundImage?.asset ? urlFor(backgroundImage.asset, 2000) : undefined})`,
    backgroundPosition: "center",
  } as React.CSSProperties;
  const hasImage = backgroundImage && backgroundImage.asset;
  return (
    <section
      className='module module--callout-ui'
      style={style}
      id={input.slug?.current}>
      {hasImage && <div className='bg-blend'></div>}
      <div className='inner'>
        <AOS>
          <h2 className='headline'>{_localizeField(title)}</h2>
        </AOS>
        <div className='items flex flex-col items-center gap-1e'>
          {input.links?.map((item, i) => (
            <div className='item ' key={i}>
              {item && (
                <AOS delay={i + 0.1}>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn--pill'>
                    {item.label}
                  </a>
                </AOS>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleCallOutUI;
