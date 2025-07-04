import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Download, ExternalLink, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Catalog = () => {
  const { t } = useTranslation();
  const productCategories = [
    {
      company: t('catalog.companies.zydus'),
      category: t('catalog.categories.health'),
      description: t('catalog.products.complan.desc'),
      products: [
        { key: "complan", size: "500gm" },
        { key: "gluconD", size: "Regular" },
        { key: "nycil", size: "150gm" },
        { key: "everyouth", size: "Face Pack" },
        { key: "sugarfreeTablets", size: "100pcs" },
        { key: "sugarfreePowder", size: "100gm" },
        { key: "iamLite", size: "Low Calorie" },
      ],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.winkies'),
      category: t('catalog.categories.bakery'),
      description: t('catalog.products.winkies5.desc'),
      products: [
        { key: "winkies5", size: "Small" },
        { key: "winkies10", size: "Medium" },
        { key: "winkies15", size: "Medium" },
        { key: "winkies20", size: "Large" },
        { key: "winkies30", size: "Large" },
        { key: "winkies50", size: "Extra Large" },
        { key: "winkies60", size: "Premium" },
        { key: "winkies90", size: "Premium" },
      ],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.bioline'),
      category: t('catalog.categories.medical'),
      description: t('catalog.products.doctorPhenyle.desc'),
      products: [
        { key: "doctorPhenyle", size: "1lt" },
        { key: "arkof", size: "100ml" },
        { key: "crackHeel", size: "50gm" },
        { key: "fenacin", size: "100ml" },
        { key: "adultDiapers", size: "Pack" },
      ],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.padmini'),
      category: t('catalog.categories.fragrance'),
      description: t('catalog.products.padminiAgarbatti.desc'),
      products: [{ key: "padminiAgarbatti", size: "Box" }],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.gowdurbar'),
      category: t('catalog.categories.spiritual'),
      description: t('catalog.products.dhoopCones.desc'),
      products: [
        { key: "dhoopCones", size: "Box" },
        { key: "dhoopSticks", size: "Pack" },
        { key: "dhoopCups", size: "Set" },
        { key: "poojaOil", size: "500ml" },
        { key: "chaphor", size: "Bottle" },
        { key: "sreeChandahPowder", size: "50gm" },
        { key: "soaps", size: "Pack" },
      ],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.pigeon'),
      category: t('catalog.categories.babyCare'),
      description: t('catalog.products.pigeonBaby.desc'),
      products: [{ key: "pigeonBaby", size: "Assorted" }],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.florite'),
      category: t('catalog.categories.babyCare'),
      description: t('catalog.products.floriteBaby.desc'),
      products: [{ key: "floriteBaby", size: "Assorted" }],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.waghBakri'),
      category: t('catalog.categories.beverages'),
      description: t('catalog.products.waghBakri.desc'),
      products: [{ key: "waghBakri", size: "500gm" }],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.cipla'),
      category: t('catalog.categories.cough'),
      description: t('catalog.products.cofsils.desc'),
      products: [{ key: "cofsils", size: "Strip" }],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.mugi'),
      category: t('catalog.categories.cleaning'),
      description: t('catalog.products.mugiLiquid.desc'),
      products: [
        { key: "mugiLiquid", size: "1lt" },
        { key: "mugiDish", size: "500ml" },
        { key: "mugiSoaps", size: "Pack" },
      ],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.gayatri'),
      category: t('catalog.categories.spiritualEssentials'),
      description: t('catalog.products.gayatriOil.desc'),
      products: [{ key: "gayatriOil", size: "500ml" }],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.organicFarms'),
      category: t('catalog.categories.natural'),
      description: t('catalog.products.jaggery.desc'),
      products: [
        { key: "jaggery", size: "1kg" },
        { key: "honey", size: "500ml" },
      ],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.premiumNuts'),
      category: t('catalog.categories.dryFruits'),
      description: t('catalog.products.cashew.desc'),
      products: [
        { key: "cashew", size: "500gm" },
        { key: "peanuts", size: "250gm" },
      ],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.abbott'),
      category: t('catalog.categories.babyNutrition'),
      description: t('catalog.products.pediasure.desc'),
      products: [
        { key: "pediasure", size: "400gm" },
        { key: "ensure", size: "400gm" },
        { key: "similac", size: "400gm" },
        { key: "isomil", size: "400gm" },
      ],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.huggies'),
      category: t('catalog.categories.babyDiapers'),
      description: t('catalog.products.huggies.desc'),
      products: [{ key: "huggies", size: "Pack" }],
      hasDownload: true,
    },
    {
      company: t('catalog.companies.mars'),
      category: t('catalog.categories.confectionery'),
      description: t('catalog.products.snickers.desc'),
      products: [{ key: "snickers", size: "Bar" }],
      hasDownload: true,
    },
  ];

  return (
    <div className="min-h-screen bg-business-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-business-blue mb-4">
            {t('catalog.title')}
          </h1>
          <p className="text-lg text-business-gray max-w-2xl mx-auto">
            {t('catalog.subtitle')}
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-professional transition-smooth">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-business-blue mb-2">
                      {category.category}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {category.company}
                    </Badge>
                    <p className="text-business-gray">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="bg-background rounded-lg p-4 border border-border hover:shadow-card transition-smooth"
                    >
                      <div className="flex flex-col items-start mb-3">
                        <div className="w-full flex justify-between items-center mb-1">
                          <h4 className="font-medium text-business-blue">
                            {t(`catalog.products.${product.key}.name`)}
                          </h4>
                          <span className="text-business-gray text-sm ml-4 whitespace-nowrap">{product.size}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-professional">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-business-blue mb-4">
                {t('catalog.ctaTitle')}
              </h3>
              <p className="text-business-gray mb-6">
                {t('catalog.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="professional" size="lg" asChild>
                  <a href="tel:08819223582">
                    <Phone className="w-4 h-4 mr-2" />
                    {t('catalog.callUs')}
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://maps.app.goo.gl/ewxkqQ682Nnkv87z9" target="_blank" rel="noopener noreferrer">
                    {t('catalog.requestQuote')}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Catalog;