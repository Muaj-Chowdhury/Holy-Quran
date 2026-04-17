"use client";
import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // 1. ALWAYS start with the default state to match the Server
  const [settings, setSettings] = useState({
    arabicFont: "Amiri",
    arabicFontSize: 32,
    translationFontSize: 18,
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // 2. Run this ONCE on mount
  useEffect(() => {
    const saved = localStorage.getItem("quranSettings");
    if (saved) {
      // React 18+ will batch these two setStates into ONE single re-render
      setSettings(JSON.parse(saved));
    }
    setHasMounted(true);
  }, []);

  // 3. Save to localStorage when settings change
  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem("quranSettings", JSON.stringify(settings));
    }
  }, [settings, hasMounted]);

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SettingsContext.Provider 
      value={{ settings, updateSetting, isSidebarOpen, toggleSidebar, hasMounted }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);