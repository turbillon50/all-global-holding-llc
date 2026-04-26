import './v-ecosystem.css'

const verticals = [
  { name: 'V-DeFi', image: '/v-ecosystem/v-defi.png', tone: '#00ff9d', es: 'Dinero digital, control propio y acceso financiero sin fricción.', en: 'Your money. Your control. Without borders.' },
  { name: 'V-Pay', image: '/v-ecosystem/v-pay.jpeg', tone: '#f4c86a', es: 'Pagos, confianza y crecimiento operativo para negocios digitales.', en: 'Payments. Trust. Growth.' },
  { name: 'V-Trust', image: '/v-ecosystem/v-trust.jpeg', tone: '#dce7ff', es: 'Identidad, contratos, validación y confianza instrumental.', en: 'Contracts. Identity. Instrumental trust.' },
  { name: 'V-Living', image: '/v-ecosystem/v-living.png', tone: '#55e6ff', es: 'Propiedad fraccional, activos reales y experiencias inmobiliarias premium.', en: 'Fractional ownership.' },
  { name: 'V-Experiences', image: '/v-ecosystem/v-experiences.png', tone: '#fff3d7', es: 'Vuelos, estancias, hospitality y acceso curado a experiencias.', en: 'Flights, stays and more.' },
  { name: 'V-Momentum', image: '/v-ecosystem/v-momentum.png', tone: '#2f6bff', es: 'Diseño de apps, SaaS, inteligencia artificial e integración operativa.', en: 'SaaS technology apps design.' },
  { name: 'V-ÚRMAH', image: '/v-ecosystem/v-urmah.png', tone: '#9b4dff', es: 'Tickets, producción, venues y soporte tecnológico para eventos.', en: 'Tickets and production support.' },
  { name: 'V-Trading', image: '/v-ecosystem/v-trading.png', tone: '#ffb02e', es: 'Inteligencia financiera, datos de mercado y ejecución de trading.', en: 'AI design trader.' },
]

export default function Home() {
  return (
    <main className="vLobby">
      <div className="ambient" />
      <section className="heroV2">
        <p className="eyebrow">ALL GLOBAL HOLDING LLC</p>
        <img className="holdingMark" src="/v-ecosystem/all-global-holding.jpeg" alt="All Global Holding LLC" />
        <h1>V Ecosystem</h1>
        <p className="lead">Lobby institucional del ecosistema V: tecnología financiera, confianza, propiedad, experiencias, software, eventos y trading.</p>
        <p className="lead en">Institutional access layer for financial technology, trust infrastructure, premium living, experiences, software, events and market intelligence.</p>
      </section>

      <section className="brandWall" aria-label="V Ecosystem verticals">
        {verticals.map((item) => (
          <article className="brandCard" key={item.name} style={{ '--tone': item.tone }}>
            <div className="imageFrame">
              <img src={item.image} alt={item.name} />
              <div className="cardGlow" />
            </div>
            <div className="cardCopy">
              <span className="verticalName">{item.name}</span>
              <p>{item.es}</p>
              <small>{item.en}</small>
            </div>
          </article>
        ))}
      </section>

      <section className="manifesto">
        <p>VISUAL FIRST · INTEGRATIONS SECOND</p>
        <h2>Una entrada institucional. Ocho verticales. Un solo ecosistema.</h2>
      </section>
    </main>
  )
}
