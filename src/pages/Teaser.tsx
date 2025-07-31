import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import teaserHero from "@/assets/teaser-hero.jpg";
import { Play, Film, Music, Clock, Download, Eye } from "lucide-react";

const Teaser = () => {
  const teaserStyles = [
    {
      name: "Romantic",
      description: "Soft, dreamy sequences with romantic music",
      duration: "2-3 minutes",
      features: ["Slow motion shots", "Golden hour moments", "Emotional highlights"]
    },
    {
      name: "Cinematic",
      description: "Movie-style storytelling with dramatic elements",
      duration: "3-4 minutes",
      features: ["Dynamic transitions", "Multiple angles", "Epic soundtrack"]
    },
    {
      name: "Documentary",
      description: "Natural storytelling capturing real moments",
      duration: "2-3 minutes",
      features: ["Candid footage", "Natural audio", "Authentic emotions"]
    }
  ];

  const process = [
    {
      step: "Capture",
      icon: Film,
      description: "We film key moments throughout your wedding day"
    },
    {
      step: "Curate", 
      icon: Eye,
      description: "Selecting the most emotional and beautiful moments"
    },
    {
      step: "Create",
      icon: Music,
      description: "Professional editing with music and color grading"
    },
    {
      step: "Deliver",
      icon: Download,
      description: "Final teaser delivered within 72 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Video-Style Hero */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black">
          <img 
            src={teaserHero} 
            alt="Wedding teaser production"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 hover:bg-gold/40 transition-colors duration-300 cursor-pointer">
              <Play className="w-10 h-10 text-white ml-1" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Wedding
              <span className="block text-gold-light">Teasers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Cinematic previews that capture the magic and emotion of your special day
            </p>
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gold mr-2" />
                <span>72-hour delivery</span>
              </div>
              <div className="flex items-center">
                <Film className="w-5 h-5 text-gold mr-2" />
                <span>4K quality</span>
              </div>
            </div>
            <Button variant="elegant" size="xl">
              Starting ₹15,000
            </Button>
          </div>
        </div>
      </section>

      {/* Teaser Styles - Horizontal Scroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Choose Your <span className="text-gold">Style</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Each style tells your story in a unique and captivating way
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teaserStyles.map((style, index) => (
              <Card key={style.name} className="overflow-hidden hover:shadow-gold transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-charcoal to-gold/20 flex items-center justify-center relative">
                  <Play className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                    {style.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">{style.name}</h3>
                  <p className="text-muted-foreground mb-4">{style.description}</p>
                  
                  <div className="space-y-2">
                    {style.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                        <span className="text-charcoal">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - Vertical */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Our <span className="text-gold">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From filming to final delivery in just 72 hours
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30" />
            
            <div className="space-y-12">
              {process.map((item, index) => (
                <div key={item.step} className="relative flex items-start">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-8 relative z-10">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <Card className="flex-1 p-6 shadow-elegant">
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{item.step}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-8">
                Why Choose Our <span className="text-gold">Teasers?</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Quick Turnaround",
                    description: "Get your teaser within 72 hours to share with family and friends"
                  },
                  {
                    title: "Professional Quality",
                    description: "4K filming with professional color grading and audio mixing"
                  },
                  {
                    title: "Social Media Ready",
                    description: "Optimized formats for Instagram, Facebook, and WhatsApp sharing"
                  },
                  {
                    title: "Affordable Pricing",
                    description: "Premium quality at budget-friendly prices starting from ₹15,000"
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="w-3 h-3 bg-gold rounded-full mt-2 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-gold p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Package Includes</h3>
              <ul className="space-y-3 text-white">
                {[
                  "2-3 minute cinematic teaser",
                  "Professional video editing",
                  "Background music licensing",
                  "Color grading & enhancement",
                  "Multiple format delivery",
                  "Social media optimization",
                  "Unlimited revisions",
                  "72-hour delivery guarantee"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-3xl font-bold text-white mb-2">₹15,000</div>
                <p className="text-white/80">Complete teaser package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
            Ready to Create Your Wedding Teaser?
          </h2>
          <p className="text-xl text-charcoal/80 mb-8">
            Perfect for sharing your joy with the world in just 72 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Book Your Teaser
            </Button>
            <Button variant="minimal" size="xl">
              Watch Sample Videos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaser;