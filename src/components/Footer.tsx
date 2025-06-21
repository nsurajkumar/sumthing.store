
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-orange-500">Sum</span>thing
            </div>
            <p className="text-gray-400 mb-4">
              A skateboard for your mind. Revolutionary Linux phones under $100.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Sumthing. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Sumthing Phone</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Sumthing Pad</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Sumthing Pods</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Sumthing Watch</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">About</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://forms.gle/thwNDRPUwadii9do7" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
