import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/projects/terminal-portfolio.webp";
import digitalGardem from "public/projects/digital-garden.png";
import integratedTerminal from "public/projects/integrated-terminal.png";
import haruFashion from "public/projects/haru-fashion.webp";
import haruApi from "public/projects/haru-api.webp";
import astroPaper from "public/projects/astro-paper.webp";
import nextBookstore from "public/projects/next-bookstore.webp";
import shadcnAdmin from "public/projects/shadcn-admin.webp";
import IBMCertification from "public/projects/ibm-certification.jpg";
import OffensivePentesting from "public/projects/offensive-pentesting-certificate.jpg";


const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">
            Featured Projects & Certifications
          </h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/clinerds"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  // {
  //   title: "AstroPaper",
  //   type: "Frontend",
  //   image: (
  //     <Image
  //       src={astroPaper}
  //       sizes="100vw"
  //       fill
  //       alt="AstroPaper"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "A minimal, accessible and SEO-friendly Astro blog theme. One of the most starred blog templates built with Astro.",
  //   tags: ["Astro", "TypeScript", "React", "TailwindCSS"],
  //   liveUrl: "https://astro-paper.pages.dev/",
  //   codeUrl: "https://github.com/satnaing/astro-paper",
  //   bgColor: "bg-[#9FD0E3]",
  //   githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  // },

  {
    title: "Obsidian Digital Garden",
    type: "Full-Stack",
    image: (
      <Image
        // src={terminalPortfolio}
        src={digitalGardem}
        sizes="100vw"
        fill
        alt="Obsidian Digital Garden"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My Personal Digital Garden Connected With Obsidian For Efficient Notes Management ",
    tags: ["Obsidian", "Notes", "Digital Garden"],
    liveUrl: "https://samael-digital-garden.vercel.app/",
    codeUrl: "https://github.com/clinerds/samael-learning-live-issue",
    bgColor: "bg-[#B4BEE0]",
    githubApi:
      "https://api.github.com/repos/clinerds/samael-learning-live-issue",
    customSvg: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="scale-150 sm:scale-125 opacity-75 hover:-rotate-12 fill-black dark:fill-bglight"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      ></path>
    </svg>
  
      
      ),
  },
  {
    title: "Terminal Portfolio (Under Development)",
    type: "Frontend",
    image: (
      <Image
        // src={terminalPortfolio}
        src={integratedTerminal}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My portfolio website in terminal version developing with React and TypeScript. ",
    tags: ["React", "TypeScript", "Styled-Components"],
    liveUrl: "https://github.com/clinerds/",
    codeUrl: "https://github.com/clinerds/",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "",
    customSvg: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="scale-150 sm:scale-125 opacity-75 hover:-rotate-12 fill-black dark:fill-bglight"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      ></path>
    </svg>

    
    ),
  },
  {
    title: "IBM Generative AI Development ",
    type: "Frontend",
    image: (
      <Image
        // src={terminalPortfolio}
        src={IBMCertification}
        sizes="100vw"
        // fill
        alt="IBM Certification"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Building Generative AI Applications With Python Certification",
    tags: ["Generative AI", "Python", "LLMs"],
    liveUrl: "https://coursera.org/verify/52Y98PZQPXGB",
    codeUrl: "https://www.coursera.org/learn/building-gen-ai-powered-applications",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "",
    customSvg: (
      <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white hover:-rotate-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

    
    ),
  },
  {
    title: "Offensive Penetration Testing",
    type: "Cybersecurity",
    image: (
      <Image
        // src={terminalPortfolio}
        src={OffensivePentesting}
        sizes="100vw"
        // fill
        alt="IBM Certification"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Hands On Offensive Penetration Testing Certification",
    tags: ["Cybersecurity", "Scripting", "Bash"],
    liveUrl: "https://app.cybrary.it/courses/api/certificate/CC-e98fcfc4-7de1-4334-974b-5a31ec3689a8/view",
    codeUrl: "https://www.cybrary.it/course/offensive-penetration-testing",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "",
    customSvg: (
      <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white hover:-rotate-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

    
    ),
  },
  // {
  //   title: "Haru Fashion",
  //   type: "Frontend",
  //   image: (
  //     <Image
  //       src={haruFashion}
  //       sizes="100vw"
  //       fill
  //       alt="Haru Fashion App"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
  //   tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI"],
  //   liveUrl: "https://haru-fashion.vercel.app/",
  //   codeUrl: "https://github.com/satnaing/haru-fashion",
  //   bgColor: "bg-[#A6CECE]",
  //   githubApi: "https://api.github.com/repos/satnaing/haru-fashion",
  // },
  // {
  //   title: "Haru API",
  //   type: "Backend",
  //   image: (
  //     <Image
  //       src={haruApi}
  //       sizes="100vw"
  //       fill
  //       alt="Haru API"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
  //   tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
  //   liveUrl: "https://satnaing.github.io/haru-api/",
  //   codeUrl: "https://github.com/satnaing/haru-api",
  //   bgColor: "bg-[#C5E4E7]",
  //   githubApi: "https://api.github.com/repos/satnaing/haru-api",
  // },
  // {
  //   title: "Next Bookstore",
  //   type: "Frontend + HeadlessCMS",
  //   image: (
  //     <Image
  //       src={nextBookstore}
  //       sizes="100vw"
  //       fill
  //       alt="Next Bookstore"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "An online bookstore developed using NextJS 13 with appDir and StrapiCMS.",
  //   tags: ["NextJS", "Radix UI ", "TailwindCSS", "TanstackQuery", "StrapiCMS"],
  //   liveUrl: "https://nextbookstore.vercel.app/",
  //   codeUrl: "https://github.com/satnaing/next-bookstore",
  //   bgColor: "bg-[#EBF4F4]",
  //   githubApi: "https://api.github.com/repos/satnaing/next-bookstore",
  // },
  // {
  //   title: "Shadcn Admin",
  //   type: "Backend",
  //   image: (
  //     <Image
  //       src={shadcnAdmin}
  //       sizes="100vw"
  //       fill
  //       alt="Shadcn Admin"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "Admin Dashboard UI built with Shadcn and Vite. Built with responsiveness and accessibility in mind.",
  //   tags: ["ShadcnUI", "Vite", "React Router", "TypeScript"],
  //   liveUrl: "https://shadcn-admin.netlify.app/",
  //   codeUrl: "https://github.com/satnaing/shadcn-admin",
  //   bgColor: "bg-[#FBFBFB]",
  //   githubApi: "https://api.github.com/repos/satnaing/shadcn-admin",
  // },
];

export default ProjectSection;
