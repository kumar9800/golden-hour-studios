import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import candidHero from "@/assets/candid-hero.jpg";
import { Camera, Eye, Heart, Smile, Clock, Award } from "lucide-react";

const Candid = () => {
  const features = [
    {
      icon: Eye,
      title: "Unposed Moments",
      description: "Natural expressions and genuine emotions captured as they happen"
    },
    {
      icon: Heart,
      title: "Emotional Storytelling",
      description: "Every tear, laugh, and smile documented with artistic precision"
    },
    {
      icon: Smile,
      title: "Authentic Reactions",
      description: "Real moments of joy, surprise, and love between family and friends"
    },
    {
      icon: Camera,
      title: "Discreet Photography",
      description: "Invisible presence ensuring natural behavior and authentic moments"
    }
  ];

  const portfolio = [
    {
      title: "The First Look",
      description: "Capturing the groom's reaction when he first sees his bride"
    },
    {
      title: "Family Emotions",
      description: "Tears of joy and proud smiles from loved ones"
    },
    {
      title: "Behind the Scenes",
      description: "Getting ready moments and pre-ceremony preparations"
    },
    {
      title: "Celebration Joy",
      description: "Dancing, laughter, and spontaneous celebrations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Minimalist Design */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-elegant" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6">
              Candid
              <span className="block text-gold">Photography</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Life's most beautiful moments happen naturally. We capture them as they unfold, 
              preserving the authentic emotions and spontaneous joy of your special day.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gold mr-2" />
                <span className="text-charcoal font-medium">Full Day Coverage</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-gold mr-2" />
                <span className="text-charcoal font-medium">Award Winning</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="elegant" size="xl">
                View Our Work
              </Button>
              <Button variant="minimal" size="xl">
                Starting ₹35,000
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-gold rounded-2xl transform rotate-3" />
            <img 
              src={candidHero} 
              alt="Candid photography"
              className="relative w-full h-96 object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Features Section - Grid Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              The Art of <span className="text-gold">Candid Photography</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach focuses on storytelling through unguarded moments and natural expressions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="p-6 text-center hover:shadow-elegant transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="text-lg font-serif font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-charcoal text-center mb-16">
            Moments We <span className="text-gold">Treasure</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <Card key={item.title} className="overflow-hidden group hover:shadow-gold transition-all duration-300">
                <div className="aspect-video bg-gradient-rose relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-charcoal/30" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
                Our <span className="text-gold">Process</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Pre-Event Consultation",
                    description: "Understanding your story, key moments, and important people to focus on"
                  },
                  {
                    step: "02", 
                    title: "Invisible Presence",
                    description: "Blending into the background to capture authentic, unposed moments"
                  },
                  {
                    step: "03",
                    title: "Artistic Curation",
                    description: "Carefully selecting and editing the most meaningful moments"
                  },
                  {
                    step: "04",
                    title: "Story Delivery",
                    description: "Presenting your story through a beautifully curated gallery"
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-charcoal mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 bg-charcoal text-white">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gold">Package Includes</h3>
              <ul className="space-y-4">
                {[
                  "8-12 hours of coverage",
                  "200+ edited photographs",
                  "Online gallery with download",
                  "Same-day highlight reel",
                  "Professional color grading",
                  "Backup photographer included"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gold/20">
                <div className="text-3xl font-bold text-gold mb-2">Starting ₹35,000</div>
                <p className="text-sm opacity-80">Customizable packages available</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
            Let Your Story Unfold Naturally
          </h2>
          <p className="text-xl text-charcoal/80 mb-8">
            Every wedding tells a unique story. Let us capture yours in its most authentic form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Book Your Date
            </Button>
            <Button variant="minimal" size="xl">
              See More Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Candid;