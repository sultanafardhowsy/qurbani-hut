import Image from "next/image";

const AnimalDetails = async ({ params }) => {
  const { id } = await params; // ✅ unwrap params

  const res = await fetch("https://qurbani-hut-rho.vercel.app/data.json");
  const data = await res.json();

  const animal = data.find(
    (item) => item.id === Number(id)
  );

  if (!animal) return <p>Not found</p>;

  return (
    <div  className="card w-100 h-150 bg-base-100 shadow-xl border border-base-200 px-4 py-4 gap-2">
            <figure className=" pt-4">
              <Image
                src={animal.image}
                alt={animal.name}
                width={600}
                height={400}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
           
              <div className="px-10">
                <h2 className="card-title text-black">{animal.name}</h2>
              <h2>{animal.breed}</h2>
              <p>{animal.price}</p>
              <p>{animal.weight}</p>
              <p>{animal.age}</p>
              <p>{animal.location}</p>
              <p>{animal.category}</p>
              <p className="text-sm opacity-70 line-clamp-2">{animal.description}</p>
              </div>
              
            </div>

        
  );
};
export default AnimalDetails;
