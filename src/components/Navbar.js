"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useSettings } from "@/context/SettingsContext";

export default function Navbar() {
  const { toggleSidebar } = useSettings();

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold text-emerald-600 shrink-0">
          QuranWeb
        </Link>
        
        {/* Search Bar in the middle */}
        <div className="flex-1 max-w-md">
          <SearchBar />
        </div>
        
        <button 
        onClick={toggleSidebar}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        title="Settings"
      >
        <span className="sr-only">Open Settings</span>
        {/* Simple Gear Icon using SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.128 1.41-.513M12 3.153V3m0 18v-.153m3.077-1.457-.513-1.41m-5.128-14.095-.513-1.41M3.153 12H3m18 0h-.153" />
        </svg>
      </button>
      </div>
    </nav>
  );
}