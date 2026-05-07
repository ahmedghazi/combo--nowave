import { LinkIcon } from "@/app/types/sanity.types";
import Image from "next/image";
import React from "react";

type Props = {
  links?: Array<
    {
      _key: string;
    } & LinkIcon
  >;
};

const NavSocials = ({ links }: Props) => {
  const getIconByLabel = (label: string) => {
    switch (label.toLocaleLowerCase()) {
      case "instagram":
        return "/icons/ico-circle-instagram.svg";
      case "tiktok":
        return "/icons/ico-circle-tiktok.svg";
      case "youtube":
        return "/icons/ico-circle-youtube.svg";
      case "twitch":
        return "/icons/ico-circle-twitch.svg";
      default:
        return "";
    }
  };
  return (
    <ul className='links'>
      {links?.map((item, i) => (
        <li key={i}>
          <a href={item.link}>
            {/* {link.label} */}
            {item.icon && (
              <Image
                src={item.icon.asset?.url || ""}
                width={36}
                height={36}
                alt={item.label || ""}
              />
            )}
            {!item.icon && item.label && (
              <Image
                src={getIconByLabel(item.label)}
                width='36'
                height='36'
                alt={item.label || ""}
              />
              // <div>{getIconByLabel(item.label)}</div>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavSocials;
