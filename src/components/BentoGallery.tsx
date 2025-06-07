
export function BentoGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Image No: 01",
      image: "https://images.unsplash.com/photo-1735656244034-6b2b53d2657d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "normal"
    },
    {
      id: 2,
      title: "Image No: 02",
      image: "https://images.unsplash.com/photo-1735656244034-6b2b53d2657d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "tall"
    },
    {
      id: 3,
      title: "Image No: 03",
      image: "https://images.unsplash.com/photo-1735656244034-6b2b53d2657d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "wide"
    },
    {
      id: 4,
      title: "Image No: 04",
      image: "https://images.unsplash.com/photo-1735656244034-6b2b53d2657d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "normal"
    },
    {
      id: 5,
      title: "Image No: 05",
      image: "https://images.unsplash.com/photo-1735656244034-6b2b53d2657d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "large"
    },
    {
      id: 6,
      title: "Image No: 06",
      image: "https://images.unsplash.com/photo-1735656244034-6b2b53d2657d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "normal"
    },
    {
      id: 7,
      title: "Image No: 07",
      image: "https://images.unsplash.com/photo-1735656244034-6b2b53d2657d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "normal"
    },
    // {
    //   id: 8,
    //   title: "Featured Work",
    //   image: "/placeholder.svg",
    //   size: "tall"
    // }
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case "tall":
        return "md:row-span-2";
      case "wide":
        return "md:col-span-2";
      case "large":
        return "md:col-span-2 md:row-span-2";
      default:
        return "";
    }
  };

  return (
    <section className="py-16 ">
      <div className="container">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Gallery Showcase
          </h2> */}
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-5xl py-2 md:py-10 relative z-20 font-playfair font-semibold tracking-tight mb-4">
        My Recent Works
         </h2>

          
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of handcrafted items and custom designs. Each piece tells a unique story of artistry and creativity.
          </p> */}

          <p className="max-w-2xl mx-auto text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center mb-4">
        Catch a glimpse of our latest glow-ups, stunning hair makeovers, and flawless finishes.
Because every client deserves a look that turns heads.
      </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`
                relative overflow-hidden rounded-xl bg-card border hover:shadow-lg transition-all duration-300 cursor-pointer group
                ${getSizeClass(item.size)}
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-playfair font-medium text-lg">{item.title}</h3>
                <p className="text-sm opacity-90">Handcrafted with love</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
