"use client";
import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  // 1. Use a "lazy initializer" function inside useState
  const [settings, setSettings] = useState(() => {
    // 1. Check if 'window' exists (we are in the browser)
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("quranSettings");
      if (saved) return JSON.parse(saved);
    }

    // 2. Default state for Server-Side Rendering (SSR)
    return {
      arabicFont: "Amiri",
      arabicFontSize: 32,
      translationFontSize: 18,
    };
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("quranSettings", JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <SettingsContext.Provider value={{ settings, updateSetting ,isSidebarOpen, toggleSidebar}}>
      {children}
    </SettingsContext.Provider>
  );
};
export const useSettings = () => useContext(SettingsContext);
