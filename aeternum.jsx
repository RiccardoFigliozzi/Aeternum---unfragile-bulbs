import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  ShieldCheck, 
  Hammer, 
  Leaf, 
  ShoppingCart, 
  Menu, 
  X, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Play
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [notification, setNotification] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Add to cart simulation
  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setNotification(true);
    setTimeout(() => setNotification(false), 3000);
  };

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* Notification Toast */}
      <div className={`fixed top-24 right-5 bg-amber-500 text-slate-900 px-6 py-3 rounded-lg shadow-xl transform transition-all duration-300 z-50 font-bold flex items-center gap-2 ${notification ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <CheckCircle size={20} />
        Aggiunto al carrello!
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-amber-500 p-2 rounded-full">
                <Lightbulb className="text-slate-900 h-6 w-6" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Aeternum<span className="text-amber-500">.</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-amber-400 transition-colors">Caratteristiche</button>
              <button onClick={() => scrollToSection('products')} className="text-slate-300 hover:text-amber-400 transition-colors">Modelli</button>
              <button onClick={() => scrollToSection('technology')} className="text-slate-300 hover:text-amber-400 transition-colors">Tecnologia</button>
              <button onClick={() => scrollToSection('reviews')} className="text-slate-300 hover:text-amber-400 transition-colors">Recensioni</button>
            </div>

            {/* Cart & CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative cursor-pointer hover:text-amber-400 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <button onClick={() => scrollToSection('products')} className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105">
                Acquista Ora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white">
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-300 hover:text-white border-b border-slate-700">Caratteristiche</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-300 hover:text-white border-b border-slate-700">Modelli</button>
              <button onClick={() => scrollToSection('technology')} className="block w-full text-left px-3 py-4 text-base font-medium text-slate-300 hover:text-white border-b border-slate-700">Tecnologia</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-center mt-6 bg-amber-500 text-slate-900 px-3 py-3 rounded-lg font-bold">Acquista Ora</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-amber-400 text-sm font-semibold uppercase tracking-wider">
                <ShieldCheck size={16} />
                Brevetto NanoGlass™
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                L'Ultima Lampadina Che <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Comprerai.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
                Dimentica i frammenti di vetro. Aeternum unisce l'eleganza del vetro vintage con una resistenza strutturale superiore all'acciaio. Cade? Rimbalza.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => scrollToSection('products')} className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-lg px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
                  Scegli la tua Luce <ArrowRight size={20} />
                </button>
                <button onClick={() => scrollToSection('technology')} className="bg-slate-800 hover:bg-slate-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all border border-slate-700 flex items-center justify-center gap-2">
                  <Play size={18} fill="currentColor" /> Guarda il Test
                </button>
              </div>
              
              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-amber-500"/> Garanzia a Vita</div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-amber-500"/> Spedizione Gratuita</div>
              </div>
            </div>

            {/* Hero Image / Visual */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* This represents the "Unbreakable" image concept */}
              <div className="relative aspect-square rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 flex items-center justify-center shadow-2xl">
                 {/* Decorative elements representing the 'force field' */}
                 <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-pulse"></div>
                 <div className="absolute inset-4 rounded-full border border-amber-500/10"></div>
                 
                 {/* Main Bulb Illustration (SVG) */}
                 <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-[0_0_50px_rgba(245,158,11,0.4)]">
                    <defs>
                      <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                      </linearGradient>
                    </defs>
                    {/* Socket */}
                    <rect x="70" y="240" width="60" height="40" rx="5" fill="#94a3b8" />
                    <path d="M70 240 L130 240 L120 280 L80 280 Z" fill="#64748b" />
                    <path d="M85 280 L115 280 L110 295 L90 295 Z" fill="#334155" />
                    {/* Bulb Body */}
                    <path d="M100 240 C 150 240, 190 180, 190 130 C 190 60, 150 10, 100 10 C 50 10, 10 60, 10 130 C 10 180, 50 240, 100 240" fill="url(#glassGradient)" stroke="rgba(255,255,255,0.4)" strokeWidth="3"/>
                    {/* Filament */}
                    <path d="M70 200 C 70 150, 130 150, 130 200" fill="none" stroke="#f59e0b" strokeWidth="4" className="animate-pulse shadow-amber-500"/>
                    <path d="M70 170 C 70 120, 130 120, 130 170" fill="none" stroke="#f59e0b" strokeWidth="4" opacity="0.8"/>
                    <path d="M85 240 L85 200" stroke="#94a3b8" strokeWidth="2"/>
                    <path d="M115 240 L115 200" stroke="#94a3b8" strokeWidth="2"/>
                    {/* Reflection */}
                    <path d="M40 50 Q 60 30 90 40" fill="none" stroke="white" strokeWidth="3" opacity="0.3" strokeLinecap="round"/>
                 </svg>

                 {/* Floating Hammer bouncing off */}
                 <div className="absolute top-10 -right-10 bg-slate-800 p-4 rounded-xl border border-slate-600 shadow-xl flex items-center gap-3 animate-bounce">
                    <Hammer className="text-slate-400" size={24} />
                    <span className="text-xs font-bold text-white">IMPACT<br/>PROOF</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Perché Aeternum è diversa?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Non è solo una lampadina. È un capolavoro di ingegneria dei materiali progettato per durare generazioni.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Hammer className="w-10 h-10 text-amber-500" />, 
                title: "Indistruttibile", 
                desc: "Il nostro vetro molecolare resiste a cadute da 3 metri e impatti diretti. Martello? Nessun problema." 
              },
              { 
                icon: <Leaf className="w-10 h-10 text-green-500" />, 
                title: "Eco-Sostenibile", 
                desc: "Una lampadina Aeternum sostituisce 50 lampadine LED standard. Meno rifiuti, più luce." 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10 text-blue-500" />, 
                title: "Sicurezza Totale", 
                desc: "Mai più vetri rotti sul pavimento. Sicura per bambini, animali domestici e ambienti di lavoro." 
              },
              { 
                icon: <Star className="w-10 h-10 text-purple-500" />, 
                title: "Luce Perfetta", 
                desc: "CRI 95+ per colori reali. Disponibile in tonalità calde vintage o luce naturale da studio." 
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors group">
                <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Scegli la tua Aeternum</h2>
              <p className="text-slate-400">Design classico, tecnologia futuristica.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-amber-500 font-bold cursor-pointer hover:underline">Vedi tutti i prodotti &rarr;</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aeternum Classic",
                type: "Luce Calda (2700K)",
                price: "€24.99",
                lumens: "800lm (60W eq)",
                tag: "Best Seller",
                color: "bg-amber-500"
              },
              {
                name: "Aeternum Day",
                type: "Luce Naturale (4000K)",
                price: "€24.99",
                lumens: "900lm (75W eq)",
                tag: "Per Ufficio",
                color: "bg-blue-400"
              },
              {
                name: "Aeternum Edison",
                type: "Vintage Gold (2200K)",
                price: "€29.99",
                lumens: "600lm (Decorative)",
                tag: "Edizione Limitata",
                color: "bg-orange-600"
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col">
                <div className="relative h-64 bg-slate-700 flex items-center justify-center p-8 group">
                  <div className={`absolute top-4 left-4 ${product.color} text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                    {product.tag}
                  </div>
                  {/* Product Placeholder Image */}
                  <div className="w-40 h-40 relative">
                     <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <path d="M50 140 L50 110" stroke="#64748b" strokeWidth="20" />
                        <circle cx="50" cy="60" r="45" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                        <path d="M35 60 L65 60 L50 90 Z" fill="none" stroke={product.name.includes("Day") ? "#60a5fa" : "#fbbf24"} strokeWidth="3" className="animate-pulse" />
                     </svg>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                    <span className="text-xl font-bold text-amber-500">{product.price}</span>
                  </div>
                  <p className="text-slate-400 mb-1">{product.type}</p>
                  <p className="text-slate-500 text-sm mb-6">{product.lumens}</p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={addToCart}
                      className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-900 border border-slate-600 hover:border-amber-500 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} /> Aggiungi al Carrello
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Section (Immersive) */}
      <section id="technology" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">La Scienza dietro l'Indistruttibile</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-amber-500/10 p-2 rounded-lg h-fit">
                    <div className="text-amber-500 font-bold">01</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Polimero di Vetro Ibrido</h4>
                    <p className="text-slate-400">Utilizziamo una matrice di vetro infusa con nanoparticelle elastiche. Il risultato è la trasparenza del cristallo con la resilienza della gomma dura.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-amber-500/10 p-2 rounded-lg h-fit">
                    <div className="text-amber-500 font-bold">02</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Dissipazione dell'Urto</h4>
                    <p className="text-slate-400">La struttura molecolare disperde l'energia cinetica dell'impatto lungo tutta la superficie invece di concentrarla in un punto di rottura.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-amber-500/10 p-2 rounded-lg h-fit">
                    <div className="text-amber-500 font-bold">03</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Filamento Anti-Shock</h4>
                    <p className="text-slate-400">Anche se il bulbo regge, il filamento di solito si rompe. Il nostro è sospeso in un gel inerte che assorbe le vibrazioni.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center">
              <div className="aspect-video bg-slate-800 rounded-xl mb-4 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center pl-1 transform group-hover:scale-110 transition-transform">
                    <Play fill="black" size={24} className="text-slate-900" />
                  </div>
                </div>
                <img src="/api/placeholder/600/400" alt="Video test martello" className="w-full h-full object-cover opacity-50" />
                <span className="absolute bottom-4 text-white font-mono text-sm">VIDEO TEST DI RESISTENZA: MARTELLO 500g</span>
              </div>
              <p className="text-sm text-slate-500 italic">"Abbiamo provato a romperla per 4 ore. Ci siamo stancati prima noi." - TechReview Italia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Cosa dicono i nostri clienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Ho rotto 3 lampadine in garage il mese scorso urtandole con la scala. Ho messo una Aeternum e ieri l'ho colpita col trapano per sbaglio. Neanche un graffio.",
                author: "Marco R.",
                role: "Fai-da-te Appassionato"
              },
              {
                text: "Per il mio ristorante stile industriale cercavo lampadine belle ma sicure. Queste sono identiche a quelle vintage ma indistruttibili. Geniali.",
                author: "Laura B.",
                role: "Architect & Designer"
              },
              {
                text: "Ho due gatti che fanno cadere tutto. Finalmente non ho più il terrore che si taglino le zampe con i vetri. Vale ogni centesimo.",
                author: "Giulia M.",
                role: "Cliente Verificata"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl text-left relative">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="text-white font-bold">{review.author}</p>
                  <p className="text-slate-500 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Domande Frequenti</h2>
          <div className="space-y-4">
            {[
              { q: "È davvero vetro o è plastica?", a: "È un materiale composito brevettato basato sul vetro. Al tatto e alla vista è identico al vetro (freddo, trasparente, rigido), ma ha legami molecolari che impediscono la frantumazione." },
              { q: "Che tipo di attacco hanno?", a: "Sono disponibili con attacco standard E27 (grande) e E14 (piccolo). Si adattano a qualsiasi lampadario standard." },
              { q: "Quanto durano?", a: "I LED interni sono garantiti per 50.000 ore (circa 20 anni di uso normale). La scocca esterna è garantita a vita contro la rottura accidentale." },
              { q: "Posso usarle con un dimmer?", a: "Sì, tutti i modelli Aeternum sono dimmerabili (0-100%) senza sfarfallio." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  <span className={`transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>
                    <ArrowRight className="rotate-90 text-amber-500" />
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-slate-400 bg-slate-900 border-t border-slate-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-amber-500 h-6 w-6" />
                <span className="text-xl font-bold text-white">Aeternum.</span>
              </div>
              <p className="text-slate-500 text-sm">
                Illuminiamo il futuro con prodotti progettati per non finire mai in discarica.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-amber-500 cursor-pointer">Tutti i prodotti</li>
                <li className="hover:text-amber-500 cursor-pointer">Classic Series</li>
                <li className="hover:text-amber-500 cursor-pointer">Edison Vintage</li>
                <li className="hover:text-amber-500 cursor-pointer">Accessori</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Supporto</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-amber-500 cursor-pointer">FAQ</li>
                <li className="hover:text-amber-500 cursor-pointer">Spedizioni & Resi</li>
                <li className="hover:text-amber-500 cursor-pointer">Garanzia a Vita</li>
                <li className="hover:text-amber-500 cursor-pointer">Contattaci</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resta Aggiornato</h4>
              <p className="text-slate-500 text-sm mb-4">Iscriviti per sconti esclusivi e novità.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="La tua email" className="bg-slate-900 border border-slate-700 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:border-amber-500" />
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-lg font-bold">OK</button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>&copy; 2024 Aeternum Lighting S.r.l. Tutti i diritti riservati.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Termini di Servizio</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
