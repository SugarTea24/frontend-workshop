"use client";
import { useEffect, useState } from "react";
export default function Page() {
  const [provinces, setProvinces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = provinces.slice(startIndex, endIndex);
  const totalPages = Math.ceil(provinces.length / itemsPerPage);

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((json) => {
        setProvinces(json.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-black-500">Memuat data provinsi...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl text-blue-900 font-bold mb-4">
        Daftar Provinsi Indonesia
      </h1>

      <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100 text-blue-900">
          <tr>
            <th className="px-4 py-2 text-left">No</th>
            <th className="px-4 py-2 text-left">Kode</th>
            <th className="px-4 py-2 text-left">Nama Provinsi</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((prov, index) => (
            <tr key={prov.code} className="border-t">
              <td className="px-4 py-2">{startIndex + index + 1}</td>
              <td className="px-4 py-2">{prov.code}</td>
              <td className="px-4 py-2">{prov.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-60"
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
