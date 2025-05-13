import Github from '@/../public/assets/icons/github.svg';
import Linkedin from '@/../public/assets/images/linkedin.png';
import Email from '@/../public/assets/icons/mail.svg';

export const SOCIAL_MEDIA_KEYS = {
  LinkedIn: "LinkedIn",
}

export const SOCIAL_MEDIA = {
  "github": {
    name: "GitHub",
    image: Github,
    href: "https://github.com/luiz-gustavo-alves",
    linkName: "luiz-gustavo-alves",
    hasLocale: false,
  },
  "linkedin": {
    name: "LinkedIn",
    image: Linkedin,
    href: "https://linkedin.com/in/luiz-gustavo-alves-dev/",
    linkName: "luiz-gustavo-alves-dev",
    hasLocale: true,
  },
  "email": {
    name: "E-Mail",
    image: Email,
    href: "mailto:luizgustavoalves.dev@gmail.com",
    linkName: "luizgustavoalves.dev@gmail.com",
    hasLocale: false,
  }
}