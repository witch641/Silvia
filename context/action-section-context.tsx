"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";
import { links } from "@/lib/data"
// import { ActiveSectionProvider } from "@/context/action-section-context"

export type SectionName = (typeof links)[number]["name"]

interface ActiveSectionContextProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextProps | undefined>(undefined);

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionProvider");
  }
  return context;
};

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>("Hobbies"); // 设置初始值为 "Hobbies"

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
