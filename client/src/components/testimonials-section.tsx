import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Stefan Müller",
    location: "Zürich",
    initials: "SM",
    text: "Hervorragende Arbeit! Die Installation unseres neuen Heizsystems verlief reibungslos und professionell. Das Team war pünktlich, sauber und sehr kompetent."
  },
  {
    name: "Anna Weber",
    location: "Bern",
    initials: "AW",
    text: "Schnelle Reaktion bei unserem Notfall. Die Wasserleitungsreparatur wurde noch am selben Tag durchgeführt. Sehr empfehlenswert!"
  },
  {
    name: "Michael Koch",
    location: "Luzern",
    initials: "MK",
    text: "Faire Preise und ausgezeichnete Beratung. Unsere komplette Badezimmer-Sanierung wurde termingerecht und in bester Qualität abgeschlossen."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Was unsere Kunden sagen</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zufriedene Kunden sind unser bester Beweis für Qualität und Service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-muted p-8 rounded-xl shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
