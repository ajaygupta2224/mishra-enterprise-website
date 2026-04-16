import * as React from "react";
import { motion } from "motion/react";
import { 
  Construction, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Grid3X3, 
  Hammer,
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  Instagram,
  Facebook,
  Award
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { Blob } from "@/src/components/ui/Blob";
import { cn } from "@/src/lib/utils";

const products = [
  {
    id: "fabrication",
    title: "MS Fabrication",
    cost: "₹55 per sqft",
    icon: <Hammer size={28} />,
    details: [
      "Vertical pole size 75mm×75mm ×3mm T.",
      "Height 25ft. Pole distance 15ft.",
      "Horizontal pipe 40mm×40mm×2mm Thick.",
      "Top / Centre / Bottom attached.",
      "Paint: One coat red oxide, Two coat colour Asian paint."
    ],
    image: "https://picsum.photos/seed/fabrication/600/400"
  },
  {
    id: "netting",
    title: "Garware Net",
    cost: "₹15 per sqft",
    icon: <Grid3X3 size={28} />,
    details: [
      "Side net 2.5mm T. mesh size 50mm×50mm.",
      "Top Net 1.5 mm Thick. mesh size 50mm×50mm.",
      "With border rope and fitting."
    ],
    image: "https://picsum.photos/seed/netting/600/400"
  },
  {
    id: "turf",
    title: "50mm Artificial Turf",
    cost: "₹90 per sqft",
    icon: <Construction size={28} />,
    details: [
      "FIFA Approved grass.",
      "Detx 12000 stitch 5/8cm, Dark & Light.",
      "Silica sand, Granules.",
      "With Adhesive Tape fitting."
    ],
    image: "https://picsum.photos/seed/turf-grass/600/400"
  },
  {
    id: "electricity",
    title: "Electricity",
    cost: "₹15 per sqft",
    icon: <Zap size={28} />,
    details: [
      "200 watts LED Light with panel and Distribution.",
      "Switch and socket included.",
      "2.5mm Armoured cable Everest."
    ],
    image: "https://picsum.photos/seed/lighting/600/400"
  },
  {
    id: "padding",
    title: "Padding and Cushion",
    cost: "₹90 per running meter",
    icon: <ShieldCheck size={28} />,
    details: [
      "Pole padding 12mm thick, Height 6ft.",
      "Bottom pipe padding 12mm T. Around."
    ],
    image: "https://picsum.photos/seed/padding/600/400"
  },
  {
    id: "subbase",
    title: "Sub - Base",
    cost: "₹55 per sqft",
    icon: <Layers size={28} />,
    details: [
      "Soil Leveling and Compaction.",
      "75mm Thick mix Stone spread with compact.",
      "PCC: 100mm Thick manual Concrete M-15 Grade."
    ],
    image: "https://picsum.photos/seed/foundation/600/400"
  }
];

import { Logo } from "@/src/components/ui/Logo";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Background Blobs */}
      <Blob className="w-[800px] h-[800px] -top-96 -left-48" color="bg-primary/10" />
      <Blob className="w-[600px] h-[600px] top-1/2 -right-48" color="bg-secondary/10" delay={2} />

      {/* Header Section */}
      <header className="relative pt-12 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-12">
              <Logo size={120} className="scale-110 md:scale-125" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold mb-6">
              <Award size={16} />
              <span>Leading Turf Contractors in Mumbai</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
              Quality Construction <br />
              <span className="text-secondary italic">Rooted in Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Established in 2025, we are Mumbai's premier destination for Artificial Turf Construction. 
              From MS Fabrication to Sub-Base preparation, we provide end-to-end solutions for sports courts and landscaping.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => window.open('https://wa.me/919136885797', '_blank')}>
                <MessageCircle className="mr-2" size={20} /> WhatsApp Us
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About / Overview Section */}
      <section className="py-20 bg-muted/30 px-6">
        <div className="max-w-7xl mx-auto">
          <Card variant={1} className="p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Quality Construction for Every Game</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Located in Kandivali West, Mishra Enterprises acts as a one-stop destination servicing customers local and from other parts of Mumbai. 
                  Our belief that customer satisfaction is as important as our products and services has helped us garner a vast base of customers.
                </p>
                <div className="flex items-start gap-4 text-sm text-foreground/80">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <span>Shivsena Maidan, Near By Laljipada, Kandivali West, Mumbai</span>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden rotate-2 shadow-float border-4 border-white">
                  <img 
                    src="https://picsum.photos/seed/turf-mumbai/800/500" 
                    alt="Turf Construction" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">Our Technical Specifications</h2>
            <p className="text-muted-foreground">Premium materials and precision engineering for every project.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                id={product.id}
                variant={(index % 6 + 1) as any} 
                className="group h-full flex flex-col"
              >
                <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {product.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl">{product.title}</h3>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold">
                    {product.cost}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl overflow-hidden aspect-video mt-auto">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="bg-foreground text-background py-24 px-6 relative overflow-hidden">
        <Blob className="w-96 h-96 -bottom-24 -left-24" color="bg-primary/20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Logo variant="gold" size={60} className="mb-8" />
              <p className="text-background/70 max-w-md mb-8 leading-relaxed">
                Mumbai's trusted partner for Artificial Turf, Badminton Courts, and EPDM Flooring. 
                Available from 10:00 - 22:00 for all your queries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-secondary" />
                  <a href="tel:+919136885797" className="text-lg font-bold hover:text-secondary transition-colors">+91 9136885797</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-secondary shrink-0" />
                  <span className="text-background/70">Shivsena Maidan, Laljipada, Kandivali West, Mumbai</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.instagram.com/alligator.1127389?igsh=aGMzeng1ZjVldWRl" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-background/70 hover:text-secondary transition-colors">
                  <Instagram size={18} /> Instagram
                </a>
                <a href="https://www.facebook.com/share/1Ce2bzruMK/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-background/70 hover:text-secondary transition-colors">
                  <Facebook size={18} /> Facebook
                </a>
                <button onClick={() => window.open('https://wa.me/919136885797', '_blank')} className="flex items-center gap-2 text-background/70 hover:text-secondary transition-colors cursor-pointer">
                  <MessageCircle size={18} /> WhatsApp
                </button>
                <a href="https://jsdl.in/RSL-NVG1776318278" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-background/70 hover:text-secondary transition-colors">
                  <ExternalLink size={18} /> Justdial
                </a>
                <a href="https://www.indiamart.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-background/70 hover:text-secondary transition-colors">
                  <ExternalLink size={18} /> IndiaMart
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4 text-background/70">
                <li><button onClick={() => scrollToSection('turf')} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Artificial Turf</button></li>
                <li><button onClick={() => scrollToSection('subbase')} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Sub-Base Construction</button></li>
                <li><button onClick={() => scrollToSection('fabrication')} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">MS Fabrication</button></li>
                <li><button onClick={() => scrollToSection('netting')} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Garware Netting</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} Mishra Enterprises. All rights reserved.</p>
            <p>Designed with Nature in Mind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
