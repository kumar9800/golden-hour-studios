import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import preWeddingHero from "@/assets/pre-wedding-hero.jpg";
import candidHero from "@/assets/candid-hero.jpg";
import destinationHero from "@/assets/destination-hero.jpg";
import teaserHero from "@/assets/teaser-hero.jpg";
import anniversaryHero from "@/assets/anniversary-hero.jpg";
import birthdayHero from "@/assets/birthday-hero.jpg";
import weddingHero from "@/assets/wedding-hero.jpg";
import cinematicHero from "@/assets/cinematic-hero.jpg";

const Services = () => {
  const services = [
    {
      title: "Pre-Wedding Shoot",
      description: "Capture your love story before the big day with intimate and romantic pre-wedding photography sessions.",
      image: preWeddingHero,
      price: "Starting ₹25,000",
      features: [
        "2-3 hour photoshoot",
        "Multiple outfit changes",
        "50+ edited photos",
        "Online gallery access"
      ],
      link: "/services/pre-wedding",
      variant: "featured" as const
    },
    {
      title: "Candid Photography",
      description: "Natural, unposed moments that tell your authentic story through documentary-style photography.",
      image: candidHero,
      price: "Starting ₹35,000",
      features: [
        "Full day coverage",
        "Candid storytelling",
        "200+ edited photos",
        "Same day highlights"
      ],
      link: "/services/candid",
      variant: "default" as const
    },
    {
      title: "Destination Wedding",
      description: "Exotic locations, breathtaking landscapes, and your perfect wedding captured in stunning detail.",
      image: destinationHero,
      price: "Starting ₹85,000",
      features: [
        "Multi-day coverage",
        "Travel included",
        "Drone photography",
        "Luxury photo album"
      ],
      link: "/services/destination",
      variant: "featured" as const
    },
    {
      title: "Wedding Teaser",
      description: "Cinematic video teasers that capture the essence and emotion of your special day.",
      image: teaserHero,
      price: "Starting ₹15,000",
      features: [
        "2-3 minute teaser",
        "Cinematic editing",
        "Background music",
        "Quick delivery"
      ],
      link: "/services/teaser",
      variant: "default" as const
    },
    {
      title: "Anniversary Celebration",
      description: "Celebrate your journey together with elegant anniversary photography sessions.",
      image: anniversaryHero,
      price: "Starting ₹12,000",
      features: [
        "1-2 hour session",
        "Intimate setting",
        "30+ edited photos",
        "Digital delivery"
      ],
      link: "/services/anniversary",
      variant: "minimal" as const
    },
    {
      title: "Birthday Party",
      description: "Joyful celebration photography that captures all the fun, laughter, and special moments.",
      image: birthdayHero,
      price: "Starting ₹8,000",
      features: [
        "4-5 hour coverage",
        "Event highlights",
        "Group photos",
        "Fast delivery"
      ],
      link: "/services/birthday",
      variant: "minimal" as const
    },
    {
      title: "Wedding Photography",
      description: "Comprehensive wedding day coverage with traditional and contemporary photography styles.",
      image: weddingHero,
      price: "Starting ₹45,000",
      features: [
        "Full day coverage",
        "Two photographers",
        "300+ edited photos",
        "Premium album"
      ],
      link: "/services/wedding",
      variant: "featured" as const
    },
    {
      title: "Cinematic Videography",
      description: "Movie-quality wedding films that tell your unique love story with artistic cinematography.",
      image: cinematicHero,
      price: "Starting ₹55,000",
      features: [
        "Full day filming",
        "4K quality",
        "Professional editing",
        "Highlight reel"
      ],
      link: "/services/cinematic",
      variant: "default" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-elegant">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Our <span className="text-gold">Photography</span> Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate moments to grand celebrations, we capture your most precious memories 
            with artistic vision and professional excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Create Beautiful Memories?
          </h2>
          <p className="text-xl text-gold-light mb-8">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="xl" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;