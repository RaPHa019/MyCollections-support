// blog-home.jsx — Home page

const HomePage = ({ setPage, heroStyle }) => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  const isDark = heroStyle === 'dark';

  return (
    <div style={{ background: GRAY_50 }}>
      {/* ── HERO ── */}
      <section style={{
        background: isDark ? `linear-gradient(135deg, #004770 0%, ${BRAND} 60%, #2288D1 100%)` : 'white',
        padding: '72px 24px 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {isDark && (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}></div>
        )}
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'flex-end' }}>
          {/* Left: copy */}
          <div style={{ paddingBottom: 72 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: isDark ? 'rgba(255,255,255,0.15)' : BRAND_LIGHT,
              borderRadius: 9999, padding: '6px 14px', marginBottom: 24,
            }}>
              <i className="ph-sparkle-fill" style={{ fontSize: 14, color: isDark ? 'white' : BRAND }}></i>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: isDark ? 'white' : BRAND }}>
                O app para colecionadores de verdade
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 800,
              fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: isDark ? 'white' : GRAY_900,
              marginBottom: 20,
            }}>
              Sua coleção,<br />
              <span style={{ color: isDark ? 'rgba(255,255,255,0.75)' : BRAND }}>
                sempre com você.
              </span>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.65,
              color: isDark ? 'rgba(255,255,255,0.75)' : GRAY_500,
              maxWidth: 440, marginBottom: 36,
            }}>
              Organize qualquer tipo de coleção com fotos, valores e raridade — e exiba seu acervo onde estiver, direto do celular.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              <DownloadBtn store="apple" dark={isDark} />
              <DownloadBtn store="google" dark={isDark} />
            </div>
            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex' }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: isDark ? `rgba(255,255,255,${0.15 + i*0.05})` : [BRAND_LIGHT,'#FFF7ED','#F0FDF4','#F5F0FF'][i-1],
                    marginLeft: i > 1 ? -10 : 0,
                    border: `2px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'white'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className="ph-user-fill" style={{ fontSize: 14, color: isDark ? 'white' : BRAND, opacity: 0.7 }}></i>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(s => <i key={s} className="ph-star-fill" style={{ fontSize: 12, color: '#F59E0B' }}></i>)}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: isDark ? 'rgba(255,255,255,0.6)' : GRAY_500, lineHeight: 1.2 }}>
                  +2.000 colecionadores ativos
                </p>
              </div>
            </div>
          </div>
          {/* Right: app mockups */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: -20, position: 'relative', height: 480 }}>
            <div style={{ position: 'absolute', left: '5%', bottom: 0 }}>
              <IPhoneMockup screenshot="uploads/iPhone 16 Pro Max-03_ItemList.png" rotate={-6} scale={0.88} zIndex={1} />
            </div>
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 0, zIndex: 3 }}>
              <IPhoneMockup screenshot="uploads/iPhone 16 Pro Max-01_Collections.png" rotate={0} scale={1} zIndex={3} />
            </div>
            <div style={{ position: 'absolute', right: '5%', bottom: 0 }}>
              <IPhoneMockup screenshot="uploads/iPhone 16 Pro Max-04_ItemDetail.png" rotate={6} scale={0.88} zIndex={1} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section style={{ background: 'white', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BRAND, marginBottom: 10 }}>Por que usar o MyCollections?</p>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', color: GRAY_900, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Feito para quem leva a coleção a sério
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── RECENT POSTS ── */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BRAND, marginBottom: 6 }}>Blog</p>
              <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 28, color: GRAY_900, letterSpacing: '-0.02em' }}>Artigos recentes</h2>
            </div>
            <button onClick={() => setPage('categories')} style={{
              background: 'none', border: `1.5px solid ${GRAY_200}`, borderRadius: 9,
              padding: '8px 18px', fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              fontWeight: 500, color: GRAY_500, cursor: 'pointer', transition: 'all 150ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = BRAND; e.currentTarget.style.color = BRAND; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = GRAY_200; e.currentTarget.style.color = GRAY_500; }}
            >Ver todos</button>
          </div>

          {/* Featured post */}
          <div onClick={() => setPage('post')} style={{
            background: 'white', borderRadius: 16, overflow: 'hidden', marginBottom: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)', cursor: 'pointer',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            transition: 'box-shadow 200ms, transform 200ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.11)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #BCD9F4 100%)`, minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <i className="ph-vinyl-record-fill" style={{ fontSize: 100, color: BRAND, opacity: 0.25 }}></i>
              <span style={{ position: 'absolute', top: 20, left: 20, background: '#7C3AED', color: 'white', fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 9999, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Destaque</span>
            </div>
            <div style={{ padding: '36px 36px' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Dicas de Colecionador</span>
              <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 26, color: GRAY_900, lineHeight: 1.25, margin: '10px 0 14px', letterSpacing: '-0.02em' }}>
                5 dicas para organizar sua coleção de vinils
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY_500, lineHeight: 1.7, marginBottom: 28 }}>
                Catalogar por gênero, época ou raridade? Descubra o método que vai transformar sua estante — e como o app te ajuda a manter tudo em ordem.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: BRAND_LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="ph-user-fill" style={{ fontSize: 16, color: BRAND }}></i>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: GRAY_900, lineHeight: 1.2 }}>Equipe MC</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY_500 }}>28 abr 2026 · 5 min de leitura</p>
                </div>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {SAMPLE_POSTS.slice(1, 4).map(p => <PostCard key={p.title} post={p} setPage={setPage} />)}
          </div>
        </div>
      </section>

      {/* ── APP CTA BANNER ── */}
      <section style={{ padding: '0 24px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{
            background: `linear-gradient(135deg, #004770 0%, ${BRAND} 70%)`,
            borderRadius: 20, padding: '52px 56px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', right: -40, top: -60, width: 300, height: 300, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', right: 120, bottom: -80, width: 220, height: 220, background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }}></div>
            <div>
              <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 32, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
                Pronto para organizar<br />sua coleção?
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
                Gratuito, sem limites de coleção. Disponível agora para iOS e Android.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <DownloadBtn store="apple" dark={true} />
              <DownloadBtn store="google" dark={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ background: 'white', padding: '64px 24px' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <i className="ph-envelope-simple-fill" style={{ fontSize: 40, color: BRAND, marginBottom: 16 }}></i>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 26, color: GRAY_900, marginBottom: 10 }}>
            Dicas direto na sua caixa de entrada
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY_500, lineHeight: 1.65, marginBottom: 28 }}>
            Novidades do app, artigos sobre colecionismo e dicas exclusivas — sem spam.
          </p>
          {submitted ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: SUCCESS }}>
              <i className="ph-check-circle-fill" style={{ fontSize: 22 }}></i>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>Inscrição confirmada!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10 }}>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="seu@email.com" required
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: 10, border: `1.5px solid ${GRAY_200}`,
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15, outline: 'none',
                  transition: 'border-color 150ms',
                }}
                onFocus={e => e.target.style.borderColor = BRAND}
                onBlur={e => e.target.style.borderColor = GRAY_200}
              />
              <button type="submit" style={{
                background: BRAND, border: 'none', color: 'white', padding: '12px 22px',
                borderRadius: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}>Inscrever-se</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

const DownloadBtn = ({ store, dark }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 10,
    background: dark ? 'rgba(255,255,255,0.15)' : BRAND,
    border: dark ? '1px solid rgba(255,255,255,0.25)' : 'none',
    borderRadius: 10, padding: '10px 18px', cursor: 'pointer',
    transition: 'background 150ms',
  }}
    onMouseEnter={e => e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.22)' : BRAND_DARK}
    onMouseLeave={e => e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.15)' : BRAND}
  >
    <i className={store === 'apple' ? 'ph-apple-logo-fill' : 'ph-google-play-logo-fill'} style={{ fontSize: 22, color: 'white' }}></i>
    <div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.7)', lineHeight: 1 }}>
        {store === 'apple' ? 'Disponível na' : 'Disponível no'}
      </p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
        {store === 'apple' ? 'App Store' : 'Google Play'}
      </p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc, color, bg }) => (
  <div style={{ background: 'white', borderRadius: 14, padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: `1px solid ${GRAY_100}` }}>
    <div style={{ width: 48, height: 48, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
      <i className={icon} style={{ fontSize: 24, color }}></i>
    </div>
    <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16, color: GRAY_900, marginBottom: 8 }}>{title}</h3>
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY_500, lineHeight: 1.6 }}>{desc}</p>
  </div>
);

const FEATURES = [
  { icon: 'ph-squares-four-fill', color: BRAND, bg: BRAND_LIGHT, title: 'Multi-coleção', desc: 'Vinils, livros, games, relógios — organize quantas coleções quiser em um só lugar.' },
  { icon: 'ph-camera-fill', color: '#7C3AED', bg: '#F5F0FF', title: 'Fotos e detalhes', desc: 'Registre fotos, raridade, condição e caixa original de cada item da sua coleção.' },
  { icon: 'ph-device-mobile-fill', color: SUCCESS, bg: '#F0FDF4', title: 'Sempre com você', desc: 'Exiba sua coleção em restaurantes, leilões ou encontros — ela está sempre no seu bolso.' },
  { icon: 'ph-trend-up-fill', color: '#B45309', bg: '#FFF7ED', title: 'Acompanhe valores', desc: 'Compare o preço pago com o valor atual de mercado e saiba o que sua coleção vale hoje.' },
];

Object.assign(window, { HomePage });
