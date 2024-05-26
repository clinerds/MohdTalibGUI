import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

import { getAllPosts } from "utils/api";
import { MdxMeta } from "../pages/blog/posts/[slug]";

type Props = {
  blogPosts: MdxMeta[];
};

export const meta = {
  description:
    // "Sat Naing is a full-stack developer based in Yangon, Myanmar. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  "Mohd Talib is a Polymath in the tech world, Stealing ideas like an artist! Proficient in Python, ReactJS, and Linux administration, I also dive into CTFs for Cybersecurity exercises.",
  // author: "Sat Naing",
  author: "Mohd Talib",
  type: "website",
  // ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-dev-og-new.png`,
  // siteName: "Sat Naing",
  // imageAlt: "Sat Naing portfolio website",
  siteName: "Mohd Talib",
  imageAlt: "Mohd Talib portfolio website",
};

const Home: NextPage<Props> = ({ blogPosts }) => {
  return (
    <>
      <AppHead
        title="Mohd Talib - Jack of All Trades"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader> &lt;/Mohd Talib&gt;</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection posts={blogPosts} />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
