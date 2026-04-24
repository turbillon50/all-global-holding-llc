"use client"

import { useState, useEffect, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { 
  Menu, X, Sun, Moon, MapPin, Building2, Cpu, Wallet, Plane, 
  Music, ChevronRight, Mail, Globe, Users, Shield, Sparkles,
  ArrowRight, Check, ExternalLink, Home, CreditCard, Star,
  Zap, Heart, Eye, Target, Gem, Rocket, ChevronDown, Play, Languages
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

// Language Context
const LanguageContext = createContext()

const useLanguage = () => useContext(LanguageContext)

// Translations
const translations = {
  en: {
    // Navigation
    nav: {
      ecosystem: 'Ecosystem',
      companies: 'Companies',
      properties: 'Properties',
      experiences: 'Experiences',
      technology: 'Technology',
      events: 'Events',
      vision: 'Vision',
      faq: 'FAQ',
      contact: 'Contact',
      signIn: 'Sign In',
      contactUs: 'Contact Us',
    },
    // Hero
    hero: {
      title: 'All Global',
      titleLine2: 'Holding LLC',
      subtitle: 'Capital, property, technology and experiences connected in one modern ecosystem.',
      description: 'Born from finance and real estate. Built for the new era of fractional ownership, digital payments, premium experiences, events and artificial intelligence.',
      cta1: 'Explore the Ecosystem',
      cta2: 'Join the Future Access List',
      cta3: 'Contact Us',
    },
    // Trust Bar
    trust: {
      location: 'Quintana Roo, Mexico',
      companies: 'Five connected companies',
      sectors: 'Real estate, technology, travel, payments & events',
      future: 'Future unified ecosystem access',
    },
    // Origin
    origin: {
      title: 'Born from finance and real estate.',
      titleLine2: 'Built for the new world.',
      description: 'All Global Holding LLC began with a financial and real estate foundation. Through property acquisition, structured real estate operations and market experience, the company learned that the future was no longer only about owning assets, but about designing new ways to access them, use them, commercialize them and connect them through technology.',
    },
    // Market Shift
    market: {
      title: 'The world changed.',
      subtitle: 'So did the way people access value.',
      shifts: [
        { title: 'Airbnb changed the way people travel', description: 'Stay and think about second homes in entirely new ways.' },
        { title: 'AI reduced the distance', description: 'Between an ambitious idea and a real digital product.' },
        { title: 'Fractional ownership opened', description: 'A new path for premium real estate access.' },
      ],
    },
    // Ecosystem
    ecosystem: {
      title: 'One holding. Five connected pillars.',
      subtitle: 'Each company has its own role. Together, they form a connected architecture of opportunities.',
      companies: [
        {
          name: 'Fractional Living',
          description: 'Premium real estate fractional ownership, second-home access and structured property participation in Quintana Roo, Cancún, Tulum and Playa del Carmen.',
          status: 'Independent PWA coming soon',
        },
        {
          name: 'Vandefy',
          description: 'Digital payments, crypto acceptance, tokenization, wallets and modern financial access for the ecosystem.',
          status: 'Independent PWA coming soon',
        },
        {
          name: 'Sell Experience',
          description: 'Premium experiences marketplace: flights, hotels, villas, yachts, car rentals, curated trips, hospitality and lifestyle services.',
          status: 'Independent PWA coming soon',
        },
        {
          name: 'Momentum',
          description: 'AI-powered app factory and technology studio for automation, no-code, low-code, landing pages, apps, CRM systems, internal tools and commercial platforms.',
          status: 'Independent PWA coming soon',
        },
        {
          name: 'URMAH',
          description: 'Ticketing platform integrated with Ticket Tailor for large-scale music and entertainment events in Mexico, connecting audiences, producers, payments, travel and experiences.',
          status: 'Independent PWA coming soon',
        },
      ],
      comingSoon: 'Coming Soon',
    },
    // Future SaaS
    future: {
      badge: 'Coming Soon',
      title: 'A future unified access layer.',
      description: 'The ecosystem is designed to evolve into a connected SaaS-style hub. Users will be able to explore freely, register once and access multiple products, companies and services through a single identity layer.',
      features: [
        { title: 'Explore Freely', description: 'Browse all ecosystem content without barriers' },
        { title: 'Register Once', description: 'Single sign-up for entire ecosystem' },
        { title: 'Access Multiple PWAs', description: 'One identity, all applications' },
        { title: 'Unified Profile', description: 'Your data, synchronized everywhere' },
        { title: 'Cross-Platform', description: 'Seamless experience across devices' },
        { title: 'Future Wallet', description: 'Integrated payment layer' },
      ],
    },
    // Architecture
    architecture: {
      title: 'Built to connect future applications.',
      description: 'This landing page is the first public gateway. Future PWAs will connect through shared identity, shared data structure and shared navigation.',
      futureIntegrations: 'Future Integrations',
    },
    // Vision
    vision: {
      title: 'A connected architecture of opportunities.',
      description: 'All Global Holding LLC does not build isolated businesses. It designs a system where each company strengthens the next: property creates aspiration, payments create access, experiences create lifestyle, events create audience, and technology connects everything.',
      cta: 'Discover Our Vision',
    },
    // Values
    values: {
      title: 'Our Values',
      items: [
        { name: 'Vision', description: 'See beyond the present' },
        { name: 'Execution', description: 'Turn ideas into reality' },
        { name: 'Elegance', description: 'Quality in every detail' },
        { name: 'Trust', description: 'Built on transparency' },
        { name: 'Innovation', description: 'Push boundaries forward' },
        { name: 'Synergy', description: 'Stronger together' },
      ],
    },
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { question: 'What is All Global Holding LLC?', answer: 'All Global Holding LLC is the mother company of a connected ecosystem focused on real estate, fractional ownership, digital payments, premium experiences, events and technology.' },
        { question: 'What is Fractional Living?', answer: 'Fractional Living is the real estate and fractional ownership pillar focused on premium property access in destinations like Quintana Roo, Cancún, Tulum and Playa del Carmen.' },
        { question: 'What is Vandefy?', answer: 'Vandefy is the digital payments and crypto infrastructure pillar of the ecosystem. It supports modern payment access, wallets and tokenization without promising financial returns.' },
        { question: 'What is Sell Experience?', answer: 'Sell Experience is the premium lifestyle and travel pillar, focused on flights, hotels, villas, yachts, car rentals and curated experiences.' },
        { question: 'What is Momentum?', answer: 'Momentum is the app factory and technology pillar. It builds digital products, automation systems, landing pages, PWAs, CRM tools and AI-powered platforms.' },
        { question: 'What is URMAH?', answer: 'URMAH is the ticketing and events pillar, integrated with Ticket Tailor for large-scale music and entertainment events.' },
        { question: 'Will each company have its own app?', answer: 'Yes. Each company is designed to eventually have its own independent PWA/application, connected back to the All Global Holding LLC ecosystem.' },
        { question: 'Will users need separate accounts?', answer: 'The future goal is unified registration: users register once and can access multiple ecosystem applications with the same identity.' },
        { question: 'Can visitors browse without registering?', answer: 'Yes. The public landing page allows free exploration without registration.' },
      ],
    },
    // Contact
    contact: {
      title: 'Start the conversation.',
      description: 'We are building the future of real estate, payments, experiences, technology and events in Latin America and beyond.',
      cta: 'Contact All Global Holding LLC',
    },
    // Footer
    footer: {
      tagline: 'Building a connected ecosystem of companies that shape the way people live, pay, experience and celebrate.',
      ecosystem: 'Ecosystem',
      company: 'Company',
      resources: 'Resources',
      aboutUs: 'About Us',
      ourVision: 'Our Vision',
      careers: 'Careers',
      press: 'Press',
      blog: 'Blog',
      faqs: 'FAQs',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      stayConnected: 'Stay Connected',
      stayConnectedDesc: 'Get news about our projects and companies.',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Enter your email',
      copyright: '© 2024 All Global Holding LLC. All rights reserved.',
    },
    // Loading
    loading: 'Loading experience...',
  },
  es: {
    // Navigation
    nav: {
      ecosystem: 'Ecosistema',
      companies: 'Empresas',
      properties: 'Propiedades',
      experiences: 'Experiencias',
      technology: 'Tecnología',
      events: 'Eventos',
      vision: 'Visión',
      faq: 'FAQ',
      contact: 'Contacto',
      signIn: 'Iniciar Sesión',
      contactUs: 'Contáctanos',
    },
    // Hero
    hero: {
      title: 'All Global',
      titleLine2: 'Holding LLC',
      subtitle: 'Capital, propiedad, tecnología y experiencias conectadas en un ecosistema moderno.',
      description: 'Nacido de las finanzas y bienes raíces. Construido para la nueva era de propiedad fraccionada, pagos digitales, experiencias premium, eventos e inteligencia artificial.',
      cta1: 'Explorar el Ecosistema',
      cta2: 'Únete a la Lista de Acceso Futuro',
      cta3: 'Contáctanos',
    },
    // Trust Bar
    trust: {
      location: 'Quintana Roo, México',
      companies: 'Cinco empresas conectadas',
      sectors: 'Bienes raíces, tecnología, viajes, pagos y eventos',
      future: 'Acceso futuro unificado al ecosistema',
    },
    // Origin
    origin: {
      title: 'Nacido de las finanzas y bienes raíces.',
      titleLine2: 'Construido para el nuevo mundo.',
      description: 'All Global Holding LLC comenzó con una base financiera e inmobiliaria. A través de la adquisición de propiedades, operaciones inmobiliarias estructuradas y experiencia de mercado, la empresa aprendió que el futuro ya no se trataba solo de poseer activos, sino de diseñar nuevas formas de acceder a ellos, usarlos, comercializarlos y conectarlos a través de la tecnología.',
    },
    // Market Shift
    market: {
      title: 'El mundo cambió.',
      subtitle: 'También la forma en que las personas acceden al valor.',
      shifts: [
        { title: 'Airbnb cambió la forma de viajar', description: 'Hospedarse y pensar en segundas casas de maneras completamente nuevas.' },
        { title: 'La IA redujo la distancia', description: 'Entre una idea ambiciosa y un producto digital real.' },
        { title: 'La propiedad fraccionada abrió', description: 'Un nuevo camino para el acceso a bienes raíces premium.' },
      ],
    },
    // Ecosystem
    ecosystem: {
      title: 'Un holding. Cinco pilares conectados.',
      subtitle: 'Cada empresa tiene su propio rol. Juntas, forman una arquitectura conectada de oportunidades.',
      companies: [
        {
          name: 'Fractional Living',
          description: 'Propiedad fraccionada de bienes raíces premium, acceso a segundas casas y participación estructurada en propiedades en Quintana Roo, Cancún, Tulum y Playa del Carmen.',
          status: 'PWA independiente próximamente',
        },
        {
          name: 'Vandefy',
          description: 'Pagos digitales, aceptación de criptomonedas, tokenización, billeteras y acceso financiero moderno para el ecosistema.',
          status: 'PWA independiente próximamente',
        },
        {
          name: 'Sell Experience',
          description: 'Marketplace de experiencias premium: vuelos, hoteles, villas, yates, renta de autos, viajes curados, hospitalidad y servicios de estilo de vida.',
          status: 'PWA independiente próximamente',
        },
        {
          name: 'Momentum',
          description: 'Fábrica de apps impulsada por IA y estudio de tecnología para automatización, no-code, low-code, landing pages, apps, sistemas CRM, herramientas internas y plataformas comerciales.',
          status: 'PWA independiente próximamente',
        },
        {
          name: 'URMAH',
          description: 'Plataforma de boletos integrada con Ticket Tailor para eventos de música y entretenimiento a gran escala en México, conectando audiencias, productores, pagos, viajes y experiencias.',
          status: 'PWA independiente próximamente',
        },
      ],
      comingSoon: 'Próximamente',
    },
    // Future SaaS
    future: {
      badge: 'Próximamente',
      title: 'Una capa de acceso unificado futuro.',
      description: 'El ecosistema está diseñado para evolucionar en un hub estilo SaaS conectado. Los usuarios podrán explorar libremente, registrarse una vez y acceder a múltiples productos, empresas y servicios a través de una única capa de identidad.',
      features: [
        { title: 'Explora Libremente', description: 'Navega todo el contenido del ecosistema sin barreras' },
        { title: 'Regístrate Una Vez', description: 'Un solo registro para todo el ecosistema' },
        { title: 'Accede a Múltiples PWAs', description: 'Una identidad, todas las aplicaciones' },
        { title: 'Perfil Unificado', description: 'Tus datos, sincronizados en todas partes' },
        { title: 'Multiplataforma', description: 'Experiencia fluida en todos los dispositivos' },
        { title: 'Billetera Futura', description: 'Capa de pagos integrada' },
      ],
    },
    // Architecture
    architecture: {
      title: 'Construido para conectar aplicaciones futuras.',
      description: 'Esta landing page es la primera puerta de entrada pública. Las PWAs futuras se conectarán a través de identidad compartida, estructura de datos compartida y navegación compartida.',
      futureIntegrations: 'Integraciones Futuras',
    },
    // Vision
    vision: {
      title: 'Una arquitectura conectada de oportunidades.',
      description: 'All Global Holding LLC no construye negocios aislados. Diseña un sistema donde cada empresa fortalece a la siguiente: la propiedad crea aspiración, los pagos crean acceso, las experiencias crean estilo de vida, los eventos crean audiencia y la tecnología conecta todo.',
      cta: 'Descubre Nuestra Visión',
    },
    // Values
    values: {
      title: 'Nuestros Valores',
      items: [
        { name: 'Visión', description: 'Ver más allá del presente' },
        { name: 'Ejecución', description: 'Convertir ideas en realidad' },
        { name: 'Elegancia', description: 'Calidad en cada detalle' },
        { name: 'Confianza', description: 'Construido con transparencia' },
        { name: 'Innovación', description: 'Empujar los límites hacia adelante' },
        { name: 'Sinergia', description: 'Más fuertes juntos' },
      ],
    },
    // FAQ
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        { question: '¿Qué es All Global Holding LLC?', answer: 'All Global Holding LLC es la empresa matriz de un ecosistema conectado enfocado en bienes raíces, propiedad fraccionada, pagos digitales, experiencias premium, eventos y tecnología.' },
        { question: '¿Qué es Fractional Living?', answer: 'Fractional Living es el pilar de bienes raíces y propiedad fraccionada enfocado en acceso a propiedades premium en destinos como Quintana Roo, Cancún, Tulum y Playa del Carmen.' },
        { question: '¿Qué es Vandefy?', answer: 'Vandefy es el pilar de pagos digitales e infraestructura cripto del ecosistema. Soporta acceso moderno a pagos, billeteras y tokenización sin prometer retornos financieros.' },
        { question: '¿Qué es Sell Experience?', answer: 'Sell Experience es el pilar de estilo de vida premium y viajes, enfocado en vuelos, hoteles, villas, yates, renta de autos y experiencias curadas.' },
        { question: '¿Qué es Momentum?', answer: 'Momentum es la fábrica de apps y pilar de tecnología. Construye productos digitales, sistemas de automatización, landing pages, PWAs, herramientas CRM y plataformas impulsadas por IA.' },
        { question: '¿Qué es URMAH?', answer: 'URMAH es el pilar de boletos y eventos, integrado con Ticket Tailor para eventos de música y entretenimiento a gran escala.' },
        { question: '¿Cada empresa tendrá su propia app?', answer: 'Sí. Cada empresa está diseñada para eventualmente tener su propia PWA/aplicación independiente, conectada de vuelta al ecosistema de All Global Holding LLC.' },
        { question: '¿Los usuarios necesitarán cuentas separadas?', answer: 'El objetivo futuro es el registro unificado: los usuarios se registran una vez y pueden acceder a múltiples aplicaciones del ecosistema con la misma identidad.' },
        { question: '¿Los visitantes pueden navegar sin registrarse?', answer: 'Sí. La landing page pública permite la exploración libre sin registro.' },
      ],
    },
    // Contact
    contact: {
      title: 'Inicia la conversación.',
      description: 'Estamos construyendo el futuro de bienes raíces, pagos, experiencias, tecnología y eventos en Latinoamérica y más allá.',
      cta: 'Contactar All Global Holding LLC',
    },
    // Footer
    footer: {
      tagline: 'Construyendo un ecosistema conectado de empresas que dan forma a la manera en que las personas viven, pagan, experimentan y celebran.',
      ecosystem: 'Ecosistema',
      company: 'Empresa',
      resources: 'Recursos',
      aboutUs: 'Sobre Nosotros',
      ourVision: 'Nuestra Visión',
      careers: 'Carreras',
      press: 'Prensa',
      blog: 'Blog',
      faqs: 'FAQs',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      stayConnected: 'Mantente Conectado',
      stayConnectedDesc: 'Recibe noticias sobre nuestros proyectos y empresas.',
      subscribe: 'Suscribirse',
      emailPlaceholder: 'Ingresa tu email',
      copyright: '© 2024 All Global Holding LLC. Todos los derechos reservados.',
    },
    // Loading
    loading: 'Cargando experiencia...',
  },
}

