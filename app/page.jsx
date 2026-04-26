import './v-ecosystem.css'

const verticals = [
  { name: 'V-DeFi', tone: '#00ff9d', line: 'Non-custodial financial access, remittances, swaps and digital value rails.' },
  { name: 'V-Pay', tone: '#f4f4f4', line: 'Payment links, merchant flows and programmable transaction experiences.' },
  { name: 'V-Trust', tone: '#c7ccd6', line: 'Identity, validation, records, compliance logic and trusted digital agreements.' },
  { name: 'V-Living', tone: '#55e6ff', line: 'Fractional living, real estate access and premium asset-backed experiences.' },
  { name: 'V-Experiences', tone: '#fff3d7', line: 'Hospitality, travel, events and curated access to real-world premium moments.' },
  { name: 'V-Momentum', tone: '#2f6bff', line: 'AI software studio for apps, operations, integrations and business systems.' },
  { name: 'V-ÚRMAH', tone: '#9b4dff', line: 'Tickets, production support, venues, access layers and live event infrastructure.' },
  { name: 'V-Trading', tone: '#ffb02e', line: 'Market intelligence, trading systems, data signals and financial execution tools.' },
]

function Ring({ tone }) {
  return <div className="ring" style={{ '--tone': tone }}><span /></div>
}

export default function Home() {
  return (
    <main className="vLobby">
      <div className="noise" />
      <section className="hero">
        <p className="eyebrow">ALL GLOBAL HOLDING LLC</p>
        <div className="masterMark">
          <Ring tone="#f2f2f2" />
          <div className="vMark">V</div>
          <div className="reflection">V</div>
        </div>
        <h1>V Ecosystem</h1>
        <p className="lead">An institutional lobby for financial technology, trust infrastructure, premium living, experiences, software and market intelligence.</p>
      </section>

      <section className="grid" aria-label="V Ecosystem verticals">
        {verticals.map((item) => (
          <article className="card" key={item.name} style={{ '--tone': item.tone }}>
            <Ring tone={item.tone} />
            <h2>{item.name}</h2>
            <p>{item.line}</p>
            <span className="status">System active</span>
          </article>
        ))}
      </section>

      <section className="manifesto">
        <p>Visual first. Integrations second.</p>
        <h3>One holding. Multiple verticals. A single institutional access layer.</h3>
      </section>
    </main>
  )
}
