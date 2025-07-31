import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import anniversaryHero from "@/assets/anniversary-hero.jpg";
import { Heart, Calendar, Gift, Camera, Clock, Star } from "lucide-react";

const Anniversary = () => {
  const milestones = [
    { year: "1st", theme: "Paper Anniversary", color: "from-rose to-rose-dark" },
    { year: "5th", theme: "Wood Anniversary", color: "from-amber-600 to-amber-800" },
    { year: "10th", theme: "Tin Anniversary", color: "from-gray-400 to-gray-600" },
    { year: "25th", theme: "Silver Anniversary", color: "from-gray-300 to-gray-500" },
    { year: "50th", theme: "Golden Anniversary", color: "from-gold to-gold-light" }
  ];

  const sessionTypes = [
    {
      name: "Intimate Portrait",
      duration: "1 hour",
      price: "₹12,000",
      description: "Couple portraits in a beautiful setting",
      includes: ["30+ edited photos", "Online gallery", "Print release"]
    },
    {
      name: "Celebration Session",
      duration: "2 hours", 
      price: "₹18,000",
      description: "Anniversary party or dinner documentation",
      includes: ["50+ edited photos", "Event coverage", "Family portraits", "Same day highlights"]
    },
    {
      name: "Romantic Getaway",
      duration: "Half day",
      price: "₹25,000", 
      description: "Destination anniversary celebration",
      includes: ["100+ edited photos", "Location variety", "Lifestyle shots", "Premium editing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Elegant Hero with Overlay Text */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src={anniversaryHero} 
            alt="Anniversary celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-gold mr-3" />
                <span className="text-gold font-medium">Celebrate Your Journey</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Anniversary
                <span className="block text-gold-light">Photography</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Every year together is a milestone worth celebrating. Capture the love, 
                growth, and beautiful memories you've created on your journey together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="elegant" size="xl">
                  Book Your Session
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-charcoal">
                  View Gallery
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-6 text-gold">Perfect For</h3>
                <div className="space-y-4">
                  {[
                    { icon: Calendar, text: "Any anniversary milestone" },
                    { icon: Gift, text: "Surprise celebrations" },
                    { icon: Heart, text: "Renewal of vows" },
                    { icon: Star, text: "Special occasions" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <item.icon className="w-5 h-5 text-gold mr-3" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Anniversary Milestones - Creative Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Celebrating <span className="text-gold">Milestones</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Every anniversary is special and deserves to be commemorated beautifully
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg`}>
                  {milestone.year}
                </div>
                <h3 className="font-serif font-bold text-charcoal mb-2">{milestone.theme}</h3>
                <p className="text-sm text-muted-foreground">A beautiful milestone to celebrate your enduring love</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types - Card Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Session <span className="text-gold">Options</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect package for your anniversary celebration
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sessionTypes.map((session, index) => (
              <Card key={session.name} className={`p-8 ${index === 1 ? 'ring-2 ring-gold shadow-gold transform scale-105' : 'shadow-elegant'} hover:shadow-gold transition-all duration-300`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{session.name}</h3>
                  <div className="flex items-center justify-center text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {session.duration}
                  </div>
                  <div className="text-3xl font-bold text-gold">{session.price}</div>
                </div>
                
                <p className="text-muted-foreground text-center mb-6">{session.description}</p>
                
                <div className="space-y-3 mb-8">
                  {session.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                      <span className="text-charcoal text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant={index === 1 ? "elegant" : "luxe"} className="w-full">
                  Choose This Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Anniversary Photography */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-rose">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-8">
              Why Celebrate With <span className="text-gold">Photography?</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Document Your Growth",
                  description: "See how your love has evolved and deepened over the years"
                },
                {
                  title: "Create New Memories",
                  description: "The photo session itself becomes a special experience to remember"
                },
                {
                  title: "Family Heirloom",
                  description: "Beautiful portraits to pass down to children and grandchildren"
                },
                {
                  title: "Celebrate Together",
                  description: "A perfect excuse to dress up and spend quality time together"
                }
              ].map((benefit, index) => (
                <div key={benefit.title} className="flex items-start">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-charcoal mb-2">{benefit.title}</h3>
                    <p className="text-charcoal/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-white shadow-elegant">
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Pre-session styling consultation",
                  "Relaxed and intimate photography",
                  "Multiple outfit and location options",
                  "Professional editing and retouching",
                  "High-resolution image delivery",
                  "Print release for personal use"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6 bg-gradient-gold text-white">
              <h3 className="text-xl font-serif font-bold mb-4">Special Add-Ons</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>Custom photo album</span>
                  <span>+₹5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Canvas prints (set of 3)</span>
                  <span>+₹3,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Additional locations</span>
                  <span>+₹2,000</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Celebrate Your Love Story
          </h2>
          <p className="text-xl text-gold-light mb-8">
            Every year together is a chapter worth celebrating and remembering forever
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Book Anniversary Session
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

export default Anniversary;