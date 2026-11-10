import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight,
  Clock3, Instagram, MapPin, Menu, MessageCircle, Scissors, Sparkles, Star,
  X, Heart, ShieldCheck, Flower2, CalendarDays
} from 'lucide-react'
import { business, defaultMessage, whatsappLink } from './config'

const services = [
  { name: 'Corte feminino', desc: 'Um corte pensado para valorizar seu estilo, movimento e personalidade.', image: 'photo-1560862504-7f6f7a4c1f3b' },
  { name: 'Escova e finalização', desc: 'Acabamento impecável, brilho e movimento para qualquer ocasião.', image: 'photo-1522337360788-8b13dee7a37e' },
  { name: 'Coloração', desc: 'Cor e luminosidade com uma proposta alinhada ao seu desejo.', image: 'photo-1524250502761-1ac6f2e30d43' },
  { name: 'Mechas e iluminação', desc: 'Dimensão e pontos de luz para um visual cheio de personalidade.', image: 'photo-1519699047748-de8e457a634e' },
  { name: 'Hidratação capilar', desc: 'Um cuidado dedicado à maciez, ao brilho e à vitalidade dos fios.', image: 'photo-1605497788044-5a32c7078486' },
  { name: 'Nutrição e reconstrução', desc: 'Tratamentos para cuidar da fibra capilar conforme a necessidade dos fios.', image: 'photo-1527799820374-dcf8d9d4a388' },
  { name: 'Progressiva e alinhamento', desc: 'Mais praticidade na rotina, com avaliação prévia dos cabelos.', image: 'photo-1595476108010-b4d1f102b1b1' },
  { name: 'Penteados para eventos', desc: 'Produções especiais para celebrar momentos inesquecíveis.', image: 'photo-1485230895905-ec40ba36b9bc' },
]
const gallery = [
  { title: 'Beleza em cada detalhe', category: 'Inspiração', image: 'photo-1522337360788-8b13dee7a37e' },
  { title: 'Luzes e dimensão', category: 'Coloração', image: 'photo-1519699047748-de8e457a634e' },
  { title: 'Cuidado que transforma', category: 'Tratamento', image: 'photo-1605497788044-5a32c7078486' },
  { title: 'Seu estilo, sua essência', category: 'Finalização', image: 'photo-1524250502761-1ac6f2e30d43' },
  { title: 'Um espaço para você', category: 'Ambiente', image: 'photo-160094 customer' },
  { title: 'Elegância natural', category: 'Inspiração', image: 'photo-1485230895905-ec40ba36b9bc' },
]
const photo = (id: string, w = 900) => id === 'photo-160094 customer'
  ? 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=' + w + '&q=85'
  : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

