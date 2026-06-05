// app.jsx — Volum Robôs de Vendas LP

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": true,
  "typography": "display",
  "showPricing": true,
  "heroStyle": "visual",
  "tone": "formal",
  "accent": ["#02FF94", "#001a0d", "rgba(2, 255, 148, 0.35)"]
}/*EDITMODE-END*/;

// Curated accent palettes — [accent, ink-on-accent, glow]
const ACCENT_PALETTES = [
  ["#02FF94", "#001a0d", "rgba(2, 255, 148, 0.35)"],     // volum green
  ["#7AC8FF", "#001827", "rgba(122, 200, 255, 0.35)"],   // ice cyan
  ["#FF5B7A", "#270010", "rgba(255, 91, 122, 0.35)"],    // hot pink
  ["#E8FF3A", "#1a1a00", "rgba(232, 255, 58, 0.4)"],     // volt yellow
];

// ─────────────────────────────────────────────────────────────
// Copy variants — formal vs descontraído
// ─────────────────────────────────────────────────────────────
const COPY = {
  formal: {
    nav: { robos: "Robôs", canvas: "Sales Canvas", planos: "Planos", integracoes: "Integrações" },
    cta: "Demonstração Grátis",
    eyebrow: "AUTOMAÇÃO COMERCIAL INTELIGENTE",
    h1: ["Robôs de Vendas que conversam por whatsapp, respondem emails e anotam tudo no CRM."],
    h1Accent: "Robôs de Vendas",
    sub: "Uma equipe de multiagentes de IA capazes de executar o trabalho do seu time comercial. Substituem o vendedor pouco requisitado ou atuam como copiloto, agendando tarefas, enviando WhatsApp ou emails e atualizando tudo diretamente no seu CRM.",
    stats: [
      { n: "+300%", l: "Aumento nas reuniões" },
      { n: "+30%", l: "Aumento nas vendas" },
      { n: "+1.000", l: "Mensagens por dia" },
    ],
    problem: {
      kicker: "POR QUE AGORA",
      h2: "A era da produtividade por IA chegou.",
      body: "Cada hora que seu SDR gasta digitando follow-ups, agendando reuniões e atualizando CRM é receita evaporando. Os Robôs de Vendas Volum executam a parte chata do funil — com a metodologia comercial proprietária da Volum por baixo —, e devolvem o relacionamento humano para quem precisa: seu vendedor.",
    },
    benefits: [
      { n: "01", h: "Cadência completa, automática", p: "Até 54 tentativas de contato por WhatsApp, email e ligação, orquestradas sem intervenção." },
      { n: "02", h: "Conversa de verdade", p: "Apresenta-se, qualifica, tira dúvidas e agenda reuniões no calendar como um SDR humano." },
      { n: "03", h: "CRM sempre vivo", p: "Notifica gestor, anota respostas e cria tarefas — você só vê o que importa." },
      { n: "04", h: "Follow up obstinado", p: "Confirma reunião, envia proposta, retoma leads sumidos. Não esquece, não desiste." },
    ],
    robos: {
      kicker: "CONHEÇA OS MULTIAGENTES",
      h2: "Três robôs. Três níveis de autonomia.",
      lead: "Comece pelo Robô 1.0 substituindo a parte operacional do seu SDR, evolua para conversas autônomas com o 2.0 e formalize propostas + follow ups com o 3.0.",
    },
    canvas: {
      kicker: "SALES CANVAS VOLUM",
      h2: "O que o humano fazia. O que o robô faz agora.",
      lead: "Os robôs automatizam 100% da sua prospecção por whatsapp e email. Enviam propostas, confirmam reuniões, fazem follow up e até negociam. Seu vendedor apenas vai ligar e entrar nas reuniões marcadas.",
    },
    planos: {
      kicker: "PLANOS E VALORES",
      h2: "Escolha o nível de delegação.",
      lead: "",
    },
    integ: {
      kicker: "MAIS DE 25 CRMs INTEGRADOS",
      h2: "Conecta no que seu time já usa.",
      lead: "Os robôs falam com seu CRM, WhatsApp, email e calendar. E novos conectores chegam todo mês.",
    },
    faq: [
      { q: "Os Robôs vieram para substituir os vendedores humanos?", a: "Definitivamente não. A partir do Robô 2.0 já é possível substituir um SDR meio preguiçoso que não faz ligações 😅 — mas a proposta é manter o relacionamento humano vivo. O robô faz a parte chata, o humano faz o relacionamento." },
      { q: "Em quanto tempo o robô entra em produção?", a: "O setup leva, em média, 7 dias a partir da assinatura. Inclui mapeamento da cadência, integração com seu CRM/WhatsApp/email e treinamento do modelo nos seus scripts." },
      { q: "Funciona com meu CRM?", a: "Hoje conectamos nativamente com os CRMs mais populares do mercado B2B brasileiro, além de WhatsApp Business, Google Workspace e ferramentas de email. Todo mês lançamos novas integrações. Caso seu CRM não esteja na lista, podemos produzir sob demanda caso seu CRM tenha API aberta." },
      { q: "E quanto à segurança dos dados dos leads?", a: "Todas as conversas e dados são processados em ambientes em conformidade com a LGPD. Todas as conversas são armazenadas diretamente no seu CRM pelos nossos robôs. As informações estão sempre seguras e ao seu alcance." },
    ],
    ctaH2: "Veja seu funil rodando com IA.",
    ctaSub: "Agende uma demonstração gratuita de 30 minutos. Mostramos o robô conversando com leads reais e simulamos o impacto no seu pipeline.",
    ctaBtn: "Demonstração Grátis",
    ctaFoot: "30 MIN · SEM COMPROMISSO · COM ESPECIALISTA",
  },
  descontraido: {
    nav: { robos: "Robôs", canvas: "Sales Canvas", planos: "Planos", integracoes: "Integrações" },
    cta: "Demo grátis",
    eyebrow: "AUTOMAÇÃO COMERCIAL INTELIGENTE",
    h1: ["Robôs de Vendas que conversam por whatsapp, respondem emails e anotam tudo no CRM."],
    h1Accent: "Robôs de Vendas",
    sub: "Uma equipe de multiagentes de IA capazes de executar o trabalho do seu time comercial. Substituem o vendedor pouco requisitado ou atuam como copiloto, agendando tarefas, enviando WhatsApp ou emails e atualizando tudo diretamente no seu CRM.",
    stats: [
      { n: "+300%", l: "Aumento nas reuniões" },
      { n: "+30%", l: "Aumento nas vendas" },
      { n: "+1.000", l: "Mensagens por dia" },
    ],
    problem: {
      kicker: "POR QUE AGORA",
      h2: "A era da IA chegou. E ela odeia tarefa repetitiva.",
      body: "Toda hora que seu SDR perde digitando follow-up é dinheiro saindo. Os Robôs de Vendas Volum pegam a parte chata do funil pra si — com a metodologia da Volum por trás — e devolvem o tempo do vendedor pra ele fazer o que sabe: gente.",
    },
    benefits: [
      { n: "01", h: "Cadência inteira no piloto automático", p: "Até 54 toques por WhatsApp, e-mail e ligação. Sem você apertar nada." },
      { n: "02", h: "Conversa que parece humana", p: "Se apresenta, qualifica, tira dúvida e marca reunião. De boa." },
      { n: "03", h: "CRM atualizado sozinho", p: "Avisa quem respondeu, anota tudo, cria tarefa. Você só vê o que importa." },
      { n: "04", h: "Follow up que não desiste", p: "Confirma reunião, manda proposta, ressuscita lead sumido. Não esquece nada." },
    ],
    robos: {
      kicker: "CONHEÇA OS MULTIAGENTES",
      h2: "Três robôs. Três níveis de cara de pau.",
      lead: "Começa com o 1.0 fazendo o operacional do SDR, sobe pro 2.0 que conversa sozinho e fecha com o 3.0 que manda proposta e cobra resposta.",
    },
    canvas: {
      kicker: "SALES CANVAS VOLUM",
      h2: "O que humano fazia. O que o robô faz agora.",
      lead: "Cada etapa do funil tem dupla: humano + robô. Você decide quem faz o quê — e quando o vendedor entra na conversa.",
    },
    planos: {
      kicker: "PLANOS E VALORES",
      h2: "Escolhe quanto trampo delegar.",
      lead: "",
    },
    integ: {
      kicker: "MAIS DE 25 CRMs INTEGRADOS",
      h2: "Pluga no que seu time já usa.",
      lead: "Os robôs falam com CRM, WhatsApp, e-mail e calendar. E a gente solta conector novo todo mês.",
    },
    faq: [
      { q: "Os Robôs vão substituir meu vendedor?", a: "Nada disso. A partir do 2.0 ele já dá conta de um SDR meio preguiçoso 😅 — mas a ideia aqui é o robô fazer a parte chata e o humano fazer o relacionamento. Ninguém compra de robô achando que tá comprando de robô." },
      { q: "Em quanto tempo isso vai pro ar?", a: "Cerca de 14 dias úteis depois que você assina. A gente mapeia sua cadência, integra com seu CRM/WhatsApp/e-mail e treina o robô nos seus scripts." },
      { q: "Funciona com meu CRM?", a: "Hoje a gente conecta com os CRMs mais comuns do mercado B2B brasileiro, além de WhatsApp Business, Google Workspace e e-mail. Conector novo todo release." },
      { q: "E a segurança dos dados?", a: "Tudo dentro da LGPD. Conversa fica no seu CRM — o dado é seu." },
    ],
    ctaH2: "Bora ver o robô conversando?",
    ctaSub: "30 minutinhos com a gente. Mostramos o robô falando com lead de verdade e simulamos o impacto no seu pipeline.",
    ctaBtn: "Demo grátis",
    ctaFoot: "30 MIN · SEM COMPROMISSO · COM ESPECIALISTA",
  },
};

