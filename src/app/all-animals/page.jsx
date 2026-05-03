
'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { getAnimals } from "@/lib/get-data";
const AllAnimals = () => {
  const { data: session } = authClient.useSession();

  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        const animals = await getAnimals();
        setData(animals);
      } catch (error) {
        console.error("Failed to fetch animals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  // Sorting Logic
  const sortedData = [...data].sort((a, b) => {
    if (sortOption === "price_asc") return a.price - b.price;
    if (sortOption === "price_desc") return b.price - a.price;
    if (sortOption === "weight_asc") return a.weight - b.weight;
    if (sortOption === "weight_desc") return b.weight - a.weight;
    return 0;
  });

  // Loading Spinner
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-warning"></span>
        <p className="mt-4 text-lg font-semibold">Loading animals...</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">All Animals</h2>

      {/* Sorting Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">Sort here</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="weight_asc">Weight: Low to High</option>
          <option value="weight_desc">Weight: High to Low</option>
        </select>
      </div>

      {/* Animal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedData.map((animal) => (
          <div
            key={animal.id}
            className="card bg-base-100 shadow-xl border border-base-200"
          >
            <figure className="px-4 pt-4">
              <Image
                src={animal.image}
                alt={animal.name}
                width={400}
                height={400}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-black">{animal.name}</h2>

              <p className="text-sm opacity-70 line-clamp-2">
                {animal.description}
              </p>

              <p className="font-semibold text-green-700">
                ৳{animal.price.toLocaleString()}
              </p>

              <p className="text-sm text-gray-500">
                Weight: {animal.weight} kg
              </p>

              {session ? (
                <Link href={`/animal-details/${animal.id}`}>
                  <button className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md">
                    View Details
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => alert("Please login first")}
                  className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md"
                >
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;