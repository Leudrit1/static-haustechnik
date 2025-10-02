import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    largeSrc: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1200",
    alt: "Badezimmer Sanierung"
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    largeSrc: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1200",
    alt: "Heizungssystem Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    largeSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1200",
    alt: "Wasserleitung Installation"
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    largeSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1200",
    alt: "Komplette Badezimmer Renovation"
  },
  {
    src: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    largeSrc: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1200",
    alt: "Moderne Heizanlage"
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    largeSrc: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1200",
    alt: "Küchen Sanitär-Installation"
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
          <h2 className="text-4xl font-bold text-secondary mb-4">Unsere Projekte</h2>
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
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
