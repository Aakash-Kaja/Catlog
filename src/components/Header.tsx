import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.catalog'), href: "/catalog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border shadow-card sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap justify-between items-center h-16 w-full min-w-0">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link to="/" className="text-lg sm:text-xl font-bold text-business-blue truncate">
              {t('brand')}
            </Link>
          </div>

          {/* Language Selector (hidden on mobile, visible on md+) */}
          <div className="ml-2 hidden md:block">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border rounded px-2 py-1 text-xs md:text-xs lg:text-xs"
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="te">తెలుగు</option>
            </select>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-2 rounded-md text-xs font-medium transition-smooth ${
                  isActive(item.href)
                    ? "text-primary bg-business-gray-light"
                    : "text-business-gray hover:text-primary hover:bg-business-gray-light"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-business-gray hover:text-primary"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                    isActive(item.href)
                      ? "text-primary bg-business-gray-light"
                      : "text-business-gray hover:text-primary hover:bg-business-gray-light"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Language Selector in mobile menu */}
              <div className="mt-2">
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="border rounded px-2 py-1 text-xs w-full"
                  aria-label="Select language"
                >
                  <option value="en">English</option>
                  <option value="te">తెలుగు</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;