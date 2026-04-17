"use client"; // This is the magic line
import { useSettings } from "@/context/SettingsContext";

export default function SurahView({ surah }) {
  const { settings } = useSettings();

  return (
    <div className="space-y-8">
      {surah.verses.map((ayah) => (
        <div key={ayah.id} className="p-4 border-b border-gray-100 last:border-0">
          <div className="flex justify-between items-start mb-4 gap-4">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-mono">
              {surah.id}:{ayah.id}
            </span>
            
            <p
              style={{
                fontFamily: settings.arabicFont,
                fontSize: `${settings.arabicFontSize}px`,
              }}
              className="text-right leading-[2.5] text-slate-900 w-full"
            >
              {ayah.text}
            </p>
          </div>
          
          <p 
            style={{ fontSize: `${settings.translationFontSize}px` }}
            className="text-left text-gray-700 leading-relaxed"
          >
            {ayah.translation}
          </p>
        </div>
      ))}
    </div>
  );
}