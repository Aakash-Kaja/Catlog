import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Download, ExternalLink, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Catalog = () => {
  const productCategories = [
    {
      company: "Zydus Wellness Ltd",
      category: "Health & Nutrition",
      description: "Popular nutritional and wellness products for daily use",
      products: [
        { name: "Complan", size: "500gm" },
        { name: "Glucon-D", size: "Regular" },
        { name: "Nycil Prickly Heat Powder", size: "150gm" },
        { name: "Everyouth", size: "Face Pack" },
        { name: "Sugarfree Tablets", size: "100pcs" },
        { name: "Sugarfree Powder", size: "100gm" },
        { name: "I Am Lite", size: "Low Calorie" },
      ],
      hasDownload: true,
    },
    {
      company: "Winkies",
      category: "Bakery Products",
      description: "Delicious ready-to-eat cakes in a variety of price ranges",
      products: [
        { name: "Winkies Cake - ₹5", size: "Small" },
        { name: "Winkies Cake - ₹10", size: "Medium" },
        { name: "Winkies Cake - ₹15", size: "Medium" },
        { name: "Winkies Cake - ₹20", size: "Large" },
        { name: "Winkies Cake - ₹30", size: "Large" },
        { name: "Winkies Cake - ₹50", size: "Extra Large" },
        { name: "Winkies Cake - ₹60", size: "Premium" },
        { name: "Winkies Cake - ₹90", size: "Premium" },
      ],
      hasDownload: true,
    },
    {
      company: "Bioline",
      category: "Medical & Hygiene",
      description: "Essential medical and hygiene products for everyday needs",
      products: [
        { name: "Doctor Phenyle", size: "1lt" },
        { name: "ArKof", size: "100ml" },
        { name: "Crack Heel", size: "50gm" },
        { name: "Fenacin", size: "100ml" },
        { name: "Adult Diapers", size: "Pack" },
      ],
      hasDownload: true,
    },
    {
      company: "Padmini",
      category: "Fragrance & Spiritual",
      description: "Aromatic products for daily prayer and meditation",
      products: [{ name: "Padmini Agarbatti", size: "Box" }],
      hasDownload: true,
    },
    {
      company: "Gowdurbar",
      category: "Spiritual & Wellness",
      description: "Traditional and aromatic pooja and wellness items",
      products: [
        { name: "Dhoop Cones", size: "Box" },
        { name: "Dhoop Sticks", size: "Pack" },
        { name: "Dhoop Cups", size: "Set" },
        { name: "Pooja Oil", size: "500ml" },
        { name: "Chaphor", size: "Bottle" },
        { name: "Sree Chandah Powder", size: "50gm" },
        { name: "Soaps", size: "Pack" },
      ],
      hasDownload: true,
    },
    {
      company: "Pigeon",
      category: "Baby Care",
      description: "Trusted products for gentle baby care and hygiene",
      products: [{ name: "Pigeon Baby Care Products", size: "Assorted" }],
      hasDownload: true,
    },
    {
      company: "Florite",
      category: "Baby Care",
      description: "Safe and nurturing care products for infants and toddlers",
      products: [{ name: "Florite Baby Care Products", size: "Assorted" }],
      hasDownload: true,
    },
    {
      company: "Wagh Bakri",
      category: "Beverages",
      description: "Premium tea for refreshing moments",
      products: [{ name: "Wagh Bakri Tea Powder", size: "500gm" }],
      hasDownload: true,
    },
    {
      company: "Cipla",
      category: "Cough & Cold Remedies",
      description: "Effective relief for cold and sore throat",
      products: [{ name: "Cofsils", size: "Strip" }],
      hasDownload: true,
    },
    {
      company: "Mugi",
      category: "Cleaning & Hygiene",
      description: "Powerful cleaning solutions for home and kitchen",
      products: [
        { name: "Mugi Liquid Detergent", size: "1lt" },
        { name: "Mugi Dish Wash", size: "500ml" },
        { name: "Mugi Detergent Soaps", size: "Pack" },
      ],
      hasDownload: true,
    },
    {
      company: "Gayatri",
      category: "Spiritual Essentials",
      description: "Essential products for spiritual rituals",
      products: [{ name: "Gayatri Pooja Oil", size: "500ml" }],
      hasDownload: true,
    },
    {
      company: "Organic Farms",
      category: "Natural Products",
      description: "Pure, organic ingredients straight from nature",
      products: [
        { name: "Pure Organic Jaggery", size: "1kg" },
        { name: "Pure Honey", size: "500ml" },
      ],
      hasDownload: true,
    },
    {
      company: "Premium Nuts Co.",
      category: "Dry Fruits & Snacks",
      description: "High-quality nuts and healthy snacking options",
      products: [
        { name: "No. 1 Good Quality Cashew", size: "500gm" },
        { name: "Roasted Peanuts", size: "250gm" },
      ],
      hasDownload: true,
    },
    {
      company: "Abbott Nutrition",
      category: "Baby Nutrition",
      description: "Advanced nutritional supplements for infants and children",
      products: [
        { name: "Pediasure", size: "400gm" },
        { name: "Ensure", size: "400gm" },
        { name: "Similac", size: "400gm" },
        { name: "Isomil", size: "400gm" },
      ],
      hasDownload: true,
    },
    {
      company: "Huggies",
      category: "Baby Diapers",
      description: "Comfortable and absorbent diapers for babies",
      products: [{ name: "Huggies Diapers", size: "Pack" }],
      hasDownload: true,
    },
    {
      company: "Mars Inc.",
      category: "Confectionery",
      description: "Delicious chocolates loved by all ages",
      products: [{ name: "Snickers Chocolates", size: "Bar" }],
      hasDownload: true,
    },
  ];

  return (
    <div className="min-h-screen bg-business-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-business-blue mb-4">
            Our Product Catalog
          </h1>
          <p className="text-lg text-business-gray max-w-2xl mx-auto">
            Explore our extensive range of products from trusted partner companies. 
            Quality guaranteed, competitive prices, and local expertise you can trust.
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
                            {product.name}
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
                Don't See What You're Looking For?
              </h3>
              <p className="text-business-gray mb-6">
                We work with many partner companies and can source products beyond 
                what's shown here. Contact us to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="professional" size="lg" asChild>
                  <a href="tel:08819223582">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us: 08819 223582
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://maps.app.goo.gl/ewxkqQ682Nnkv87z9" target="_blank" rel="noopener noreferrer">
                    Request Custom Quote
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