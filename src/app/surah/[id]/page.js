import quranData from "@/data/quran_data.json";
import { notFound } from "next/navigation";
import SurahView from "@/components/SurahView"; // Import the client component

export async function generateStaticParams() {
  return quranData.map((surah) => ({ id: surah.id.toString() }));
}

export default async function SurahPage({ params }) {
  const { id } = await params;
  const surah = quranData.find((s) => s.id === parseInt(id));

  if (!surah) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-10 border-b pb-6">
        <h1 className="text-4xl font-bold mb-2">{surah.transliteration}</h1>
        <p className="text-2xl text-gray-600 mb-2 font-arabic">{surah.name}</p>
        <p className="text-lg text-gray-500 italic">{surah.translation}</p>
      </div>

      {/* Render the Client Component here */}
      <SurahView surah={surah} />
    </main>
  );
}