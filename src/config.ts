import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://neilchen.co/", // replace this with your deployed domain
  author: "Neil Chen",
  desc: "Personal website of Neil Chen",
  title: "Neil Chen",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 5,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "GitHub",
    href: "https://github.com/nwchen",
    linkTitle: `${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/neilwchen",
    linkTitle: `${SITE.title} on GitLab`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/neilwchen",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:neilwchen@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
