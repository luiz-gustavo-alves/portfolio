import Asterisk from '@/../public/assets/icons/asterisk.svg';
import Code from '@/../public/assets/icons/code.svg';
import Server from '@/../public/assets/icons/server.svg';
import Palette from '@/../public/assets/icons/palette.svg';
import Flask from '@/../public/assets/icons/flask.svg';
import Wrench from '@/../public/assets/icons/wrench.svg';
import Globe from '@/../public/assets/icons/globe.svg';

export const HOME_SKILLS_ITEMS = [
  "FrontEnd",
  "BackEnd",
  "UiUx",
  "SoftwareTest",
  "PerformanceMaintenance",
  "WebHosting"
]

export const HOME_SKILLS_CARDS = {
  "FrontEnd": {
    icon: Code,
    items: [
      {
        title: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        invert: false,
      },
      {
        title: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        invert: false,
      },
      {
        title: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        invert: false,
      },
      {
        title: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        invert: false,
      },
      {
        title: "Shadcn",
        icon: Asterisk,
        invert: true,
      },
    ],
  },
  "BackEnd": {
    icon: Server,
    items: [
      {
        title: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        invert: false,
      },
      {
        title: "NestJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        invert: false,
      },
      {
        title: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        invert: false,
      },
      {
        title: "Postgres",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        invert: false,
      },
      {
        title: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        invert: false,
      },
      {
        title: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        invert: false,
      }
    ]
  },
  "UiUx": {
    icon: Palette,
    items: [
      {
        title: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        invert: false,
      },
      {
        title: "Shadcn",
        icon: Asterisk,
        invert: true,
      },
      {
        title: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        invert: false,
      },
      {
        title: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        invert: false,
      }
    ]
  },
  "SoftwareTest": {
    icon: Flask,
    items: [
      {
        title: "Jest",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
        invert: false,
      },
      {
        title: "Cypress",
        icon: Asterisk,
        invert: true,
      },
      {
        title: "K6",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k6/k6-original.svg",
        invert: false,
      },
      {
        title: "Faker",
        icon: Asterisk,
        invert: true,
      },
    ]
  },
  "PerformanceMaintenance": {
    icon: Wrench,
    items: [
      {
        title: "SEO",
        icon: Asterisk,
        invert: true,
      },
      {
        title: "Google Analytics",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
        invert: false,
      },
      {
        title: "Lighthouse",
        icon: Asterisk,
        invert: true,
      },
      {
        title: "Prometheus",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
        invert: false,
      },
      {
        title: "Grafana",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
        invert: false,
      },
    ]
  },
  "WebHosting": {
    icon: Globe,
    items: [
      {
        title: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        invert: true,
      },
      {
        title: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        invert: false,
      },
      {
        title: "DNS",
        icon: Asterisk,
        invert: true,
      },
      {
        title: "Email",
        icon: Asterisk,
        invert: true,
      }
    ]
  }
}