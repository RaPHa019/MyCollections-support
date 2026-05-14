// blog-app.jsx — App landing / conversion page

const AppPage = ({ setPage }) => (
  <div style={{ background: 'white' }}>

    {/* ── HERO ── */}
    <section style={{
      background: `linear-gradient(160deg, #002F50 0%, #004770 40%, ${BRAND} 100%)`,
      padding: '80px 24px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -100, left: '10%', width: 400, height: 400, background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: -120, right: '5%', width: 500, height: 500, background: 'rgba(255,255,255,0.02)', borderRadius: '50%' }}></div>

      <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
        <img src="assets/appIcon1024x1024.png" alt="MyCollections" style={{ width: 88, height: 88, borderRadius: 22, marginBottom: 24, boxShadow: '0 12px 36px rgba(0,0,0,0.3)' }} />
        <h1 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
          Organize.<br />Valorize.<br />
          <span style={{ color: 'rgba(255,255,255,0.65)' }}>Leve com você.</span>
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: 520, margin: '0 auto 40px' }}>
          O MyCollections é o app para quem leva a coleção a sério. Multi-coleção, fotos, rastreio de valores e tudo sempre disponível no seu bolso.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          <AppStoreBadge store="apple" />
          <AppStoreBadge store="google" />
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>Gratuito · iOS &amp; Android · Sem limite de coleções</p>
      </div>

      {/* 3 phone screenshots */}
      <div style={{ maxWidth: 900, margin: '60px auto 0', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 24, position: 'relative', height: 460 }}>
        <div style={{ position: 'absolute', left: '8%', bottom: 0 }}>
          <IPhoneMockup screenshot="uploads/iPhone 16 Pro Max-03_ItemList.png" rotate={-8} scale={0.82} zIndex={1} />
        </div>
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 0, zIndex: 3 }}>
          <IPhoneMockup screenshot="uploads/iPhone 16 Pro Max-01_Collections.png" rotate={0} scale={1.05} zIndex={3} />
        </div>
        <div style={{ position: 'absolute', right: '8%', bottom: 0 }}>
          <IPhoneMockup screenshot="uploads/iPhone 16 Pro Max-04_ItemDetail.png" rotate={8} scale={0.82} zIndex={1} />
        </div>
      </div>
    </section>

    {/* ── FEATURES DETAILED ── */}
    <section style={{ padding: '80px 24px', background: GRAY_50 }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BRAND, marginBottom: 10 }}>Funcionalidades</p>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 40px)', color: GRAY_900, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Tudo que um colecionador precisa
          </h2>
        </div>

        {FEATURE_DETAILS.map((f, i) => (
          <div key={f.title} style={{
            display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
            gap: 64, alignItems: 'center', marginBottom: 80,
            direction: i % 2 === 0 ? 'ltr' : 'rtl',
          }}>
            <div style={{ direction: 'ltr' }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <i className={f.icon} style={{ fontSize: 28, color: f.color }}></i>
              </div>
              <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 28, color: GRAY_900, letterSpacing: '-0.02em', marginBottom: 14 }}>{f.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY_500, lineHeight: 1.75, marginBottom: 20 }}>{f.desc}</p>
              {f.bullets && (
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {f.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <i className="ph-check-circle-fill" style={{ fontSize: 18, color: SUCCESS, flexShrink: 0 }}></i>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY_900 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div style={{ direction: 'ltr' }}>
              <div style={{
                background: f.bg, borderRadius: 20, padding: '40px', minHeight: 280,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <i className={f.icon} style={{ fontSize: 140, color: f.color, opacity: 0.15 }}></i>
                <div style={{ position: 'absolute', bottom: 20, right: 20, background: 'white', borderRadius: 12, padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: f.color, fontWeight: 500 }}>{f.badge}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── TESTIMONIALS ── */}
    <section style={{ padding: '72px 24px', background: 'white' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BRAND, marginBottom: 10 }}>O que dizem os colecionadores</p>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 32, color: GRAY_900, letterSpacing: '-0.02em' }}>
            Quem usa, recomenda
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {TESTIMONIALS.map(t => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </div>
    </section>

    {/* ── FINAL CTA ── */}
    <section style={{ background: `linear-gradient(135deg, #002F50, ${BRAND})`, padding: '80px 24px', textAlign: 'center' }}>
      <img src="assets/appIcon1024x1024.png" alt="" style={{ width: 72, height: 72, borderRadius: 18, marginBottom: 24 }} />
      <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 40, color: 'white', letterSpacing: '-0.02em', marginBottom: 14, lineHeight: 1.15 }}>
        Comece hoje, de graça.
      </h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
        Sem limites, sem assinatura. Organize quantas coleções quiser.
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <AppStoreBadge store="apple" large />
        <AppStoreBadge store="google" large />
      </div>
    </section>
  </div>
);

const AppStoreBadge = ({ store, large }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 12,
    background: 'rgba(255,255,255,0.12)',
    border: '1.5px solid rgba(255,255,255,0.25)',
    borderRadius: 12, padding: large ? '14px 24px' : '11px 20px',
    cursor: 'pointer', transition: 'background 150ms',
  }}
    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
  >
    <i className={store === 'apple' ? 'ph-apple-logo-fill' : 'ph-google-play-logo-fill'} style={{ fontSize: large ? 28 : 24, color: 'white' }}></i>
    <div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: large ? 11 : 10, color: 'rgba(255,255,255,0.65)', lineHeight: 1 }}>
        {store === 'apple' ? 'Disponível na' : 'Disponível no'}
      </p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: large ? 17 : 15, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
        {store === 'apple' ? 'App Store' : 'Google Play'}
      </p>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, text, color, bg }) => (
  <div style={{ background: GRAY_50, borderRadius: 14, padding: '24px', border: `1px solid ${GRAY_100}` }}>
    <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
      {[1,2,3,4,5].map(s => <i key={s} className="ph-star-fill" style={{ fontSize: 14, color: '#F59E0B' }}></i>)}
    </div>
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY_900, lineHeight: 1.65, marginBottom: 18 }}>"{text}"</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="ph-user-fill" style={{ fontSize: 16, color }}></i>
      </div>
      <div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: GRAY_900 }}>{name}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY_500 }}>{role}</p>
      </div>
    </div>
  </div>
);

