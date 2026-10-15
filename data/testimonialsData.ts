import { Language } from '../i18n/types';

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  metric: string;
  metricLabel: string;
  serviceCategory: 'dev' | 'seo' | 'video' | 'ecommerce' | 'hospitality';
  categoryLabel: string;
  projectTag: string;
  date: string;
  verified: boolean;
  featured?: boolean;
}

export interface TestimonialsSectionData {
  badge: string;
  heading: string;
  headingHighlight: string;
  description: string;
  filterLabels: {
    all: string;
    dev: string;
    seo: string;
    video: string;
    ecommerce: string;
    hospitality: string;
  };
  trustStats: {
    rating: string;
    ratingSub: string;
    retention: string;
    retentionSub: string;
    growth: string;
    growthSub: string;
    onTime: string;
    onTimeSub: string;
  };
  verifiedBadge: string;
  readMore: string;
  readLess: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  testimonials: TestimonialItem[];
}

export const testimonialsByLanguage: Record<Language, TestimonialsSectionData> = {
  pt: {
    badge: 'Resultados & Confiança',
    heading: 'O Que Dizem Quem Já',
    headingHighlight: 'Transformou Seu Negócio.',
    description: 'Relatos de clientes, fundadores e diretores que escalaram tráfego orgânico, faturamento e presença de marca com nossas soluções.',
    filterLabels: {
      all: 'Todos (9)',
      dev: 'Web & Aplicativos',
      seo: 'SEO & Performance',
      video: 'Vídeo & Design Gráfico',
      ecommerce: 'E-commerce & CRO',
      hospitality: 'Hotelaria & Turismo'
    },
    trustStats: {
      rating: '5.0 / 5.0',
      ratingSub: 'Avaliação média (+48 projetos)',
      retention: '98.4%',
      retentionSub: 'Taxa de satisfação líquida',
      growth: '+185%',
      growthSub: 'Média de aumento em leads',
      onTime: '100%',
      onTimeSub: 'Prazos cumpridos com rigor'
    },
    verifiedBadge: 'Cliente Verificado',
    readMore: 'Ler depoimento completo',
    readLess: 'Recolher',
    ctaTitle: 'Pronto para ser nosso próximo caso de sucesso?',
    ctaDescription: 'Transforme a presença digital da sua empresa com estratégias validadas em mais de 20 anos de mercado.',
    ctaButton: 'Falar Diretamente Comigo',
    testimonials: [
      {
        id: 1,
        name: 'Dra. Camila Bittencourt',
        role: 'Médica Dermatologista & Fundadora',
        company: 'Clínica DermaLuxe Estética Avançada',
        location: 'São Paulo, SP',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'A reformulação completa do nosso site e a estratégia de SEO local colocaram nossa clínica no topo do Google em menos de 4 meses. O agendamento de consultas particulares triplicou e deixamos de depender exclusivamente de convênios. O Nando tem um domínio cirúrgico e uma sensibilidade incrível com a área da saúde.',
        metric: '+240%',
        metricLabel: 'Agendamentos particulares',
        serviceCategory: 'seo',
        categoryLabel: 'SEO & Autoridade',
        projectTag: 'SEO Local & Portal Clínico',
        date: 'Há 1 mês',
        verified: true,
        featured: true
      },
      {
        id: 2,
        name: 'Marcelo Fagundes',
        role: 'Proprietário & Gestor Geral',
        company: 'Pousada Ykape',
        location: 'Boiçucanga, São Sebastião - SP',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'O novo site da Pousada Ykape superou todas as expectativas. Além de um design moderno e elegante que valoriza as fotos do litoral, a velocidade no celular é impressionante e o motor de reservas direto reduziu nossa dependência de comissões de terceiros. Tivemos um salto histórico de 82% em reservas diretas já na primeira temporada.',
        metric: '+82%',
        metricLabel: 'Reservas diretas no site',
        serviceCategory: 'hospitality',
        categoryLabel: 'Hotelaria & Turismo',
        projectTag: 'Site Oficial & Motor de Reservas',
        date: 'Há 3 semanas',
        verified: true,
        featured: true
      },
      {
        id: 3,
        name: 'Rodrigo Albuquerque',
        role: 'Co-fundador & Diretor de Tecnologia (CTO)',
        company: 'TechFlow Cloud Solutions',
        location: 'Florianópolis, SC',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Contratamos o Fernando para desenhar e desenvolver nossa aplicação web e o app corporativo. A fluidez da interface, a arquitetura moderna e a pontualidade na entrega foram elogiadas inclusive pelo nosso comitê de investidores. Um parceiro técnico de raríssimo nível no Brasil.',
        metric: '99.8%',
        metricLabel: 'Core Web Vitals & Uptime',
        serviceCategory: 'dev',
        categoryLabel: 'Web & Aplicativos',
        projectTag: 'Web App & App Mobile React',
        date: 'Há 2 meses',
        verified: true,
        featured: true
      },
      {
        id: 4,
        name: 'Juliana Menezes',
        role: 'Head de E-commerce & Growth',
        company: 'Aura Joias & Acessórios Finos',
        location: 'Belo Horizonte, MG',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Nossa loja virtual enfrentava uma taxa de abandono de checkout inaceitável. O Nando fez um diagnóstico profundo de CRO, reconstruiu o fluxo de compras e otimizou o carregamento da página para 0.9s. Nossa taxa de conversão saltou de 1,2% para 3,8% no primeiro mês!',
        metric: '3.8%',
        metricLabel: 'Conversão média (era 1.2%)',
        serviceCategory: 'ecommerce',
        categoryLabel: 'E-commerce & CRO',
        projectTag: 'Otimização de Checkout & CRO',
        date: 'Há 1 mês',
        verified: true
      },
      {
        id: 5,
        name: 'Bruno Cavalcanti',
        role: 'Diretor Comercial & Aquisição',
        company: 'FitVibe Suplementação D2C',
        location: 'Curitiba, PR',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'A criação dos roteiros e a edição dos novos vídeos comerciais para o Meta Ads e TikTok revolucionaram nosso custo por aquisição. Os vídeos prendem a atenção do primeiro segundo ao último, com narrativa envolvente e ritmo cinematográfico. Nosso ROAS escalou de 1.8x para 4.3x sustentável.',
        metric: '4.3x',
        metricLabel: 'ROAS em tráfego pago',
        serviceCategory: 'video',
        categoryLabel: 'Edição de Vídeo',
        projectTag: 'Criativos em Vídeo & Anúncios',
        date: 'Há 2 meses',
        verified: true
      },
      {
        id: 6,
        name: 'Arq. Larissa Prado',
        role: 'Sócia-Fundadora & Diretora Criativa',
        company: 'Studio Prado Arquitetura & Interiores',
        location: 'Rio de Janeiro, RJ',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Nosso escritório precisava de uma renovação completa de identidade visual, portfólio digital e apresentações executivas. O resultado final transmite sofisticação absoluta. Fechamos três contratos de altíssimo padrão com clientes que nos encontraram pelo novo portfólio e elogiaram a experiência.',
        metric: '100%',
        metricLabel: 'Aprovação clientes classe A',
        serviceCategory: 'video',
        categoryLabel: 'Design Gráfico & Vídeo',
        projectTag: 'Branding & Portfólio Digital',
        date: 'Há 3 meses',
        verified: true
      },
      {
        id: 7,
        name: 'Eng. Gustavo Nogueira',
        role: 'Diretor de Operações e Engenharia',
        company: 'SolarPrime Energia Sustentável',
        location: 'Campinas, SP',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'O aplicativo mobile desenvolvido para monitoramento de usinas solares pelos nossos clientes foi um divisor de águas. O app é extremamente intuitivo, estável e reduziu nossos chamados de suporte técnico em mais de 65%. O compromisso com a qualidade técnica é indiscutível.',
        metric: '-65%',
        metricLabel: 'Chamados no suporte técnico',
        serviceCategory: 'dev',
        categoryLabel: 'Desenvolvimento de App',
        projectTag: 'Aplicativo Mobile & Telemetria',
        date: 'Há 1 mês',
        verified: true
      },
      {
        id: 8,
        name: 'Sofia Castanheira',
        role: 'Diretora de Marketing Institucional',
        company: 'Nexus Capital Gestora de Recursos',
        location: 'São Paulo, SP',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'No mercado financeiro, autoridade de marca e segurança são fundamentais. O Fernando liderou a reformulação do nosso portal e executou um plano de SEO de conteúdo que nos posicionou como referência nacional nas pesquisas orgânicas. O tempo médio de permanência no site aumentou 180%.',
        metric: '+180%',
        metricLabel: 'Tempo médio de navegação',
        serviceCategory: 'seo',
        categoryLabel: 'SEO & Performance',
        projectTag: 'Portal Institucional & SEO B2B',
        date: 'Há 4 semanas',
        verified: true
      },
      {
        id: 9,
        name: 'Patrícia Rezende',
        role: 'Fundadora & CEO',
        company: 'Gourmet Express Delivery & Franquias',
        location: 'Santos, SP',
        avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Estávamos sufocados pelas taxas abusivas dos aplicativos de entrega tradicionais. Com a plataforma web própria desenvolvida pelo Nando e os vídeos de dar água na boca criados para as redes sociais, migramos nossos clientes fiéis para o nosso canal direto e crescemos 150% em faturamento sem comissões!',
        metric: '+150%',
        metricLabel: 'Vendas no canal direto próprio',
        serviceCategory: 'ecommerce',
        categoryLabel: 'E-commerce & App Web',
        projectTag: 'App Web de Pedidos & Vídeos',
        date: 'Há 2 semanas',
        verified: true
      }
    ]
  },

  en: {
    badge: 'Results & Trust',
    heading: 'What Leaders Say About',
    headingHighlight: 'Transforming Their Business.',
    description: 'Firsthand accounts from founders, executives, and business owners who scaled organic traffic, revenue, and brand dominance with our digital solutions.',
    filterLabels: {
      all: 'All (9)',
      dev: 'Web & Mobile Apps',
      seo: 'SEO & Performance',
      video: 'Video & Graphic Design',
      ecommerce: 'E-commerce & CRO',
      hospitality: 'Hospitality & Tourism'
    },
    trustStats: {
      rating: '5.0 / 5.0',
      ratingSub: 'Average client rating (+48 projects)',
      retention: '98.4%',
      retentionSub: 'Net satisfaction index',
      growth: '+185%',
      growthSub: 'Average qualified lead growth',
      onTime: '100%',
      onTimeSub: 'Strict on-time project delivery'
    },
    verifiedBadge: 'Verified Client',
    readMore: 'Read full testimonial',
    readLess: 'Collapse',
    ctaTitle: 'Ready to be our next high-impact success story?',
    ctaDescription: 'Elevate your digital footprint and conversions with time-tested methodologies backed by 20+ years of engineering and marketing mastery.',
    ctaButton: 'Talk Directly with Me',
    testimonials: [
      {
        id: 1,
        name: 'Dr. Camila Bittencourt',
        role: 'Medical Director & Founder',
        company: 'DermaLuxe Advanced Aesthetic Clinic',
        location: 'São Paulo, Brazil',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'The complete redesign of our website combined with surgical local SEO propelled our clinic to page one of Google within 4 months. Private patient consultations tripled, drastically cutting our reliance on health insurance plans. Fernando has exceptional technical mastery and healthcare domain sensitivity.',
        metric: '+240%',
        metricLabel: 'Private appointments scheduled',
        serviceCategory: 'seo',
        categoryLabel: 'SEO & Medical Authority',
        projectTag: 'Local SEO & Clinical Portal',
        date: '1 month ago',
        verified: true,
        featured: true
      },
      {
        id: 2,
        name: 'Marcelo Fagundes',
        role: 'Owner & General Manager',
        company: 'Pousada Ykape Beach Resort',
        location: 'Boiçucanga, North Coast - SP',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'The brand-new website for Pousada Ykape surpassed all our expectations. Beyond its stunning aesthetic that showcases our coastal setting, mobile performance is lightning fast and direct reservations soared 82%, substantially minimizing OTA commission expenses.',
        metric: '+82%',
        metricLabel: 'Direct website bookings',
        serviceCategory: 'hospitality',
        categoryLabel: 'Hospitality & Tourism',
        projectTag: 'Official Site & Booking Engine',
        date: '3 weeks ago',
        verified: true,
        featured: true
      },
      {
        id: 3,
        name: 'Rodrigo Albuquerque',
        role: 'Co-Founder & CTO',
        company: 'TechFlow Cloud Solutions',
        location: 'Florianópolis, Brazil',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'We partnered with Fernando to architect and build our cloud dashboard and mobile application. The fluid UI, immaculate component architecture, and adherence to timelines thoroughly impressed our seed-round investment committee. Top-tier engineering talent.',
        metric: '99.8%',
        metricLabel: 'Core Web Vitals & Uptime',
        serviceCategory: 'dev',
        categoryLabel: 'Web & Mobile Apps',
        projectTag: 'Web App & React Native Suite',
        date: '2 months ago',
        verified: true,
        featured: true
      },
      {
        id: 4,
        name: 'Juliana Menezes',
        role: 'Head of E-commerce & Growth',
        company: 'Aura Fine Jewelry & Accessories',
        location: 'Belo Horizonte, Brazil',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Our online storefront was suffering from excessive checkout friction. Fernando conducted an exhaustive CRO diagnostic, re-engineered our shopping funnel, and dropped load times below 0.9s. Our conversion rate surged from 1.2% to 3.8% in month one!',
        metric: '3.8%',
        metricLabel: 'Conversion rate (was 1.2%)',
        serviceCategory: 'ecommerce',
        categoryLabel: 'E-commerce & CRO',
        projectTag: 'Checkout Optimization & Speed',
        date: '1 month ago',
        verified: true
      },
      {
        id: 5,
        name: 'Bruno Cavalcanti',
        role: 'Commercial & Acquisition Director',
        company: 'FitVibe D2C Sports Nutrition',
        location: 'Curitiba, Brazil',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'The video scripting and commercial ad edits produced by Fernando were an absolute turning point for our paid acquisition campaigns. Captivating storytelling with high retention hooks drove our ROAS up from 1.8x to 4.3x with consistent profitability.',
        metric: '4.3x',
        metricLabel: 'Paid traffic ROAS multiplier',
        serviceCategory: 'video',
        categoryLabel: 'Video Production & Editing',
        projectTag: 'High-Converting Video Ads',
        date: '2 months ago',
        verified: true
      },
      {
        id: 6,
        name: 'Larissa Prado',
        role: 'Principal Architect & Partner',
        company: 'Studio Prado Architecture & Interiors',
        location: 'Rio de Janeiro, Brazil',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Our firm required an immaculate visual identity, digital portfolio, and interactive pitch decks. The resulting digital experience radiates luxury. We promptly signed three high-budget architectural contracts from clients who discovered us through the new showcase.',
        metric: '100%',
        metricLabel: 'High-net-worth client satisfaction',
        serviceCategory: 'video',
        categoryLabel: 'Graphic Design & Video',
        projectTag: 'Branding & Digital Showcase',
        date: '3 months ago',
        verified: true
      },
      {
        id: 7,
        name: 'Gustavo Nogueira',
        role: 'Operations & Engineering Director',
        company: 'SolarPrime Sustainable Energy',
        location: 'Campinas, Brazil',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'The customer monitoring app engineered for solar telemetry solved our support overhead once and for all. Clean, reliable, and user-friendly, it decreased our customer support tickets by over 65% and elevated client NPS to 94.',
        metric: '-65%',
        metricLabel: 'Customer support tickets',
        serviceCategory: 'dev',
        categoryLabel: 'App Development',
        projectTag: 'Mobile Telemetry Application',
        date: '1 month ago',
        verified: true
      },
      {
        id: 8,
        name: 'Sofia Castanheira',
        role: 'Institutional Marketing Director',
        company: 'Nexus Capital Asset Management',
        location: 'São Paulo, Brazil',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'In institutional finance, brand authority and bulletproof security are non-negotiable. Fernando overhauled our digital portal and established technical SEO dominance that unlocked top Google rankings for high-intent B2B search terms.',
        metric: '+180%',
        metricLabel: 'Average session duration',
        serviceCategory: 'seo',
        categoryLabel: 'SEO & Performance',
        projectTag: 'Corporate Portal & B2B SEO',
        date: '4 weeks ago',
        verified: true
      },
      {
        id: 9,
        name: 'Patrícia Rezende',
        role: 'Founder & CEO',
        company: 'Gourmet Express Delivery Franchises',
        location: 'Santos, Brazil',
        avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'We were trapped by soaring marketplace commissions. Fernando created our proprietary ordering web app alongside mouth-watering promo video assets. We converted our recurring customer base to our direct channel, growing revenue 150% with zero middleman cuts.',
        metric: '+150%',
        metricLabel: 'Direct online channel revenue',
        serviceCategory: 'ecommerce',
        categoryLabel: 'E-commerce & Web App',
        projectTag: 'Direct Ordering App & Video Ads',
        date: '2 weeks ago',
        verified: true
      }
    ]
  },

  es: {
    badge: 'Resultados y Confianza',
    heading: 'Lo Que Dicen Quienes Ya',
    headingHighlight: 'Transformaron su Negocio.',
    description: 'Testimonios reales de fundadores, directores y empresarios que impulsaron su tráfico orgánico, ventas y marca con nuestras soluciones digitales.',
    filterLabels: {
      all: 'Todos (9)',
      dev: 'Web y Aplicaciones',
      seo: 'SEO y Rendimiento',
      video: 'Vídeo y Diseño Gráfico',
      ecommerce: 'Comercio Electrónico y CRO',
      hospitality: 'Hotelería y Turismo'
    },
    trustStats: {
      rating: '5.0 / 5.0',
      ratingSub: 'Calificación promedio (+48 proyectos)',
      retention: '98.4%',
      retentionSub: 'Tasa de satisfacción del cliente',
      growth: '+185%',
      growthSub: 'Aumento promedio en leads',
      onTime: '100%',
      onTimeSub: 'Plazos cumplidos con rigor'
    },
    verifiedBadge: 'Cliente Verificado',
    readMore: 'Leer testimonio completo',
    readLess: 'Contraer',
    ctaTitle: '¿Listo para ser nuestro próximo caso de éxito?',
    ctaDescription: 'Lleve la presencia digital de su empresa al siguiente nivel con metodologías consolidadas en más de 20 años de experiencia.',
    ctaButton: 'Hablar Directamente Conmigo',
    testimonials: [
      {
        id: 1,
        name: 'Dra. Camila Bittencourt',
        role: 'Médica Dermatóloga y Fundadora',
        company: 'Clínica DermaLuxe Estética Avanzada',
        location: 'São Paulo, Brasil',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'La reformulación total de nuestro sitio web y la estrategia de SEO local posicionaron nuestra clínica en la cima de Google en menos de 4 meses. Las reservas de consultas privadas se triplicaron. Fernando posee un dominio técnico quirúrgico y gran sensibilidad profesional.',
        metric: '+240%',
        metricLabel: 'Citas privadas agendadas',
        serviceCategory: 'seo',
        categoryLabel: 'SEO y Autoridad Médica',
        projectTag: 'SEO Local y Portal Médico',
        date: 'Hace 1 mes',
        verified: true,
        featured: true
      },
      {
        id: 2,
        name: 'Marcelo Fagundes',
        role: 'Propietario y Gerente General',
        company: 'Pousada Ykape',
        location: 'Boiçucanga, Litoral Norte - SP',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'El nuevo sitio web de Pousada Ykape superó todas nuestras expectativas. Además del diseño sofisticado que realza la belleza del lugar, la carga móvil es instantánea y el motor de reservas directo redujo las comisiones a intermediarios con un aumento del 82% en reservas directas.',
        metric: '+82%',
        metricLabel: 'Reservas directas en la web',
        serviceCategory: 'hospitality',
        categoryLabel: 'Hotelería y Turismo',
        projectTag: 'Sitio Web Oficial y Motor de Reservas',
        date: 'Hace 3 semanas',
        verified: true,
        featured: true
      },
      {
        id: 3,
        name: 'Rodrigo Albuquerque',
        role: 'Cofundador y Director de Tecnología (CTO)',
        company: 'TechFlow Cloud Solutions',
        location: 'Florianópolis, Brasil',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Contratamos a Fernando para desarrollar nuestra plataforma web y aplicación móvil corporativa. La fluidez de la interfaz y la puntualidad fueron ampliamente elogiadas por nuestro comité de inversores. Un socio tecnológico de máximo nivel.',
        metric: '99.8%',
        metricLabel: 'Core Web Vitals y Estabilidad',
        serviceCategory: 'dev',
        categoryLabel: 'Web y Aplicaciones',
        projectTag: 'Web App y Aplicación Móvil',
        date: 'Hace 2 meses',
        verified: true,
        featured: true
      },
      {
        id: 4,
        name: 'Juliana Menezes',
        role: 'Directora de E-commerce y Crecimiento',
        company: 'Aura Joyas y Accesorios',
        location: 'Belo Horizonte, Brasil',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Nuestra tienda online tenía un alto abandono de carrito. Fernando reestructuró el checkout, aceleró la carga a menos de 1 segundo y rediseñó los anuncios. ¡Nuestra tasa de conversión subió del 1,2% al 3,8% en el primer mes!',
        metric: '3.8%',
        metricLabel: 'Conversión (antes 1.2%)',
        serviceCategory: 'ecommerce',
        categoryLabel: 'E-commerce y CRO',
        projectTag: 'Optimización de Checkout y Ventas',
        date: 'Hace 1 mes',
        verified: true
      },
      {
        id: 5,
        name: 'Bruno Cavalcanti',
        role: 'Director Comercial y Adquisición',
        company: 'FitVibe Nutrición Deportiva',
        location: 'Curitiba, Brasil',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'La creación de guiones y la edición de los nuevos vídeos comerciales para Meta Ads y TikTok transformaron por completo nuestro costo por adquisición. El retorno de inversión (ROAS) escaló de 1.8x a 4.3x sostenible.',
        metric: '4.3x',
        metricLabel: 'ROAS en campañas publicitarias',
        serviceCategory: 'video',
        categoryLabel: 'Edición de Vídeo',
        projectTag: 'Creativos en Vídeo de Alta Conversión',
        date: 'Hace 2 meses',
        verified: true
      },
      {
        id: 6,
        name: 'Larissa Prado',
        role: 'Socia Directora y Arquitecta Titular',
        company: 'Studio Prado Arquitectura e Interiores',
        location: 'Río de Janeiro, Brasil',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Nuestro estudio necesitaba una renovación total de identidad visual y portafolio web interactivo. El resultado transmite una distinción impecable y cerramos importantes proyectos de arquitectura con clientes exclusivos.',
        metric: '100%',
        metricLabel: 'Aprobación de clientes de élite',
        serviceCategory: 'video',
        categoryLabel: 'Diseño Gráfico y Vídeo',
        projectTag: 'Identidad y Portafolio Digital',
        date: 'Hace 3 meses',
        verified: true
      },
      {
        id: 7,
        name: 'Gustavo Nogueira',
        role: 'Director de Operaciones e Ingeniería',
        company: 'SolarPrime Energía Solar',
        location: 'Campinas, Brasil',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'La aplicación móvil desarrollada para monitorear la generación solar en tiempo real fue clave. La facilidad de uso redujo las consultas al servicio de soporte en más del 65%. Una entrega técnica impecable.',
        metric: '-65%',
        metricLabel: 'Reducción de tickets de soporte',
        serviceCategory: 'dev',
        categoryLabel: 'Desarrollo de Apps',
        projectTag: 'Aplicación Móvil de Telemetría',
        date: 'Hace 1 mes',
        verified: true
      },
      {
        id: 8,
        name: 'Sofia Castanheira',
        role: 'Directora de Marketing Institucional',
        company: 'Nexus Capital Gestión de Fondos',
        location: 'São Paulo, Brasil',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'En el sector financiero, la reputación y la seguridad son primordiales. Fernando renovó el portal corporativo e implementó una estrategia de SEO que nos colocó en las primeras búsquedas clave de nuestro mercado.',
        metric: '+180%',
        metricLabel: 'Tiempo medio de permanencia',
        serviceCategory: 'seo',
        categoryLabel: 'SEO y Rendimiento',
        projectTag: 'Portal Institucional y SEO B2B',
        date: 'Hace 4 semanas',
        verified: true
      },
      {
        id: 9,
        name: 'Patrícia Rezende',
        role: 'Fundadora y CEO',
        company: 'Gourmet Express Delivery y Franquicias',
        location: 'Santos, Brasil',
        avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        quote: 'Estábamos atados a las altas comisiones de los agregadores de delivery. Con la web app de pedidos propia y los vídeos promocionales para redes, aumentamos un 150% los pedidos directos sin intermediarios.',
        metric: '+150%',
        metricLabel: 'Crecimiento en ventas directas',
        serviceCategory: 'ecommerce',
        categoryLabel: 'E-commerce y Web App',
        projectTag: 'Web App de Pedidos y Vídeos',
        date: 'Hace 2 semanas',
        verified: true
      }
    ]
  }
};
