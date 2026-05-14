// blog-post.jsx — Post template page

const PostPage = ({ setPage }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const el = document.getElementById('post-scroll');
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      setProgress(scrollHeight > clientHeight ? (scrollTop / (scrollHeight - clientHeight)) * 100 : 100);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ background: GRAY_50 }}>
      {/* Reading progress bar */}
      <div style={{ position: 'fixed', top: 64, left: 0, right: 0, height: 3, background: GRAY_100, zIndex: 99 }}>
        <div style={{ height: '100%', width: `${progress}%`, background: BRAND, transition: 'width 100ms' }}></div>
      </div>

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '48px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48 }}>
        {/* Main article */}
        <article>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: BRAND, padding: 0 }}>Blog</button>
            <i className="ph-caret-right" style={{ color: GRAY_200, fontSize: 12 }}></i>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY_500 }}>Dicas de Colecionador</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <span style={{ display: 'inline-block', background: '#7C3AED', color: 'white', fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 9999, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>Dicas de Colecionador</span>
            <h1 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: GRAY_900, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>
              5 dicas para organizar<br />sua coleção de vinils
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: GRAY_500, lineHeight: 1.65, marginBottom: 24 }}>
              Catalogar por gênero, época ou raridade? Descubra o método que vai transformar sua estante.
            </p>
            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 24, borderBottom: `1px solid ${GRAY_100}` }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: BRAND_LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ph-user-fill" style={{ fontSize: 20, color: BRAND }}></i>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: GRAY_900 }}>Equipe MyCollections</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY_500 }}>28 abr 2026 · 5 min de leitura</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                {['ph-share-network-fill','ph-bookmark-simple-fill'].map(icon => (
                  <button key={icon} style={{ background: GRAY_50, border: `1px solid ${GRAY_100}`, borderRadius: 8, width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={icon} style={{ fontSize: 16, color: GRAY_500 }}></i>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured image placeholder */}
          <div style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #BCD9F4 100%)`, borderRadius: 14, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 36, position: 'relative', overflow: 'hidden' }}>
            <i className="ph-vinyl-record-fill" style={{ fontSize: 140, color: BRAND, opacity: 0.18 }}></i>
            <p style={{ position: 'absolute', fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: BRAND, fontWeight: 500, background: BRAND_LIGHT, padding: '6px 14px', borderRadius: 8, border: `1px solid #BCD9F4` }}>Imagem do post</p>
          </div>

          {/* Body content */}
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY_900, lineHeight: 1.75 }}>
            <p style={{ marginBottom: 20 }}>
              Quem coleciona vinil sabe que a organização vai muito além de empilhar discos numa estante. Cada LP tem sua história, sua raridade, seu valor sentimental e de mercado. Com uma coleção crescendo, manter tudo em ordem vira um desafio real.
            </p>
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: GRAY_900, margin: '36px 0 14px' }}>1. Comece pelo inventário completo</h2>
            <p style={{ marginBottom: 20 }}>
              Antes de organizar, você precisa saber exatamente o que tem. Use o MyCollections para cadastrar cada disco com foto, título, artista, ano e condição. Esse inventário digital será a base de tudo.
            </p>

            {/* App callout */}
            <div style={{ background: BRAND_LIGHT, border: `1px solid #BCD9F4`, borderRadius: 12, padding: '20px 24px', margin: '28px 0', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <img src="assets/appIcon1024x1024.png" alt="" style={{ width: 44, height: 44, borderRadius: 10, flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 15, color: GRAY_900, marginBottom: 4 }}>Dica MyCollections</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY_500, lineHeight: 1.6 }}>
                  Na tela de item, registre a data de aquisição, o valor pago e a raridade. Depois, compare com o valor de mercado atual e veja como sua coleção se valoriza ao longo do tempo.
                </p>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: GRAY_900, margin: '36px 0 14px' }}>2. Escolha um critério principal</h2>
            <p style={{ marginBottom: 20 }}>
              Gênero musical, artista, país de origem, décadas ou raridade — o critério ideal é aquele que faz sentido para você. O mais importante é manter a consistência.
            </p>

            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: GRAY_900, margin: '36px 0 14px' }}>3. Documente a condição de cada disco</h2>
            <p style={{ marginBottom: 20 }}>
              Capa, encarte, disco — cada parte tem seu estado de conservação. Registre no app se vem com a caixa original, se há riscos visíveis e qual a qualidade da gravação.
            </p>

            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: GRAY_900, margin: '36px 0 14px' }}>4. Tire fotos de qualidade</h2>
            <p style={{ marginBottom: 20 }}>
              Uma boa foto vale mais que mil palavras — especialmente na hora de exibir sua coleção para outros colecionadores. Com o app, você pode adicionar várias fotos por item.
            </p>

            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: GRAY_900, margin: '36px 0 14px' }}>5. Leve sua coleção com você</h2>
            <p style={{ marginBottom: 20 }}>
              Num encontro de colecionadores, num leilão ou num restaurante com amigos — ter sua coleção organizada no celular é um diferencial enorme. Com o MyCollections, você mostra qualquer item com detalhes completos na palma da mão.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 36, paddingTop: 24, borderTop: `1px solid ${GRAY_100}` }}>
              {['#vinil', '#colecionismo', '#organização', '#dicas', '#musicaanalogica'].map(tag => (
                <span key={tag} style={{ background: GRAY_50, border: `1px solid ${GRAY_100}`, borderRadius: 9999, padding: '5px 12px', fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY_500 }}>{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* App CTA card */}
          <div style={{ background: `linear-gradient(160deg, #004770, ${BRAND})`, borderRadius: 16, padding: '28px 24px', textAlign: 'center' }}>
            <img src="assets/appIcon1024x1024.png" alt="" style={{ width: 64, height: 64, borderRadius: 16, marginBottom: 16 }} />
            <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 18, color: 'white', marginBottom: 8 }}>Baixe o MyCollections</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 20 }}>Gratuito. Organize sua coleção de vinils e muito mais.</p>
            <button style={{ width: '100%', background: 'white', border: 'none', borderRadius: 10, padding: '12px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: BRAND }}>
              Baixar grátis
            </button>
          </div>

          {/* More posts */}
          <div style={{ background: 'white', borderRadius: 16, padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16, color: GRAY_900, marginBottom: 18 }}>Mais artigos</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {SAMPLE_POSTS.slice(1, 5).map(p => (
                <div key={p.title} onClick={() => setPage('post')} style={{ display: 'flex', gap: 12, cursor: 'pointer', padding: '4px 0' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 8, background: p.imgBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={p.icon} style={{ fontSize: 22, color: p.iconColor }}></i>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: GRAY_900, lineHeight: 1.35, marginBottom: 3 }}>{p.title}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY_500 }}>{p.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div style={{ background: 'white', borderRadius: 16, padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 16, color: GRAY_900, marginBottom: 14 }}>Categorias</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Vinils','Quadrinhos','Relógios','Câmeras','Games','Livros','Cartas','Memorabilia'].map(cat => (
                <span key={cat} style={{ background: GRAY_50, border: `1px solid ${GRAY_100}`, borderRadius: 9999, padding: '5px 12px', fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY_500, cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.background = BRAND_LIGHT; e.currentTarget.style.color = BRAND; e.currentTarget.style.borderColor = BRAND; }}
                  onMouseLeave={e => { e.currentTarget.style.background = GRAY_50; e.currentTarget.style.color = GRAY_500; e.currentTarget.style.borderColor = GRAY_100; }}
                >{cat}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

Object.assign(window, { PostPage });
