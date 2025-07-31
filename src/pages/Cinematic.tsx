import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cinematicHero from "@/assets/cinematic-hero.jpg";
import { Film, Camera, Video, Music, Award, Clock, Zap } from "lucide-react";

const Cinematic = () => {
  const packages = [
    {
      name: "Essential Film",
      price: "₹55,000",
      duration: "6-8 hours",
      deliverables: ["5-7 minute highlight film", "Raw footage backup", "HD quality"],
      features: ["Single cameraman", "Basic editing", "Background music", "2-week delivery"]
    },
    {
      name: "Premium Cinema", 
      price: "₹85,000",
      duration: "Full day",
      deliverables: ["8-12 minute cinematic film", "2-3 minute teaser", "4K quality"],
      features: ["Two cinematographers", "Advanced editing", "Custom music", "Drone footage", "1-week delivery"],
      popular: true
    },
    {
      name: "Luxury Production",
      price: "₹1,25,000", 
      duration: "Multi-day",
      deliverables: ["15+ minute feature film", "Multiple teasers", "4K + Raw files"],
      features: ["Three person crew", "Cinematic equipment", "Original score", "Drone cinematography", "Same day edit", "Premium delivery"]
    }
  ];

  const equipment = [
    { name: "4K Cinema Cameras", description: "Professional grade filming equipment" },
    { name: "Gimbal Stabilizers", description: "Smooth, cinematic movements" },
    { name: "Drone Technology", description: "Aerial cinematography" },
    { name: "Audio Recording", description: "Crystal clear sound capture" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Cinematic Hero - Dark Theme */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={cinematicHero} 
            alt="Cinematic videography"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <Badge className="mb-6 bg-gold text-black text-lg px-6 py-2">
            Award Winning Cinematography
          </Badge>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            CINEMATIC
            <span className="block text-gold">VIDEOGRAPHY</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 opacity-90 font-light leading-relaxed">
            Your wedding transformed into a <em className="text-gold">masterpiece</em>
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center">
              <Film className="w-6 h-6 text-gold mr-3" />
              <span className="text-xl">4K Production Quality</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gold rounded-full" />
            <div className="flex items-center">
              <Award className="w-6 h-6 text-gold mr-3" />
              <span className="text-xl">Award Winning Team</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gold rounded-full" />
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-gold mr-3" />
              <span className="text-xl">Fast Delivery</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="elegant" size="xl" className="text-lg px-12 py-4">
              View Our Films
            </Button>
            <Button variant="outline" size="xl" className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-12 py-4">
              Starting ₹55,000
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-6">
              Professional <span className="text-gold">Equipment</span>
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              State-of-the-art cinematography equipment for uncompromising quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <Card key={item.name} className="bg-white/5 border-gold/20 p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gold mb-3">{item.name}</h3>
                <p className="text-white/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages - Premium Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-6">
              Choose Your <span className="text-gold">Production</span>
            </h2>
            <p className="text-xl opacity-80">
              From intimate documentaries to full cinematic features
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={pkg.name} className={`relative p-8 bg-white/5 border-gold/20 ${pkg.popular ? 'ring-2 ring-gold transform scale-105' : ''} hover:bg-white/10 transition-all duration-300`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-black">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-gold mb-4">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center text-white/70">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gold mb-4">Deliverables</h4>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center text-white/80">
                        <Film className="w-4 h-4 text-gold mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gold mb-4">Features</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/80 text-sm">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant={pkg.popular ? "elegant" : "outline"} className={`w-full ${!pkg.popular ? 'border-gold text-gold hover:bg-gold hover:text-black' : ''}`}>
                  Select Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-charcoal to-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-serif font-bold mb-8">
              Our <span className="text-gold">Cinematic Style</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Storytelling Focus",
                  description: "Every film tells your unique love story with emotional depth and artistic vision"
                },
                {
                  title: "Cinematic Techniques",
                  description: "Professional color grading, dynamic shots, and seamless editing create movie-quality results"
                },
                {
                  title: "Audio Excellence", 
                  description: "Crystal clear audio capture and professional sound design enhance every moment"
                },
                {
                  title: "Quick Turnaround",
                  description: "Fast delivery without compromising on quality - same day edits available for premium packages"
                }
              ].map((style, index) => (
                <div key={style.title} className="flex items-start">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-black font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gold mb-2">{style.title}</h3>
                    <p className="text-white/70 leading-relaxed">{style.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-gold p-8 text-black">
              <h3 className="text-2xl font-serif font-bold mb-6">Why Choose Cinematic?</h3>
              <ul className="space-y-4">
                {[
                  "Movie-quality production value",
                  "Professional cinematographers",
                  "State-of-the-art equipment", 
                  "Award-winning editing team",
                  "Custom music composition",
                  "Lifetime storage guarantee"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Camera className="w-5 h-5 mr-3" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="bg-white/5 border-gold/20 p-8">
              <h3 className="text-xl font-serif font-bold text-gold mb-4">Sample Timeline</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Filming completed</span>
                  <span className="text-gold">Day 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">First edit review</span>
                  <span className="text-gold">Day 3-5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Final delivery</span>
                  <span className="text-gold">Day 7-14</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">
            Ready to Create Your <span className="text-gold">Masterpiece?</span>
          </h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed">
            Transform your wedding day into a cinematic experience that you'll treasure forever
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="elegant" size="xl" className="text-lg px-12 py-4">
              Book Consultation
            </Button>
            <Button variant="outline" size="xl" className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-12 py-4">
              Watch Demo Reel
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cinematic;