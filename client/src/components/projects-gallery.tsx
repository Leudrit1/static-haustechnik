import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?q=80&w=800&auto=format&fit=crop",
    largeSrc: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?q=80&w=1200&auto=format&fit=crop",
    alt: "Heizungssystem mit Rohrleitungen"
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    largeSrc: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
    alt: "Kupfer Wasserrohre Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    largeSrc: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    alt: "Industrielle Rohrleitungssysteme"
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    largeSrc: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
    alt: "Blaue Wasserrohre"
  },
  {
    src: "https://images.unsplash.com/photo-1635274343801-66d9ce5d60dc?q=80&w=800&auto=format&fit=crop",
    largeSrc: "https://images.unsplash.com/photo-1635274343801-66d9ce5d60dc?q=80&w=1200&auto=format&fit=crop",
    alt: "PVC Rohrleitungen"
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    largeSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    alt: "Komplexe Rohrinstallation"
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
