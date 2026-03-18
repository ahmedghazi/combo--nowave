import React from "react";
import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { SanityReference, TextUI } from "@/app/types/schema";
import { SanityImageAsset } from "sanity-codegen";
import AOS from "../ui/AOS";
import { stegaClean } from "@sanity/client/stega";
import { _localizeField } from "@/app/sanity-api/utils";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";
import { urlFor } from "@/app/sanity-api/sanity-utils";
import { TitleUI } from "@/app/types/sanity.types";

type Props = {
  input: TitleUI;
};

const ModuleTitleUI = ({ input }: Props) => {
  const { title, backgroundColor, foregroundColor } = input;
  // console.log(input);

  const style = {
    "--backgroundColor": backgroundColor,
    "--color": foregroundColor,
  } as React.CSSProperties;

  return (
    <section className={clsx("module module--title-ui")}>
      <div className={clsx("inner")} style={style}>
        {title && (
          <AOS>
            <h2 className={clsx("headline")}>{_localizeField(title)}</h2>
          </AOS>
        )}
      </div>
    </section>
  );
};

export default ModuleTitleUI;
