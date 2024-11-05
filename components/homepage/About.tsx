"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        <p>{t("desc")}</p>
      ) : (
        <>
          <p className="mb-3">
            I'm studying my Bachelor degree with a major in{" "}
            <span className="font-medium italic">Statistics</span> at
            the{" "}
            <span className="italic underline">
              <a
                href="https://en.wikipedia.org/wiki/Northeast_Agricultural_University"
                target="_blank"
              >
                NorthEast Agricultural University
              </a>
            </span>
            . I am a student majoring in data science, with a solid foundation in data engineering and IT technology. 
            As an avid gamer, I particularly love playing cooperative and detective games, for instance werewolf, Mario and script killing. 
            My passion for gaming extends beyond mere entertainment; I also focus on analyzing game mechanics and user experience. 
          </p>

          <p className="mb-3">
            Going along with Angela Yu's lesson--Frontend Development and finishing some projects{" "}
            I've deepened my understanding and passion for front-end technologies, eager to continue 
applying innovative front-end solutions and other funny IT technology.
           {" "}

          </p>
          I'm keen on listening to podcasts and stand-by comedy,
           this year I have completed over 40 published books, I hope I can meet and get in touch with reading fellows.
        </>
      )}
    </motion.section>
  )
}
