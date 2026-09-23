const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const langToggle = document.querySelector('[data-lang-toggle]');
const root = document.documentElement;

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

/* =========================================================
   BILINGUAL SYSTEM
   ES/EN are exclusive states: the interface is fully replaced
   instead of showing both languages at the same time.
   ========================================================= */
const translations = {
  es: {
    langName: 'ES',
    title: 'NeuralSynthetix — Sistemas de IA para empresas.',
    description: 'NeuralSynthetix diseña sistemas de IA, automatización y optimización para empresas.',
    nav: ['Inicio', 'Servicios', 'Soluciones', 'Nosotros', 'Contacto'],
    headerCta: 'Empezar proyecto',
    hero: {
      eyebrow: 'SISTEMAS IA / AUTOMATIZACIÓN / DATOS',
      title: 'Transformamos operaciones<br /><span>mediante inteligencia artificial.</span>',
      lede: 'Innovamos procesos en crecimiento.',
      primary: 'Lleva tu empresa al siguiente nivel <span>↗</span>',
      trust: ['Automatización', 'Web', 'Integraciones'],
      coreStats: ['EFICIENCIA', 'AUTOMATIZACIÓN'],
      floatA: ['IA OPTIMIZADA', 'Precisión + consistencia'],
      floatB: ['FLUJO DE TRABAJO', 'Procesos conectados']
    },
    proof: {
      label: '',
      kicker: 'La oportunidad',
      title: 'Tu empresa ya tiene acceso a IA.<br /><span>La diferencia está en cómo la implementa.</span>',
      text: 'Pasamos de usar IA como un chatbot aislado a construir sistemas integrados con procesos, datos y objetivos de negocio.',
      cards: [
        ['Problema', 'Tareas manuales, procesos lentos y conocimiento disperso.'],
        ['Intervención', 'Diseñamos arquitectura, instrucciones, automatización y flujos medibles.'],
        ['Resultado', 'Más velocidad, consistencia y capacidad operativa.']
      ]
    },
    solutions: {
      label: '',
      title: 'IA aplicada a problemas<br /><span>reales de negocio.</span>',
      text: 'No vendemos “prompts”. Construimos sistemas que encajan en el flujo de trabajo de tu empresa.',
      explore: 'Explorar',
      cards: [
        ['Estrategia IA', 'Identificamos procesos de alto impacto y definimos una hoja de ruta clara para incorporar IA.'],
        ['Automatización', 'Conectamos IA con tareas, documentos y operaciones para reducir trabajo manual y cuellos de botella.'],
        ['Optimización IA', 'Optimizamos sistemas de IA para aumentar precisión, consistencia, control y calidad de salida.'],
        ['Sistemas de conocimiento', 'Convertimos la documentación y el conocimiento interno en sistemas inteligentes fáciles de consultar.'],
        ['Formación IA', 'Entrenamos a tus equipos para usar IA con metodología, seguridad y criterios repetibles.']
      ],
      lab: 'NEURAL SYNTHETIX / LAB',
      auditTitle: '¿No sabes por dónde empezar?',
      auditText: 'Solicita una consulta y recibe un mapa de oportunidades de automatización para tu empresa.',
      auditBtn: 'Solicitar Consultoría <span>↗</span>'
    },
    demo: {
      label: '',
      title: 'De instrucción<br /><span>a sistema.</span>',
      text: 'Una muestra interactiva del tipo de experiencia que podemos construir para un flujo empresarial.',
      top: 'NEURAL SYNTHETIX / FLUJO IA',
      live: 'DEMO EN VIVO',
      workflow: 'Flujo de trabajo',
      items: [['Entrada', 'Documento / dato'], ['Analizar', 'Extracción inteligente'], ['Decidir', 'Reglas + contexto'], ['Salida', 'Resultado accionable']],
      promptCaption: '/usuario',
      prompt: 'Analiza este documento, identifica riesgos, resume los puntos críticos y genera recomendaciones para el equipo.',
      engine: 'Motor Neural',
      processing: 'Analizando contexto y restricciones…',
      outputCaption: 'Neural Synthetix /Asistente',
      metrics: [['Nivel de riesgo', 'BAJO'], ['Puntos clave', '08'], ['Acciones', '04']],
      tags: ['✓ Datos estructurados', '✓ Recomendaciones', '✓ Priorización']
    },
    usecases: {
      label: '',
      title: 'Encuentra tu<br /><span>punto de entrada.</span>',
      tabs: [['Ventas', 'Calificación / seguimiento / inteligencia'], ['Operaciones', 'Automatización / procesos / documentación'], ['Soporte al cliente', 'Asistentes / routing / base de conocimiento'], ['Datos e inteligencia', 'Análisis / reporting / soporte a decisiones']],
      details: {
        ventas: ['VENTAS / SISTEMA IA', 'Convierte conversaciones en oportunidades accionables.', 'Diseñamos asistentes y flujos que ayudan a clasificar leads, resumir interacciones y acelerar el seguimiento comercial.', 'LEAD / #0421', 'CALIFICADO', [['Intención', 'Alta'], ['Prioridad', '8.7 / 10'], ['Próxima acción', 'Seguimiento']]],
        operaciones: ['OPERACIONES / AUTOMATIZACIÓN', 'Elimina tareas repetitivas del flujo operativo.', 'Automatizamos pasos manuales, extracción de datos, documentación y decisiones repetibles para liberar capacidad del equipo.', 'PROCESO / #0188', 'AUTOMATIZADO', [['Tareas', '14'], ['Esfuerzo manual', '-63%'], ['Próxima acción', 'Ejecutar']]],
        soporte: ['SOPORTE / IA DE CONOCIMIENTO', 'Responde más rápido sin perder contexto.', 'Creamos asistentes conectados a la base de conocimiento para resolver consultas y escalar los casos correctos al equipo.', 'TICKET / #1194', 'ENRUTADO', [['Intención', 'Facturación'], ['Confianza', '97%'], ['Próxima acción', 'Escalar']]],
        datos: ['DATOS / INTELIGENCIA', 'Convierte datos dispersos en decisiones claras.', 'Diseñamos sistemas que resumen, comparan y estructuran información para acelerar reporting y análisis ejecutivo.', 'REPORTE / #0602', 'LISTO', [['Fuentes', '12'], ['Señales', '31'], ['Próxima acción', 'Revisar']]]
      },
      detailCta: 'Diseñar este sistema <span>↗</span>'
    },
    process: {
      label: '',
      title: 'De la oportunidad<br /><span>a la implementación.</span>',
      steps: [['Analizamos', 'Entendemos procesos, fricciones, datos y objetivos del negocio.'], ['Diseñamos', 'Definimos la arquitectura de IA, flujos, integraciones y controles.'], ['Implementamos', 'Convertimos el diseño en un sistema usable y medible.'], ['Optimizamos', 'Medimos resultados y evolucionamos la solución con el negocio.']]
    },
    audit: {
      eyebrow: 'NEURAL SYNTHETIX / AI AUDIT',
      title: 'Descubre dónde la IA puede ahorrar tiempo y crear valor en tu empresa.',
      text: 'Una primera evaluación para identificar oportunidades de automatización, optimización y adopción de IA.',
      button: 'Solicitar una consulta <span>↗</span>'
    },
    team: {
      label: '',
      title: 'Personas detrás<br /><span>del sistema.</span>',
      text: 'Ingeniería, datos e inteligencia artificial trabajando como una sola disciplina.',
      roles: ['CEO', 'DATA & DESARROLLO WEB', 'DESARROLLO DE SOFTWARE E IA'],
      bios: ['Desarrollo de Inteligencia Artificial', 'Ingeniería de Datos y Desarrollo Web', 'Desarrollo de Software e Inteligencia Artificial']
    },
    contact: {
      label: '',
      title: '¿Qué parte de tu empresa<br /><span>debería trabajar con IA?</span>',
      text: 'Cuéntanos qué quieres automatizar, mejorar o construir. Te ayudamos a aterrizar la oportunidad en un sistema concreto.',
      name: 'Nombre completo', namePlaceholder: 'Tu nombre',
      email: 'Correo corporativo', emailPlaceholder: 'nombre@empresa.com',
      company: 'Empresa / organización', companyPlaceholder: 'Nombre de tu empresa',
      need: '¿Qué área quisieras innovar o automatizar?',
      options: ['Automatización', 'Ventas', 'Atención al cliente', 'Análisis de datos', 'Procesos internos', 'Implementación de IA', 'Otro'],
      message: 'Cuéntanos brevemente', messagePlaceholder: 'Ej.: queremos automatizar el análisis de documentos y reducir tareas manuales…',
      formFooter: 'Respuesta inicial orientada a tu caso.',
      submit: 'Enviar proyecto <span>↗</span>',
      formNote: 'Abriendo tu cliente de correo para enviar la solicitud…',
      whatsapp: 'Hablar con un especialista'
    },
    footer: {
      tagline: 'Sistemas de IA. Diseñados para empresas.',
      links: ['Soluciones', 'Proceso', 'Contacto'],
      built: 'Construido para el próximo flujo de trabajo.',
      social: ['Instagram', 'TikTok', 'Gmail']
    }
  },

  en: {
    langName: 'EN',
    title: 'NeuralSynthetix — AI systems for business.',
    description: 'NeuralSynthetix designs AI systems, automation and optimization solutions for businesses.',
    nav: ['Home', 'Services', 'Solutions', 'About Us', 'Contact'],
    headerCta: 'Start a project',
    hero: {
      eyebrow: 'AI SYSTEMS / AUTOMATION / DATA',
      title: 'Transforming operations<br /><span>through artificial intelligence.</span>',
      lede: 'We innovate growing processes.',
      primary: 'Take your company to the next level <span>↗</span>',
      trust: ['Automation', 'Web', 'Integrations'],
      coreStats: ['EFFICIENCY', 'AUTOMATION'],
      floatA: ['AI OPTIMIZED', 'Accuracy + consistency'],
      floatB: ['WORKFLOW', 'Connected processes']
    },
    proof: {
      label: '',
      kicker: 'The opportunity',
      title: 'Your company already has access to AI.<br /><span>The difference is how you implement it.</span>',
      text: 'We move beyond isolated chatbots to build systems integrated with processes, data and business goals.',
      cards: [
        ['Problem', 'Manual tasks, slow processes and scattered knowledge.'],
        ['Intervention', 'We design architecture, instructions, automation and measurable workflows.'],
        ['Result', 'More speed, consistency and operational capacity.']
      ]
    },
    solutions: {
      label: '',
      title: 'AI applied to<br /><span>real business problems.</span>',
      text: 'We do not sell “prompts”. We build systems that fit into your company’s workflow.',
      explore: 'Explore',
      cards: [
        ['AI Strategy', 'We identify high-impact processes and define a clear roadmap for AI adoption.'],
        ['Automation', 'We connect AI with tasks, documents and operations to reduce manual work and bottlenecks.'],
        ['AI Optimization', 'We optimize AI systems for greater accuracy, consistency, control and output quality.'],
        ['Knowledge Systems', 'We turn documentation and internal knowledge into intelligent systems that are easy to query.'],
        ['AI Training', 'We train teams to use AI with methodology, security and repeatable standards.']
      ],
      lab: 'NEURAL SYNTHETIX / LAB',
      auditTitle: 'Not sure where to start?',
      auditText: 'Request a consultation and receive an automation opportunity map for your company.',
      auditBtn: 'Request Consulting <span>↗</span>'
    },
    demo: {
      label: 'DEMO',
      title: 'From instruction<br /><span>to system.</span>',
      text: 'An interactive example of the kind of experience we can build for a business workflow.',
      top: 'NEURAL SYNTHETIX / AI WORKFLOW',
      live: 'LIVE DEMO',
      workflow: 'Workflow',
      items: [['Input', 'Document / data'], ['Analyze', 'Intelligent extraction'], ['Decide', 'Rules + context'], ['Output', 'Actionable result']],
      promptCaption: '/user',
      prompt: 'Analyze this document, identify risks, summarize critical points, and generate recommendations for the team.',
      engine: 'Neural Engine',
      processing: 'Analyzing context and constraints…',
      outputCaption: 'Neural Synthetix /Assistant',
      metrics: [['Risk level', 'LOW'], ['Key points', '08'], ['Actions', '04']],
      tags: ['✓ Structured data', '✓ Recommendations', '✓ Prioritization']
    },
    usecases: {
      label: '',
      title: 'Find your<br /><span>point of entry.</span>',
      tabs: [['Sales', 'Lead qualification / follow-up / intelligence'], ['Operations', 'Automation / processes / documentation'], ['Customer Support', 'Assistants / routing / knowledge base'], ['Data & Intelligence', 'Analysis / reporting / decision support']],
      details: {
        ventas: ['SALES / AI SYSTEM', 'Turn conversations into actionable opportunities.', 'We design assistants and workflows that help qualify leads, summarize interactions and accelerate sales follow-up.', 'LEAD / #0421', 'QUALIFIED', [['Intent', 'High'], ['Priority', '8.7 / 10'], ['Next action', 'Follow-up']]],
        operaciones: ['OPERATIONS / AUTOMATION', 'Remove repetitive tasks from the operational workflow.', 'We automate manual steps, data extraction, documentation and repeatable decisions to free team capacity.', 'PROCESS / #0188', 'AUTOMATED', [['Tasks', '14'], ['Manual effort', '-63%'], ['Next action', 'Execute']]],
        soporte: ['SUPPORT / KNOWLEDGE AI', 'Respond faster without losing context.', 'We create assistants connected to your knowledge base to resolve requests and route the right cases to your team.', 'TICKET / #1194', 'ROUTED', [['Intent', 'Billing'], ['Confidence', '97%'], ['Next action', 'Escalate']]],
        datos: ['DATA / INTELLIGENCE', 'Turn scattered data into clear decisions.', 'We design systems that summarize, compare and structure information to accelerate reporting and executive analysis.', 'REPORT / #0602', 'READY', [['Sources', '12'], ['Signals', '31'], ['Next action', 'Review']]]
      },
      detailCta: 'Design this system <span>↗</span>'
    },
    process: {
      label: '',
      title: 'From opportunity<br /><span>to implementation.</span>',
      steps: [['Analyze', 'We understand processes, friction, data and business goals.'], ['Design', 'We define AI architecture, workflows, integrations and controls.'], ['Implement', 'We turn the design into a usable, measurable system.'], ['Optimize', 'We measure outcomes and evolve the solution with the business.']]
    },
    audit: {
      eyebrow: 'NEURAL SYNTHETIX / AI AUDIT',
      title: 'Discover where AI can save time and create value in your business.',
      text: 'An initial assessment to identify opportunities for automation, optimization and AI adoption.',
      button: 'Request a consultation <span>↗</span>'
    },
    team: {
      label: '',
      title: 'The people behind<br /><span>the system.</span>',
      text: 'Engineering, data and artificial intelligence working as one discipline.',
      roles: ['CEO', 'DATA & WEB DEVELOPMENT', 'SOFTWARE & AI DEVELOPMENT'],
      bios: ['AI Development', 'Data Engineering & Web Development', 'Software & Artificial Intelligence Development']
    },
    contact: {
      label: '',
      title: 'What part of your company<br /><span>should work with AI?</span>',
      text: 'Tell us what you want to automate, improve or build. We will help turn the opportunity into a concrete system.',
      name: 'Full name', namePlaceholder: 'Your name',
      email: 'Business email', emailPlaceholder: 'name@company.com',
      company: 'Company / organization', companyPlaceholder: 'Your company name',
      need: 'What area would you like to innovate or automate?',
      options: ['Automation', 'Sales', 'Customer support', 'Data analysis', 'Internal processes', 'AI implementation', 'Other'],
      message: 'Tell us briefly', messagePlaceholder: 'e.g. we want to automate document analysis and reduce manual work…',
      formFooter: 'Initial response tailored to your case.',
      submit: 'Submit project <span>↗</span>',
      formNote: 'Opening your email client to send the request…',
      whatsapp: 'Talk to a specialist'
    },
    footer: {
      tagline: 'AI Systems. Engineered for Business.',
      links: ['Solutions', 'Process', 'Contact'],
      built: 'Built for the next workflow.',
      social: ['Instagram', 'TikTok', 'Gmail']
    }
  }
};

