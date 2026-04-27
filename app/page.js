"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  ArrowRight,
  Building2,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Share2,
  Sun,
  X,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const NAV_ITEMS = [
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Verticales", href: "#verticales" },
  { label: "Arquitectura PWA", href: "#arquitectura" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

const VERTICALS = [
  {
    name: "V-DeFi",
    color: "#14d899",
    description: "Infraestructura financiera no custodial para pagos internacionales, movilidad de capital y acceso digital.",
  },
  {
    name: "V-ÚRMAH",
    color: "#8d39ff",
    description: "Ticketing, venues, producción y operación de eventos de alto valor con ejecución integral.",
  },
  {
    name: "V-Living",
    color: "#22c8ff",
    description: "Fractional ownership, bridge capital y real estate intelligence con estructura patrimonial clara.",
  },
  {
    name: "V-Momentum",
    color: "#2f66ff",
    description: "Desarrollo de software, automatización e inteligencia aplicada para operaciones empresariales reales.",
  },
  {
    name: "V-Trading",
    color: "#f39a22",
    description: "Sistemas de análisis, ejecución disciplinada e inteligencia de mercado para capital estratégico.",
  },
  {
    name: "V-Trust",
    color: "#d7e5ff",
    description: "Contratos, identidad y validación operativa para que la confianza sea verificable.",
  },
  {
    name: "V-Pay",
    color: "#f6b342",
    description: "Payment links, merchant flows y automatización comercial para convertir operación en flujo real.",
  },
  {
    name: "V-Experiences",
    color: "#f6d9a0",
    description: "Hospitalidad, viajes y experiencias premium conectadas con valor tangible.",
  },
]

const FAQ_ITEMS = [
  {
    question: "¿Qué es All Global Holding LLC?",
    answer:
      "Es una holding de infraestructura que integra finanzas, patrimonio, tecnología, cumplimiento y experiencia bajo una sola arquitectura.",
  },
  {
    question: "¿Las verticales son proyectos separados?",
    answer:
      "Cada vertical tiene una operación independiente, pero todas forman parte de un ecosistema coordinado donde la información, la confianza y la ejecución se fortalecen entre sí.",
  },
  {
    question: "¿Cada vertical tendrá su propia PWA?",
    answer:
      "Sí. El diseño contempla una PWA por vertical, conectada a un hub institucional para mantener coherencia de marca y navegación.",
  },
  {
    question: "¿Cómo se garantiza la confianza?",
    answer:
      "A través de estructuras verificables: identidad, validación, contratos, procesos de cumplimiento y operación con trazabilidad.",
  },
  {
    question: "¿En qué etapa está el ecosistema?",
    answer:
      "La plataforma institucional ya funciona como puerta de entrada. Cada vertical evoluciona hacia su propia experiencia PWA de forma progresiva.",
  },
  {
    question: "¿Cómo puedo iniciar una conversación comercial?",
    answer:
      "Puedes escribir a firstcontact@allglobalholding.com o iniciar contacto directo por WhatsApp en +52 998 429 2748.",
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "X", href: "#", icon: X },
]

function OrbitalRing({ color }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 3.2, ease: "linear", repeat: Infinity }}
      className="relative h-12 w-12"
    >
      <svg viewBox="0 0 100 100" className="h-12 w-12">
        <circle cx="50" cy="50" r="38" fill="none" stroke={color} strokeOpacity="0.22" strokeWidth="4" />
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="72 240"
          style={{ filter: `drop-shadow(0px 0px 8px ${color})` }}
          animate={{ strokeOpacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  )
}

function SiteHeader({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled ? "glass-panel shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-gold flex items-center justify-center">
            <span className="text-sm font-semibold tracking-widest text-gold">AG</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.18em]">ALL GLOBAL</p>
            <p className="text-[11px] text-muted-foreground tracking-[0.22em]">HOLDING LLC</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-foreground/80 hover:text-gold transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5 text-gold" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Button asChild className="hidden sm:inline-flex gold-gradient text-white hover:opacity-90">
            <a href="#contacto">Primer Contacto</a>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-background/95 backdrop-blur"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function shareSite() {
  const data = {
    title: "All Global Holding LLC",
    text: "Infraestructura para operar, confiar y crecer.",
    url: typeof window !== "undefined" ? window.location.href : "",
  }

  if (navigator.share) {
    navigator.share(data).catch(() => {})
    return
  }

  if (navigator.clipboard && data.url) {
    navigator.clipboard.writeText(data.url).catch(() => {})
  }
}

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex items-center justify-center"
          >
            <div className="text-center">
              <div className="mx-auto mb-3">
                <OrbitalRing color="#C9A962" />
              </div>
              <p className="text-sm tracking-[0.2em] text-muted-foreground">CARGANDO EXPERIENCIA</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background">
        <SiteHeader isScrolled={isScrolled} />

        <main>
          <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,98,0.2),transparent_48%)]" />
            <div className="container mx-auto px-4 relative z-10">
              <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
                <motion.p variants={fadeIn} className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs tracking-[0.16em] text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5 text-gold" />
                  ALL GLOBAL HOLDING LLC
                </motion.p>
                <motion.h1 variants={fadeIn} className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
                  Infraestructura para operar, confiar y crecer.
                </motion.h1>
                <motion.p variants={fadeIn} className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  Diseñamos sistemas donde finanzas, patrimonio, tecnología, experiencia y cumplimiento operan en una sola arquitectura.
                  Nuestra visión es construir una oficina digital institucional, premium y navegable, con una PWA por vertical.
                </motion.p>
                <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="gold-gradient text-white hover:opacity-90">
                    <a href="#verticales">
                      Explorar verticales
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#arquitectura">Ver arquitectura PWA</a>
                  </Button>
                  <Button variant="ghost" onClick={shareSite}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartir
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section id="manifiesto" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-4xl">
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif mb-8">Manifiesto Institucional</motion.h2>
                <motion.div variants={fadeIn} className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                  <p>All Global Holding LLC nace con una convicción clara: construir valor sostenible a partir de activos reales, estructuras sólidas y cumplimiento verificable.</p>
                  <p>Desde su origen inmobiliario y fiduciario, la compañía evolucionó hacia una arquitectura integrada donde cada vertical responde a una necesidad real del mercado y fortalece al ecosistema completo.</p>
                  <p>Nuestro objetivo es diseñar acceso: acceso a patrimonio, acceso a operación, acceso a experiencia y acceso a infraestructura tecnológica con ejecución visible.</p>
                  <p>La confianza se sostiene en hechos: responsabilidad operativa, estructura coherente, continuidad y resultados.</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section id="verticales" className="py-20 md:py-28">
            <div className="container mx-auto px-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={fadeIn} className="text-center text-3xl md:text-5xl font-serif mb-4">Verticales del Ecosistema</motion.h2>
                <motion.p variants={fadeIn} className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                  Cada vertical evoluciona hacia una PWA independiente dentro de una experiencia institucional unificada.
                </motion.p>
                <div className="grid gap-6 md:grid-cols-2">
                  {VERTICALS.map((item) => (
                    <motion.div key={item.name} variants={fadeIn}>
                      <Card className="h-full border-border/60 shadow-lg hover-lift">
                        <CardContent className="p-6 md:p-7">
                          <div className="mb-4 flex items-center gap-4">
                            <div className="font-serif text-3xl text-foreground/90">V</div>
                            <OrbitalRing color={item.color} />
                            <div className="h-8 w-px bg-border" />
                            <h3 className="text-2xl font-semibold">{item.name.replace("V-", "")}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          <p className="mt-4 text-xs tracking-[0.18em] text-muted-foreground">PWA INDEPENDIENTE EN DESPLIEGUE PROGRESIVO</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section id="arquitectura" className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-5xl">
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif text-center mb-4">Arquitectura Navegable Premium</motion.h2>
                <motion.p variants={fadeIn} className="mx-auto mb-12 max-w-3xl text-center text-white/80">
                  Hub institucional + verticales PWA + capa compartida de diseño, identidad y métricas.
                </motion.p>
                <motion.div variants={fadeIn} className="grid gap-4 md:grid-cols-3">
                  {["Hub Institucional", "PWAs por Vertical", "Office Layer Compartida"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/20 bg-white/5 p-6">
                      <h3 className="text-lg font-semibold">{item}</h3>
                      <p className="mt-2 text-sm text-white/75">
                        Arquitectura preparada para escalar la experiencia manteniendo consistencia visual, operativa y de cumplimiento.
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section id="faq" className="py-20">
            <div className="container mx-auto px-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-4xl">
                <motion.h2 variants={fadeIn} className="text-center text-3xl md:text-5xl font-serif mb-12">Preguntas Frecuentes</motion.h2>
                <motion.div variants={fadeIn}>
                  <Accordion type="single" collapsible className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                      <AccordionItem key={item.question} value={`faq-${index}`} className="rounded-xl border px-5">
                        <AccordionTrigger className="text-left font-medium hover:no-underline">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section id="contacto" className="py-20 bg-muted/30 border-y">
            <div className="container mx-auto px-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-5xl">
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif mb-4">Primer Contacto Institucional</motion.h2>
                <motion.p variants={fadeIn} className="mb-8 text-muted-foreground">
                  Escríbenos y diseñamos contigo la mejor ruta para entrar al ecosistema.
                </motion.p>

                <motion.div variants={fadeIn} className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-6 space-y-5">
                      <a href="mailto:firstcontact@allglobalholding.com" className="flex items-center gap-3 text-gold hover:opacity-80">
                        <Mail className="h-5 w-5" />
                        <span>firstcontact@allglobalholding.com</span>
                      </a>
                      <a href="https://wa.me/529984292748" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-gold transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>WhatsApp México: +52 998 429 2748</span>
                      </a>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5" />
                        <span>Quintana Roo, México</span>
                      </div>
                      <div className="pt-2 flex items-center gap-2">
                        <Button onClick={shareSite} variant="outline" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Compartir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <label className="text-sm text-muted-foreground">Correo corporativo</label>
                      <input
                        type="email"
                        placeholder="tu@empresa.com"
                        className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                      <label className="text-sm text-muted-foreground">Correo alterno</label>
                      <input
                        type="email"
                        placeholder="contacto@dominio.com"
                        className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                      <label className="text-sm text-muted-foreground">Mensaje</label>
                      <textarea
                        rows={4}
                        placeholder="Cuéntanos qué vertical quieres activar."
                        className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                      <Button className="w-full gold-gradient text-white hover:opacity-90">Enviar solicitud</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="border-t bg-background">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-muted-foreground">© {year} All Global Holding LLC. Todos los derechos reservados.</p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="h-10 w-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
                <a
                  href="#"
                  aria-label="X"
                  className="h-10 w-10 rounded-full border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  <span className="text-xs font-semibold tracking-wide">X</span>
                </a>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Globe className="h-3.5 w-3.5" />
                Ecosistema institucional premium preparado para PWAs por vertical.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
