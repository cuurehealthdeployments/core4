

export default function OurClients() {
    const clients = [
      { name: "Google", logo: "/images/c1.png" },
      { name: "Capgemini", logo: "/images/c2.png" },
      { name: "Accenture", logo: "/images/c5.png" },
      { name: "Amazon", logo: "/images/C6.png" },
      { name: "HCLTech", logo: "/images/c13.png" },
      { name: "Infosys", logo: "/images/c12.png" },
      { name: "Infosys", logo: "/images/C7.png" },
      { name: "Indian oil", logo: "/images/C10.jpg" }
    ];
  
    return (
      <section className="p-8 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Clients</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }