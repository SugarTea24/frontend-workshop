"use client";
import { useEffect, useState } from "react";
export default function ProvincesPage() {
  const [provinces, setProvinces] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data");
        }
        return res.json();
      })
      .then((json) => {
        setProvinces(json.data);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl text-blue-900 font-bold mb-4">Daftar Provinsi Indonesia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {provinces.map((prov) => (
          <div key={prov.code} className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold text-lg text-gray-800">{prov.name}</h2>
            <p className="text-sm text-gray-500">kode Provinsi: {prov.code}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
