import { motion } from "framer-motion";
import logoImage from "@assets/favicon.png";

const footerSections = [
  {
    title: "Leistungen",
    links: [
      { label: "Wassersysteme", href: "#leistungen" },
      { label: "Heizungsinstallation", href: "#leistungen" },
      { label: "Allgemeine Haustechnik", href: "#leistungen" }
    ]
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "#ueber-uns" },
      { label: "Projekte", href: "#projekte" },
      { label: "Kontakt", href: "#kontakt" }
    ]
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "javascript:void(0)" },
      { label: "Datenschutz", href: "javascript:void(0)" },
      { label: "AGB", href: "javascript:void(0)" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="Veluna Logo" 
                className="h-11 w-10" 
              />
              <div>
                <h3 className="text-lg font-bold">VELUNA</h3>
                <p className="text-xs text-white/60">HAUSTECHNIK GMBH</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Ihr zuverlässiger Partner für moderne Haustechnik-Lösungen in der Schweiz.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-accent transition-colors"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center text-sm text-white/60"
        >
          <p>&copy; 2024 Veluna Haustechnik GmbH. Alle Rechte vorbehalten.</p>
        </motion.div>
      </div>
    </footer>
  );
}
