import createImageUrlBuilder from "@sanity/image-url";
// import { definePreview } from 'next-sanity/preview'
import { sanityConfig, getClient } from "./sanity.client";
import { SanityImageAsset, SanityFileAsset } from "../types/sanity.types";
// import { SanityAsset } from "@sanity/image-url/lib/types/types";

const imageBuilder = createImageUrlBuilder(sanityConfig);

export function urlFor(
  source: SanityImageAsset,
  maxWidth: number = 2000,
): string {
  if (!source) {
    return "/placeholder.png";
  }

  return imageBuilder
    ?.image(source)
    .width(maxWidth)
    .auto("format")
    .fit("max")
    .dpr(2)
    .url();
}

export async function urlForFile(
  fileRef: { _ref: string } | SanityFileAsset,
): Promise<string> {
  if (!fileRef) {
    return "/placeholder.png";
  }

  // Handle full asset object (has url property)
  if ("url" in fileRef && fileRef.url) {
    return fileRef.url;
  }

  // Handle asset reference (has _ref property)
  const ref = "_ref" in fileRef ? fileRef._ref : null;
  if (!ref) {
    return "/placeholder.png";
  }

  try {
    // Fetch the actual file asset to get the correct URL
    const client = getClient();
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: ref,
    });

    if (!asset || !asset.url) {
      return "/placeholder.png";
    }

    return asset.url;
  } catch (error) {
    console.error("Error fetching file asset:", error);
    return "/placeholder.png";
  }
}

// export const usePreview = definePreview({
//   projectId: sanityConfig.projectId,
//   dataset: sanityConfig.dataset,
// })
