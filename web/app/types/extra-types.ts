// import { SanityKeyed } from "sanity-codegen";

import {
  CallOutUI,
  ContactsUI,
  HeroSplitScrollUI,
  HeroSplitUI,
  HeroUI,
  HeroVideoUI,
  ImagesUI,
  ImageUI,
  ListCardImageTextUI,
  ListPageUI,
  ListTalentsUI,
  LogosUI,
  MarqueeUI,
  SanityImageAsset,
  SliderCardImageTextUI,
  SplitImageTextUI,
  TextImageUI,
  TextsUI,
  TextUI,
  TitleUI,
} from "./sanity.types";

export type HeroVideoUIExpanded = Omit<HeroVideoUI, "image"> & {
  image?: {
    _type: "image";
    asset?: SanityImageAsset;
    caption?: string;
  };
};

export interface ModulesList {
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
