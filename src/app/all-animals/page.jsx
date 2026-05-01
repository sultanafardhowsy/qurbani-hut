'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const AllAnimals = () => {
  const { data: session } = authClient.useSession();

  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const res = await fetch("https://qurbani-hut-rho.vercel.app/data.json");
      const animals = await res.json();
      setData(animals);
    };

    fetchAnimals();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">All Animals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((animal) => (
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

              {/* <button
                className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md"
              >   <Link href={`/animal-details/${animal.id}`}>Details</Link>
              
              </button> */}
              {session ? (
                <Link href={`/animal-details/${animal.id}`}>
                 
                  <button className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md"
                  >View Details</button>
                </Link>
              ) : (
                <button onClick={() => alert("Please login first")}
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