const FEATURE_DETAILS = [
  {
    icon: 'ph-squares-four-fill', color: BRAND, bg: BRAND_LIGHT,
    title: 'Multi-coleção sem limites',
    desc: 'Vinils, quadrinhos, relógios, câmeras, games — cada coleção organizada separadamente, mas tudo acessível num toque. Sem planos pagos, sem limites artificiais.',
    bullets: ['Coleções ilimitadas', 'Categorias personalizáveis', 'Busca integrada entre coleções'],
    badge: '21 coleções · 0 limites',
  },
  {
    icon: 'ph-device-mobile-fill', color: SUCCESS, bg: '#F0FDF4',
    title: 'Sempre com você',
    desc: 'Num restaurante com amigos colecionadores, num leilão ou numa banca de sebo — sua coleção completa, com fotos e detalhes, está sempre na palma da mão.',
    bullets: ['Acesso offline', 'Compartilhamento fácil', 'Fotos em alta qualidade'],
    badge: 'Acessível em qualquer lugar',
  },
  {
    icon: 'ph-trend-up-fill', color: '#B45309', bg: '#FFF7ED',
    title: 'Acompanhe o valor do acervo',
    desc: 'Registre o preço pago por cada item e compare com o valor de mercado atual. Saiba exatamente quanto sua coleção vale e acompanhe a valorização ao longo do tempo.',
    bullets: ['Valor pago x valor atual', 'Histórico de aquisições', 'Relatório do acervo'],
    badge: 'R$ 0,00 → R$ 12.400,00',
  },
];

const TESTIMONIALS = [
  { name: 'Ricardo M.', role: 'Colecionador de vinils há 15 anos', text: 'Finalmente um app que entende como um colecionador pensa. Uso todo dia para catalogar e mostrar minha coleção para amigos.', color: '#7C3AED', bg: '#F5F0FF' },
  { name: 'Ana P.', role: 'Colecionadora de quadrinhos', text: 'O recurso de fotos faz toda a diferença. Consigo registrar a capa, o verso e detalhes de raridade de cada HQ. Indispensável.', color: '#DC2626', bg: '#FEF2F2' },
  { name: 'Carlos H.', role: 'Colecionador de relógios vintage', text: 'Mostro minha coleção em encontros e leilões direto do celular. As pessoas ficam impressionadas com o nível de detalhe que o app permite.', color: '#B45309', bg: '#FFF7ED' },
];

Object.assign(window, { AppPage });
