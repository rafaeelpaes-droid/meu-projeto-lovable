const services = [
  'Dashboard',
  'Autenticação',
  'Pagamentos',
  'Relatórios',
];

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="badge">Novo app</div>
        <h1>Meu projeto está no ar.</h1>
        <p>
          Uma base moderna para você construir sua ideia com interface limpa,
          estrutura organizada e fácil evolução.
        </p>

        <div className="actions">
          <button className="primary">Começar agora</button>
          <button className="secondary">Ver mais</button>
        </div>

        <div className="stats">
          <div>
            <strong>24h</strong>
            <span>prototipação</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>mais rápido</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>customizável</span>
          </div>
        </div>
      </section>

      <section className="feature-panel">
        <h2>Funcionalidades prontas</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service} className="service-item">
              <span className="dot" />
              {service}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
