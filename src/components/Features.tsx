
import { Code, Shield, Zap, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Code className="text-orange-500" size={32} />,
      title: "Open Source",
      description: "Built on Linux with full access to source code. Customize everything to your needs."
    },
    {
      icon: <Shield className="text-cyan-500" size={32} />,
      title: "Privacy First",
      description: "Your data stays yours. No tracking, no ads, complete control over your information."
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Performance",
      description: "Optimized Linux kernel delivers flagship performance at budget-friendly prices."
    },
    {
      icon: <Users className="text-purple-500" size={32} />,
      title: "Community",
      description: "Join a vibrant community of developers, makers, and tech enthusiasts."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Sumthing</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just building phones, we're building the future of mobile technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