function setText(el, text, html = false) {
  if (!el) return;
  if (html) el.innerHTML = text;
  else el.textContent = text;
}

function setListText(selector, values) {
  document.querySelectorAll(selector).forEach((el, i) => {
    if (values[i] !== undefined) setText(el, values[i]);
  });
}

function setListHTML(selector, values) {
  document.querySelectorAll(selector).forEach((el, i) => {
    if (values[i] !== undefined) setText(el, values[i], true);
  });
}

function applyLanguage(lang, animate = true) {
  const t = translations[lang];
  if (!t) return;

  if (animate) {
    document.body.classList.add('language-switching');
  }

  window.setTimeout(() => {
    root.lang = lang;
    root.dir = 'ltr';
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);

    setListText('.nav a', t.nav);
    setText(document.querySelector('.header-actions .btn'), t.headerCta);

    setText(document.querySelector('.hero-copy .eyebrow'), t.hero.eyebrow);
    setText(document.querySelector('.hero-copy h1'), t.hero.title, true);
    setText(document.querySelector('.hero-lede'), t.hero.lede);
    setText(document.querySelector('.hero-actions .btn-primary'), t.hero.primary, true);
    setText(document.querySelector('.hero-actions .btn-ghost'), t.hero.secondary + ' <span>↓</span>', true);
    setListText('.hero-trust span', t.hero.trust);
    setListText('.core-stats small', t.hero.coreStats);
    setListText('.float-card strong', [t.hero.floatA[0], t.hero.floatB[0]]);
    setListText('.float-card small', [t.hero.floatA[1], t.hero.floatB[1]]);

    setText(document.querySelector('.proof .section-label'), t.proof.label);
    setText(document.querySelector('.proof-copy .kicker'), t.proof.kicker);
    setText(document.querySelector('.proof-copy h2'), t.proof.title, true);
    setText(document.querySelector('.proof-copy > p:last-child'), t.proof.text);
    document.querySelectorAll('.metric-card').forEach((card, i) => {
      setText(card.querySelector('strong'), t.proof.cards[i][0]);
      setText(card.querySelector('p'), t.proof.cards[i][1]);
    });

    setText(document.querySelector('.solutions .section-label'), t.solutions.label);
    setText(document.querySelector('.solutions .section-head h2'), t.solutions.title, true);
    setText(document.querySelector('.solutions .section-head > p'), t.solutions.text);
    document.querySelectorAll('.solution-card:not(.feature)').forEach((card, i) => {
      setText(card.querySelector('h3'), t.solutions.cards[i][0]);
      setText(card.querySelector('p'), t.solutions.cards[i][1]);
      setText(card.querySelector('a'), t.solutions.explore);
    });
    setText(document.querySelector('.solution-card.feature .eyebrow'), t.solutions.lab);
    setText(document.querySelector('.solution-card.feature h3'), t.solutions.auditTitle);
    setText(document.querySelector('.solution-card.feature p'), t.solutions.auditText);
    setText(document.querySelector('.solution-card.feature .btn'), t.solutions.auditBtn, true);

    setText(document.querySelector('.demo .section-label'), t.demo.label);
    setText(document.querySelector('.demo .section-head h2'), t.demo.title, true);
    setText(document.querySelector('.demo .section-head > p'), t.demo.text);
    setText(document.querySelector('.demo-top span:nth-child(2)'), t.demo.top);
    setText(document.querySelector('.demo-top span:nth-child(3)'), t.demo.live);
    setText(document.querySelector('.side-title'), t.demo.workflow);
    document.querySelectorAll('.workflow-item').forEach((item, i) => {
      setText(item.querySelector('b'), t.demo.items[i][0]);
      setText(item.querySelector('small'), t.demo.items[i][1]);
    });
    setText(document.querySelector('.demo-prompt .demo-caption'), t.demo.promptCaption);
    setText(document.querySelector('.demo-prompt p'), t.demo.prompt);
    setText(document.querySelector('.demo-processing strong'), t.demo.engine);
    setText(document.querySelector('.demo-processing small'), t.demo.processing);
    setText(document.querySelector('.demo-output .demo-caption'), t.demo.outputCaption);
    document.querySelectorAll('.output-grid > div').forEach((item, i) => {
      setText(item.querySelector('span'), t.demo.metrics[i][0]);
      setText(item.querySelector('b'), t.demo.metrics[i][1]);
    });
    setListText('.output-tags span', t.demo.tags);

    setText(document.querySelector('.usecases .section-label'), t.usecases.label);
    setText(document.querySelector('.usecases .section-head h2'), t.usecases.title, true);
    document.querySelectorAll('.usecase').forEach((item, i) => {
      setText(item.querySelector('strong'), t.usecases.tabs[i][0]);
      setText(item.querySelector('em'), t.usecases.tabs[i][1]);
    });

    setText(document.querySelector('.process .section-label'), t.process.label);
    setText(document.querySelector('.process .section-head h2'), t.process.title, true);
    document.querySelectorAll('.process-step').forEach((step, i) => {
      setText(step.querySelector('h3'), t.process.steps[i][0]);
      setText(step.querySelector('p'), t.process.steps[i][1]);
    });

    setText(document.querySelector('.audit .eyebrow'), t.audit.eyebrow);
    setText(document.querySelector('.audit h2'), t.audit.title);
    setText(document.querySelector('.audit p'), t.audit.text);
    setText(document.querySelector('.audit .btn'), t.audit.button, true);

    setText(document.querySelector('.team .section-label'), t.team.label);
    setText(document.querySelector('.team .section-head h2'), t.team.title, true);
    setText(document.querySelector('.team .section-head > p'), t.team.text);
    document.querySelectorAll('.team-card').forEach((card, i) => {
      setText(card.querySelector('span'), t.team.roles[i]);
      setText(card.querySelector('p'), t.team.bios[i]);
    });

    setText(document.querySelector('.contact-copy .section-label'), t.contact.label);
    setText(document.querySelector('.contact-copy h2'), t.contact.title, true);
    setText(document.querySelector('.contact-copy > p'), t.contact.text);

    const labels = document.querySelectorAll('.contact-form label');
    const labelTexts = [t.contact.name, t.contact.email, t.contact.company, t.contact.need, t.contact.message];
    labels.forEach((label, i) => {
      const input = label.querySelector('input, select, textarea');
      const textNode = [...label.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      if (textNode) textNode.textContent = labelTexts[i] + ' ';
      if (input?.placeholder !== undefined) {
        const ph = [t.contact.namePlaceholder, t.contact.emailPlaceholder, t.contact.companyPlaceholder, '', t.contact.messagePlaceholder][i];
        if (ph) input.placeholder = ph;
      }
    });
    const select = document.querySelector('.contact-form select');
    if (select) {
      setText(select.options[0], t.contact.options[0]);
      t.contact.options.slice(1).forEach((value, i) => setText(select.options[i + 1], value));
    }
    setText(document.querySelector('.form-footer > span'), t.contact.formFooter);
    setText(document.querySelector('.form-footer .btn'), t.contact.submit, true);
    setText(document.querySelector('.whatsapp-fab b'), t.contact.whatsapp);

    setText(document.querySelector('.footer-top > p'), t.footer.tagline);
    setListText('.footer-links a', t.footer.links);
    setText(document.querySelector('.footer-bottom > span:nth-child(2)'), t.footer.built);
    setListText('.footer-social a span', t.footer.social);

    const spans = langToggle?.querySelectorAll('span');
    if (spans?.length === 2) {
      spans[0].classList.toggle('active', lang === 'es');
      spans[1].classList.toggle('active', lang === 'en');
    }
    langToggle?.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
    localStorage.setItem('ns-language', lang);

    // Refresh the active use-case in the new language.
    updateUsecase(document.querySelector('.usecase.active')?.dataset.usecase || 'ventas', false);

    if (animate) {
      window.setTimeout(() => document.body.classList.remove('language-switching'), 80);
    }
  }, animate ? 100 : 0);
}