// Images
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1649698142126-c3a4b9754202',
  oceanView: 'https://images.unsplash.com/photo-1706014695081-b142ee66ae80',
  villa: 'https://images.pexels.com/photos/32175158/pexels-photo-32175158.jpeg',
  coastal: 'https://images.pexels.com/photos/34939065/pexels-photo-34939065.jpeg',
  yacht: 'https://images.unsplash.com/photo-1662513120840-d1c7b39bc816',
  yachtAerial: 'https://images.pexels.com/photos/31977873/pexels-photo-31977873.jpeg',
  tech: 'https://images.unsplash.com/photo-1654367339087-2f384d47a6e4',
  event: 'https://images.pexels.com/photos/9534913/pexels-photo-9534913.jpeg',
}

// Company icons mapping
const COMPANY_ICONS = [Home, Wallet, Plane, Cpu, Music]
const COMPANY_COLORS = [
  'from-blue-500 to-cyan-400',
  'from-amber-500 to-yellow-400',
  'from-emerald-500 to-teal-400',
  'from-violet-500 to-purple-400',
  'from-rose-500 to-pink-400',
]
const COMPANY_IMAGES = [IMAGES.villa, IMAGES.tech, IMAGES.yacht, IMAGES.tech, IMAGES.event]

// Value icons
const VALUE_ICONS = [Eye, Target, Gem, Shield, Sparkles, Users]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