// ─────────────────────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────────────────────
function Nav({ copy, cta }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <img src="uploads/volum-logo.png" alt="VOLUM" className="nav-logo-img" />
      </a>
      <div className="nav-links">
        <a href="#robos" className="nav-link">{copy.nav.robos}</a>
        <a href="#canvas" className="nav-link">{copy.nav.canvas}</a>
        <a href="#planos" className="nav-link">{copy.nav.planos}</a>
        <a href="#integracoes" className="nav-link">{copy.nav.integracoes}</a>
      </div>
      <a href="#cta" className="btn btn-primary">
        {cta}
        <span className="btn-arrow">→</span>
      </a>
    </nav>
  );
}

function Hero({ copy, heroStyle, accent }) {
  return (
    <header className={"hero style-" + heroStyle} id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-headline">
            <span className="eyebrow"><span className="dot" />{copy.eyebrow}</span>
            <h1 className="h1">
              {(() => {
                const full = copy.h1.join(' ');
                const parts = full.split(new RegExp(`(${copy.h1Accent})`, 'i'));
                return parts.map((p, j) =>
                  p.toLowerCase() === copy.h1Accent.toLowerCase()
                    ? <span key={j} className="accent">{p}</span>
                    : p
                );
              })()}
            </h1>
            <p className="lead">{copy.sub}</p>
            <div className="hero-cta-row">
              <a href="#cta" className="btn btn-primary">{copy.cta}<span className="btn-arrow">→</span></a>
              <a href="#robos" className="btn btn-ghost">Conheça os robôs</a>
            </div>
            <div className="hero-meta">
              {copy.stats.map((s, i) => (
                <div className="stat" key={i}>
                  <div className="n">{s.n}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          {heroStyle === "visual" && <HeroVisual />}
        </div>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual hero-visual-mockup">
      <img
        src="uploads/mockup-whatsapp-sdr.png"
        alt="Robô 2.0 conversando no WhatsApp"
        className="mockup-img"
      />
      {/* hero-visual-foot removido */}
    </div>
  );
}

function Marquee() {
  const items = [
    "WHATSAPP", "EMAIL", "LIGAÇÃO", "CALENDAR", "CRM", "LINKS DE PAGAMENTO",
    "PROPOSTA EM PDF", "FOLLOW UP", "QUALIFICAÇÃO", "AGENDAMENTO", "ANOTAÇÕES NO CRM",
    "CADÊNCIA NO-SHOW",
  ];
  const row = (
    <div className="marquee-track">
      {items.concat(items).map((it, i) => (
        <span className="marquee-item" key={i}>
          <span className="sep" />
          {it}
        </span>
      ))}
    </div>
  );
  return <div className="marquee">{row}</div>;
}

function Problem({ copy }) {
  return (
    <section className="section">
      <div className="container">
        <div className="split">
          <div>
            <span className="eyebrow"><span className="dot" />{copy.problem.kicker}</span>
            <h2 className="h2 mt-16">{copy.problem.h2}</h2>
            <p className="lead mt-24">{copy.problem.body}</p>
          </div>
          <div className="benefits">
            {copy.benefits.map((b, i) => (
              <div className="benefit" key={i}>
                <div className="num">— {b.n}</div>
                <h4>{b.h}</h4>
                <p>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SalesCanvas({ copy }) {
  React.useEffect(() => {
    if (window.innerWidth >= 980) return;
    const el = document.querySelector('.canvas-board');
    if (!el) return;

    let stopped = false;
    let t1, t2;

    const stop = () => { stopped = true; clearTimeout(t1); clearTimeout(t2); };
    el.addEventListener('touchstart', stop, { passive: true });
    el.addEventListener('mousedown', stop);

    t1 = setTimeout(() => {
      if (stopped) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      el.scrollTo({ left: Math.round(maxScroll * 0.4), behavior: 'smooth' });
      t2 = setTimeout(() => {
        if (stopped) return;
        el.scrollTo({ left: 0, behavior: 'smooth' });
      }, 2200);
    }, 1200);

    return () => {
      clearTimeout(t1); clearTimeout(t2);
      el.removeEventListener('touchstart', stop);
      el.removeEventListener('mousedown', stop);
    };
  }, []);
  const stages = [
    {
      name: "LEAD",
      num: "01",
      actor: "SDR HUMANO",
      human: "Verifica dados do lead e envia a mensagem inicial de prospecção.",
      bot: "Robô 1.0 carrega o lead no CRM e dispara o primeiro contato.",
    },
    {
      name: "CADÊNCIA",
      num: "02",
      actor: "SDR HUMANO",
      human: "Realiza até 54 tentativas por WhatsApp, email e ligação.",
      bot: "Robô 1.0 envia toda a cadência e cria as tarefas no CRM.",
    },
    {
      name: "CONEXÃO",
      num: "03",
      actor: "SDR HUMANO",
      human: "Conversa, explica o produto, tira dúvidas e envia materiais.",
      bot: "Robô 2.0 conversa personalizadamente, manda links e fecha reunião.",
    },
    {
      name: "AGENDA",
      num: "04",
      actor: "SDR HUMANO",
      human: "Executa o script de qualificação e agenda a reunião.",
      bot: "Robô 2.0 qualifica e agenda no Google Calendar.",
    },
    {
      name: "REUNIÃO",
      num: "05",
      actor: "CLOSER HUMANO",
      human: "Apresenta a solução e conduz os follow ups.",
      bot: "Robô 3.0 envia proposta, confirma leitura e contorna objeções.",
    },
  ];
  return (
    <section className="section" id="canvas">
      <div className="container">
        <div className="sect-head">
          {/* eyebrow canvas removido */}
          <h2 className="h2">{copy.canvas.h2}</h2>
          <p className="lead">{copy.canvas.lead}</p>
        </div>
        <div className="canvas-board">
          <div className="canvas-track">
            {stages.map((s, i) => (
              <div className="canvas-stage" key={i}>
                <div className="stage-head">
                  <span className="stage-name">{s.name}</span>
                  <span className="stage-num">{s.num}</span>
                </div>
                <div className="stage-actor">{s.actor}</div>
                <div className="stage-body">{s.human}</div>
                <div className="stage-divider" />
                <div className="label-mono" style={{ marginBottom: 2 }}>ROBÔ DE VENDAS</div>
                <div className="stage-bot">{s.bot}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Robos({ copy }) {
  const robos = [
    {
      tag: "PLANO TAREFAS",
      ver: "1.0",
      role: "Assistente do SDR humano que faz seu SDR produzir 3× MAIS.",
      bullets: [
        "Executa a cadência completa do SDR",
        "Envio de WhatsApp e email automatizado",
        "Cria, conclui e orquestra tarefas no CRM",
        "Notifica gestor e SDR pelo WhatsApp",
        "Anota respostas dos leads no CRM",
      ],
      price: "R$ 997",
      featured: false,
    },
    {
      tag: "PLANO CONVERSAS",
      ver: "2.0",
      role: "SDR por IA que conversa e qualifica leads por WhatsApp.",
      bullets: [
        "Tudo do Robô 1.0, e ainda:",
        "Qualifica leads por WhatsApp e email",
        "Interage como um humano de verdade",
        "Avalia qualidade e perfil do lead",
        "Agenda reuniões no Google Calendar",
        "Faz cadência de no-show e confirma presença",
      ],
      price: "R$ 1.797",
      featured: true,
    },
    {
      tag: "PLANO FOLLOW UP",
      ver: "3.0",
      role: "Assistente do CLOSER que faz seu closer vender 20% MAIS.",
      bullets: [
        "Tudo do Robô 2.0, e ainda:",
        "Envia proposta em PDF por WhatsApp e email",
        "Confirma se a proposta foi lida",
        "Cria tarefas de follow up no CRM",
        "Faz cadência de leads sumidos",
        "Retoma contato com leads antigos",
      ],
      price: "R$ 2.297",
      featured: false,
    },
  ];
  return (
    <section className="section" id="robos">
      <div className="container">
        <div className="sect-head">
          <span className="eyebrow"><span className="dot" />{copy.robos.kicker}</span>
          <h2 className="h2">{copy.robos.h2}</h2>
          <p className="lead">{copy.robos.lead}</p>
        </div>
        <div className="robots-grid">
          {robos.map((r, i) => (
            <article key={i} className={"robot" + (r.featured ? " featured" : "")}>
              <div className="robot-tag">{r.tag}</div>
              <div className="robot-name">
                ROBÔ <span className="ver">{r.ver}</span>
              </div>
              <p className="robot-role">{r.role}</p>
              <ul className="robot-list">
                {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="robot-foot" data-pricing>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ copy, hidden }) {
  if (hidden) return null;
  const plans = [
    { name: "ROBÔ 1.0", price: "R$ 997", setup: "R$ 1.500" },
    { name: "ROBÔ 2.0", price: "R$ 1.797", setup: "R$ 1.500" },
    { name: "ROBÔ 3.0", price: "R$ 2.297", setup: "R$ 1.500" },
  ];
  return (
    <section className="section" id="planos">
      <div className="container">
        <div className="sect-head">
          <span className="eyebrow"><span className="dot" />{copy.planos.kicker}</span>
          <h2 className="h2">{copy.planos.h2}</h2>
          <p className="lead">{copy.planos.lead}</p>
        </div>
        <div className="planos-board">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--line)" }}>
                <th style={cellHead}>Plano</th>
                <th style={cellHead}></th>
              </tr>
            </thead>
            <tbody>
              {plans.map((p, i) => (
                <tr key={i} style={{ borderBottom: i < 2 ? "1px solid var(--line)" : "0" }}>
                  <td style={cell}><strong style={{ fontFamily: "var(--display)", fontSize: 18 }}>{p.name}</strong></td>
                  <td style={{ ...cell, textAlign: "right" }}>
                    <a href="#cta" className="btn btn-ghost" style={{ padding: "9px 14px", fontSize: 13 }}>Quero esse</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
const cellHead = { textAlign: "left", padding: "18px 24px", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", color: "var(--fg-3)", textTransform: "uppercase", fontWeight: 500 };
const cell = { padding: "20px 24px", color: "var(--fg)" };

function Integrations({ copy }) {
  const all = [
    { name: "WhatsApp",   logo: "uploads/whatsapp-logo.png" },
    { name: "Gmail",      logo: "uploads/gmail-logo.png" },
    { name: "Calendar",   logo: "uploads/calendar-logo.webp" },
    { name: "HubSpot",    logo: "uploads/hubspot-logo.png" },
    { name: "RD Station", logo: "uploads/rdstation-logo.jpeg" },
    { name: "Pipedrive",  logo: "uploads/pipedrive-logo.png" },
    { name: "Agendor",    logo: "uploads/agendor-logo.png" },
    { name: "Bitrix",     logo: "uploads/bitrix-logo.jpeg" },
    { name: "Leads2b",    logo: "uploads/leads2b-logo.webp" },
    { name: "Odoo",       logo: "uploads/odoo-logo.png" },
    { name: "Salesforce", logo: "uploads/salesforce-logo.png" },
    { name: "Teams",      logo: "uploads/teams-logo.png" },
  ];
  return (
    <section className="section" id="integracoes">
      <div className="container">
        <div className="sect-head">
          <span className="eyebrow"><span className="dot" />{copy.integ.kicker}</span>
          <h2 className="h2">{copy.integ.h2}</h2>
          <p className="lead">{copy.integ.lead}</p>
        </div>
        <div className="integrations">
          {all.map((n, i) => (
            <div className="intg-cell" key={i}>
              <img src={n.logo} alt={n.name} style={{ width: 36, height: 36, objectFit: "contain", borderRadius: 8, background: "#fff", padding: 4 }} />
              {n.name.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ copy }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="sect-head">
          {/* eyebrow FAQ removido */}
          <h2 className="h2">Dúvidas que sempre aparecem.</h2>
        </div>
        <div className="faq-wrap">
          {copy.faq.map((f, i) => (
            <div key={i} className={"faq-item" + (open === i ? " open" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}
                <span className="chev">+</span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ copy }) {
  React.useEffect(() => {
    if (document.querySelector('script[src*="cmpe6oagc0001js04dmhzpt42"]')) return;
    const s = document.createElement('script');
    s.src = 'https://www.gorilaforms.app/e/cmpe6oagc0001js04dmhzpt42.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section className="section" id="cta">
      <div className="container">
        <div className="cta">
          <span className="eyebrow"><span className="dot" />PRÓXIMO PASSO</span>
          <h2 className="h2 mt-24">{copy.ctaH2}</h2>
          <p className="lead" style={{ marginLeft: "auto", marginRight: "auto", marginTop: 16 }}>{copy.ctaSub}</p>
          <div className="gf-wrapper">
            <div id="gf-cmpe6oagc0001js04dmhzpt42" />
          </div>
          <div className="cta-foot" style={{ marginTop: 20 }}>{copy.ctaFoot}</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>© 2026 VOLUM · Aceleradora de vendas B2B</div>
        <img src="uploads/volum-logo.png" alt="VOLUM" style={{ height: 24, opacity: 0.6 }} />
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const copy = COPY[t.tone] || COPY.formal;

  // Wire accent CSS vars from palette
  React.useEffect(() => {
    const p = t.accent || ACCENT_PALETTES[0];
    document.documentElement.style.setProperty("--accent", p[0]);
    document.documentElement.style.setProperty("--accent-ink", p[1]);
    document.documentElement.style.setProperty("--accent-glow", p[2]);
  }, [t.accent]);

  const bodyClass = [
    t.dark ? "theme-dark" : "theme-light",
    t.typography === "sans" ? "type-sans" : "type-display",
  ].join(" ");

  React.useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);

  return (
    <div>
      <div className="atmosphere" aria-hidden="true" />
      <Nav copy={copy} cta={copy.cta} />
      <Hero copy={copy} heroStyle={t.heroStyle} accent={t.accent} />
      {/* <Marquee /> */}
      <SalesCanvas copy={copy} />
      <CTA copy={copy} />
      {/* <Problem copy={copy} /> */}
      <Robos copy={copy} />
      {/* <Pricing copy={copy} hidden={!t.showPricing} /> */}
      <Integrations copy={copy} />
      <FAQ copy={copy} />
      <Footer />

      {/* Hide pricing footer rows in robot cards when global pricing is hidden */}
      <style>{!t.showPricing ? `[data-pricing]{display:none !important;}` : ``}</style>

      <TweaksPanel>
        <TweakSection label="Tema" />
        <TweakToggle label="Modo escuro" value={t.dark} onChange={(v) => setTweak("dark", v)} />
        <TweakColor
          label="Cor de destaque"
          value={t.accent}
          options={ACCENT_PALETTES}
          onChange={(v) => setTweak("accent", v)}
        />

        <TweakSection label="Tipografia" />
        <TweakRadio
          label="Estilo"
          value={t.typography}
          options={[
            { value: "display", label: "Display" },
            { value: "sans", label: "Sans" },
          ]}
          onChange={(v) => setTweak("typography", v)}
        />

        <TweakSection label="Conteúdo" />
        <TweakRadio
          label="Hero"
          value={t.heroStyle}
          options={[
            { value: "visual", label: "Visual" },
            { value: "text", label: "Texto" },
          ]}
          onChange={(v) => setTweak("heroStyle", v)}
        />
        <TweakRadio
          label="Tom da copy"
          value={t.tone}
          options={[
            { value: "formal", label: "Formal" },
            { value: "descontraido", label: "Casual" },
          ]}
          onChange={(v) => setTweak("tone", v)}
        />
        <TweakToggle
          label="Mostrar preços"
          value={t.showPricing}
          onChange={(v) => setTweak("showPricing", v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
