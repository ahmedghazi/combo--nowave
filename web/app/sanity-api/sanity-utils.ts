import createImageUrlBuilder from "@sanity/image-url";
// import { definePreview } from 'next-sanity/preview'
import { sanityConfig, getClient } from "./sanity.client";
import { SanityImageAsset } from "../types/sanity.types";
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

export async function urlForFile(fileRef: { _ref: string }): Promise<string> {
  if (!fileRef || !fileRef._ref) {
    return "/placeholder.png";
  }

  try {
    // Fetch the actual file asset to get the correct URL
    const client = getClient();
    const asset = await client.fetch(`*[_id == $ref][0]`, {
      ref: fileRef._ref,
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
