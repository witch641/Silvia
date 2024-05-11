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
            I'm studying my undergraduate degree in{" "}
            <span className="font-medium italic">Statistics</span> at
            the{" "}
            <span className="italic underline">
              <a
                href="https://en.wikipedia.org/wiki/Northeast_Agricultural_University"
                target="_blank"
              >
                NorthEast Agricultral University
              </a>
            </span>
            , I found a strong interest in coding. The journey started with
            basic courses in computer science, datasets and HTML5CSS3, which
            naturally led me to{" "}
            <span className="font-medium italic">front-end development</span>.
          </p>

          <p className="mb-3">
            Going along with Angela Yu's lesson-- Frontend Development and finishing some projects{" "}
            <span className="italic underline">
             
            </span>{" "}
            confirmed that this is the career path I'd love to pursue. I've deepened my understanding and passion for front-end technologies. Eager to continue 
learning and applying innovative front-end solutions.
            <span className="font-medium italic">
            {" "}  
            </span>{" "}
           {" "}
            <span className="italic underline">
              <a target="_blank">
               
              </a>
            </span>
          </p>

          <p className="mb-3">
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic"> Bootstrap、Vue and React</span>,
            and have a solid understanding of{" "}
            <span className="font-medium italic">
              JavaScript and HTML5/CSS3
            </span>
            .{" "}
          </p>

          <p>
            In my spare time, I enjoying learning new skills and working on interesting
            projects 🛠️. I also have my own Github accounts to share interesting projects and learning
            resources.🏸 If I&apos;m not at the computer, I enjoy
            <span className="font-medium italic">
              {" "}
              listenning to Podcasts, watching movies and reading books.
            </span>
            Hobbies,regular sleep and diet are my secrets to my energy.🎶
          </p>
        </>
      )}
    </motion.section>
  )
}
