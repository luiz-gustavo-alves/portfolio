import Project1 from '@/../public/assets/images/project1.jpg';
import Project2 from '@/../public/assets/images/project2.jpg';
import Project3 from '@/../public/assets/images/project3.jpg';
import Project4 from '@/../public/assets/images/project4.jpg';

export const PROJECTS_ITEMS = {
  "Project_1": {
    "image": Project1,
    "href": "https://cfmoto.com.br/",
    "githubHref": "",
    "tags": [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind",
      "Shadcn",
      "NestJS",
      "Prisma",
    ],
  },
  "Project_2": {
    "image": Project2,
    "href": "https://catarinaaraujoadvocacia.adv.br/",
    "githubHref": "",
    "tags": [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind",
      "Shadcn",
      "Vercel",
    ],
  },
  "Project_3": {
    "image": Project3,
    "href": `${process.env.NEXT_PUBLIC_BASE_URL}`,
    "githubHref": `${process.env.NEXT_PUBLIC_PORTIFOLIO_URL}`,
    "tags": [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind",
      "Shadcn",
      "i18n",
      "Vercel",
    ],
  },
  "Project_4": {
    "image": Project4,
    "href": "",
    "githubHref": "",
    "tags": [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind",
      "Shadcn",
      "NestJS",
      "Prisma",
    ],
  }
}