import React from "react";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { SanityImageAsset } from "sanity-codegen";
import AOS from "../ui/AOS";
import { stegaClean } from "@sanity/client/stega";
import { _localizeField } from "@/app/sanity-api/utils";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";
import { urlFor } from "@/app/sanity-api/sanity-utils";
import { TextsUI } from "@/app/types/sanity.types";

type Props = {
  input: TextsUI;
};

const ModuleTextsUI = ({ input }: Props) => {
  const {
    look,
    title,
    titleCentered,
    items,
    backgroundColor,
    backgroundImage,
    foregroundColor,
  } = input;

  const style = {
    "--backgroundColor": backgroundColor,
    "--color": foregroundColor,
    "--backgroundImage": backgroundImage?.asset
      ? urlFor(backgroundImage.asset, 2000)
      : undefined,
    // backgroundImage: `url(${backgroundImage?.asset ? urlFor(backgroundImage.asset, 2000) : undefined})`,
  } as React.CSSProperties;
  const styleBgImage = {
    backgroundImage: `url(${backgroundImage?.asset ? urlFor(backgroundImage.asset, 2000) : undefined})`,
  };
  const hasImage = backgroundImage && backgroundImage?.asset;
  // console.log(input);
  return (
    <section
      className={clsx("module module--texts-ui", `text-${look || "default"}`)}>
      <div className={clsx("inner", `is-${look || "default"}`)} style={style}>
        {hasImage && (
          <>
            <div className='bg-image' style={styleBgImage}></div>
            <div
              className='bg-blend'
              style={{
                backgroundColor: backgroundColor,
              }}></div>
          </>
        )}

        <div className='row center-xs'>
          <div className='col-md-10 col-xs-12'>
            {look === "default" && (
              <>
                {title && (
                  <AOS>
                    <div className={titleCentered ? "text-center" : ""}>
                      <h2 className={clsx("headline")}>
                        {_localizeField(title)}
                      </h2>
                    </div>
                  </AOS>
                )}
                <div
                  className={clsx(
                    "grid gap-md",
                    `md:grid-cols-${items?.length}`,
                  )}>
                  {items &&
                    items.map((item, i) => (
                      <div key={i}>
                        <AOS delay={i / 5}>
                          <div className='text'>
                            <PortableText
                              value={_localizeField(item)}
                              components={portableTextComponents}
                            />
                          </div>
                        </AOS>
                      </div>
                    ))}
                </div>
              </>
            )}
            {look === "offset" && (
              <div className='mx-auto'>
                {title && (
                  <AOS>
                    <div className={titleCentered ? "text-center" : ""}>
                      <h2 className={clsx("headline")}>
                        {_localizeField(title)}
                      </h2>
                    </div>
                  </AOS>
                )}

                <div className='row'>
                  <div className='col-md-6 col-md-offset-3 col-xs-12'>
                    <div
                      className={clsx(
                        "grid gap-md",
                        `md:grid-cols-${items?.length}`,
                      )}>
                      {items &&
                        items.map((item, i) => (
                          <div key={i}>
                            <AOS>
                              <div className='text'>
                                <PortableText
                                  value={_localizeField(item)}
                                  components={portableTextComponents}
                                />
                              </div>
                            </AOS>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleTextsUI;
