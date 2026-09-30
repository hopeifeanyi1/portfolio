// Location: src/app/experience/page.js
import ExperienceClient from "./ExperienceClient";

export const metadata = {
  title: "Work Experience",
  description:
    "Ifeanyi Hope's professional experience — Lead Fullstack Developer at Chiwiq, founder of Haco, Frontend Engineer at Kwurah, intern at MTN Nigeria, and more.",
  alternates: {
    canonical: "https://hopeifeanyi.vercel.app/experience",
  },
  openGraph: {
    title: "Work Experience — Ifeanyi Hope",
    description:
      "Frontend & Full-Stack roles across Nigeria, Canada, and the US — including Chiwiq, Kwurah, MTN Nigeria, Haco, and award-winning hackathon projects.",
    url: "https://hopeifeanyi.vercel.app/experience",
  },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}