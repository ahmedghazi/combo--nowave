import ContentModulaire from "@/app/components/ContentModulaire";
import website from "@/app/config/website";
import {
  getPageModulaire,
  getTalent,
  PAGE_MODULAIRE_QUERY,
} from "@/app/sanity-api/sanity-queries";
import { getClient } from "@/app/sanity-api/sanity.client";
import { urlFor } from "@/app/sanity-api/sanity-utils";

import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import React from "react";
import { PageModulaire, Talent } from "@/app/types/sanity.types";
import ContentTalent from "@/app/components/ContentTalent";
import { notFound } from "next/navigation";

export const revalidate = 3600; // revalidate every hour

type Params = Promise<{ slug: string }>;

type PageProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getTalent(slug);
  return {
    title: `${data?.seo?.metaTitle || data?.title || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset
        ? urlFor(data.seo.metaImage.asset, 1200)
        : website.image,
    },
  };
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  let data: Talent;
  if (isEnabled) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      PAGE_MODULAIRE_QUERY,
      { slug: slug },
    );
  } else {
    data = (await getTalent(slug)) as Talent;
  }

  if (!data) return notFound();
  return (
    <div className='template template--page-talent' data-template='page-talent'>
      {data && <ContentTalent input={data} />}
    </div>
  );
};

export default Page;
