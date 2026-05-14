// blog-components.jsx — Shared nav, footer, UI primitives

const BRAND = '#0088CC';
const BRAND_DARK = '#0073AD';
const BRAND_LIGHT = '#E3F0FA';
const GRAY_50 = '#F2F4F7';
const GRAY_100 = '#E8ECF0';
const GRAY_200 = '#D1D8E0';
const GRAY_500 = '#6B7280';
const GRAY_900 = '#1A1A2E';
const SUCCESS = '#22C55E';

const NAV_LINKS = [
  { id: 'home', label: 'Blog' },
  { id: 'categories', label: 'Categorias' },
  { id: 'app', label: 'O App' },
];

const Header = ({ page, setPage }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'white',
      borderBottom: scrolled ? `1px solid ${GRAY_100}` : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
      transition: 'box-shadow 200ms, border-color 200ms',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 64, gap: 32 }}>
        {/* Logo */}
        <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, padding: 0 }}>
          <img src="assets/appIcon1024x1024.png" alt="MyCollections" style={{ width: 36, height: 36, borderRadius: 9 }} />
          <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 20, color: GRAY_900, letterSpacing: '-0.02em' }}>
            My<span style={{ color: BRAND }}>Collections</span>
          </span>
        </button>

        {/* Nav - desktop */}
        <nav style={{ display: 'flex', gap: 4, marginLeft: 'auto', alignItems: 'center' }}>
          {NAV_LINKS.map(link => (
            <button key={link.id} onClick={() => setPage(link.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 14px', borderRadius: 8,
              fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500,
              color: page === link.id ? BRAND : GRAY_500,
              transition: 'color 150ms, background 150ms',
            }}
              onMouseEnter={e => { if (page !== link.id) e.currentTarget.style.color = GRAY_900; e.currentTarget.style.background = GRAY_50; }}
              onMouseLeave={e => { e.currentTarget.style.color = page === link.id ? BRAND : GRAY_500; e.currentTarget.style.background = 'none'; }}
            >{link.label}</button>
          ))}
          <button onClick={() => setPage('app')} style={{
            background: BRAND, border: 'none', cursor: 'pointer',
            padding: '9px 18px', borderRadius: 10,
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
            color: 'white', marginLeft: 8,
            transition: 'background 150ms',
          }}
            onMouseEnter={e => e.currentTarget.style.background = BRAND_DARK}
            onMouseLeave={e => e.currentTarget.style.background = BRAND}
          >Baixar grátis</button>
        </nav>
      </div>
    </header>
  );
};

const Footer = ({ setPage }) => (
  <footer style={{ background: GRAY_900, color: 'white', padding: '56px 24px 32px' }}>
    <div style={{ maxWidth: 1140, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <img src="assets/appIcon1024x1024.png" alt="" style={{ width: 40, height: 40, borderRadius: 10 }} />
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em' }}>
              My<span style={{ color: BRAND }}>Collections</span>
            </span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 260 }}>
            Organize suas coleções com carinho. Disponível para iOS e Android.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            <StoreBtn store="apple" />
            <StoreBtn store="google" />
          </div>
        </div>
        <FooterCol title="Blog" links={['Dicas de Colecionador', 'Novidades do App', 'Tutoriais', 'Itens Peculiares']} />
        <FooterCol title="Coleções" links={['Vinils', 'Quadrinhos', 'Relógios', 'Câmeras Vintage', 'Memorabilia Esportiva']} />
        <FooterCol title="Sobre" links={['O App', 'Política de Privacidade', 'Termos de Uso', 'Contato']} />
      </div>
      <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>© 2026 MyCollections. Feito com carinho para colecionadores.</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>🇧🇷 Português (BR)</p>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }) => (
  <div>
    <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14, color: 'white', marginBottom: 14 }}>{title}</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {links.map(l => (
        <a key={l} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = 'white'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >{l}</a>
      ))}
    </div>
  </div>
);

const StoreBtn = ({ store }) => (
  <div style={{
    background: 'rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 14px',
    display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.15)',
    transition: 'background 150ms',
  }}
    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
  >
    <i className={store === 'apple' ? 'ph-apple-logo-fill' : 'ph-google-play-logo-fill'} style={{ fontSize: 20, color: 'white' }}></i>
    <div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.6)', lineHeight: 1 }}>
        {store === 'apple' ? 'Download na' : 'Disponível no'}
      </p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: 'white', lineHeight: 1.3 }}>
        {store === 'apple' ? 'App Store' : 'Google Play'}
      </p>
    </div>
  </div>
);

const CategoryPill = ({ label, active, onClick, color }) => (
  <button onClick={onClick} style={{
    background: active ? BRAND : 'white',
    color: active ? 'white' : GRAY_500,
    border: `1px solid ${active ? BRAND : GRAY_200}`,
    borderRadius: 9999, padding: '7px 16px',
    fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
    cursor: 'pointer', transition: 'all 150ms',
    whiteSpace: 'nowrap',
  }}
    onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = BRAND; e.currentTarget.style.color = BRAND; } }}
    onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = GRAY_200; e.currentTarget.style.color = GRAY_500; } }}
  >{label}</button>
);

