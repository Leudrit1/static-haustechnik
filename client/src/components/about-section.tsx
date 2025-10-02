import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Jahre Erfahrung", color: "text-primary" },
  { value: "500+", label: "Projekte", color: "text-accent" },
  { value: "98%", label: "Zufriedenheit", color: "text-primary" },
  { value: "12", label: "Fachkräfte", color: "text-accent" }
];

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="Veluna Haustechnik Team" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">Geschichte und Vision</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Veluna Haustechnik GmbH wurde mit dem klaren Ziel gegründet, erstklassige Haustechnik-Lösungen für die Schweiz anzubieten. Unser Fokus liegt auf modernen Wasser- und Heizsystemen, die höchsten Qualitätsstandards entsprechen.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Mit jahrelanger Erfahrung im Bereich Mauerarbeiten und einem Schwerpunkt auf Wassersysteme und Heizungsinstallationen, bieten wir umfassende Dienstleistungen für Privat- und Geschäftskunden.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Unser Team arbeitet mit modernster Technologie und setzt auf nachhaltige, energieeffiziente Lösungen. Wir legen großen Wert auf persönliche Beratung und individuelle Projektbegleitung.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-muted rounded-xl"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
