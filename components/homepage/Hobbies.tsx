"use client"

import React from "react"
import Hobbies from "./components/Hobbies"; 

import { useActiveSectionContext } from "@/context/ActionSectionContext"  // 导入 context
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion"

const hobbiesData = [
  {
    title: "Books",
    items: [
      { name: "The Catcher in the Rye", description: "A story about adolescence and alienation." },
      { name: "1984", description: "A dystopian novel about totalitarianism." },
      { name: "To Kill a Mockingbird", description: "A novel about racism and injustice." }
    ]
  },
  {
    title: "Movies",
    items: [
      { name: "Inception", description: "A mind-bending thriller about dreams." },
      { name: "The Matrix", description: "A story about a simulated reality." },
      { name: "The Dark Knight", description: "A superhero film about Batman." }
    ]
  },
  {
    title: "Music",
    items: [
      { name: "Bohemian Rhapsody", description: "A classic rock song by Queen." },
      { name: "Imagine", description: "A song by John Lennon about peace." },
      { name: "Blinding Lights", description: "A popular song by The Weeknd." }
    ]
  }
]

const Hobbies = () => {
  const { activeSection } = useActiveSectionContext(); // 获取当前活跃部分

  // 判断当前 section 是否是 'Hobbies'，如果是，则渲染该部分
  if (activeSection !== "Hobbies") {
    return null; // 如果当前 section 不是 Hobbies，则不渲染该部分
  }

  return (
    <section className="sm:mb-40 relative mb-20">
      <SectionHeading>My Hobbies</SectionHeading>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {hobbiesData.map((category, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-800"
            >
              <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">{category.title}</h3>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx} className="mb-3 text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Hobbies