const PostCard = ({ post, setPage, size = 'normal' }) => (
  <article onClick={() => setPage('post')} style={{
    background: 'white', borderRadius: 14,
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    overflow: 'hidden', cursor: 'pointer',
    transition: 'transform 200ms, box-shadow 200ms',
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.11)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)'; }}
  >
    <div style={{
      background: post.imgBg || BRAND_LIGHT,
      height: size === 'large' ? 220 : 180,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <i className={post.icon || 'ph-stack-fill'} style={{ fontSize: 56, color: post.iconColor || BRAND, opacity: 0.35 }}></i>
      <span style={{
        position: 'absolute', top: 12, left: 14,
        background: post.catColor || BRAND, color: 'white',
        fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
        padding: '3px 10px', borderRadius: 9999, letterSpacing: '0.04em', textTransform: 'uppercase',
      }}>{post.category}</span>
    </div>
    <div style={{ padding: '18px 20px 20px' }}>
      <h3 style={{
        fontFamily: "'Nunito', sans-serif", fontWeight: 800,
        fontSize: size === 'large' ? 19 : 17,
        color: GRAY_900, lineHeight: 1.3, marginBottom: 8,
      }}>{post.title}</h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY_500, lineHeight: 1.6, marginBottom: 14 }}>
        {post.excerpt}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: BRAND_LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ph-user-fill" style={{ fontSize: 14, color: BRAND }}></i>
        </div>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY_500 }}>{post.author}</span>
        <span style={{ color: GRAY_200, fontSize: 12 }}>•</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY_500 }}>{post.date}</span>
      </div>
    </div>
  </article>
);

const SAMPLE_POSTS = [
  { title: '5 dicas para organizar sua coleção de vinils', excerpt: 'Catalogar por gênero, época ou raridade? Descubra o método que vai transformar sua estante.', category: 'Dicas', catColor: '#7C3AED', imgBg: '#F5F0FF', icon: 'ph-vinyl-record-fill', iconColor: '#7C3AED', author: 'Equipe MC', date: '28 abr 2026' },
  { title: 'Como rastrear o valor da sua coleção ao longo do tempo', excerpt: 'O MyCollections registra o preço pago e te ajuda a comparar com o valor atual de mercado.', category: 'Novidades', catColor: BRAND, imgBg: BRAND_LIGHT, icon: 'ph-trend-up-fill', iconColor: BRAND, author: 'Equipe MC', date: '24 abr 2026' },
  { title: 'Câmeras vintage: o que observar antes de comprar', excerpt: 'Raridade, condição, caixa original — saiba o que valoriza uma câmera analógica no mercado atual.', category: 'Câmeras', catColor: '#B45309', imgBg: '#FFF7ED', icon: 'ph-camera-fill', iconColor: '#B45309', author: 'Equipe MC', date: '20 abr 2026' },
  { title: 'Quadrinhos: como identificar uma primeira edição', excerpt: 'Aprenda a reconhecer detalhes de impressão, selos e marcas que fazem toda a diferença na raridade.', category: 'Quadrinhos', catColor: '#DC2626', imgBg: '#FEF2F2', icon: 'ph-book-open-fill', iconColor: '#DC2626', author: 'Equipe MC', date: '16 abr 2026' },
  { title: 'Relógios de coleção: guia para iniciantes', excerpt: 'Desde os primeiros passos até registrar peças raras no app — um guia completo para novos colecionadores.', category: 'Relógios', catColor: '#0D9488', imgBg: '#F0FDFA', icon: 'ph-watch-fill', iconColor: '#0D9488', author: 'Equipe MC', date: '12 abr 2026' },
  { title: 'Exiba sua coleção onde estiver com o MyCollections', excerpt: 'No restaurante, em leilões ou em encontros de colecionadores — seu acervo sempre na palma da mão.', category: 'Tutorial', catColor: SUCCESS, imgBg: '#F0FDF4', icon: 'ph-device-mobile-fill', iconColor: SUCCESS, author: 'Equipe MC', date: '8 abr 2026' },
];

const IPhoneMockup = ({ screenshot, rotate = 0, scale = 1, zIndex = 1, shadow = true }) => (
  <div style={{
    transform: `rotate(${rotate}deg) scale(${scale})`,
    zIndex, flexShrink: 0,
    filter: shadow ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.22))' : 'none',
    transition: 'transform 300ms',
  }}>
    <div style={{
      width: 200, height: 430,
      background: '#1A1A1A',
      borderRadius: 40,
      padding: '10px 8px',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
      position: 'relative',
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
        width: 80, height: 24, background: '#1A1A1A',
        borderRadius: '0 0 16px 16px', zIndex: 2,
      }}></div>
      {/* Screen */}
      <div style={{
        width: '100%', height: '100%',
        background: '#F2F4F7',
        borderRadius: 32, overflow: 'hidden',
        position: 'relative',
      }}>
        <img src={screenshot} alt="App screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </div>
      {/* Side buttons */}
      <div style={{ position: 'absolute', right: -3, top: 80, width: 3, height: 36, background: '#2A2A2A', borderRadius: '0 2px 2px 0' }}></div>
      <div style={{ position: 'absolute', left: -3, top: 70, width: 3, height: 28, background: '#2A2A2A', borderRadius: '2px 0 0 2px' }}></div>
      <div style={{ position: 'absolute', left: -3, top: 110, width: 3, height: 44, background: '#2A2A2A', borderRadius: '2px 0 0 2px' }}></div>
      <div style={{ position: 'absolute', left: -3, top: 166, width: 3, height: 44, background: '#2A2A2A', borderRadius: '2px 0 0 2px' }}></div>
    </div>
  </div>
);

Object.assign(window, {
  Header, Footer, FooterCol, StoreBtn,
  CategoryPill, PostCard, IPhoneMockup,
  SAMPLE_POSTS, BRAND, BRAND_DARK, BRAND_LIGHT,
  GRAY_50, GRAY_100, GRAY_200, GRAY_500, GRAY_900, SUCCESS,
});
