import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    src: "/attached_assets/gallery/20190712_135757.jpg",
    largeSrc: "/attached_assets/gallery/20190712_135757.jpg",
    alt: "Haustechnische Installation - Rohrleitungen"
  },
  {
    src: "/attached_assets/gallery/20190712_135805.jpg",
    largeSrc: "/attached_assets/gallery/20190712_135805.jpg",
    alt: "Heizungssystem Installation"
  },
  {
    src: "/attached_assets/gallery/20190712_140053.jpg",
    largeSrc: "/attached_assets/gallery/20190712_140053.jpg",
    alt: "Wassersysteme Installation"
  },
  {
    src: "/attached_assets/gallery/20191023_164626.jpg",
    largeSrc: "/attached_assets/gallery/20191023_164626.jpg",
    alt: "Rohrleitungssysteme im Detail"
  },
  {
    src: "/attached_assets/gallery/20191023_164633.jpg",
    largeSrc: "/attached_assets/gallery/20191023_164633.jpg",
    alt: "Professionelle Haustechnik Arbeiten"
  },
  {
    src: "/attached_assets/gallery/20191025_153000.jpg",
    largeSrc: "/attached_assets/gallery/20191025_153000.jpg",
    alt: "Heizungsanlagen Installation"
  },
  {
    src: "/attached_assets/gallery/20191025_160055.jpg",
    largeSrc: "/attached_assets/gallery/20191025_160055.jpg",
    alt: "Wassersystem Optimierung"
  },
  {
    src: "/attached_assets/gallery/20201216_133954.jpg",
    largeSrc: "/attached_assets/gallery/20201216_133954.jpg",
    alt: "Moderne Haustechnik Lösungen"
  },
  {
    src: "/attached_assets/gallery/20201216_134707.jpg",
    largeSrc: "/attached_assets/gallery/20201216_134707.jpg",
    alt: "Rohrsystem Maintenance"
  },
  {
    src: "/attached_assets/gallery/20210205_152341.jpg",
    largeSrc: "/attached_assets/gallery/20210205_152341.jpg",
    alt: "Heizungsmodernisierung"
  },
  {
    src: "/attached_assets/gallery/20210924_091943.jpg",
    largeSrc: "/attached_assets/gallery/20210924_091943.jpg",
    alt: "Energieeffiziente Heizungstechnik"
  },
  {
    src: "/attached_assets/gallery/20210924_091949.jpg",
    largeSrc: "/attached_assets/gallery/20210924_091949.jpg",
    alt: "Spezialanlagen Installation"
  },
  {
    src: "/attached_assets/gallery/20211203_145215.jpg",
    largeSrc: "/attached_assets/gallery/20211203_145215.jpg",
    alt: "Wärmepumpen Installation"
  },
  {
    src: "/attached_assets/gallery/20220707_154843.jpg",
    largeSrc: "/attached_assets/gallery/20220707_154843.jpg",
    alt: "Klima und Lüftungstechnik"
  },
  {
    src: "/attached_assets/gallery/20220712_170611.jpg",
    largeSrc: "/attached_assets/gallery/20220712_170611.jpg",
    alt: "Solarunterstützte Heizung"
  },
  {
    src: "/attached_assets/gallery/20221013_101927.jpg",
    largeSrc: "/attached_assets/gallery/20221013_101927.jpg",
    alt: "Smart Home Technik"
  },
  {
    src: "/attached_assets/gallery/20221013_101939.jpg",
    largeSrc: "/attached_assets/gallery/20221013_101939.jpg",
    alt: "Digitale Heizungssteuerung"
  },
  {
    src: "/attached_assets/gallery/20221202_114319.jpg",
    largeSrc: "/attached_assets/gallery/20221202_114319.jpg",
    alt: "Nachhaltige Haustechnik"
  },
  {
    src: "/attached_assets/gallery/20221202_114326.jpg",
    largeSrc: "/attached_assets/gallery/20221202_114326.jpg",
    alt: "Effiziente Wassersysteme"
  },
  {
    src: "/attached_assets/gallery/20230310_120325.jpg",
    largeSrc: "/attached_assets/gallery/20230310_120325.jpg",
    alt: "Zukunftssichere Gebäudetechnik"
  }
];

interface ProjectsGalleryProps {
  onImageClick: (src: string, alt: string) => void;
}

export default function ProjectsGallery({ onImageClick }: ProjectsGalleryProps) {
  return (
    <section id="projekte" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Unsere Projekte</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ein Einblick in unsere erfolgreich abgeschlossenen Haustechnik-Projekte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gallery-item rounded-xl overflow-hidden shadow-lg aspect-square cursor-pointer"
              onClick={() => onImageClick(project.largeSrc, project.alt)}
              data-testid={`gallery-item-${index}`}
            >
              <img 
                src={project.src} 
                alt={project.alt} 
                className="w-full h-full object-cover brightness-90"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}