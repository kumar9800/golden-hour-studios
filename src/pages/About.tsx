import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                Our <span className="text-gold">Story</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded with a passion for capturing life's most precious moments, Everglow Studios has been creating timeless memories for over a decade. We believe every love story deserves to be told beautifully.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gold">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Award Winning</span>
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">500+ Happy Couples</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-gold rounded-full p-8">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Camera className="w-24 h-24 text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Meet Our <span className="text-gold">Creative Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our passionate photographers and videographers bring years of experience and artistic vision to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center group">
              <div className="w-64 h-64 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">Rajesh Kumar</h3>
              <p className="text-gold font-medium mb-2">Lead Photographer</p>
              <p className="text-muted-foreground">Specializing in wedding and portrait photography with 12+ years of experience</p>
            </div>
            
            <div className="text-center group">
              <div className="w-64 h-64 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center">
                  <Heart className="w-16 h-16 text-gold" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">Priya Sharma</h3>
              <p className="text-gold font-medium mb-2">Creative Director</p>
              <p className="text-muted-foreground">Expert in cinematic videography and storytelling through visual narratives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-16">
            Our <span className="text-gold">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Passion</h3>
              <p className="text-gold-light">We pour our heart into every shot, ensuring each moment is captured with genuine emotion and artistry.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gold-light">We strive for perfection in every detail, from composition to post-processing, delivering only the finest quality.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Connection</h3>
              <p className="text-gold-light">Building genuine relationships with our clients allows us to capture their unique story authentically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to start your journey with us? We'd love to hear your story.
          </p>
          <Button variant="luxe" size="xl">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;