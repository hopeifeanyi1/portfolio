import ExperienceClient from "./ExperienceClient";

export const metadata = {
  title: "Work Experience",
  description:
    "Ifeanyi Hope's professional experience — Frontend Engineer at Kwurah, Full-Stack Developer at HACO, intern at MTN Nigeria, and more.",
  alternates: {
    canonical: "https://hopeifeanyi.vercel.app/experience",
  },
  openGraph: {
    title: "Work Experience — Ifeanyi Hope",
    description:
      "Frontend & Full-Stack roles across Nigeria, Canada, and the US — including MTN Nigeria, Kwurah, HACO, and award-winning hackathon projects.",
    url: "https://hopeifeanyi.vercel.app/experience",
  },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}