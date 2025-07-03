import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-business-orange mb-2">SRI RAMA ENTERPRISES</span>
            <span className="text-3xl md:text-4xl font-semibold">Shop No 1, NSC BOSE ROAD, TANUKU</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Your trusted local shop for quality products and personal service. Call us at 08819 223582 or +91 9985266299.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="contact" size="lg" asChild>
              <a href="tel:08819223582">Call Now</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-business-blue">
              <a href="https://maps.app.goo.gl/ewxkqQ682Nnkv87z9" target="_blank" rel="noopener noreferrer">Find Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-business-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-blue mb-4">
              Why Choose SRI RAMA ENTERPRISES?
            </h2>
            <p className="text-lg text-business-gray max-w-2xl mx-auto">
              We are your neighbors, committed to bringing you the best products with the personal service you deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-blue mb-4">
                  Trusted Partnership
                </h3>
                <p className="text-business-gray">
                  25+ years of reliable service to our community. We stand behind 
                  every product and every promise we make.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-blue mb-4">
                  Quality Products
                </h3>
                <p className="text-business-gray">
                  We carefully select our partner companies to ensure you receive 
                  only the highest quality products at competitive prices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-blue mb-4">
                  Personal Service
                </h3>
                <p className="text-business-gray">
                  Local expertise with a personal touch. We know our customers 
                  by name and their needs by heart.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Visit Sri Rama Enterprises Today!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore our range of products or contact us directly for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="contact" size="lg" asChild>
              <a href="tel:08819223582">Call: 08819 223582</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-business-blue"
              asChild
            >
              <a href="https://maps.app.goo.gl/ewxkqQ682Nnkv87z9" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 mr-2" />
                Find Us on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with contact details */}
      
    </div>
  );
};

export default Home;