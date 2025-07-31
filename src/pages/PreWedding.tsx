import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import preWeddingHero from "@/assets/pre-wedding-hero.jpg";
import { Camera, Clock, Users, MapPin, Heart, Star } from "lucide-react";

const PreWedding = () => {
  const packages = [
    {
      name: "Essential",
      price: "₹25,000",
      duration: "2-3 hours",
      features: [
        "50+ edited photos",
        "1 location",
        "2 outfit changes",
        "Online gallery",
        "Basic retouching"
      ]
    },
    {
      name: "Premium",
      price: "₹40,000",
      duration: "4-5 hours",
      features: [
        "100+ edited photos",
        "2 locations",
        "3 outfit changes",
        "Online gallery",
        "Professional retouching",
        "Printed photo album",
        "Drone shots (if applicable)"
      ],
      popular: true
    },
    {
      name: "Luxury",
      price: "₹65,000",
      duration: "Full day",
      features: [
        "200+ edited photos",
        "3+ locations",
        "Unlimited outfits",
        "Premium online gallery",
        "Professional retouching",
        "Luxury photo album",
        "Drone photography",
        "Styled props",
        "Makeup touch-ups"
      ]
    }
  ];

  const locations = [
    "Beach & Coastal Areas",
    "Heritage Palaces & Forts",
    "Garden & Parks",
    "Urban Rooftops",
    "Countryside & Vineyards",
    "Studio Setups"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={preWeddingHero} 
            alt="Pre-wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Pre-Wedding
            <span className="block text-gold-light">Photography</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Capture your love story in the most romantic and intimate way
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="elegant" size="xl">
              Book Your Session
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-charcoal">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
                Your Love Story <span className="text-gold">Begins Here</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Pre-wedding photography is more than just taking pictures – it's about capturing 
                the essence of your relationship, the butterflies, the laughter, and the intimate 
                moments that make your love unique.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our approach is natural, romantic, and deeply personal. We believe in creating 
                an environment where you can be yourselves, allowing your genuine emotions and 
                connection to shine through every frame.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Heart className="w-8 h-8 text-gold mr-3" />
                  <div>
                    <div className="font-semibold text-charcoal">Romantic Concepts</div>
                    <div className="text-sm text-muted-foreground">Unique themes</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Camera className="w-8 h-8 text-gold mr-3" />
                  <div>
                    <div className="font-semibold text-charcoal">Professional Quality</div>
                    <div className="text-sm text-muted-foreground">4K equipment</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-gold mr-3" />
                  <div>
                    <div className="font-semibold text-charcoal">Dream Locations</div>
                    <div className="text-sm text-muted-foreground">Curated spots</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="w-8 h-8 text-gold mr-3" />
                  <div>
                    <div className="font-semibold text-charcoal">5-Star Service</div>
                    <div className="text-sm text-muted-foreground">Personalized care</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-white shadow-elegant">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {[
                    "Pre-session consultation",
                    "Location scouting",
                    "Professional photography",
                    "High-resolution editing",
                    "Online gallery access",
                    "Personal styling guidance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                      <span className="text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card className="p-6 bg-gradient-rose shadow-elegant">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">Perfect Timing</h3>
                <p className="text-charcoal/80">
                  Best scheduled 2-3 months before your wedding for relaxed preparation 
                  and potential use in wedding invitations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Choose Your <span className="text-gold">Perfect Package</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored packages to suit every couple's vision and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={pkg.name} className={`relative p-8 ${pkg.popular ? 'ring-2 ring-gold shadow-gold' : 'shadow-elegant'}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-white">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-gold mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                      <span className="text-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "elegant" : "luxe"} 
                  className="w-full"
                >
                  Select Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
            Picture-Perfect <span className="text-gold">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            From romantic beaches to majestic palaces, we'll help you find the perfect backdrop for your love story
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={location} className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="font-semibold text-charcoal">{location}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Begin Your Love Story?
          </h2>
          <p className="text-xl text-gold-light mb-8">
            Let's create magical pre-wedding memories that you'll treasure forever
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Book Free Consultation
            </Button>
            <Button variant="outline" size="xl" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreWedding;