
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-500/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-1 rounded-full">
              <div className="bg-black p-3 rounded-full">
                <Zap className="text-orange-500" size={32} />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Skateboard</span>
            <br />
            for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mind</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Revolutionary Linux phones under $100. Premium technology, accessible pricing.
            <br />
            <span className="text-orange-500 font-semibold">Sumthing OS</span> - where innovation meets affordability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-lg px-8 py-4 group"
            >
              Pre-Order Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
          
          <div className="text-gray-400 text-sm">
            Starting at <span className="text-2xl font-bold text-green-400">$99</span> • Available Q2 2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
