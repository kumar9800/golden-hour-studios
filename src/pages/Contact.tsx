import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-gold/5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Let's <span className="text-gold">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to capture your special moments? We'd love to hear about your vision and create something beautiful together.
          </p>
          <Badge variant="outline" className="border-gold text-gold mb-8">
            Free Consultation Available
          </Badge>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gold/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-charcoal">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your event and how we can help make it unforgettable.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Input id="eventType" placeholder="Wedding, Pre-wedding, Anniversary, etc." />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input id="eventDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input id="budget" placeholder="e.g., ₹50,000 - ₹1,00,000" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your vision</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your event, style preferences, and any special requirements..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="luxe" size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Contact Details */}
              <Card className="border-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-charcoal">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Phone</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Email</p>
                      <p className="text-muted-foreground">hello@everglowstudios.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Studio Location</p>
                      <p className="text-muted-foreground">123 Photography Lane<br />Mumbai, Maharashtra 400001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Business Hours</p>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: By Appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media */}
              <Card className="border-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-charcoal">Follow Our Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="border-gold hover:bg-gold hover:text-white">
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-gold hover:bg-gold hover:text-white">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-gold hover:bg-gold hover:text-white">
                      <Youtube className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Follow us on social media to see our latest work and behind-the-scenes moments.
                  </p>
                </CardContent>
              </Card>
              
              {/* Quick Services */}
              <Card className="border-gold/20 bg-gradient-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-charcoal">Quick Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                    <div>
                      <p className="font-medium">Emergency Booking</p>
                      <p className="text-sm text-muted-foreground">Last-minute event coverage</p>
                    </div>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                    <div>
                      <p className="font-medium">Portfolio Consultation</p>
                      <p className="text-sm text-muted-foreground">Review our work together</p>
                    </div>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                    <div>
                      <p className="font-medium">Custom Packages</p>
                      <p className="text-sm text-muted-foreground">Tailored to your needs</p>
                    </div>
                  </Button>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">How far in advance should I book?</h3>
                <p className="text-muted-foreground text-sm">We recommend booking 3-6 months in advance, especially for wedding season (October to March).</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">Do you travel for destination weddings?</h3>
                <p className="text-muted-foreground text-sm">Yes! We love destination weddings and are available for travel across India and internationally.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">What's included in your packages?</h3>
                <p className="text-muted-foreground text-sm">All packages include professional photography, basic editing, and digital gallery delivery.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">How soon will we receive our photos?</h3>
                <p className="text-muted-foreground text-sm">Edited photos are typically delivered within 2-4 weeks, with preview gallery available within 48 hours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Let's Start Planning Your Perfect Day
          </h2>
          <p className="text-xl text-gold-light mb-8">
            Every love story is unique, and we're here to capture yours beautifully.
          </p>
          <Button variant="elegant" size="xl">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;