import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Wassersysteme",
    description: "Professionelle Installation und Wartung von Wasserleitungen, Sanitäranlagen und modernen Wassersystemen für Ihr Zuhause.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Wasserleitung Installation",
      "Sanitär-Installationen", 
      "Wartung & Reparatur"
    ]
  },
  {
    title: "Heizungsinstallation",
    description: "Moderne Heizsysteme für optimale Energieeffizienz und Wohnkomfort. Beratung, Installation und Service aus einer Hand.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Wärmepumpen",
      "Fußbodenheizung",
      "Heizkörper-Installation"
    ]
  },
  {
    title: "Allgemeine Haustechnik",
    description: "Umfassende Haustechnik-Dienstleistungen für Neubauten, Renovationen und Sanierungen in der ganzen Schweiz.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Neubau-Installationen",
      "Renovationen",
      "Notfall-Service"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionelle Haustechnik-Lösungen für Ihr Zuhause – von der Planung bis zur Installation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#kontakt" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                  data-testid={`service-cta-${index}`}
                >
                  Mehr erfahren
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
