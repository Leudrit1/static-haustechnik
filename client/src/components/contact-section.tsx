import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
  phone: z.string().optional(),
  service: z.string().min(1, "Bitte wählen Sie eine Dienstleistung"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: ["Musterstrasse 123", "CH-3000 Bern", "Schweiz"]
  },
  {
    icon: Phone,
    title: "Telefon",
    content: ["+41 (0) 00 000 00 00"],
    href: "tel:+41000000000"
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: ["info@veluna-haustechnik.ch"],
    href: "mailto:info@veluna-haustechnik.ch"
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    content: ["Mo - Fr: 07:00 - 18:00", "Sa: 08:00 - 12:00"]
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactForm) => {
    // In a real application, this would send data to a backend API
    console.log("Form submitted:", data);
    toast({
      title: "Anfrage gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.",
    });
    form.reset();
  };

  return (
    <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Kontaktieren Sie uns</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Wir stehen Ihnen für alle Fragen rund um Ihre Haustechnik-Projekte zur Verfügung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Kontaktinformationen</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">{info.title}</div>
                    <div className="text-white/80">
                      {info.href ? (
                        <a href={info.href} className="hover:text-accent transition-colors">
                          {info.content.join(" ")}
                        </a>
                      ) : (
                        info.content.map((line, lineIndex) => (
                          <div key={lineIndex}>{line}</div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-semibold text-lg mb-4">24/7 Notfall-Service</h4>
              <p className="text-white/80 mb-4">Bei dringenden Problemen erreichen Sie uns rund um die Uhr:</p>
              <a 
                href="tel:+41000000000" 
                className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-bold text-lg"
                data-testid="emergency-contact"
              >
                Notfall: +41 (0) 00 000 00 00
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Anfrage senden</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Ihr vollständiger Name"
                            className="bg-white/90 text-foreground border-white/30 focus:ring-accent"
                            data-testid="contact-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">E-Mail *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            placeholder="ihre.email@beispiel.ch"
                            className="bg-white/90 text-foreground border-white/30 focus:ring-accent"
                            data-testid="contact-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Telefon</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel"
                            placeholder="+41 00 000 00 00"
                            className="bg-white/90 text-foreground border-white/30 focus:ring-accent"
                            data-testid="contact-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Dienstleistung *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/90 text-foreground border-white/30" data-testid="contact-service">
                              <SelectValue placeholder="Bitte wählen..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wassersysteme">Wassersysteme</SelectItem>
                            <SelectItem value="heizung">Heizungsinstallation</SelectItem>
                            <SelectItem value="allgemein">Allgemeine Haustechnik</SelectItem>
                            <SelectItem value="notfall">Notfall-Service</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Nachricht *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={5}
                            placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                            className="bg-white/90 text-foreground border-white/30 focus:ring-accent resize-none"
                            data-testid="contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground hover:opacity-90 px-8 py-4 text-lg font-bold"
                    data-testid="contact-submit"
                  >
                    Anfrage senden
                  </Button>

                  <p className="text-sm text-white/60 text-center">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
