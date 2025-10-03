import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@assets/pexels-mikhail-nilov-8943269.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden min-h-[70vh]">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0 bg-black/80"
          style={{ 
            backgroundImage: `url(${heroImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundBlendMode: 'multiply'
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
      </div>

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        style={{
          background: `linear-gradient(45deg, 
            hsl(var(--primary) / 0.2) 0%, 
            hsl(var(--accent) / 0.3) 25%, 
            transparent 50%, 
            hsl(var(--primary) / 0.2) 75%, 
            hsl(var(--accent) / 0.3) 100%)`
        }}
      />

      {/* Moving Gradient Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: "100vw", opacity: [0, 0.4, 0] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
          className="absolute top-1/4 w-96 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: "100vw", opacity: [0, 0.3, 0] }}
          transition={{ duration: 5, delay: 2, repeat: Infinity, repeatDelay: 4 }}
          className="absolute bottom-1/3 w-72 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Elements - pozicionuar strategjikisht */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.08, 0.04, 0.08],
            scale: [0, 1, 0.8, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 12, delay: 1, repeat: Infinity, repeatType: "loop" }}
          className="absolute top-[15%] left-[15%] w-24 h-24 bg-accent/15 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.07, 0.03, 0.07],
            scale: [0, 1, 0.9, 1],
            x: [0, 15, -8, 0]
          }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, repeatType: "loop" }}
          className="absolute top-[60%] right-[20%] w-20 h-20 bg-primary/15 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.06, 0.04, 0.06],
            scale: [0, 1, 0.7, 1],
            y: [0, -25, 10, 0]
          }}
          transition={{ duration: 15, delay: 3, repeat: Infinity, repeatType: "loop" }}
          className="absolute bottom-[25%] left-[40%] w-28 h-28 bg-accent/12 rounded-full blur-xl"
        />

        {/* Small floating particles - pozicionuar në zona specifike */}
        {[
          { x: '10%', y: '25%', color: 'accent/30', delay: 1 },
          { x: '85%', y: '40%', color: 'primary/30', delay: 2.5 },
          { x: '20%', y: '75%', color: 'accent/25', delay: 4 },
          { x: '75%', y: '80%', color: 'primary/25', delay: 1.5 },
          { x: '50%', y: '10%', color: 'accent/20', delay: 3.5 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1.5, 0],
              x: [0, 20, -15, 0],
              y: [0, -15, 20, 0]
            }}
            transition={{
              duration: 8 + i,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className={`absolute w-3 h-3 bg-${particle.color} rounded-full blur-sm`}
            style={{
              left: particle.x,
              top: particle.y
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="relative inline-block"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight relative"
            >
              <span className="bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
                Ihr kompetenter Partner für
              </span>
              <br />
              <span className="relative">
                HausTechnik Schweiz
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="absolute bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </span>
            </motion.h1>
            
            {/* Shimmer effect */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: "100%", opacity: [0, 1, 0] }}
              transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 4 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </motion.div>
          
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
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a 
              href="#kontakt" 
              className="bg-accent text-accent-foreground px-10 py-4 rounded-xl hover:scale-105 transition-all duration-300 font-semibold text-lg inline-block shadow-2xl shadow-accent/25"
              data-testid="hero-cta-quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kostenlose Offerte einholen
            </motion.a>
            <motion.a 
              href="tel:+41788563391" 
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-primary px-10 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center gap-2 text-center shadow-2xl shadow-primary/25"
              data-testid="hero-cta-phone"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </motion.a>
          </motion.div>


          {/* Scroll Indicator - pozicionuar më në fund */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16 flex flex-col items-center"
          >
            <span className="text-white/60 text-sm mb-3">Entdecken Sie mehr</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
            >
              <ArrowDown className="w-5 h-5 text-white/70" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
