import { MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroLibrary from '@/assets/hero-library.jpg';

const Library = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={heroLibrary} 
            alt="Library interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Visit Our Library</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Find us at our location and explore our comprehensive study resources
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Our Library</h2>
            <p className="text-xl text-muted-foreground">
              A peaceful space dedicated to learning and academic excellence. Our library provides the perfect environment for focused study and research.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Library Facilities</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need for focused and productive studying
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-foreground font-medium">Peaceful Ambience</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-foreground font-medium">Free High-Speed Internet</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-foreground font-medium">Daily Newspaper</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-foreground font-medium">Current Affairs Magazine</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-foreground font-medium">Comfortable Seating with Separate Compartment</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-foreground font-medium">RO Water</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-foreground font-medium">CCTV Surveillance</span>
              </div>
              
              {/* <div className="flex items-center gap-3 p-4 bg-gradient-card text-secondary-foreground rounded-lg"> */}
                <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary  rounded-full"></div>
                </div>
                <span className=" text-foreground font-medium">For 8th Std & Above Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Library;