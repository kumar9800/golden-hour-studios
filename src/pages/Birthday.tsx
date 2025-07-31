import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import birthdayHero from "@/assets/birthday-hero.jpg";
import { PartyPopper, Cake, Users, Camera, Clock, Gift, Smile, Star } from "lucide-react";

const Birthday = () => {
  const ageGroups = [
    {
      group: "Kids (1-12 years)",
      icon: Smile,
      themes: ["Superhero parties", "Princess themes", "Cartoon characters", "Outdoor adventures"],
      specialties: ["Child-friendly approach", "Fun props and games", "Candid play moments", "Parent-child interactions"]
    },
    {
      group: "Teens (13-18 years)",
      icon: Star,  
      themes: ["Pool parties", "Movie nights", "Dance parties", "Gaming tournaments"],
      specialties: ["Cool, modern style", "Group dynamics", "Social media ready", "Trendy editing"]
    },
    {
      group: "Adults (18+ years)",
      icon: PartyPopper,
      themes: ["Elegant dinners", "Surprise parties", "Milestone celebrations", "Themed events"],
      specialties: ["Sophisticated coverage", "Professional portraits", "Event documentation", "Luxury feel"]
    }
  ];

  const packages = [
    {
      name: "Basic Coverage",
      price: "₹8,000",
      duration: "3 hours",
      ideal: "Small gatherings",
      includes: ["50+ photos", "Basic editing", "Online gallery", "Same day highlights"]
    },
    {
      name: "Standard Party",
      price: "₹12,000", 
      duration: "4-5 hours",
      ideal: "Medium celebrations",
      includes: ["100+ photos", "Professional editing", "Group portraits", "Party video", "USB delivery"]
    },
    {
      name: "Premium Event",
      price: "₹18,000",
      duration: "Full event",
      ideal: "Large celebrations",
      includes: ["200+ photos", "Videography", "Drone shots", "Photo booth", "Same day slideshow", "Premium album"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Fun, Colorful Hero */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-rose via-gold-light to-primary/30" />
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <PartyPopper className="w-8 h-8 text-gold mr-3 animate-bounce" />
                <span className="text-charcoal font-bold text-lg">Let's Celebrate!</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6 leading-tight">
                Birthday
                <span className="block text-gold">Party</span>
                <span className="block text-charcoal">Photography</span>
              </h1>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                From first birthdays to milestone celebrations, we capture the joy, 
                laughter, and precious moments that make every birthday special.
              </p>
              
              <div className="flex items-center gap-8 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gold mr-2" />
                  <span className="text-charcoal font-medium">Flexible timing</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gold mr-2" />
                  <span className="text-charcoal font-medium">All ages welcome</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="elegant" size="xl">
                  Book Your Party
                </Button>
                <Button variant="romantic" size="xl">
                  Starting ₹8,000
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-3xl transform -rotate-6 animate-float" />
              <img 
                src={birthdayHero} 
                alt="Birthday party photography"
                className="relative w-full h-96 object-cover rounded-3xl shadow-elegant"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                <Cake className="w-8 h-8 text-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups - Colorful Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Every Age <span className="text-gold">Deserves Celebration</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized photography for different age groups and party styles
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={group.group} className="overflow-hidden hover:shadow-gold transition-all duration-300 group">
                <div className={`p-6 ${index === 0 ? 'bg-gradient-rose' : index === 1 ? 'bg-gradient-to-br from-gold-light to-gold' : 'bg-gradient-to-br from-primary to-primary/70'}`}>
                  <div className="flex items-center mb-4">
                    <group.icon className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-xl font-serif font-bold text-white">{group.group}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Popular Themes</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.themes.map((theme, idx) => (
                        <span key={idx} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Our Specialties</h4>
                    <ul className="space-y-2">
                      {group.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center text-white text-sm">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages - Playful Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Party <span className="text-gold">Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect coverage for your celebration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={pkg.name} className={`p-8 text-center ${index === 1 ? 'ring-2 ring-gold shadow-gold scale-105' : 'shadow-elegant'} hover:shadow-gold transition-all duration-300`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-gold mb-2">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground mb-1">{pkg.duration}</div>
                  <div className="text-sm text-gold font-medium">{pkg.ideal}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm">
                      <Gift className="w-4 h-4 text-gold mr-3" />
                      <span className="text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={index === 1 ? "elegant" : "romantic"} className="w-full">
                  Choose Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Capture - Grid Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-rose">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Moments We <span className="text-gold">Capture</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cake, title: "Cake Cutting", desc: "The magical moment" },
              { icon: Gift, title: "Gift Opening", desc: "Surprised expressions" },
              { icon: Users, title: "Group Fun", desc: "Friends & family" },
              { icon: PartyPopper, title: "Celebrations", desc: "Dance & games" },
              { icon: Smile, title: "Candid Joy", desc: "Natural laughter" },
              { icon: Camera, title: "Portraits", desc: "Birthday photos" },
              { icon: Star, title: "Special Moments", desc: "Unique memories" },
              { icon: Clock, title: "Timeline", desc: "Party progression" }
            ].map((moment, index) => (
              <Card key={moment.title} className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <moment.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-bold text-charcoal mb-2">{moment.title}</h3>
                <p className="text-sm text-muted-foreground">{moment.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Preparation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-8">
              Make Your Party <span className="text-gold">Photo-Perfect</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Plan the Lighting",
                  tip: "Good lighting makes all the difference - outdoor parties work great, or ensure indoor venues are well-lit"
                },
                {
                  title: "Create a Timeline",
                  tip: "Share your party schedule so we can be ready for key moments like cake cutting and gift opening"
                },
                {
                  title: "Designate a Helper",
                  tip: "Have someone help coordinate group photos and gather family members when needed"
                },
                {
                  title: "Prepare Props",
                  tip: "Fun props, signs, and decorations add personality and color to your photos"
                }
              ].map((item, index) => (
                <div key={item.title} className="flex items-start">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-black font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gold mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-gold text-black">
            <h3 className="text-2xl font-serif font-bold mb-6">Add-On Services</h3>
            <div className="space-y-4">
              {[
                { service: "Photo booth setup", price: "+₹3,000" },
                { service: "Same day slideshow", price: "+₹2,000" },
                { service: "Drone photography", price: "+₹4,000" },
                { service: "Live streaming", price: "+₹5,000" },
                { service: "Rush delivery (24hrs)", price: "+₹2,500" },
                { service: "Additional photographer", price: "+₹6,000" }
              ].map((addon, index) => (
                <div key={addon.service} className="flex justify-between items-center">
                  <span className="font-medium">{addon.service}</span>
                  <span className="font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
            Ready to Make Birthdays Unforgettable?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Every birthday is a milestone worth celebrating beautifully
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="elegant" size="xl">
              Book Your Birthday Party
            </Button>
            <Button variant="romantic" size="xl">
              See Party Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Birthday;