import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="@assets/file_0000000029ec624386d5269d1de74cd4 (1)_1759404058688.png" 
              alt="Veluna Logo" 
              className="h-12 w-12" 
            />
            <div>
              <h1 className="text-xl font-bold text-secondary">VELUNA</h1>
              <p className="text-xs text-muted-foreground">HAUSTECHNIK GMBH</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-home">
              Home
            </a>
            <a href="#leistungen" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-services">
              Leistungen
            </a>
            <a href="#projekte" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-projects">
              Projekte
            </a>
            <a href="#ueber-uns" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-about">
              Über uns
            </a>
            <a 
              href="#kontakt" 
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              data-testid="nav-contact"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                  Home
                </a>
                <a href="#leistungen" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                  Leistungen
                </a>
                <a href="#projekte" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                  Projekte
                </a>
                <a href="#ueber-uns" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                  Über uns
                </a>
                <a 
                  href="#kontakt" 
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-semibold inline-block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Kontakt
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
