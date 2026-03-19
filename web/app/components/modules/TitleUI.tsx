import React from "react";
import clsx from "clsx";
import AOS from "../ui/AOS";
import { _localizeField } from "@/app/sanity-api/utils";
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