const features = [
  { icon: Heart, title: 'Atendimento personalizado', text: 'Cada pessoa é única. A conversa e a escuta fazem parte do cuidado.' },
  { icon: Scissors, title: 'Cuidado em cada etapa', text: 'Atenção aos detalhes para que você se sinta bem durante toda a experiência.' },
  { icon: ShieldCheck, title: 'Escolhas conscientes', text: 'Orientações e opções conversadas de acordo com as necessidades dos seus fios.' },
  { icon: Flower2, title: 'Ambiente acolhedor', text: 'Um espaço pensado para desacelerar, cuidar de si e renovar a autoestima.' },
]
const nav = [['Início', 'inicio'], ['Sobre nós', 'sobre'], ['Serviços', 'servicos'], ['Galeria', 'galeria'], ['Depoimentos', 'depoimentos'], ['Contato', 'contato']]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [testimonial, setTestimonial] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '', message: '' })
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const go = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const sendAppointment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.service || !form.date || !form.time) {
      setError('Preencha seu nome, WhatsApp, serviço, data e horário preferidos.')
      setNotice('')
      return
    }
    const msg = `Olá! Gostaria de solicitar um agendamento no ${business.name}.%0A%0ANome: ${form.name}%0AWhatsApp: ${form.phone}%0AServiço: ${form.service}%0AData preferida: ${form.date}%0AHorário preferido: ${form.time}%0AMensagem: ${form.message || 'Não informada'}`
    setError('')
    setNotice('Vamos abrir o WhatsApp para você enviar sua solicitação. O horário só será confirmado após o retorno do salão.')
    window.open(whatsappLink(decodeURIComponent(msg)), '_blank', 'noopener,noreferrer')
  }
  const reviews = [
    { quote: 'Este espaço está reservado para uma avaliação real de cliente. Substitua este texto após receber autorização para publicar o depoimento.', author: 'Depoimento demonstrativo', note: 'Conteúdo ilustrativo — substituir' },
    { quote: 'Adicione aqui a experiência de uma cliente, mantendo as palavras originais e a autorização de publicação.', author: 'Nome da cliente (com autorização)', note: 'Conteúdo ilustrativo — substituir' },
    { quote: 'Use este espaço para destacar uma avaliação verdadeira sobre o atendimento e os serviços do estúdio.', author: 'Depoimento de cliente', note: 'Conteúdo ilustrativo — substituir' },
  ]
  return <div className="min-h-screen bg-ivory text-chocolate">
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <button className="wordmark" onClick={() => go('inicio')} aria-label="Ir para o início">
          <span className="wordmark-main">LU MARQUES</span><span className="wordmark-sub">S T U D I O</span>
        </button>
        <nav className="desktop-nav" aria-label="Navegação principal">{nav.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</nav>
        <a className="button button-dark header-cta" href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">Agendar horário <ArrowUpRight size={15}/></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <nav className="mobile-nav">{nav.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}<a className="button button-dark" href={whatsappLink(defaultMessage)}>Agendar horário <ArrowUpRight size={15}/></a></nav>}
    </header>

    <main>
      <section id="inicio" className="hero">
        <div className="hero-photo" role="img" aria-label="Inspiração de beleza e cabelos em um ambiente sofisticado" />
        <div className="hero-shade"/>
        <div className="hero-content">
          <p className="eyebrow light"><span/> CABO FRIO · RIO DE JANEIRO</p>
          <h1>Realce sua beleza.<br/><em>Revele sua essência.</em></h1>
          <p className="hero-copy">Cuidados especiais, técnicas profissionais e experiências pensadas para valorizar a beleza única dos seus cabelos.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={16}/></a>
            <button className="text-link light-link" onClick={() => go('servicos')}>Conhecer nossos serviços <ArrowDown size={15}/></button>
          </div>
        </div>
        <div className="hero-side-note">BELEZA QUE COMEÇA EM VOCÊ</div>
        <div className="hero-bottom"><span>01 — 06</span><span className="hero-line"/><span>LU MARQUES STUDIO</span></div>
      </section>

      <section id="sobre" className="section about-section">
        <div className="about-image-wrap"><img src={photo('photo-1600948836101-f9ffda59d250', 1000)} alt="Ambiente de salão de beleza elegante" loading="lazy"/><div className="image-caption"><Sparkles size={17}/><span>Um momento dedicado a você</span></div></div>
        <div className="about-copy">
          <p className="eyebrow">NOSSA ESSÊNCIA</p>
          <h2>Beleza, cuidado e autoestima <em>em cada detalhe.</em></h2>
          <p className="lead">Mais do que cuidar dos cabelos, queremos que cada visita seja um momento seu.</p>
          <p>O LU MARQUES STUDIO nasce da paixão pela beleza e pelo cuidado individual. Aqui, cada escolha começa com uma boa conversa: entendemos o que você deseja e buscamos caminhos para valorizar sua beleza natural.</p>
          <p>Este espaço é dedicado a criar uma experiência acolhedora, com atenção aos detalhes e respeito à individualidade de cada cliente.</p>
          <div className="signature"><span>Lucineia Marques</span><small>À frente do LU MARQUES STUDIO</small></div>
          <button className="text-link" onClick={() => go('contato')}>Venha nos conhecer <ArrowRight size={16}/></button>
        </div>
      </section>

      <section id="servicos" className="section services-section">
        <div className="section-heading centered"><p className="eyebrow">CUIDADO FEITO PARA VOCÊ</p><h2>Nossos <em>serviços</em></h2><p>Um olhar atento para suas escolhas, seus fios e o resultado que você deseja.</p></div>
        <div className="services-grid">{services.map((s, i) => <article className="service-card" key={s.name}>
          <div className="service-image"><img src={photo(s.image, 700)} alt={`Imagem ilustrativa de ${s.name.toLowerCase()}`} loading="lazy"/><span className="service-number">0{i + 1}</span></div>
          <div className="service-info"><div><h3>{s.name}</h3><p>{s.desc}</p></div><div className="service-bottom"><span>Consulte valores</span><a href={whatsappLink(`Olá! Gostaria de saber mais sobre ${s.name.toLowerCase()} e consultar valores.`)} target="_blank" rel="noreferrer" aria-label={`Agendar ${s.name}`}>Agendar agora <ArrowUpRight size={14}/></a></div></div>
        </article>)}</div>
      </section>

      <section className="why-section">
        <div className="why-intro"><p className="eyebrow light">A EXPERIÊNCIA LU MARQUES</p><h2>Por que escolher <em>nosso salão?</em></h2><p>Seu tempo é precioso. Queremos que cada detalhe da sua visita faça sentido para você.</p><a className="text-link light-link" href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">Converse com a gente <ArrowUpRight size={15}/></a></div>
        <div className="features-grid">{features.map(({icon: Icon, title, text}, i) => <div className="feature" key={title}><span className="feature-icon"><Icon size={21}/></span><span className="feature-index">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section id="galeria" className="section gallery-section">
        <div className="section-heading gallery-heading"><div><p className="eyebrow">INSPIRAÇÃO E POSSIBILIDADES</p><h2>Transformações <em>que inspiram.</em></h2></div><p>Uma seleção de imagens ilustrativas para apresentar estilos, possibilidades e o universo da beleza. Não representam necessariamente trabalhos realizados pelo estúdio.</p></div>
        <div className="gallery-grid">{gallery.map((g, i) => <button className={`gallery-item gallery-${i + 1}`} key={g.title} onClick={() => setActiveImage(i)} aria-label={`Ampliar imagem: ${g.title}`}><img src={photo(g.image, 1000)} alt={`${g.title} — imagem ilustrativa`} loading="lazy"/><span className="gallery-overlay"><small>{g.category}</small><strong>{g.title}</strong><span className="gallery-plus">+</span></span></button>)}</div>
        <p className="image-disclaimer">Imagens demonstrativas. Substitua por fotografias próprias do LU MARQUES STUDIO antes da publicação.</p>
      </section>

      <section id="depoimentos" className="testimonials-section">
        <div className="testimonial-mark">“</div><p className="eyebrow">PALAVRAS QUE ACOLHEM</p><h2>O que nossas clientes <em>dizem.</em></h2>
        <div className="review-card" aria-live="polite"><div className="stars"><Star/><Star/><Star/><Star/><Star/></div><blockquote>{reviews[testimonial].quote}</blockquote><strong>{reviews[testimonial].author}</strong><small>{reviews[testimonial].note}</small></div>
        <div className="review-controls"><button onClick={() => setTestimonial((testimonial + reviews.length - 1) % reviews.length)} aria-label="Depoimento anterior"><ChevronLeft/></button><span>0{testimonial + 1} <i/> 0{reviews.length}</span><button onClick={() => setTestimonial((testimonial + 1) % reviews.length)} aria-label="Próximo depoimento"><ChevronRight/></button></div>
      </section>

      <section id="agendamento" className="appointment-section">
        <div className="appointment-copy"><p className="eyebrow light">RESERVE UM TEMPO PARA VOCÊ</p><h2>Seu momento de beleza <em>começa aqui.</em></h2><p>Conte um pouquinho sobre o que você procura. Vamos continuar a conversa pelo WhatsApp para consultar a disponibilidade.</p><div className="appointment-note"><CalendarDays/><span>O envio da solicitação não confirma automaticamente o horário. A confirmação será feita diretamente pelo salão.</span></div></div>
        <form className="appointment-form" onSubmit={sendAppointment} noValidate>
          <div className="form-title"><span>01 / 02</span><h3>Solicite seu horário</h3></div>
          <div className="form-grid">
            <label>Nome completo *<input value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Como podemos chamar você?" autoComplete="name"/></label>
            <label>Número de WhatsApp *<input value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} placeholder="(22) 99999-9999" type="tel" autoComplete="tel"/></label>
            <label className="full">Serviço desejado *<select value={form.service} onChange={e => setForm({...form, service:e.target.value})}><option value="">Selecione um serviço</option>{services.map(s => <option key={s.name}>{s.name}</option>)}<option>Gostaria de uma orientação</option></select></label>
            <label>Data preferida *<input type="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={e => setForm({...form, date:e.target.value})}/></label>
            <label>Horário preferido *<select value={form.time} onChange={e => setForm({...form, time:e.target.value})}><option value="">Selecione</option>{['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'].map(t => <option key={t}>{t}</option>)}</select></label>
            <label className="full">Mensagem adicional<textarea rows={3} value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Conte se há algum detalhe que devemos saber..."/></label>
          </div>
          {error && <p className="form-feedback error" role="alert">{error}</p>}
          {notice && <p className="form-feedback success" role="status"><Check size={16}/>{notice}</p>}
          <button className="button button-gold submit-button" type="submit">Solicitar agendamento <ArrowUpRight size={16}/></button>
          <small className="form-privacy">Seus dados serão usados apenas para responder à sua solicitação.</small>
        </form>
      </section>

      <section id="contato" className="section contact-section">
        <div className="contact-heading"><p className="eyebrow">VAMOS CONVERSAR?</p><h2>Estamos esperando <em>por você!</em></h2><p>Será um prazer receber sua mensagem e ajudar a planejar seu próximo momento de cuidado.</p></div>
        <div className="contact-details">
          <a className="contact-item" href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>FALE COM A GENTE</small><strong>WhatsApp</strong><p>+55 (22) 99763-1222</p></div><ArrowUpRight/></a>
          <a className="contact-item" href={business.instagram} target="_blank" rel="noreferrer"><span><Instagram/></span><div><small>ACOMPANHE</small><strong>Instagram</strong><p>@luneiamarques</p></div><ArrowUpRight/></a>
          <div className="contact-item"><span><MapPin/></span><div><small>ONDE ESTAMOS</small><strong>Nosso endereço</strong><p>{business.address}</p></div></div>
          <div className="contact-item"><span><Clock3/></span><div><small>HORÁRIO DE ATENDIMENTO</small><strong>Funcionamento</strong><p>{business.hours}</p></div></div>
        </div>
        <div className="map-wrap"><iframe title="Mapa da região do LU MARQUES STUDIO" src="https://www.google.com/maps?q=R.%20Alemanha%20-%20Jardim%20Cai%C3%A7ara%2C%20Cabo%20Frio%20-%20RJ%2C%2028910-370&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-top"><div className="footer-brand"><button className="wordmark wordmark-footer" onClick={() => go('inicio')}><span className="wordmark-main">LU MARQUES</span><span className="wordmark-sub">S T U D I O</span></button><p>Beleza, cuidado e autoestima em cada detalhe. Um espaço para valorizar o que faz você ser única.</p><a href={business.instagram} target="_blank" rel="noreferrer" className="footer-social"><Instagram size={17}/> Instagram <ArrowUpRight size={14}/></a></div>
        <div className="footer-links"><h4>Explore</h4>{nav.map(([label,id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div>
        <div className="footer-links"><h4>Serviços</h4>{services.slice(0,5).map(s => <button key={s.name} onClick={() => go('servicos')}>{s.name}</button>)}</div>
        <div className="footer-contact"><h4>Vamos conversar?</h4><p>{business.address}</p><p>+55 (22) 99763-1222</p><a className="button button-gold" href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer">Fale pelo WhatsApp <ArrowUpRight size={15}/></a></div>
      </div><div className="footer-bottom"><span>© {new Date().getFullYear()} LU MARQUES STUDIO. Todos os direitos reservados.</span><span>Feito com cuidado em Cabo Frio, RJ.</span></div>
    </footer>

    <a className="floating-whatsapp" href={whatsappLink(defaultMessage)} target="_blank" rel="noreferrer" aria-label="Fale com o salão pelo WhatsApp"><MessageCircle size={22}/><span>Agende pelo WhatsApp</span></a>

    {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={() => setActiveImage(null)}><button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Fechar"><X/></button><button className="lightbox-prev" aria-label="Imagem anterior" onClick={e => {e.stopPropagation();setActiveImage((activeImage + gallery.length - 1) % gallery.length)}}><ChevronLeft/></button><img src={photo(gallery[activeImage].image, 1600)} alt={gallery[activeImage].title} onClick={e => e.stopPropagation()}/><button className="lightbox-next" aria-label="Próxima imagem" onClick={e => {e.stopPropagation();setActiveImage((activeImage + 1) % gallery.length)}}><ChevronRight/></button><p>{gallery[activeImage].title} <span>· {gallery[activeImage].category}</span></p></div>}
  </div>
}
export default App