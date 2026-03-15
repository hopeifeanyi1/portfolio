import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Projects",
  description:
    "Projects by Ifeanyi Hope — CareerlyAI, Easy Therapy, AppEasy, and more. Built with Next.js, React, TypeScript, NestJS, and AI APIs.",
  alternates: {
    canonical: "https://hopeifeanyi.vercel.app/project",
  },
  openGraph: {
    title: "Projects — Ifeanyi Hope",
    description:
      "Portfolio of web apps and AI-powered tools built by Ifeanyi Hope using Next.js, React, TypeScript, and NestJS.",
    url: "https://hopeifeanyi.vercel.app/project",
  },
};

export default function ProjectPage() {
  return <ProjectClient />;
}