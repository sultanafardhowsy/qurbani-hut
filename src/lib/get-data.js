

export async function getAnimals() {
  const res = await fetch("https://qurbani-hut-rho.vercel.app/data.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch animals");
  }

  const data = await res.json(); // Read once
  return data;
}