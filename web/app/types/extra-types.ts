// import { SanityKeyed } from "sanity-codegen";

import { HeroVideoUI, ListTalentsUI, SanityImageAsset, TitleUI } from "./sanity.types";

export type HeroVideoUIExpanded = Omit<HeroVideoUI, "image"> & {
  image?: {
    _type: "image";
    asset?: SanityImageAsset;
    caption?: string;
  };
};
import {
  CallOutUI,
  ContactsUI,
  HeroSplitScrollUI,
  HeroSplitUI,
  HeroUI,
  ImageUI,
  ListCardImageTextUI,
  ListLieuUI,
  ListLModulaireUI,
  ListStudioUI,
  ListPageUI,
  MarqueeUI,
  SanityKeyed,
  SliderUI,
  SplitImageTextUI,
  TextImageUI,
  TextUI,
  SliderCardImageTextUI,
  TextsUI,
  ImagesUI,
  LogosUI,
} from "./schema";

export interface ModulesList {
  // modules: Array<
  //   | SanityKeyed<TextUI>
  //   | SanityKeyed<TextsUI>
  //   | SanityKeyed<TextImageUI>
  //   | SanityKeyed<HeroUI>
  //   | SanityKeyed<ImagesUI>
  //   | SanityKeyed<LogosUI>
  //   | SanityKeyed<ContactsUI>
  //   | SanityKeyed<ListCardImageTextUI>
  //   | SanityKeyed<ListLieuUI>
  //   | SanityKeyed<ListStudioUI>
  //   | SanityKeyed<ListLModulaireUI>
  //   | SanityKeyed<ListPageUI>
  //   | SanityKeyed<ImageUI>
  //   | SanityKeyed<MarqueeUI>
  //   | SanityKeyed<SplitImageTextUI>
  //   | SanityKeyed<SliderUI>
  //   | SanityKeyed<CallOutUI>
  //   | SanityKeyed<HeroSplitScrollUI>
  //   | SanityKeyed<HeroSplitUI>
  //   | SanityKeyed<SliderCardImageTextUI>
  // >;
  modules: Array<
    | ({
        _key: string;
      } & TitleUI)
    | ({
        _key: string;
      } & TextUI)
    | ({
        _key: string;
      } & TextsUI)
    | ({
        _key: string;
      } & TextImageUI)
    | ({
        _key: string;
      } & HeroUI)
    | ({
        _key: string;
      } & HeroVideoUI)
    | ({
        _key: string;
      } & ImageUI)
    | ({
        _key: string;
      } & ImagesUI)
    | ({
        _key: string;
      } & LogosUI)
    | ({
        _key: string;
      } & ContactsUI)
    | ({
        _key: string;
      } & ListCardImageTextUI)
    | ({
        _key: string;
      } & ListTalentsUI)
    | ({
        _key: string;
      } & ListPageUI)
    | ({
        _key: string;
      } & MarqueeUI)
    | ({
        _key: string;
      } & SplitImageTextUI)
    | ({
        _key: string;
      } & CallOutUI)
    | ({
        _key: string;
      } & HeroSplitScrollUI)
    | ({
        _key: string;
      } & HeroSplitUI)
    | ({
        _key: string;
      } & SliderCardImageTextUI)
  >;
}
