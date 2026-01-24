import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind Aktif</h1>
        <p className="text-gray-600 mb-6">klik tombol dibawah untuk melihat daftar provinsi indonesia</p>

      <Link href="/provinces" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">ke Halaman provinsi</Link>
      </div>
    </main>
  );
}