// Logo Component
const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-10 h-10 md:w-12 md:h-12">
      <div className="absolute inset-0 rounded-full border-2 border-gold flex items-center justify-center">
        <span className="text-gold font-serif text-lg md:text-xl font-bold">A</span>
        <span className="absolute text-gold font-serif text-xs md:text-sm font-bold" style={{ bottom: '8px', right: '8px' }}>G</span>
      </div>
    </div>
    <div className="hidden sm:block">
      <p className="text-xs md:text-sm font-semibold tracking-wider text-primary dark:text-white">ALL GLOBAL</p>
      <p className="text-[10px] md:text-xs tracking-widest text-muted-foreground">HOLDING LLC</p>
    </div>
  </div>
)

// Navigation Component
const Navigation = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const NAV_ITEMS = [
    { name: t.nav.ecosystem, href: '#ecosystem' },
    { name: t.nav.companies, href: '#companies' },
    { name: t.nav.properties, href: '#properties' },
    { name: t.nav.experiences, href: '#experiences' },
    { name: t.nav.technology, href: '#technology' },
    { name: t.nav.events, href: '#events' },
    { name: t.nav.vision, href: '#vision' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="rounded-full flex items-center gap-1 px-2 md:px-3 text-xs md:text-sm font-medium"
            >
              <Languages className="w-4 h-4" />
              <span className="hidden md:inline">{language === 'en' ? 'ES' : 'EN'}</span>
              <span className="md:hidden">{language === 'en' ? 'ES' : 'EN'}</span>
            </Button>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full"
                title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </Button>
            )}
            
            {/* Future Clerk Auth Button - Placeholder */}
            {/* TODO: Replace with Clerk SignInButton */}
            <Button 
              variant="outline" 
              className="hidden md:flex border-gold text-gold hover:bg-gold hover:text-white"
            >
              {t.nav.signIn}
            </Button>
            
            <Button 
              className="hidden md:flex gold-gradient text-primary-foreground hover:opacity-90"
            >
              {t.nav.contactUs}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-gold hover:bg-muted rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" className="flex-1 border-gold text-gold">
                  {t.nav.signIn}
                </Button>
                <Button className="flex-1 gold-gradient text-white">
                  {t.nav.contact}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Hero Section
