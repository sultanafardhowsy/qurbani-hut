const FeaturedCard = async () => {
  const res = await fetch('https://qurbani-hut-rho.vercel.app/data.json');
  const data = await res.json();
  
  const targetIds = [2, 5, 10, 9];
  const featuredAnimal = data.filter(animal => targetIds.includes(animal.id));

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Animals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredAnimal.map((animal) => (
          /* The 'card' class is essential for daisyUI styling */
          <div key={animal.id} className="card bg-base-100 shadow-xl border border-base-200">
            <figure className="px-4 pt-4">
              <img
                src={animal.image} 
                alt={animal.name}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary">{animal.name}</h2>
              <p className="text-sm opacity-70 line-clamp-2">{animal.description}</p>
              <div className="card-actions mt-4">
                <button  className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;