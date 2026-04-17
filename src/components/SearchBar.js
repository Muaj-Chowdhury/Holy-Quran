"use client";
import { useState, useMemo } from "react";
import quranData from "@/data/quran_data.json";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  // We use useMemo to optimize filtering through ~6,236 verses
  const results = useMemo(() => {
    if (query.length < 3) return []; // Only search if 3+ characters

    const filtered = [];
    quranData.forEach((surah) => {
      surah.verses.forEach((verse) => {
        if (verse.translation.toLowerCase().includes(query.toLowerCase())) {
          filtered.push({
            surahId: surah.id,
            surahName: surah.transliteration,
            verseId: verse.id,
            text: verse.text,
            translation: verse.translation,
          });
        }
      });
    });
    return filtered.slice(0, 20); // Limit to 20 results for performance
  }, [query]);

  return (
    <div className="relative w-full max-w-md mx-auto px-4">
      <input
        type="text"
        placeholder="Search translation (e.g. 'Mercy')..."
        className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Results Dropdown */}
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-xl shadow-2xl max-h-[60vh] overflow-y-auto z-[60]">
          {results.map((res, index) => (
            <Link
              key={index}
              href={`/surah/${res.surahId}#verse-${res.verseId}`}
              onClick={() => setQuery("")}
              className="block p-4 hover:bg-gray-50 border-b last:border-0"
            >
              <div className="flex justify-between text-xs text-emerald-600 font-bold mb-1">
                <span>{res.surahName}</span>
                <span>{res.surahId}:{res.verseId}</span>
              </div>
              <p className="text-sm text-gray-800 line-clamp-2 italic">
                "{res.translation}"
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}