function currentLanguage() {
  return localStorage.getItem('ns-language') || 'es';
}

langToggle?.addEventListener('click', () => {
  const next = currentLanguage() === 'es' ? 'en' : 'es';
  applyLanguage(next);
});


const themeToggle = document.querySelector('[data-theme-toggle]');
const currentTheme = localStorage.getItem('ns-theme') || 'dark';

if (currentTheme === 'light') {
  root.classList.add('light-mode');
  document.body.classList.add('light-mode');
}

themeToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isLight = root.classList.toggle('light-mode');
  document.body.classList.toggle('light-mode', isLight);
  localStorage.setItem('ns-theme', isLight ? 'light' : 'dark');
});

/* =========================================================
   USE CASE SWITCHER
   ========================================================= */
const detail = document.querySelector('.usecase-detail');
const detailContent = detail?.querySelector('.detail-content');
const miniWindow = detail?.querySelector('.mini-window');

function updateUsecase(key, animate = true) {
  const lang = currentLanguage();
  const data = translations[lang].usecases.details[key];
  if (!data || !detailContent || !miniWindow) return;

  const apply = () => {
    setText(detailContent.querySelector('.eyebrow'), data[0]);
    setText(detailContent.querySelector('h3'), data[1]);
    setText(detailContent.querySelector('p'), data[2]);
    setText(detailContent.querySelector('a'), translations[lang].usecases.detailCta, true);
    miniWindow.querySelector('.mini-head').innerHTML = `${data[3]} <span>${data[4]}</span>`;
    miniWindow.querySelectorAll('.mini-row').forEach((row, idx) => {
      setText(row.querySelector('span'), data[5][idx][0]);
      setText(row.querySelector('b'), data[5][idx][1]);
    });
  };

  if (animate) {
    detailContent?.classList.add('detail-switching');
    miniWindow?.classList.add('detail-switching');
    window.setTimeout(() => {
      apply();
      detailContent?.classList.remove('detail-switching');
      miniWindow?.classList.remove('detail-switching');
    }, 160);
  } else apply();
}

