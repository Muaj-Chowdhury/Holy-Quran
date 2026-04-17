import quranData from "@/data/quran_data.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return quranData.map((surah) => ({ id: surah.id.toString() }));
}
export default async function SurahPage({ params }) {
  const { id } = await params;

  // Find the specific surah data from our JSON
  const surah = quranData.find((s) => s.id === parseInt(id));
  if (!surah) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Surah Header */}
      <div className="text-center mb-10 border-b pb-6">
        <h1 className="text-4xl font-bold mb-2">{surah.transliteration}</h1>
        <p className="text-2xl text-gray-600 mb-2">{surah.name}</p>
        <p className="text-lg text-gray-500 italic">{surah.translation}</p>
      </div>
      {/* Verses List */}
      <div className="space-y-8">
        {surah.verses.map((ayah) => (
           <div key={ayah.id} className="p-4 border-b border-gray-100 last:border-0">
            <div className="flex justify-between items-start mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {surah.id}:{ayah.id}
              </span>
              {/* Arabic Text - We'll apply fonts here later */}
              <p className="text-right text-3xl leading-loose font-arabic text-slate-800">
                {ayah.text}
              </p>
            </div>
            {/* Translation */}
            <p className="text-left text-lg text-gray-700 leading-relaxed">
              {ayah.translation}
            </p>
           </div> 

        ))}
      </div>
    </main>
  );
}
