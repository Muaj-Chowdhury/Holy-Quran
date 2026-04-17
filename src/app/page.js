import Image from "next/image";
import quranData from "@/data/quran_data.json";
import Link from "next/link";

export default function Home() {
  console.log(quranData);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Quran Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quranData.map((surah)=> (
          <Link href={`/surah/${surah.id}`} key={surah.id}>
            <div className="p-4 border rounded shadow hover:bg-gray-50">
              <h2 className="text-xl">{surah.transliteration}</h2>
              <p className="text-right text-2xl font-arabic">{surah.name}</p>
              <p className="text-sm text-gray-500">{surah.total_verses} Verses</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
