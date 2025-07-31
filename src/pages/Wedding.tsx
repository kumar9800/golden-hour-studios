import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import weddingHero from "@/assets/wedding-hero.jpg";
import { Heart, Camera, Users, Clock, Star, Diamond, Flower, Crown } from "lucide-react";

const Wedding = () => {
  const coverageOptions = [
    {
      type: "Traditional",
      style: "Classic posed portraits and formal documentation",
      approach: "Timeless elegance with structured photography",
      ideal: "Couples who love classic, formal wedding photos"
    },
    {
      type: "Candid",
      style: "Natural moments and emotional storytelling", 
      approach: "Documentary-style with minimal direction",
      ideal: "Couples who want authentic, unposed memories"
    },
    {
      type: "Contemporary",
      style: "Modern artistic approach with creative angles",
      approach: "Fashion-inspired with dramatic lighting",
      ideal: "Couples who want trendy, magazine-style photos"
    },
    {
      type: "Hybrid", 
      style: "Perfect blend of traditional and candid",
      approach: "Best of both worlds with comprehensive coverage",
      ideal: "Couples who want complete documentation"
    }
  ];

  const timeline = [
    { time: "Getting Ready", duration: "2-3 hours", description: "Bridal prep, groom prep, detail shots" },
    { time: "First Look", duration: "30 mins", description: "Private moment before ceremony" },
    { time: "Ceremony", duration: "1 hour", description: "Full ceremony coverage" },
    { time: "Portraits", duration: "1 hour", description: "Couple and family photos" },
    { time: "Reception", duration: "4-5 hours", description: "Dinner, speeches, dancing" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Classic Elegant Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={weddingHero} 
            alt="Wedding photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-gold text-white text-lg px-6 py-2">
              <Crown className="w-4 h-4 mr-2" />
              Complete Wedding Coverage
            </Badge>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              Wedding
              <span className="block text-gold-light">Photography</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Your most important day deserves nothing less than perfection. 
              We capture every precious moment, every tear of joy, and every 
              celebration of your love story.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center text-white">
                <Clock className="w-6 h-6 text-gold mr-3" />
                <div>
                  <div className="font-semibold">Full Day Coverage</div>
                  <div className="text-sm opacity-80">8-12 hours</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Users className="w-6 h-6 text-gold mr-3" />
                <div>
                  <div className="font-semibold">Two Photographers</div>
                  <div className="text-sm opacity-80">Complete coverage</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Camera className="w-6 h-6 text-gold mr-3" />
                <div>
                  <div className="font-semibold">300+ Photos</div>
                  <div className="text-sm opacity-80">Professionally edited</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <Star className="w-6 h-6 text-gold mr-3" />
                <div>
                  <div className="font-semibold">Premium Album</div>
                  <div className="text-sm opacity-80">Luxury presentation</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="elegant" size="xl">
                Book Your Wedding
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-charcoal">
                Starting ₹45,000
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Styles - Elegant Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Photography <span className="text-gold">Styles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the style that best represents your personality and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageOptions.map((option, index) => (
              <Card key={option.type} className="p-8 hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                    {index === 0 && <Diamond className="w-6 h-6 text-white" />}
                    {index === 1 && <Heart className="w-6 h-6 text-white" />}
                    {index === 2 && <Star className="w-6 h-6 text-white" />}
                    {index === 3 && <Flower className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal">{option.type}</h3>
                </div>
                
                <p className="text-lg text-charcoal mb-3">{option.style}</p>
                <p className="text-muted-foreground mb-4">{option.approach}</p>
                
                <div className="bg-cream p-4 rounded-lg">
                  <div className="text-sm font-medium text-charcoal mb-1">Perfect for:</div>
                  <div className="text-sm text-charcoal/70">{option.ideal}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Day Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Your Wedding Day <span className="text-gold">Timeline</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive coverage from morning preparations to evening celebrations
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gold/30 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {timeline.map((phase, index) => (
                <div key={phase.time} className="relative">
                  <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-charcoal mb-2">{phase.time}</h3>
                    <div className="text-sm text-gold mb-3">{phase.duration}</div>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages & Investment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Wedding <span className="text-gold">Packages</span>
            </h2>
            <p className="text-xl text-gold-light">
              Investment in memories that will last a lifetime
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "₹45,000",
                duration: "6 hours",
                features: [
                  "Single photographer",
                  "200+ edited photos",
                  "Online gallery",
                  "Basic album",
                  "USB delivery"
                ]
              },
              {
                name: "Premium",
                price: "₹75,000",
                duration: "8-10 hours", 
                features: [
                  "Two photographers",
                  "400+ edited photos",
                  "Premium online gallery",
                  "Luxury album",
                  "USB + prints",
                  "Engagement session"
                ],
                popular: true
              },
              {
                name: "Luxury",
                price: "₹1,20,000",
                duration: "Full day + next day",
                features: [
                  "Lead photographer + assistant",
                  "600+ edited photos",
                  "Premium gallery",
                  "Designer album",
                  "Canvas prints",
                  "Engagement + trash the dress",
                  "Videography add-on"
                ]
              }
            ].map((pkg, index) => (
              <Card key={pkg.name} className={`p-8 ${pkg.popular ? 'ring-2 ring-gold bg-white' : 'bg-white/5 text-white'}`}>
                {pkg.popular && (
                  <Badge className="mb-4 bg-gold text-black">Most Popular</Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-gold">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  <div className="text-sm opacity-70">{pkg.duration} coverage</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={pkg.popular ? "elegant" : "outline"} className={`w-full ${!pkg.popular ? 'border-gold text-gold hover:bg-gold hover:text-black' : ''}`}>
                  Select Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-rose">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-8">
              Why Choose <span className="text-gold">Everglow Studios?</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Experienced Team",
                  description: "Over 500 weddings captured with artistic excellence and professionalism"
                },
                {
                  title: "Dual Perspective",
                  description: "Two photographers ensure we never miss a moment from any angle"
                },
                {
                  title: "Quick Delivery",
                  description: "Preview gallery within 48 hours, full gallery within 3-4 weeks"
                },
                {
                  title: "Lifetime Support",
                  description: "Ongoing access to your photos and reprints whenever you need them"
                }
              ].map((benefit, index) => (
                <div key={benefit.title} className="flex items-start">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-charcoal mb-2">{benefit.title}</h3>
                    <p className="text-charcoal/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-white shadow-elegant">
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">What's Always Included</h3>
            <ul className="space-y-3">
              {[
                "Pre-wedding consultation",
                "Professional photo editing",
                "High-resolution image delivery",
                "Online gallery with sharing options",
                "Print release for personal use",
                "Backup and secure storage",
                "Timeline planning assistance",
                "Emergency backup equipment"
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
            Your Perfect Wedding Awaits
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create timeless memories of the most important day of your life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Schedule Consultation
            </Button>
            <Button variant="minimal" size="xl">
              View Wedding Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wedding;