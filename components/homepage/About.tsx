"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";

const About = forwardRef((_, ref) => {
  const { ref: inViewRef } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  return (
    <motion.section
      ref={node => {
        inViewRef(node);
        if (typeof ref === 'function') ref(node);
      }}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale === "zh" ? (
        <p>{t("desc")}</p>
      ) : (
        <>
          <p className="mb-3">
            I'm pursuing a Bachelor's degree in{" "}
            <span className="font-medium italic">Statistics</span> at the{" "}
            <span className="italic underline">
              <a
                href="https://en.wikipedia.org/wiki/Northeast_Agricultural_University"
                target="_blank"
                rel="noopener noreferrer"
              >
                Northeast Agricultural University
              </a>
            </span>
            . I’m majoring in data science, with a solid foundation in data engineering and IT technology. 
            As an avid gamer, I particularly enjoy cooperative and detective games like Werewolf, Mario, and script killing.
            My passion for gaming extends beyond entertainment, as I focus on analyzing game mechanics and user experience.
          </p>

          <p className="mb-3">
            Following Angela Yu's Frontend Development course and completing several projects, I've deepened my understanding and passion for front-end technologies. 
            I’m eager to continue applying innovative front-end solutions and explore other exciting IT technologies.
          </p>

          <p>
            I’m keen on listening to podcasts and stand-up comedy. This year, I’ve completed over 40 published books and hope to connect with fellow readers.
          </p>
        </>
      )}
    </motion.section>
  );
});

export default About;
