import Image from "next/image";

const AnimalDetails = async ({ params }) => {
  const { id } = await params; // ✅ unwrap params
  console.log(id,'from details');

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
           
              <div className="px-10 font-bold pb-2">
                <h2 className="card-title text-black">{animal.name}</h2>
              <h2>Type:{animal.breed}</h2>
              <p>Price: {animal.price}</p>
              <p>Weight: {animal.weight}</p>
              <p>Age: {animal.age}</p>
              <p>Location: {animal.location}</p>
              <p>Category:{animal.category}</p>
              <p className=" opacity-70 line-clamp-2">{animal.description}</p>
              </div>
              <button
                  className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md"
                >
                  Buy Now
                </button>
              
            </div>

        
  );
};
export default AnimalDetails;
