"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  link,
  image,
  video,
  links,
  className,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group mb-6 sm:mb-8 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section
        className="bg-white max-w-[58rem] border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-gray-300/50 hover:border-gray-300 hover:-translate-y-2 transition-all duration-300 ease-out dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:shadow-2xl dark:hover:shadow-black/30 cursor-pointer backdrop-blur-sm"
        onClick={handleClick}
      >
        {/* Image/Video Section - Now visible on mobile */}
        {(image || video) && (
          <div className="w-full h-48 sm:h-56 md:h-64 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                quality={95}
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            )}

            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            )}
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Content Section */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              {title}
            </h3>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-3 mt-1">
              {dates}
            </span>
          </div>

          <Markdown className="leading-relaxed text-gray-600 dark:text-gray-300 mb-5 prose max-w-full text-pretty font-sans text-sm sm:text-base dark:prose-invert line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </Markdown>

          {/* Buttons Section */}
          <div className="flex flex-wrap gap-2">
            {link && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(link, "_blank", "noopener,noreferrer");
                }}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-md hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <BiLinkExternal className="mr-1.5 w-4 h-4" />
                Live Demo
              </button>
            )}

            {links &&
              links.length > 0 &&
              links.map((linkItem, idx) => {
                if (
                  linkItem.type.toLowerCase().includes("demo") ||
                  linkItem.type.toLowerCase().includes("video")
                ) {
                  return (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          linkItem.href,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-md hover:shadow-lg hover:shadow-red-500/50 dark:hover:shadow-red-500/30 transition-all duration-300 backdrop-blur-sm"
                    >
                      <AiFillYoutube className="mr-1.5 w-4 h-4" />
                      Video Demo
                    </button>
                  );
                } else if (linkItem.type.toLowerCase().includes("github")) {
                  return (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          linkItem.href,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                    >
                      <AiFillGithub className="mr-1.5 w-4 h-4" />
                      GitHub
                    </button>
                  );
                } else {
                  return (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          linkItem.href,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-md hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-sm"
                    >
                      <BiLinkExternal className="mr-1.5 w-4 h-4" />
                      {linkItem.type}
                    </button>
                  );
                }
              })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
