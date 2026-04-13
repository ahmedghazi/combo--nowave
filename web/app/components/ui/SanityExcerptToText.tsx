import portableTextComponents from "@/app/sanity-api/portableTextComponents";
import { _localizeText } from "@/app/sanity-api/utils";
import { BlockContent } from "@/app/types/sanity.types";
import { PortableText } from "next-sanity";
import React, { useMemo, useState } from "react";

type Props = {
  input: BlockContent;
  size?: number;
};

const SanityExcerptToText = ({ input, size = 1 }: Props) => {
  const [active, setActive] = useState(false);

  const sanityExcerpt = useMemo(() => {
    //return the first paragraph from the block content
    const block = (input || []).find(
      (block: any) => block._type === "block",
    ) as any;
    if (!block?.children) return "text needed";

    // Concatenate all text from children in the first block to get the full paragraph
    const text = block.children
      .filter((child: any) => child.text)
      .map((child: any) => child.text)
      .join("");
    const sentences = text.split(".");
    const threeFirstSentences = sentences.slice(0, size).join(".");
    return threeFirstSentences + "...";
  }, [input, size]);

  return (
    <div className='excerpt-to-text'>
      {!active && (
        <p className='excerpt cursor-pointer' onClick={() => setActive(true)}>
          {sanityExcerpt}
          <span className='text-muted ml-2'>{_localizeText("readMore")}</span>
        </p>
      )}
      {active && (
        <PortableText value={input} components={portableTextComponents} />
      )}
    </div>
  );
};

export default SanityExcerptToText;
