import { motion } from "framer-motion";
import { Home, Shield, TrendingUp, Users, DollarSign, MessageCircle } from "lucide-react";

const valueProps = [
  {
    icon: Home,
    title: "Wohnkomfort neu definieren",
    description: "Moderne Haustechnik-Lösungen für optimalen Komfort in Ihrem Zuhause.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Effizientes Heizen",
    description: "Senken Sie Ihre Heizkosten durch hochwertige und moderne Heizsysteme.",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "Wertsteigerung Ihrer Immobilie",
    description: "Erhöhen Sie den Wert durch moderne Haustechnik-Installationen.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Erfahrenes Team",
    description: "Professionelle Fachkräfte mit langjähriger Erfahrung im Haustechnik-Bereich.",
    color: "text-accent"
  },
  {
    icon: DollarSign,
    title: "Top Preis-Leistung",
    description: "Faire Preise bei höchster Qualität und zuverlässigem Service.",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    title: "Ein Ansprechpartner",
    description: "Persönlicher Kontakt für Planung, Beratung und Umsetzung Ihres Projekts.",
    color: "text-accent"
  }
];

export default function ValuePropositions() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center card-hover p-8 bg-white/5 backdrop-blur-lg rounded-xl"
            >
              <div className={`w-16 h-16 ${prop.color === 'text-primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-full flex items-center justify-center mx-auto mb-4 service-icon`}>
                <prop.icon className={`w-8 h-8 ${prop.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
              <p className="text-white/80">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
