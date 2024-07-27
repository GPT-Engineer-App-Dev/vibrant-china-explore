import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-b from-red-50 to-white pt-16"> {/* Added pt-16 for padding-top */}
        <div className="container mx-auto px-4 py-16">
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-red-600 mb-4">Discover China</h1>
          <p className="text-2xl text-gray-700">A Journey Through Time and Culture</p>
        </motion.header>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Rich History</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 5,000 years of civilization, China boasts a fascinating history
              that has shaped the world. From the Great Wall to the Terracotta Army,
              the country is home to countless historical wonders.
            </p>
            <Button variant="outline" className="text-lg px-6 py-3">Explore History</Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <img src="/placeholder.svg" alt="Great Wall of China" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl md:order-2">
            <img src="/placeholder.svg" alt="Chinese Calligraphy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="space-y-6 md:order-1">
            <h2 className="text-3xl font-semibold text-gray-800">Vibrant Culture</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chinese culture is a tapestry of traditions, arts, and customs. From the
              graceful movements of tai chi to the delicate art of calligraphy, China's
              cultural heritage continues to captivate the world.
            </p>
            <Button variant="outline" className="text-lg px-6 py-3">Discover Culture</Button>
          </div>
        </motion.div>

        <motion.div 
          className="text-center bg-red-600 text-white p-12 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Plan Your Visit</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the wonders of China for yourself. From the bustling streets of
            Beijing to the serene landscapes of Guilin, an unforgettable adventure awaits.
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">Start Planning</Button>
        </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
