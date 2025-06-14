
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      name: "Sumthing Phone",
      description: "Revolutionary Linux smartphone with premium features",
      price: "$99",
      features: [
        "Sumthing OS (Ubuntu fork)",
        "Premium build quality",
        "Full Linux compatibility",
        "Open source ecosystem",
        "5G connectivity"
      ],
      gradient: "bg-gradient-to-br from-orange-500 to-pink-500"
    },
    {
      name: "Sumthing Pad",
      description: "Linux tablet for productivity and creativity",
      price: "$199",
      features: [
        "Large touchscreen display",
        "Desktop Linux experience",
        "Stylus support",
        "Keyboard compatibility",
        "Professional apps"
      ],
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-500",
      comingSoon: true
    },
    {
      name: "Sumthing Pods",
      description: "Wireless earbuds with smart features",
      price: "$49",
      features: [
        "Active noise cancellation",
        "Premium audio quality",
        "Long battery life",
        "Touch controls",
        "Water resistant"
      ],
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      comingSoon: true
    },
    {
      name: "Sumthing Watch",
      description: "Smart watch running Linux-based OS",
      price: "$129",
      features: [
        "Health monitoring",
        "Fitness tracking",
        "Customizable watch faces",
        "App ecosystem",
        "Multi-day battery"
      ],
      gradient: "bg-gradient-to-br from-green-500 to-teal-500",
      comingSoon: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Sumthing</span> Ecosystem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A complete ecosystem of Linux-powered devices designed to work seamlessly together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
