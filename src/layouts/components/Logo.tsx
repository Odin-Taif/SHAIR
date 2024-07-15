"use client";

import config from "@/config/config.json";
import { slugSelector } from "@/lib/utils/slugSelector";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src, lang }: { src?: string; lang: string }) => {
  // destructuring items from config object
  const {
    logo,
    logo_darkmode,
    logo_width,
    logo_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_darkmode: string;
    logo_width: any;
    logo_height: any;
    logo_text: string;
    title: string;
  } = config.site;

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedLogo =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? logo_darkmode
      : logo;
  const logoPath = src ? src : resolvedLogo;

  return (
    <Link href={slugSelector(lang, "")} className="navbar-brand inline-block">
      {logoPath ? (
        <svg
          width="326"
          height="85"
          viewBox="0 0 326 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-200 xl:w-[280px] h-auto"
        >
          <path
            d="M142.7 38.4L137.2 37.2C132 36.1 130.4 34.9 130.4 32.2C130.4 29.5 133.4 26.8 138 26.8C142.6 26.8 146.5 28.7 149.2 32L149.6 32.6L156.8 26.7L156.3 26.1C153.1 22.6 147.3 18.3 138.2 18.3C129.1 18.3 120.3 24.3 120.3 32.5C120.3 40.7 128.4 44.9 134.5 46.2L140.6 47.5C145.8 48.6 147.8 50 147.8 52.7C147.8 55.4 144.6 58.1 139.3 58.1C134 58.1 128.4 54.8 126.4 51.5L126 50.8L118.1 56.5L118.5 57.1C121.8 61.7 128.9 66.7 138.8 66.7C148.7 66.7 157.7 60.9 157.7 52C157.7 43.1 149.9 40 142.5 38.4"
            fill="#1D1D1B"
          ></path>
          <path
            d="M234.6 30.8C234.9 31.9 235.2 33 235.6 34.2L239.5 47.1H229.5L233.5 34.1C233.9 33 234.2 31.9 234.5 30.8M229.8 19.1L213.6 65.9H223.4L226.9 55.6H242.4L245.9 65.9H256L239.9 19.1H229.8Z"
            fill="#1D1D1B"
          ></path>
          <path
            d="M195.7 37.5H176.9V19.1H167.5V65.9H176.9V46H195.7L195.6 65.9H205.2V19.1H195.7V37.5Z"
            fill="#1D1D1B"
          ></path>
          <path d="M274.2 19.1H264.8V65.9H274.2V19.1Z" fill="#1D1D1B"></path>
          <path
            d="M314 33.3C314 35.6 312.9 37.5 311.2 38.3C309.8 38.9 308.1 39.1 305.1 39.1H297.2V27.6H305.1C308.1 27.6 309.9 27.8 311.2 28.4C312.9 29.1 314 31 314 33.3ZM314.4 46.6C315.3 46.2 316.4 45.8 317.3 45.2C321.4 42.4 323.6 38.4 323.6 33.5C323.6 28.6 321.3 23.9 316.8 21.3C313 19.1 308.6 19.1 305 19.1H287.7V65.9H297.1V47.8H304.2L314.7 65.9H325.9L314.4 46.6Z"
            fill="#1D1D1B"
          ></path>
          <path
            d="M25.5 30.2L60.9 50.7V58L36.9 71.9L11.3 57.2L0 63.8L36.9 85L72.3 64.6V44.2L36.9 23.7L25.5 30.2Z"
            fill="#1D1D1B"
          ></path>
          <path
            d="M36.9 0L1.40002 20.5V40.9L36.9 61.3L48.2 54.8L12.8 34.3V27L36.9 13.1L62.4 27.8L73.7 21.3L36.9 0Z"
            fill="#1D1D1B"
          ></path>
        </svg>
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
