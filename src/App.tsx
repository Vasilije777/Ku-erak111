/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Waves, 
  Flame, 
  Baby, 
  Wifi, 
  Wind, 
  Sun,
  Car, 
  Users, 
  PartyPopper, 
  Briefcase, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ChevronRight,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<null | number>(null);
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  const testimonials = [
    "Najbolji odmor koji smo imali u poslednjih nekoliko godina. Bazen je fantastičan!",
    "Prelepo mesto za porodični odmor. Deca su uživala, a mi smo se konačno odmorili.",
    "Apartmani su čisti i moderni. Domaćini su izuzetno ljubazni i predusretljivi.",
    "Savršena lokacija za beg iz grada. Mir, tišina i predivan pogled na Frušku goru.",
    "Sve je bilo iznad naših očekivanja. Sigurno ćemo se vratiti ponovo sledeće godine!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Početna", href: "#home" },
    { name: "Apartmani", href: "#apartments" },
    { name: "Galerija", href: "#gallery" },
    { name: "Sadržaji", href: "#amenities" },
    { name: "Proslave", href: "#events" },
    { name: "Kontakt", href: "#contact" },
  ];

  const apartments = [
    {
      id: 1,
      name: "Apartman Plavi",
      size: "35 m²",
      capacity: "4 Osobe",
      description: "Moderan i svetao apartman sa plavim detaljima. Sadrži odvojenu spavaću sobu sa bračnim krevetom, dnevni boravak sa udobnom ugaonom garniturom na razvlačenje, potpuno opremljenu kuhinju i kupatilo.",
      features: ["Bračni krevet", "Ugaona garnitura", "Kuhinja", "Klima", "WiFi", "Terasa"],
      image: "kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (6).jpeg"
    },
    {
      id: 2,
      name: "Apartman Žuti",
      size: "35 m²",
      capacity: "4 Osobe",
      description: "Topao i ušuškan apartman sa žutim akcentima. Idealan za porodice ili parove. Poseduje sve pogodnosti za duži boravak, uključujući modernu kuhinju i prostrano kupatilo.",
      features: ["Bračni krevet", "Sofa na razvlačenje", "Kuhinja", "Klima", "WiFi", "Smart TV"],
      image: "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (11).jpeg"
    },
    {
      id: 3,
      name: "Apartman Zeleni",
      size: "35 m²",
      capacity: "4 Osobe",
      description: "Apartman inspirisan prirodom Fruške gore. Mirne zelene nijanse pružaju dodatni osećaj relaksacije. Sadrži terasu sa pogledom na dvorište i bazen.",
      features: ["Bračni krevet", "Ugaona garnitura", "Kuhinja", "Klima", "WiFi", "Pogled na bazen"],
      image: "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.43.jpeg"
    }
  ];

  const galleryImages = [
    "/kucerak111/349677649.jpg",
    "/kucerak111/342123035.jpg",
    "/kucerak111/569481235.jpg",
    "/kucerak111/569481177.jpg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (2).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (3).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (4).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (5).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (6).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (8).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (9).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (10).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (11).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (12).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42.jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.43 (1).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.43 (2).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.43 (3).jpeg",
    "/kucerak111/WhatsApp Image 2026-03-31 at 03.35.43.jpeg",
    "/kucerak111/slika3.jpg"
  ];

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-serif font-bold tracking-tighter text-dark">KUĆERAK<span className="text-gold">111</span></span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Apartment Details Modal */}
      <AnimatePresence>
        {selectedApartment !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedApartment(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={apartments.find(a => a.id === selectedApartment)?.image} 
                  alt="Apartment" 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedApartment(null)}
                  className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white md:hidden"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-gold text-xs uppercase tracking-widest font-bold mb-2 block">Detalji Apartmana</span>
                    <h2 className="text-3xl font-serif text-dark">{apartments.find(a => a.id === selectedApartment)?.name}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedApartment(null)}
                    className="hidden md:flex w-10 h-10 bg-dark/5 rounded-full items-center justify-center text-dark hover:bg-dark hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="flex gap-6 mb-8 border-y border-dark/5 py-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-dark/40 mb-1">Veličina</p>
                    <p className="font-bold text-dark">{apartments.find(a => a.id === selectedApartment)?.size}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-dark/40 mb-1">Kapacitet</p>
                    <p className="font-bold text-dark">{apartments.find(a => a.id === selectedApartment)?.capacity}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-dark/40 mb-1">Cena</p>
                    <p className="font-bold text-gold">Od 65€</p>
                  </div>
                </div>

                <p className="text-dark/70 leading-relaxed mb-8">
                  {apartments.find(a => a.id === selectedApartment)?.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {apartments.find(a => a.id === selectedApartment)?.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-dark/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {f}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-dark text-white py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gold transition-all duration-300">
                  Rezerviši ovaj apartman
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-gold transition-colors">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Gallery Full"
              className="max-w-full max-h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/kucerak111/349677649.jpg" 
            alt="Fruška Gora Nature" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                <Star className="text-gold fill-gold" size={14} />
                <Star className="text-gold fill-gold" size={14} />
                <Star className="text-gold fill-gold" size={14} />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] font-medium mx-2">Vrdnik • Fruška Gora</span>
              <div className="flex gap-1">
                <Star className="text-gold fill-gold" size={14} />
                <Star className="text-gold fill-gold" size={14} />
                <Star className="text-gold fill-gold" size={14} />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
              Tvoj beg u <br /> <span className="italic">savršenu prirodu</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl font-light opacity-90 mb-10">
              Doživi luksuzni mir u srcu Fruške gore. Kućerak111 nije samo smeštaj, to je tvoja nova omiljena uspomena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#about"
                className="bg-white text-dark px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gold hover:text-white transition-all duration-300 inline-block"
              >
                Istraži Apartmane
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Skroluj</span>
          <div className="w-[1px] h-12 bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/kucerak111/slika3.jpg" 
              alt="Kućerak111 Exterior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-[250px] min-h-[220px] flex flex-col">
            <p className="text-4xl font-serif text-gold mb-2">4.7/5</p>
            <p className="text-xs uppercase tracking-widest font-bold mb-4">Google Ocena</p>
            <div className="relative flex-grow">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentCommentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm text-dark/60 italic"
                >
                  "{testimonials[currentCommentIndex]}"
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">O NAMA</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Više od običnog prenoćišta</h2>
          <div className="text-lg text-dark/70 mb-8 leading-relaxed space-y-6">
            <p>
              Kućerak111 je više od smeštaja — to je mesto gde gradska gužva prestaje, a počinje potpuni mir u prirodi Fruške gore. Osmišljen za one koji žele da pobegnu od svakodnevnog stresa, naš objekat nudi savršen balans udobnosti, privatnosti i opuštanja.
            </p>
            <p>
              U moderno opremljenim apartmanima dočekaće vas sve što vam je potrebno za bezbrižan boravak, dok dvorište sa bazenom, roštiljem i prostorom za druženje stvara idealnu atmosferu za uživanje sa porodicom, prijateljima ili partnerom.
            </p>
            <p>
              Bilo da dolazite na vikend odmor, proslavu ili duži boravak, Kućerak111 je mesto gde se pravi pravi predah pamti.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-serif text-gold">03</span>
              <span className="text-xs uppercase tracking-widest font-bold">Luksuzna Apartmana</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-serif text-gold">12</span>
              <span className="text-xs uppercase tracking-widest font-bold">Ukupan Kapacitet</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-serif text-gold">100%</span>
              <span className="text-xs uppercase tracking-widest font-bold">Prirodno Okruženje</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-serif text-gold">24/7</span>
              <span className="text-xs uppercase tracking-widest font-bold">Mir i Tišina</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Apartments Section */}
      <section id="apartments" className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">NAŠ SMEŠTAJ</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">Izaberi svoj idealan kutak</h2>
            </div>
            <p className="text-white/60 max-w-sm">
              Svaki od naša tri apartmana je pažljivo dizajniran da pruži maksimalnu udobnost. <br />
              <span className="text-gold font-bold">Minimum 2 noći.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {apartments.map((apt) => (
              <motion.div
                key={apt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: apt.id * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedApartment(apt.id)}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={apt.image} 
                    alt={apt.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] uppercase tracking-widest text-right">
                    <p>2 osobe: 65€</p>
                    <p>3 osobe: 75€</p>
                    <p>4 osobe: 85€</p>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif">{apt.name}</h3>
                  <span className="text-gold font-bold text-sm">{apt.size}</span>
                </div>
                <div className="flex gap-4 text-xs text-white/50 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Users size={14} /> {apt.capacity}</span>
                  <span className="flex items-center gap-1"><Wind size={14} /> Klima</span>
                  <span className="flex items-center gap-1"><Wifi size={14} /> WiFi</span>
                </div>
                <button className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                  Detaljnije <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">FOTO GALERIJA</span>
            <h2 className="text-4xl md:text-5xl font-serif">Zavirite u naš mali raj</h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group cursor-pointer rounded-3xl overflow-hidden"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section id="amenities" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">SADRŽAJI</span>
          <h2 className="text-4xl md:text-5xl font-serif">Sve što ti je potrebno za uživanje</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: Waves, title: "Bazen", desc: "Osveži se u našem modernom bazenu sa kristalno čistom vodom." },
            { icon: Flame, title: "Roštilj", desc: "Uživaj u pripremi hrane u našem letnjikovcu sa roštiljem." },
            { icon: Baby, title: "Igralište", desc: "Bezbedno i zabavno igralište za naše najmlađe goste." },
            { icon: Car, title: "Parking", desc: "Obezbeđen besplatan parking za sve goste kompleksa." },
            { icon: Wifi, title: "Wi-Fi", desc: "Besplatan i brz internet dostupan u celom objektu." },
            { icon: Wind, title: "Klima", desc: "Svi apartmani su klimatizovani za vašu maksimalnu udobnost." },
            { icon: Sun, title: "Terasa", desc: "Svaka jedinica poseduje sopstvenu terasu za uživanje u pogledu." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-dark/5 text-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
            >
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-serif mb-4">{item.title}</h3>
              <p className="text-sm text-dark/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">SPECIJALNE PRILIKE</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Iznajmi ceo kompleks za tvoj događaj</h2>
            <p className="text-lg text-dark/70 mb-10 leading-relaxed">
              Planiraš rođendan, momačko ili devojačko veče, ili možda team building? Kućerak111 je idealno mesto za privatne proslave i druženja u prirodi.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { icon: PartyPopper, text: "Rođendani i privatne žurke" },
                { icon: Users, text: "Momačke i devojačke večeri" },
                { icon: Briefcase, text: "Team building i manji sastanci" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center">
                    <item.icon size={18} />
                  </div>
                  <span className="font-semibold text-sm uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              className="bg-dark text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gold transition-all duration-300 inline-block"
            >
              Kontakt
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src="/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (5).jpeg" alt="Party 1" className="rounded-2xl w-full aspect-[4/5] object-cover" />
              <img src="/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (6).jpeg" alt="Party 2" className="rounded-2xl w-full aspect-[4/3] object-cover" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (9).jpeg" alt="Party 3" className="rounded-2xl w-full aspect-[4/3] object-cover" />
              <img src="/kucerak111/WhatsApp Image 2026-03-31 at 03.35.42 (8).jpeg" alt="Party 4" className="rounded-2xl w-full aspect-[4/5] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-dark rounded-[3rem] overflow-hidden text-white grid lg:grid-cols-2">
          <div className="p-12 md:p-20">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">KONTAKT</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">Čekamo te u Vrdniku</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <MapPin className="text-gold shrink-0" size={24} />
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-1">Adresa</p>
                  <p className="text-white/60">Vojvođanskih Brigada 111, Vrdnik</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Phone className="text-gold shrink-0" size={24} />
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-1">Telefon</p>
                  <p className="text-white/60">065/2716277</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/kucerak111/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/kucerak111/?locale=sr_RS" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/place/Ku%C4%87erak111/@45.1203197,19.7914889,17z/data=!4m9!3m8!1s0x475b07fe1585c4bb:0x8c0ce89f9e4e6cc5!5m2!4m1!1i2!8m2!3d45.1203159!4d19.7940638!16s%2Fg%2F11jp7zzlkn?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-[400px] lg:h-auto relative group block"
          >
            <img 
              src="https://picsum.photos/seed/map/1000/1000" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-2xl text-dark text-center group-hover:scale-110 transition-transform">
                <MapPin className="text-gold mx-auto mb-2" size={32} />
                <p className="font-bold text-sm uppercase tracking-widest">Pronađi nas na mapi</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dark/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-2xl font-serif font-bold tracking-tighter text-dark mb-6">KUĆERAK<span className="text-gold">111</span></p>
          <div className="flex justify-center gap-8 mb-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-widest font-bold hover:text-gold transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-dark/40">
            © {new Date().getFullYear()} Kućerak111 Vrdnik. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </div>
  );
}
