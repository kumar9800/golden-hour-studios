import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Heart, MapPin, Calendar } from "lucide-react";
import weddingHero from "@/assets/wedding-hero.jpg";
import preWeddingHero from "@/assets/pre-wedding-hero.jpg";
import candidHero from "@/assets/candid-hero.jpg";
import destinationHero from "@/assets/destination-hero.jpg";
import cinematicHero from "@/assets/cinematic-hero.jpg";
import anniversaryHero from "@/assets/anniversary-hero.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Rajesh & Meera's Wedding",
      category: "wedding",
      location: "Udaipur, Rajasthan",
      date: "March 2024",
      image: weddingHero,
      description: "A royal wedding celebration at the City Palace with traditional ceremonies and breathtaking views."
    },
    {
      id: 2,
      title: "Arjun & Kavya's Pre-Wedding",
      category: "pre-wedding",
      location: "Goa Beach",
      date: "February 2024",
      image: preWeddingHero,
      description: "Romantic beach sessions capturing the essence of love against golden sunsets."
    },
    {
      id: 3,
      title: "Candid Moments",
      category: "candid",
      location: "Mumbai",
      date: "January 2024",
      image: candidHero,
      description: "Spontaneous emotions and genuine laughter captured during an intimate ceremony."
    },
    {
      id: 4,
      title: "Destination Romance",
      category: "destination",
      location: "Kerala Backwaters",
      date: "December 2023",
      image: destinationHero,
      description: "An exotic destination wedding surrounded by nature's beauty and tranquil waters."
    },
    {
      id: 5,
      title: "Cinematic Love Story",
      category: "cinematic",
      location: "Jaipur",
      date: "November 2023",
      image: cinematicHero,
      description: "A cinematic masterpiece showcasing the grandeur of Rajasthani culture and architecture."
    },
    {
      id: 6,
      title: "25th Anniversary Celebration",
      category: "anniversary",
      location: "Delhi",
      date: "October 2023",
      image: anniversaryHero,
      description: "Celebrating 25 years of togetherness with renewed vows and family joy."
    }
  ];

  const categories = [
    { value: "all", label: "All Work" },
    { value: "wedding", label: "Weddings" },
    { value: "pre-wedding", label: "Pre-Wedding" },
    { value: "candid", label: "Candid" },
    { value: "destination", label: "Destination" },
    { value: "cinematic", label: "Cinematic" },
    { value: "anniversary", label: "Anniversary" }
  ];

  const filterPortfolio = (category: string) => {
    if (category === "all") return portfolioItems;
    return portfolioItems.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-charcoal via-charcoal to-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Our <span className="text-gold">Portfolio</span>
          </h1>
          <p className="text-xl text-gold-light mb-8 max-w-3xl mx-auto">
            Explore our collection of captured moments, each telling a unique story of love, joy, and celebration.
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="border-gold text-gold">500+ Projects</Badge>
            <Badge variant="outline" className="border-gold text-gold">10+ Awards</Badge>
            <Badge variant="outline" className="border-gold text-gold">5 Years Experience</Badge>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 lg:grid-cols-7 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value} className="text-xs lg:text-sm">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterPortfolio(category.value).map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/5] mb-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button variant="elegant" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Gallery
                          </Button>
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gold text-charcoal">{item.category}</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-gold transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <blockquote className="text-xl italic text-muted-foreground mb-6 leading-relaxed">
            "Everglow Studios captured our wedding day so beautifully. Every photo tells a story, and we can relive our special moments every time we look at them. Their attention to detail and artistic vision is truly exceptional."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-charcoal">Rajesh & Meera</p>
              <p className="text-sm text-muted-foreground">March 2024 Wedding</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can capture your precious moments with the same care and artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxe" size="xl">
              Book Consultation
            </Button>
            <Button variant="outline" size="xl">
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;