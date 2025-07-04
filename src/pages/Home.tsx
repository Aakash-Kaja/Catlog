import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
  };

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
            <span className="block text-business-orange mb-2">{t('home.heroTitle')}</span>
            <span className="text-3xl md:text-4xl font-semibold">{t('home.heroSubtitle')}</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            {t('home.heroDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="contact" size="lg" asChild>
              <a href="tel:08819223582">{t('home.callNow')}</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-business-blue">
              <a href="https://maps.app.goo.gl/ewxkqQ682Nnkv87z9" target="_blank" rel="noopener noreferrer">{t('home.findUs')}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-business-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-blue mb-4">
              {t('home.aboutTitle')}
            </h2>
            <p className="text-lg text-business-gray max-w-2xl mx-auto">
              {t('home.aboutDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-blue mb-4">
                  {t('home.trusted')}
                </h3>
                <p className="text-business-gray">
                  {t('home.trustedDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-blue mb-4">
                  {t('home.quality')}
                </h3>
                <p className="text-business-gray">
                  {t('home.qualityDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card hover:shadow-professional transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-business-blue mb-4">
                  {t('home.personal')}
                </h3>
                <p className="text-business-gray">
                  {t('home.personalDesc')}
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
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('home.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="contact" size="lg" asChild>
              <a href="tel:08819223582">{t('home.call')}</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-business-blue"
              asChild
            >
              <a href="https://maps.app.goo.gl/ewxkqQ682Nnkv87z9" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 mr-2" />
                {t('home.findUsMaps')}
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