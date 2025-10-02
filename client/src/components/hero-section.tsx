import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-black/80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ihr Haustechnik-Partner<br/>in der Schweiz
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Spezialisiert auf Wassersysteme und Heizungsinstallationen für Ihr Zuhause
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#kontakt" 
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg inline-block"
              data-testid="hero-cta-quote"
            >
              Kostenlose Offerte einholen
            </a>
            <a 
              href="tel:+41000000000" 
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg inline-flex items-center gap-2"
              data-testid="hero-cta-phone"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
