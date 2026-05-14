// blog-categories.jsx — Categories page

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'vinils', label: 'Vinils', icon: 'ph-vinyl-record-fill', color: '#7C3AED', bg: '#F5F0FF' },
  { id: 'games', label: 'Games', icon: 'ph-game-controller-fill', color: '#0D9488', bg: '#F0FDFA' },
  { id: 'livros', label: 'Livros', icon: 'ph-book-open-fill', color: '#DC2626', bg: '#FEF2F2' },
  { id: 'relogios', label: 'Relógios', icon: 'ph-watch-fill', color: '#B45309', bg: '#FFF7ED' },
  { id: 'cameras', label: 'Câmeras', icon: 'ph-camera-fill', color: '#6D28D9', bg: '#F5F3FF' },
  { id: 'quadrinhos', label: 'Quadrinhos', icon: 'ph-notebook-fill', color: '#DC2626', bg: '#FEF2F2' },
  { id: 'cartas', label: 'Cartas', icon: 'ph-cards-fill', color: '#0088CC', bg: '#E3F0FA' },
  { id: 'memorabilia', label: 'Memorabilia', icon: 'ph-trophy-fill', color: '#F59E0B', bg: '#FFFBEB' },
  { id: 'app', label: 'Novidades do App', icon: 'ph-device-mobile-fill', color: SUCCESS, bg: '#F0FDF4' },
  { id: 'dicas', label: 'Dicas', icon: 'ph-lightbulb-fill', color: BRAND, bg: BRAND_LIGHT },
];

const ALL_POSTS = [
  ...SAMPLE_POSTS,
  { title: 'Games retrô: como identificar cartuchos originais', excerpt: 'Dicas para não cair em falsificações e proteger sua coleção de jogos clássicos.', category: 'Games', catColor: '#0D9488', imgBg: '#F0FDFA', icon: 'ph-game-controller-fill', iconColor: '#0D9488', author: 'Equipe MC', date: '5 abr 2026' },
  { title: 'Cartas Magic: como organizar e valorizar suas raridades', excerpt: 'Do básico ao avançado — como o MyCollections te ajuda a montar um inventário sólido.', category: 'Cartas', catColor: BRAND, imgBg: BRAND_LIGHT, icon: 'ph-cards-fill', iconColor: BRAND, author: 'Equipe MC', date: '2 abr 2026' },
  { title: 'Leilões online: oportunidades e cuidados', excerpt: 'Plataformas de leilão estão crescendo no Brasil. Saiba como aproveitar sem se arrepender.', category: 'Novidades', catColor: '#F59E0B', imgBg: '#FFFBEB', icon: 'ph-gavel-fill', iconColor: '#F59E0B', author: 'Equipe MC', date: '29 mar 2026' },
];

const CategoriesPage = ({ setPage }) => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [search, setSearch] = React.useState('');

  const filtered = ALL_POSTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category.toLowerCase().includes(activeCategory);
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ background: GRAY_50 }}>
      {/* Header hero */}
      <div style={{ background: 'white', borderBottom: `1px solid ${GRAY_100}`, padding: '48px 24px 40px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BRAND, marginBottom: 10 }}>Blog</p>
          <h1 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: GRAY_900, letterSpacing: '-0.02em', marginBottom: 24 }}>
            Explore por categoria
          </h1>
          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 480 }}>
            <i className="ph-magnifying-glass-fill" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: GRAY_500, pointerEvents: 'none' }}></i>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Buscar artigos..."
              style={{
                width: '100%', padding: '12px 14px 12px 42px',
                border: `1.5px solid ${GRAY_200}`, borderRadius: 10,
                fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                background: GRAY_50, outline: 'none', boxSizing: 'border-box',
                transition: 'border-color 150ms',
              }}
              onFocus={e => e.target.style.borderColor = BRAND}
              onBlur={e => e.target.style.borderColor = GRAY_200}
            />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '36px 24px 80px' }}>
        {/* Category pills scroll */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {CATEGORIES.map(cat => (
            <CategoryPill key={cat.id} label={cat.label} active={activeCategory === cat.id} onClick={() => setActiveCategory(cat.id)} />
          ))}
        </div>

        {/* Category spotlights (only when "all") */}
        {activeCategory === 'all' && !search && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 48 }}>
            {CATEGORIES.slice(1, 5).map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{
                background: cat.bg, border: 'none', borderRadius: 14, padding: '24px 20px',
                textAlign: 'left', cursor: 'pointer', transition: 'transform 150ms, box-shadow 150ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <i className={cat.icon} style={{ fontSize: 32, color: cat.color, display: 'block', marginBottom: 12 }}></i>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 15, color: GRAY_900 }}>{cat.label}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY_500, marginTop: 4 }}>Ver artigos</p>
              </button>
            ))}
          </div>
        )}

        {/* Results header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 20, color: GRAY_900 }}>
            {search ? `Resultados para "${search}"` : activeCategory === 'all' ? 'Todos os artigos' : CATEGORIES.find(c => c.id === activeCategory)?.label}
          </h2>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: GRAY_500 }}>{filtered.length} artigos</span>
        </div>

        {/* Posts grid */}
        {filtered.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {filtered.map(p => <PostCard key={p.title} post={p} setPage={setPage} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <i className="ph-magnifying-glass-fill" style={{ fontSize: 48, color: GRAY_200, marginBottom: 16, display: 'block' }}></i>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 20, color: GRAY_500 }}>Nenhum artigo encontrado</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY_500, marginTop: 8 }}>Tente outra categoria ou palavra-chave.</p>
          </div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { CategoriesPage });
