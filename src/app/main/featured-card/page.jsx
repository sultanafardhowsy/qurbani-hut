import Image from "next/image";
import { getAnimals } from "@/lib/get-data";

const FeaturedCard = async () => {
   const data = await getAnimals();
  const targetIds = [1, 5, 7, 11];
  const featuredAnimal = data.filter(animal => targetIds.includes(animal.id));

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Animals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredAnimal.map((animal) => (
          /* The 'card' class is essential for daisyUI styling */
          <div key={animal.id} className="card bg-base-100 shadow-xl border border-base-200">
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
              <p className="text-sm opacity-70 line-clamp-2">{animal.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;