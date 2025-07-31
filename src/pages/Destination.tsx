import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import destinationHero from "@/assets/destination-hero.jpg";
import { MapPin, Plane, Camera, Users, Star, Clock, Globe } from "lucide-react";

const Destination = () => {
  const destinations = [
    {
      name: "Goa Beaches",
      description: "Pristine beaches with golden sunsets",
      price: "₹85,000",
      features: ["Beach ceremonies", "Sunset photography", "Resort coverage"]
    },
    {
      name: "Rajasthan Palaces",
      description: "Royal heritage venues and forts",
      price: "₹1,20,000",
      features: ["Palace venues", "Heritage photography", "Cultural elements"]
    },
    {
      name: "Kerala Backwaters",
      description: "Serene waters and lush greenery",
      price: "₹95,000",
      features: ["Houseboat venues", "Nature photography", "Traditional elements"]
    },
    {
      name: "International",
      description: "Exotic overseas locations",
      price: "₹2,50,000+",
      features: ["Complete planning", "International travel", "Luxury coverage"]
    }
  ];

  const timeline = [
    { phase: "Planning", duration: "3-6 months before", description: "Location scouting and permit arrangements" },
    { phase: "Pre-arrival", duration: "1 week before", description: "Equipment shipping and team coordination" },
    { phase: "Event Days", duration: "2-4 days", description: "Complete wedding coverage and celebrations" },
    { phase: "Post-production", duration: "4-6 weeks", description: "Professional editing and album creation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Split Hero Section */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <img 
            src={destinationHero} 
            alt="Destination wedding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        
        <div className="flex items-center justify-center p-8 lg:p-16 bg-gradient-elegant">
          <div className="max-w-xl">
            <Badge className="mb-4 bg-gold text-white">Premium Service</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
              Destination
              <span className="block text-gold">Weddings</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform exotic locations into the backdrop of your forever story. 
              From pristine beaches to majestic mountains, we create cinematic 
              wedding experiences in the world's most beautiful destinations.
            </p>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gold mr-2" />
                <span className="text-charcoal font-medium">Worldwide Coverage</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-gold mr-2" />
                <span className="text-charcoal font-medium">Luxury Service</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button variant="elegant" size="xl" className="w-full">
                Plan Your Destination Wedding
              </Button>
              <Button variant="minimal" size="xl" className="w-full">
                View Destination Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Popular <span className="text-gold">Destinations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each destination offers unique beauty and cultural richness for your special day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest, index) => (
              <Card key={dest.name} className="overflow-hidden group hover:shadow-gold transition-all duration-500">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{dest.name}</h3>
                      <p className="text-muted-foreground">{dest.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gold">{dest.price}</div>
                      <div className="text-sm text-muted-foreground">starting from</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {dest.features.map((feature, idx) => (
                      <div key={idx} className="text-center p-3 bg-cream rounded-lg">
                        <div className="text-sm text-charcoal font-medium">{feature}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="luxe" className="w-full">
                    Explore {dest.name}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Planning <span className="text-gold">Timeline</span>
            </h2>
            <p className="text-xl text-gold-light max-w-3xl mx-auto">
              Our comprehensive planning process ensures every detail is perfect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={item.phase} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{item.phase}</h3>
                  <div className="text-gold mb-3">{item.duration}</div>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gold/30 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-rose">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-8">
              Complete <span className="text-gold">Service Package</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Plane, title: "Travel Coordination", desc: "Flight & accommodation planning" },
                { icon: Camera, title: "Photography Team", desc: "2-3 professional photographers" },
                { icon: MapPin, title: "Location Scouting", desc: "Best spots for your ceremony" },
                { icon: Users, title: "Guest Management", desc: "Coordination support" }
              ].map((service) => (
                <div key={service.title} className="flex items-start">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal mb-1">{service.title}</h3>
                    <p className="text-sm text-charcoal/70">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-white shadow-elegant">
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">What's Included</h3>
            <ul className="space-y-3">
              {[
                "Pre-wedding consultation & planning",
                "Location permits & coordination",
                "Professional photography team",
                "Drone photography & videography",
                "Daily coverage (2-4 days)",
                "500+ edited high-resolution photos",
                "Cinematic highlight video",
                "Premium leather-bound album",
                "Online gallery with lifetime access",
                "Travel & accommodation coordination"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
            Ready for Your Dream Destination Wedding?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's plan an unforgettable celebration in paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Start Planning Today
            </Button>
            <Button variant="minimal" size="xl">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;