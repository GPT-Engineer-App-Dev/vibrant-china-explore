import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Discover China</h1>
        <p className="text-xl text-gray-600">A Journey Through Time and Culture</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Rich History</h2>
          <p className="text-gray-700 mb-4">
            With over 5,000 years of civilization, China boasts a fascinating history
            that has shaped the world. From the Great Wall to the Terracotta Army,
            the country is home to countless historical wonders.
          </p>
          <Button variant="outline">Explore History</Button>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Great Wall of China" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-md" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="md:order-2">
          <h2 className="text-2xl font-semibold mb-4">Vibrant Culture</h2>
          <p className="text-gray-700 mb-4">
            Chinese culture is a tapestry of traditions, arts, and customs. From the
            graceful movements of tai chi to the delicate art of calligraphy, China's
            cultural heritage continues to captivate the world.
          </p>
          <Button variant="outline">Discover Culture</Button>
        </div>
        <div className="md:order-1">
          <img src="/placeholder.svg" alt="Chinese Calligraphy" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-md" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Plan Your Visit</h2>
        <p className="text-gray-700 mb-6">
          Experience the wonders of China for yourself. From the bustling streets of
          Beijing to the serene landscapes of Guilin, an unforgettable adventure awaits.
        </p>
        <Button>Start Planning</Button>
      </div>
    </div>
  );
};

export default Index;