const HeroSection = () => {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Luxury coastal real estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent dark:from-background/95 dark:via-background/80 dark:to-transparent" />
      </div>

      {/* Network Lines Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A962" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path d="M0,300 Q250,100 500,300 T1000,300" stroke="url(#lineGradient)" fill="none" strokeWidth="1" />
          <path d="M0,400 Q250,200 500,400 T1000,400" stroke="url(#lineGradient)" fill="none" strokeWidth="1" />
          <circle cx="250" cy="200" r="3" fill="#C9A962" />
          <circle cx="500" cy="300" r="4" fill="#C9A962" />
          <circle cx="750" cy="350" r="3" fill="#C9A962" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary dark:text-white mb-6"
            >
              {t.hero.title}<br />{t.hero.titleLine2}
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-foreground/80 mb-4 font-light"
            >
              {t.hero.subtitle}
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              {t.hero.description}
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gold-gradient text-white hover:opacity-90 group">
                {t.hero.cta1}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary dark:border-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-background">
                {t.hero.cta2}
              </Button>
              <Button size="lg" variant="ghost" className="text-gold hover:text-gold/80">
                {t.hero.cta3}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 glass-panel border-t"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-gold" />
              <span>{t.trust.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-4 h-4 text-gold" />
              <span>{t.trust.companies}</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Globe className="w-4 h-4 text-gold" />
              <span>{t.trust.sectors}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4 text-gold" />
              <span>{t.trust.future}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// Origin Section
const OriginSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-white mb-6"
          >
            {t.origin.title}<br />{t.origin.titleLine2}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {t.origin.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Market Shift Section
const MarketShiftSection = () => {
  const { t } = useLanguage()
  const SHIFT_ICONS = [Home, Sparkles, Building2]
  
  return (
    <section id="properties" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-primary dark:text-white mb-4"
          >
            {t.market.title}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-center text-muted-foreground mb-16"
          >
            {t.market.subtitle}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {t.market.shifts.map((shift, index) => {
              const Icon = SHIFT_ICONS[index]
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group"
                >
                  <Card className="h-full glass-panel border-0 shadow-xl hover-lift">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gold-gradient flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary dark:text-white">
                        {shift.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {shift.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Ecosystem Companies Section
const EcosystemSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="companies" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-white mb-4">
              {t.ecosystem.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.ecosystem.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.ecosystem.companies.map((company, index) => {
              const Icon = COMPANY_ICONS[index]
              return (
                <motion.div
                  key={company.name}
                  variants={scaleIn}
                  className={index === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''}
                >
                  <Card className="h-full overflow-hidden group hover-lift border-0 shadow-xl">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={COMPANY_IMAGES[index]}
                        alt={company.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${COMPANY_COLORS[index]} opacity-60`} />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full">
                          {t.ecosystem.comingSoon}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">
                        {company.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {company.description}
                      </p>
                      <div className="flex items-center text-gold text-sm font-medium">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {company.status}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Future SaaS Hub Section
const FutureSaaSSection = () => {
  const { t } = useLanguage()
  const FEATURE_ICONS = [Globe, Users, ExternalLink, Star, Zap, Wallet]
  
  return (
    <section id="technology" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.oceanView}
          alt="Ocean view"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              {t.future.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-white mb-4">
              {t.future.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.future.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.future.features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index]
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="glass-panel border-0 shadow-lg hover-lift h-full">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary dark:text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Architecture Section
const ArchitectureSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="events" className="py-20 md:py-32 bg-primary dark:bg-card text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              {t.architecture.title}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t.architecture.description}
            </p>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div variants={scaleIn} className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Central Hub */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl gold-gradient">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="font-serif font-bold">AG</span>
                  </div>
                  <span className="font-semibold">All Global Holding LLC Hub</span>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center mb-8">
                <div className="w-0.5 h-8 bg-gold/50" />
              </div>

              {/* PWA Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {t.ecosystem.companies.map((company, index) => {
                  const Icon = COMPANY_ICONS[index]
                  return (
                    <motion.div
                      key={company.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <p className="text-xs text-white/70">{company.name} PWA</p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Future Integrations */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-white/50 text-center mb-4">{t.architecture.futureIntegrations}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Clerk', 'Supabase', 'Stripe', 'Ticket Tailor', 'Vercel', 'GitHub'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Vision Section
const VisionSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="vision" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.coastal}
          alt="Coastal view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-white mb-6"
          >
            {t.vision.title}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
          >
            {t.vision.description}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button size="lg" className="gold-gradient text-white hover:opacity-90 group">
              {t.vision.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Values Section
const ValuesSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="experiences" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-primary dark:text-white mb-16"
          >
            {t.values.title}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {t.values.items.map((value, index) => {
              const Icon = VALUE_ICONS[index]
              return (
                <motion.div
                  key={value.name}
                  variants={scaleIn}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-background dark:bg-card shadow-lg flex items-center justify-center hover-lift">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-semibold text-primary dark:text-white mb-1">
                    {value.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-primary dark:text-white mb-16"
          >
            {t.faq.title}
          </motion.h2>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-panel border-0 rounded-xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary dark:text-white hover:text-gold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.yachtAerial}
          alt="Premium lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 dark:bg-background/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6"
          >
            {t.contact.title}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-white/80 mb-8"
          >
            {t.contact.description}
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-4 mb-8">
            <a 
              href="mailto:firstcontact@allglobalholding.com"
              className="flex items-center justify-center gap-3 text-gold hover:text-gold/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">firstcontact@allglobalholding.com</span>
            </a>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <MapPin className="w-5 h-5" />
              <span>{t.trust.location}</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Button size="lg" className="gold-gradient text-primary hover:opacity-90 group">
              {t.contact.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'YouTube', 'X'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white transition-colors"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-semibold text-primary dark:text-white mb-4">{t.footer.ecosystem}</h4>
            <ul className="space-y-2">
              {t.ecosystem.companies.map((company) => (
                <li key={company.name}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary dark:text-white mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              {[t.footer.aboutUs, t.footer.ourVision, t.footer.careers, t.footer.press].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-primary dark:text-white mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2">
              {[t.footer.blog, t.footer.faqs, t.nav.contact, t.footer.privacyPolicy, t.footer.termsOfService].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-b py-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-primary dark:text-white mb-1">{t.footer.stayConnected}</h4>
              <p className="text-sm text-muted-foreground">{t.footer.stayConnectedDesc}</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 md:w-64 px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button className="gold-gradient text-white hover:opacity-90">
                {t.footer.subscribe}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">{t.footer.privacyPolicy}</a>
            <a href="#" className="hover:text-gold transition-colors">{t.footer.termsOfService}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Loading Screen
const LoadingScreen = ({ t }) => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-background flex items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="relative w-20 h-20 mx-auto mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-gold border-t-transparent"
        />
        <div className="absolute inset-2 rounded-full border-2 border-gold/30 flex items-center justify-center">
          <span className="text-gold font-serif text-2xl font-bold">AG</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{t}</p>
    </motion.div>
  </motion.div>
)

// Main Page Component
export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState('en')

  const t = translations[language]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check browser language on mount
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('es')) {
      setLanguage('es')
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <AnimatePresence>
        {isLoading && <LoadingScreen t={t.loading} />}
      </AnimatePresence>

      <div className="min-h-screen bg-background">
        <Navigation isScrolled={isScrolled} />
        <main>
          <HeroSection />
          <OriginSection />
          <MarketShiftSection />
          <EcosystemSection />
          <FutureSaaSSection />
          <ArchitectureSection />
          <VisionSection />
          <ValuesSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}
