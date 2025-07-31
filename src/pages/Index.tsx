import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Heart, Star } from "lucide-react";
import weddingHero from "@/assets/wedding-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={weddingHero} 
            alt="Wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 animate-fade-in">
            Everglow
            <span className="block text-gold-light">Studios</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Capturing life's most precious moments with artistic vision and timeless elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/services">
              <Button variant="elegant" size="xl">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-charcoal">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            Our <span className="text-gold">Signature Services</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            From intimate pre-wedding shoots to grand destination celebrations
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Pre-Wedding Shoots",
                description: "Romantic sessions that capture your love story"
              },
              {
                icon: Camera,
                title: "Wedding Photography",
                description: "Comprehensive coverage of your special day"
              },
              {
                icon: Star,
                title: "Destination Weddings",
                description: "Exotic locations with breathtaking backdrops"
              }
            ].map((service, index) => (
              <div key={service.title} className="group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-gold transition-all duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/services">
              <Button variant="luxe" size="lg">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Create Timeless Memories?
          </h2>
          <p className="text-xl text-gold-light mb-8">
            Let's discuss your vision and bring your dream photography to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Get Free Consultation
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

export default Index;
