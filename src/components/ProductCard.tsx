
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  gradient: string;
  comingSoon?: boolean;
}

const ProductCard = ({ name, description, price, features, gradient, comingSoon }: ProductCardProps) => {
  return (
    <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group overflow-hidden relative">
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${gradient}`}></div>
      
      <div className="p-6 relative z-10">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        
        <div className="mb-6">
          <div className="text-3xl font-bold text-white mb-1">{price}</div>
          {comingSoon && (
            <div className="text-sm text-orange-500 font-semibold">Coming Soon</div>
          )}
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300 flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${comingSoon 
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
          }`}
          disabled={comingSoon}
        >
          {comingSoon ? 'Notify Me' : 'Pre-Order'}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