document.querySelectorAll('.usecase').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.usecase').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    updateUsecase(btn.dataset.usecase);
  });
});

/* =========================================================
   FORM
   ========================================================= */
const form = document.getElementById('leadForm');
const formNote = document.getElementById('formNote');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const company = data.get('company');
  const need = data.get('need');
  const message = data.get('message');
  const lang = currentLanguage();
  const subjectText = lang === 'es'
    ? `NeuralSynthetix — nuevo proyecto: ${company}`
    : `NeuralSynthetix — new project: ${company}`;
  const body = encodeURIComponent([
    `${lang === 'es' ? 'Nombre' : 'Name'}: ${name}`,
    `${lang === 'es' ? 'Correo' : 'Email'}: ${email}`,
    `${lang === 'es' ? 'Empresa' : 'Company'}: ${company}`,
    `${lang === 'es' ? 'Necesidad' : 'Need'}: ${need}`,
    '',
    `${lang === 'es' ? 'Mensaje' : 'Message'}: ${message || (lang === 'es' ? '(sin mensaje adicional)' : '(no additional message)')}`
  ].join('\n'));
  setText(formNote, translations[lang].contact.formNote);
  window.location.href = `mailto:neuralsynthetix@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${body}`;
});

/* =========================================================
   SCROLL REVEALS
   ========================================================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Parallax suave para el visual principal. */
const visual = document.querySelector('.hero-visual');
window.addEventListener('pointermove', (e) => {
  if (!visual || window.innerWidth < 900) return;
  const rect = visual.getBoundingClientRect();
  if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;
  const x = (e.clientX - rect.left) / rect.width - .5;
  const y = (e.clientY - rect.top) / rect.height - .5;
  visual.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${y * -3}deg)`;
});
window.addEventListener('pointerleave', () => { if (visual) visual.style.transform = ''; });

/* Initial language — Spanish by default, or the last saved language. */
applyLanguage(currentLanguage(), false);

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
