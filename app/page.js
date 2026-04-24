"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { 
  Menu, X, Sun, Moon, MapPin, Building2, Cpu, Wallet, Plane, 
  Music, ChevronRight, Mail, Globe, Users, Shield, Sparkles,
  ArrowRight, Check, ExternalLink, Home, CreditCard, Star,
  Zap, Heart, Eye, Target, Gem, Rocket, ChevronDown, Play
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

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

// Navigation items
const NAV_ITEMS = [
  { name: 'Ecosystem', href: '#ecosystem' },
  { name: 'Companies', href: '#companies' },
  { name: 'Properties', href: '#properties' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Technology', href: '#technology' },
  { name: 'Events', href: '#events' },
  { name: 'Vision', href: '#vision' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

// Companies data
const COMPANIES = [
  {
    name: 'Fractional Living',
    icon: Home,
    color: 'from-blue-500 to-cyan-400',
    description: 'Premium real estate fractional ownership, second-home access and structured property participation in Quintana Roo, Cancún, Tulum and Playa del Carmen.',
    status: 'Independent PWA coming soon',
    image: IMAGES.villa,
  },
  {
    name: 'Vandefy',
    icon: Wallet,
    color: 'from-amber-500 to-yellow-400',
    description: 'Digital payments, crypto acceptance, tokenization, wallets and modern financial access for the ecosystem.',
    status: 'Independent PWA coming soon',
    image: IMAGES.tech,
  },
  {
    name: 'Sell Experience',
    icon: Plane,
    color: 'from-emerald-500 to-teal-400',
    description: 'Premium experiences marketplace: flights, hotels, villas, yachts, car rentals, curated trips, hospitality and lifestyle services.',
    status: 'Independent PWA coming soon',
    image: IMAGES.yacht,
  },
  {
    name: 'Momentum',
    icon: Cpu,
    color: 'from-violet-500 to-purple-400',
    description: 'AI-powered app factory and technology studio for automation, no-code, low-code, landing pages, apps, CRM systems, internal tools and commercial platforms.',
    status: 'Independent PWA coming soon',
    image: IMAGES.tech,
  },
  {
    name: 'URMAH',
    icon: Music,
    color: 'from-rose-500 to-pink-400',
    description: 'Ticketing platform integrated with Ticket Tailor for large-scale music and entertainment events in Mexico, connecting audiences, producers, payments, travel and experiences.',
    status: 'Independent PWA coming soon',
    image: IMAGES.event,
  },
]

// Values
const VALUES = [
  { name: 'Vision', icon: Eye, description: 'See beyond the present' },
  { name: 'Execution', icon: Target, description: 'Turn ideas into reality' },
  { name: 'Elegance', icon: Gem, description: 'Quality in every detail' },
  { name: 'Trust', icon: Shield, description: 'Built on transparency' },
  { name: 'Innovation', icon: Sparkles, description: 'Push boundaries forward' },
  { name: 'Synergy', icon: Users, description: 'Stronger together' },
]

// Market shifts
const MARKET_SHIFTS = [
  {
    title: 'Airbnb changed the way people travel',
    description: 'Stay and think about second homes in entirely new ways.',
    icon: Home,
  },
  {
    title: 'AI reduced the distance',
    description: 'Between an ambitious idea and a real digital product.',
    icon: Sparkles,
  },
  {
    title: 'Fractional ownership opened',
    description: 'A new path for premium real estate access.',
    icon: Building2,
  },
]

// FAQ data
const FAQ_DATA = [
  {
    question: 'What is All Global Holding LLC?',
    answer: 'All Global Holding LLC is the mother company of a connected ecosystem focused on real estate, fractional ownership, digital payments, premium experiences, events and technology.',
  },
  {
    question: 'What is Fractional Living?',
    answer: 'Fractional Living is the real estate and fractional ownership pillar focused on premium property access in destinations like Quintana Roo, Cancún, Tulum and Playa del Carmen.',
  },
  {
    question: 'What is Vandefy?',
    answer: 'Vandefy is the digital payments and crypto infrastructure pillar of the ecosystem. It supports modern payment access, wallets and tokenization without promising financial returns.',
  },
  {
    question: 'What is Sell Experience?',
    answer: 'Sell Experience is the premium lifestyle and travel pillar, focused on flights, hotels, villas, yachts, car rentals and curated experiences.',
  },
  {
    question: 'What is Momentum?',
    answer: 'Momentum is the app factory and technology pillar. It builds digital products, automation systems, landing pages, PWAs, CRM tools and AI-powered platforms.',
  },
  {
    question: 'What is URMAH?',
    answer: 'URMAH is the ticketing and events pillar, integrated with Ticket Tailor for large-scale music and entertainment events.',
  },
  {
    question: 'Will each company have its own app?',
    answer: 'Yes. Each company is designed to eventually have its own independent PWA/application, connected back to the All Global Holding LLC ecosystem.',
  },
  {
    question: 'Will users need separate accounts?',
    answer: 'The future goal is unified registration: users register once and can access multiple ecosystem applications with the same identity.',
  },
  {
    question: 'Can visitors browse without registering?',
    answer: 'Yes. The public landing page allows free exploration without registration.',
  },
]

// Future SaaS features
const FUTURE_FEATURES = [
  { icon: Globe, title: 'Explore Freely', description: 'Browse all ecosystem content without barriers' },
  { icon: Users, title: 'Register Once', description: 'Single sign-up for entire ecosystem' },
  { icon: ExternalLink, title: 'Access Multiple PWAs', description: 'One identity, all applications' },
  { icon: Star, title: 'Unified Profile', description: 'Your data, synchronized everywhere' },
  { icon: Zap, title: 'Cross-Platform', description: 'Seamless experience across devices' },
  { icon: Wallet, title: 'Future Wallet', description: 'Integrated payment layer' },
]

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

          <div className="flex items-center gap-2 md:gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            )}
            
            {/* Future Clerk Auth Button - Placeholder */}
            {/* TODO: Replace with Clerk SignInButton */}
            <Button 
              variant="outline" 
              className="hidden md:flex border-gold text-gold hover:bg-gold hover:text-white"
            >
              Sign In
            </Button>
            
            <Button 
              className="hidden md:flex gold-gradient text-primary-foreground hover:opacity-90"
            >
              Contact Us
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
                  Sign In
                </Button>
                <Button className="flex-1 gold-gradient text-white">
                  Contact
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
const HeroSection = () => (
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
            All Global<br />Holding LLC
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/80 mb-4 font-light"
          >
            Capital, property, technology and experiences connected in one modern ecosystem.
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl"
          >
            Born from finance and real estate. Built for the new era of fractional ownership, 
            digital payments, premium experiences, events and artificial intelligence.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="gold-gradient text-white hover:opacity-90 group">
              Explore the Ecosystem
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary dark:border-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-background">
              Join the Future Access List
            </Button>
            <Button size="lg" variant="ghost" className="text-gold hover:text-gold/80">
              Contact Us
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
            <span>Quintana Roo, Mexico</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="w-4 h-4 text-gold" />
            <span>Five connected companies</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <Globe className="w-4 h-4 text-gold" />
            <span>Real estate, technology, travel, payments & events</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-gold" />
            <span>Future unified ecosystem access</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)

// Origin Section
const OriginSection = () => (
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
          Born from finance and real estate.<br />Built for the new world.
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          All Global Holding LLC began with a financial and real estate foundation. Through property 
          acquisition, structured real estate operations and market experience, the company learned 
          that the future was no longer only about owning assets, but about designing new ways to 
          access them, use them, commercialize them and connect them through technology.
        </motion.p>
      </motion.div>
    </div>
  </section>
)

// Market Shift Section
const MarketShiftSection = () => (
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
          The world changed.
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-center text-muted-foreground mb-16"
        >
          So did the way people access value.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {MARKET_SHIFTS.map((shift, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group"
            >
              <Card className="h-full glass-panel border-0 shadow-xl hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gold-gradient flex items-center justify-center">
                    <shift.icon className="w-8 h-8 text-white" />
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
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Ecosystem Companies Section
const EcosystemSection = () => (
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
            One holding. Five connected pillars.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each company has its own role. Together, they form a connected architecture of opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              variants={scaleIn}
              className={index === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''}
            >
              <Card className="h-full overflow-hidden group hover-lift border-0 shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${company.color} opacity-60`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <company.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full">
                      Coming Soon
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
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Future SaaS Hub Section
const FutureSaaSSection = () => (
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
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary dark:text-white mb-4">
            A future unified access layer.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The ecosystem is designed to evolve into a connected SaaS-style hub. Users will be able to 
            explore freely, register once and access multiple products, companies and services through 
            a single identity layer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_FEATURES.map((feature, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="glass-panel border-0 shadow-lg hover-lift h-full">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-gold" />
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
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Architecture Section
const ArchitectureSection = () => (
  <section className="py-20 md:py-32 bg-primary dark:bg-card text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Built to connect future applications.
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            This landing page is the first public gateway. Future PWAs will connect through 
            shared identity, shared data structure and shared navigation.
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
              {COMPANIES.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/10 flex items-center justify-center">
                    <company.icon className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-xs text-white/70">{company.name} PWA</p>
                </motion.div>
              ))}
            </div>

            {/* Future Integrations */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 text-center mb-4">Future Integrations</p>
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

// Vision Section
const VisionSection = () => (
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
          A connected architecture of opportunities.
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
        >
          All Global Holding LLC does not build isolated businesses. It designs a system where 
          each company strengthens the next: property creates aspiration, payments create access, 
          experiences create lifestyle, events create audience, and technology connects everything.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button size="lg" className="gold-gradient text-white hover:opacity-90 group">
            Discover Our Vision
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// Values Section
const ValuesSection = () => (
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
          Our Values
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.name}
              variants={scaleIn}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-background dark:bg-card shadow-lg flex items-center justify-center hover-lift">
                <value.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-semibold text-primary dark:text-white mb-1">
                {value.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// FAQ Section
const FAQSection = () => (
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
          Frequently Asked Questions
        </motion.h2>

        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_DATA.map((item, index) => (
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

// Contact Section
const ContactSection = () => (
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
          Start the conversation.
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          className="text-lg text-white/80 mb-8"
        >
          We are building the future of real estate, payments, experiences, 
          technology and events in Latin America and beyond.
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
            <span>Quintana Roo, Mexico</span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Button size="lg" className="gold-gradient text-primary hover:opacity-90 group">
            Contact All Global Holding LLC
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// Footer
const Footer = () => (
  <footer className="bg-background border-t">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Logo className="mb-4" />
          <p className="text-muted-foreground text-sm max-w-xs mb-6">
            Building a connected ecosystem of companies that shape the way people 
            live, pay, experience and celebrate.
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
          <h4 className="font-semibold text-primary dark:text-white mb-4">Ecosystem</h4>
          <ul className="space-y-2">
            {COMPANIES.map((company) => (
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
          <h4 className="font-semibold text-primary dark:text-white mb-4">Company</h4>
          <ul className="space-y-2">
            {['About Us', 'Our Vision', 'Careers', 'Press'].map((item) => (
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
          <h4 className="font-semibold text-primary dark:text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            {['Blog', 'FAQs', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
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
            <h4 className="font-semibold text-primary dark:text-white mb-1">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">Get news about our projects and companies.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button className="gold-gradient text-white hover:opacity-90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; 2024 All Global Holding LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
)

// Loading Screen
const LoadingScreen = () => (
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
      <p className="text-sm text-muted-foreground">Loading experience...</p>
    </motion.div>
  </motion.div>
)

// Main Page Component
export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
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
    </>
  )
}
