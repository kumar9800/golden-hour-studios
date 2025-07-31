import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  link: string;
  variant?: "default" | "featured" | "minimal";
}

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  price, 
  features, 
  link, 
  variant = "default" 
}: ServiceCardProps) => {
  const cardClasses = {
    default: "group hover:shadow-elegant transition-all duration-300 hover:scale-105",
    featured: "group hover:shadow-gold transition-all duration-300 hover:scale-105 ring-2 ring-gold/20",
    minimal: "group hover:shadow-lg transition-all duration-300 bg-gradient-elegant"
  };

  return (
    <Card className={cardClasses[variant]}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-4 right-4">
          <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-charcoal">
              <div className="w-2 h-2 bg-gold rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link to={link}>
          <Button variant={variant === "featured" ? "elegant" : "luxe"} className="w-full group">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;