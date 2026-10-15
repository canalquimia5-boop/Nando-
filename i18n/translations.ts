import { Language } from './types';

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  extendedDescription: string;
  color: string;
  benefits: string[];
  process: ProcessStep[];
}

export interface CaseItem {
  id: string;
  title: string;
  client: string;
  metric: string;
  description: string;
  impact: string;
  color: string;
  challengeTitle: string;
  challengeText: string;
  challengePoints: string[];
  strategyTitle: string;
  strategyText: string;
  strategySteps: ProcessStep[];
  resultsTitle: string;
  resultsSubtitle: string;
  metricLabel: string;
  impactLabel: string;
  zeroLossLabel: string;
  ctaTitle: string;
  ctaButton: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  categoryKey: 'health' | 'ecommerce' | 'tech' | 'marketing' | 'architecture' | 'institutional';
  originalCategory: string;
  image: string;
  description: string;
  url: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    cases: string;
    projects: string;
    testimonials: string;
    certifications: string;
    contact: string;
    freeConsultation: string;
    talkToMe: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    btnSolutions: string;
    btnCases: string;
    scrollText: string;
    stats: {
      seo: { label: string; value: string };
      roi: { label: string; value: string };
      growth: { label: string; value: string };
    };
  };
  about: {
    badge: string;
    heading: string;
    headingHighlight: string;
    bio: string;
    experienceYears: string;
    experienceLabelLine1: string;
    experienceLabelLine2: string;
    features: Array<{ title: string; desc: string }>;
  };
  services: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    learnMore: string;
    details: {
      backBtn: string;
      whyInvest: string;
      methodology: string;
      readyTitle: string;
      readyDesc: string;
      whatsappCta: string;
    };
    items: ServiceItem[];
  };
  cases: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    viewDetails: string;
    details: {
      backBtn: string;
      badgePrefix: string;
      primaryMetric: string;
      finalImpact: string;
      directRoi: string;
      growth: string;
      zeroLoss: string;
      zeroText: string;
    };
    items: CaseItem[];
  };
  projects: {
    badge: string;
    heading: string;
    headingHighlight: string;
    descriptionPrefix: string;
    descriptionSuffix: string;
    categories: {
      all: string;
      health: string;
      ecommerce: string;
      tech: string;
      marketing: string;
      architecture: string;
      institutional: string;
    };
    visitWebsite: string;
    ctaButton: string;
    items: ProjectItem[];
  };
  certifications: {
    badge: string;
    heading: string;
    headingHighlight: string;
    viewCert: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    items: Array<{
      name: string;
      issuer: string;
      date: string;
      icon: string;
    }>;
  };
  contact: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    emailLabel: string;
    whatsappLabel: string;
    locationLabel: string;
    locationValue: string;
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      serviceLabel: string;
      serviceOptions: string[];
      budgetLabel: string;
      budgetOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMessage: string;
      backBtn: string;
    };
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    tagline: string;
  };
  whatsapp: {
    tooltip: string;
    navMessage: string;
    heroServiceMessage: string;
    caseMessagePrefix: string;
    serviceMessagePrefix: string;
    projectMessage: string;
    diagnosticMessage: string;
    contactMessage: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      services: 'Serviços',
      cases: 'Casos',
      projects: 'Projetos',
      testimonials: 'Depoimentos',
      certifications: 'Certificações',
      contact: 'Contato',
      freeConsultation: 'Consultoria Gratuita',
      talkToMe: 'Fale Comigo'
    },
    hero: {
      badge: 'Especialista em SEO & Performance',
      titleLine1: 'SUA EMPRESA',
      titleHighlight: 'Resultados Digitais',
      description: 'Impulsionando o crescimento de empresas através de estratégias avançadas de SEO, Marketing de Conteúdo e Inteligência de Dados.',
      btnSolutions: 'Ver Soluções',
      btnCases: 'Casos de Sucesso',
      scrollText: 'Scroll para descobrir',
      stats: {
        seo: { label: 'SEO Orgânico', value: '+150%' },
        roi: { label: 'ROI em Ads', value: '8.5x' },
        growth: { label: 'Crescimento', value: '24/7' }
      }
    },
    about: {
      badge: 'Trajetória Profissional',
      heading: 'Especialista que entende o',
      headingHighlight: 'caminho do crescimento.',
      bio: 'Com mais de duas décadas de experiência no mercado digital, Fernando Carneiro (Nando Silva) consolidou-se como uma referência em SEO e Marketing de Performance. Sua jornada é pautada por uma busca incansável pela excelência e resultados tangíveis.',
      experienceYears: '20+',
      experienceLabelLine1: 'Anos de',
      experienceLabelLine2: 'Experiência',
      features: [
        { title: 'Expert em SEO', desc: 'Domínio técnico e estratégico de algoritmos.' },
        { title: 'Foco em ROI', desc: 'Cada centavo investido deve retornar lucro.' },
        { title: 'Data Driven', desc: 'Decisões baseadas em análises de dados precisas.' },
        { title: 'Mentoria', desc: 'Consultoria estratégica para líderes e times.' }
      ]
    },
    services: {
      badge: 'Especializações',
      heading: 'Soluções para',
      headingHighlight: 'acelerar seu negócio.',
      description: 'Trabalhamos com o que há de mais moderno em tecnologia e estratégia para garantir que sua marca seja encontrada por quem importa.',
      learnMore: 'Saiba mais',
      details: {
        backBtn: 'Voltar para Serviços',
        whyInvest: 'Por que investir nesta solução?',
        methodology: 'Nossa Metodologia',
        readyTitle: 'Pronto para acelerar?',
        readyDesc: 'Agende uma consultoria estratégica gratuita de 15 minutos para diagnosticarmos seu cenário atual.',
        whatsappCta: 'Falar no WhatsApp'
      },
      items: [
        {
          id: 'seo',
          title: 'SEO Estratégico',
          description: 'Otimização on-page e off-page para dominar a primeira página do Google e Google Maps.',
          extendedDescription: 'Muito além de palavras-chave, construímos autoridade técnica e semântica para que seu negócio seja a resposta número 1 do Google.',
          color: 'bg-blue-600',
          benefits: [
            'Redução do custo de aquisição (CAC)',
            'Aumento exponencial de leads orgânicos',
            'Visibilidade máxima no Google Maps local',
            'Autoridade de marca a longo prazo'
          ],
          process: [
            { title: 'Auditoria Técnica', desc: 'Análise profunda de saúde do site, velocidade e indexação.' },
            { title: 'Keyword Intelligence', desc: 'Mapeamento de intenção de busca do seu cliente ideal.' },
            { title: 'Content Clustering', desc: 'Criação de redes de conteúdo que provam sua autoridade.' },
            { title: 'Link Building', desc: 'Estratégias éticas de ganho de backlinks de alta relevância.' }
          ]
        },
        {
          id: 'marketing',
          title: 'Marketing Digital',
          description: 'Estratégias completas de aquisição e retenção para aumentar seu market share.',
          extendedDescription: 'Planejamento 360º focado em crescimento escalável, integrando branding, performance e canais de aquisição.',
          color: 'bg-indigo-600',
          benefits: [
            'Visão estratégica de crescimento',
            'Posicionamento de marca premium',
            'Melhoria nas taxas de conversão (CRO)',
            'Retenção e LTV otimizados'
          ],
          process: [
            { title: 'Diagnóstico de Mercado', desc: 'Análise de concorrentes e oportunidades de nicho.' },
            { title: 'Funil de Vendas', desc: 'Desenho da jornada do usuário da descoberta à compra.' },
            { title: 'Growth Strategies', desc: 'Testes rápidos para encontrar canais de escala.' },
            { title: 'Analytics & BI', desc: 'Relatórios claros focados em métricas de negócio.' }
          ]
        },
        {
          id: 'sites',
          title: 'Criação de Sites',
          description: 'Landing Pages e E-commerces ultra velozes focados em alta conversão e UX.',
          extendedDescription: 'Desenvolvemos interfaces que não são apenas bonitas, mas máquinas de vendas otimizadas para performance máxima.',
          color: 'bg-sky-600',
          benefits: [
            'Velocidade de carregamento extrema',
            'Foco total em conversão (UX/UI)',
            'Mobile-first por natureza',
            'Código limpo e amigável ao SEO'
          ],
          process: [
            { title: 'UI/UX Design', desc: 'Prototipagem focada na experiência e persuasão.' },
            { title: 'Desenvolvimento Web', desc: 'Implementação de alta performance e segurança.' },
            { title: 'Integrações', desc: 'Conexão perfeita com CRMs, ERPs e Pixels.' },
            { title: 'QA & Otimização', desc: 'Testes rigorosos de usabilidade e velocidade.' }
          ]
        },
        {
          id: 'trafego',
          title: 'Tráfego Pago',
          description: 'Gestão profissional de Google Ads e Social Ads com foco absoluto em ROAS positivo.',
          extendedDescription: 'Gerenciamos seu orçamento como se fosse nosso, buscando o máximo retorno sobre o investimento em anúncios.',
          color: 'bg-violet-600',
          benefits: [
            'Resultados imediatos no curto prazo',
            'Segmentação ultra-específica',
            'Escalabilidade rápida de vendas',
            'Acompanhamento diário de performance'
          ],
          process: [
            { title: 'Estruturação de Conta', desc: 'Configuração técnica impecável de conversões.' },
            { title: 'Copywriting Persuasivo', desc: 'Anúncios que clicam e vendem.' },
            { title: 'Otimização Contínua', desc: 'Ajustes diários de lances e criativos.' },
            { title: 'Retargeting Inteligente', desc: 'Impactando quem já demonstrou interesse.' }
          ]
        },
        {
          id: 'global',
          title: 'Presença Global',
          description: 'Expansão de marcas para mercados internacionais com estratégias de SEO multilingue.',
          extendedDescription: 'Levamos seu negócio para além das fronteiras com estratégias de SEO e marketing internacional adaptadas a cada cultura.',
          color: 'bg-cyan-600',
          benefits: [
            'Acesso a novos mercados globais',
            'SEO Internacional (Hreflang e CC-TLDs)',
            'Localização de conteúdo estratégica',
            'Autoridade global reconhecida'
          ],
          process: [
            { title: 'Análise de Mercado Alvo', desc: 'Estudo de demanda e cultura de busca local.' },
            { title: 'Estratégia Multilingue', desc: 'Estrutura técnica para múltiplos idiomas.' },
            { title: 'Localização vs Tradução', desc: 'Adaptação cultural da mensagem de vendas.' },
            { title: 'Presença Local', desc: 'Criação de autoridade em regiões específicas.' }
          ]
        },
        {
          id: 'social',
          title: 'Social Content',
          description: 'Criação de autoridade através de conteúdos estratégicos que conectam e vendem.',
          extendedDescription: 'Transformamos suas redes sociais em canais de autoridade, gerando conexão real e demanda pelo seu produto ou serviço.',
          color: 'bg-blue-700',
          benefits: [
            'Autoridade percebida de mercado',
            'Engajamento real com a audiência',
            'Criação de comunidade em volta da marca',
            'Suporte orgânico para campanhas de Ads'
          ],
          process: [
            { title: 'Estratégia de Editoria', desc: 'Mapeamento de tópicos de interesse do público.' },
            { title: 'Visual Branding', desc: 'Identidade visual forte para os canais sociais.' },
            { title: 'Cronograma de Postagens', desc: 'Consistência estratégica que gera resultados.' },
            { title: 'Gestão de Comunidade', desc: 'Interação humana que converte seguidores em fãs.' }
          ]
        },
        {
          id: 'video',
          title: 'Edição e Criação de Vídeos',
          description: 'Vídeos estratégicos para anúncios e redes sociais focados em alta conversão.',
          extendedDescription: 'Produzimos conteúdo audiovisual que não apenas prende a atenção, mas converte espectadores em clientes.',
          color: 'bg-red-600',
          benefits: ['Vídeos que geram autoridade', 'Foco em conversão', 'Design profissional', 'Edição dinâmica'],
          process: [
            { title: 'Roteirização', desc: 'Script focado em gatilhos mentais.' },
            { title: 'Produção', desc: 'Gravação ou edição profissional.' },
            { title: 'Edição', desc: 'Cortes dinâmicos e motion graphics.' },
            { title: 'Entrega', desc: 'Formatos otimizados para cada rede.' }
          ]
        },
        {
          id: 'design',
          title: 'Design Gráfico',
          description: 'Identidade visual e materiais de design que profissionalizam sua marca.',
          extendedDescription: 'Design estratégico que comunica os valores da sua empresa e atrai seu público-alvo.',
          color: 'bg-amber-600',
          benefits: ['Identidade marcante', 'Design consistente', 'Comunicação clara', 'Aumento de percepção de valor'],
          process: [
            { title: 'Briefing', desc: 'Entendimento da essência da marca.' },
            { title: 'Conceito', desc: 'Proposta visual estratégica.' },
            { title: 'Design', desc: 'Execução das peças com precisão.' },
            { title: 'Finalização', desc: 'Entrega em alta qualidade.' }
          ]
        },
        {
          id: 'appdev',
          title: 'Desenvolvimento de App',
          description: 'Desenvolvimento de aplicativos sob medida para alavancar seu negócio.',
          extendedDescription: 'Soluções móveis robustas e intuitivas que facilitam a vida do seu cliente e geram receita.',
          color: 'bg-emerald-600',
          benefits: ['Soluções customizadas', 'Foco em usabilidade', 'Segurança robusta', 'Escalabilidade'],
          process: [
            { title: 'Planejamento', desc: 'Definição de funcionalidades essenciais.' },
            { title: 'UI/UX Mobile', desc: 'Design focado na experiência mobile.' },
            { title: 'Desenvolvimento', desc: 'Criação do código com alta performance.' },
            { title: 'Lançamento', desc: 'Publicação e monitoramento.' }
          ]
        }
      ]
    },
    cases: {
      badge: 'Casos de Sucesso',
      heading: 'Resultados que',
      headingHighlight: 'falam por si.',
      description: 'Transformamos desafios complexos em números exponenciais. Conheça como escalamos negócios reais através da nossa metodologia.',
      viewDetails: 'Ver Detalhes do Caso',
      details: {
        backBtn: 'Voltar para o Portfólio',
        badgePrefix: 'Case Study',
        primaryMetric: 'Métrica Principal',
        finalImpact: 'Impacto Final',
        directRoi: 'ROI Direto',
        growth: 'Crescimento',
        zeroLoss: 'Perda de Leads',
        zeroText: 'Zero'
      },
      items: [
        {
          id: 'stellar',
          title: 'E-commerce de Moda Premium',
          client: 'Stellar Style',
          metric: '12.4x ROI',
          description: 'Reestruturação completa de SEO técnico e estratégia de Google Ads focada em audiência de luxo.',
          impact: '+240% em vendas orgânicas',
          color: 'from-blue-600 to-indigo-700',
          challengeTitle: 'O Desafio',
          challengeText: 'O cliente enfrentava estagnação de vendas. Apesar de ter produtos de alta costura, o custo de aquisição (CAC) estava corroendo as margens e a dependência exclusiva de anúncios pagos tornava o negócio vulnerável.',
          challengePoints: ['Baixa visibilidade orgânica', 'CAC acima do LTV', 'Site com baixa conversão', 'Concorrência agressiva'],
          strategyTitle: 'Nossa Estratégia',
          strategyText: 'Implementamos uma metodologia de 3 pilares focada em rentabilidade e diferenciação de marca.',
          strategySteps: [
            { title: '1. SEO de Autoridade', desc: 'Reestruturação da arquitetura da loja e otimização de categorias de alta margem de lucro.' },
            { title: '2. CRO & UX Premium', desc: 'Redesenho da jornada de compra para clientes de alto padrão, reduzindo abandono de carrinho.' },
            { title: '3. Performance Escalável', desc: 'Campanhas de Google Shopping e Search focadas em termos de intenção de compra de luxo.' }
          ],
          resultsTitle: 'Resultados Consolidados',
          resultsSubtitle: 'Dados auditados após 6 meses de execução.',
          metricLabel: 'ROI Direto',
          impactLabel: 'Crescimento',
          zeroLossLabel: 'Perda de Leads',
          ctaTitle: 'Gostaria de resultados assim no seu e-commerce?',
          ctaButton: 'Quero um Diagnóstico para minha Empresa'
        },
        {
          id: 'sorriso',
          title: 'Rede de Clínicas Odontológicas',
          client: 'Sorriso Ideal',
          metric: '+315% Leads',
          description: 'Implementação de SEO Local em 15 unidades, dominando o Google Maps para buscas regionais.',
          impact: 'Custo por Lead reduzido em 45%',
          color: 'from-emerald-500 to-teal-600',
          challengeTitle: 'O Desafio',
          challengeText: 'Com 15 clínicas em diferentes bairros e cidades, a rede sofria com unidades com agenda ociosa e custos exorbitantes em anúncios locais no Google e Meta.',
          challengePoints: ['Presença fragmentada no Google Maps', 'Altíssimo custo por agendamento', 'Falta de padronização nas fichas', 'Competição feroz em implantes e estética'],
          strategyTitle: 'Nossa Estratégia',
          strategyText: 'Dominância territorial hiperlocal combinada com páginas de conversão específicas por clínica.',
          strategySteps: [
            { title: '1. Otimização de Perfil de Empresa no Google', desc: 'Padronização, avaliações estratégicas e categorias específicas para cada especialidade.' },
            { title: '2. Landing Pages Hiperlocais', desc: 'Páginas velozes e focadas em agendamento via WhatsApp direto com a recepção local.' },
            { title: '3. Campanhas Regionais Inteligentes', desc: 'Google Ads configurados com raio cirúrgico de 3km ao redor de cada unidade.' }
          ],
          resultsTitle: 'Resultados Consolidados',
          resultsSubtitle: 'Métricas consolidadas em toda a rede de clínicas.',
          metricLabel: 'Aumento de Leads',
          impactLabel: 'Redução de CAC',
          zeroLossLabel: 'Unidades Ociosas',
          ctaTitle: 'Quer lotar a agenda da sua clínica ou consultório?',
          ctaButton: 'Agendar Diagnóstico Gratuito'
        },
        {
          id: 'fintech',
          title: 'SaaS de Gestão Financeira',
          client: 'Fintech Flow',
          metric: 'Top 1 Google',
          description: 'Marketing de conteúdo focado em fundo de funil, posicionando a marca como autoridade máxima no setor.',
          impact: '50k+ acessos mensais qualificados',
          color: 'from-orange-500 to-red-600',
          challengeTitle: 'O Desafio',
          challengeText: 'A plataforma competia com grandes players de software com orçamentos milionários, tornando impraticável competir apenas comprando palavras-chave no Google Ads.',
          challengePoints: ['CPCs proibitivos de mais de R$ 35 por clique', 'Baixa autoridade de domínio', 'Conteúdos superficiais sem conversão', 'Ciclo de vendas longo e sem nutrição'],
          strategyTitle: 'Nossa Estratégia',
          strategyText: 'Estratégia de Topic Clusters técnicos e calculadoras interativas que geram backlinks e leads de forma orgânica e perpétua.',
          strategySteps: [
            { title: '1. Engenharia de Busca Semântica', desc: 'Mapeamento de 400+ termos de busca usados por CFOs e gestores financeiros.' },
            { title: '2. Ferramentas Gratuitas (Side-Project Marketing)', desc: 'Criação de simuladores de fluxo de caixa e cálculo tributário que viralizaram organicamente.' },
            { title: '3. Autoridade e Backlinks de Alto Nível', desc: 'Publicações em portais de negócios e economia renomados.' }
          ],
          resultsTitle: 'Resultados Consolidados',
          resultsSubtitle: 'Dados extraídos do Google Search Console.',
          metricLabel: 'Posição Top 1',
          impactLabel: 'Tráfego Orgânico',
          zeroLossLabel: 'Dependência de Ads',
          ctaTitle: 'Pronto para dominar as buscas orgânicas do seu setor?',
          ctaButton: 'Construir Minha Estratégia'
        }
      ]
    },
    projects: {
      badge: 'Portfólio',
      heading: 'Impacto visual,',
      headingHighlight: 'resultados reais.',
      descriptionPrefix: 'Uma seleção de ',
      descriptionSuffix: ' projetos onde estratégia e design se uniram para transformar o faturamento dos clientes.',
      categories: {
        all: 'Todos',
        health: 'Saúde',
        ecommerce: 'E-commerce',
        tech: 'Tecnologia',
        marketing: 'Marketing',
        architecture: 'Arquitetura',
        institutional: 'Institucional'
      },
      visitWebsite: 'Visitar Website',
      ctaButton: 'Solicitar Projeto Similar',
      items: [
        {
          id: 1,
          title: 'ContabilVision',
          categoryKey: 'institutional',
          originalCategory: 'Contabilidade',
          image: 'https://i.postimg.cc/VLGtB57Y/contabil.png',
          description: 'Portal de contabilidade focado em autoridade e captação orgânica de leads B2B.',
          url: 'https://contabilvision.com.br/'
        },
        {
          id: 2,
          title: 'MyBNB Flats',
          categoryKey: 'institutional',
          originalCategory: 'Real Estate',
          image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
          description: 'Plataforma de reservas diretas para flats e imóveis de temporada com SEO local.',
          url: 'https://www.mybnb.imb.br/'
        },
        {
          id: 3,
          title: 'Câncer de Pele Brasília',
          categoryKey: 'health',
          originalCategory: 'Saúde',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
          description: 'Site institucional especializado em dermatologia oncológica de alta conversão.',
          url: 'https://cancerdepelebrasilia.com/'
        },
        {
          id: 4,
          title: 'Verum Tecnologia',
          categoryKey: 'tech',
          originalCategory: 'Tecnologia',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
          description: 'Interface tecnológica robusta para soluções em engenharia e indústria.',
          url: 'https://verum.tec.br/'
        },
        {
          id: 5,
          title: 'Connecto Arquitetura',
          categoryKey: 'architecture',
          originalCategory: 'Arquitetura',
          image: 'https://i.postimg.cc/P5yRMWgn/conecto.png',
          description: 'Portfólio interativo para escritório de arquitetura focado em estética minimalista.',
          url: 'https://connectoarquitetura.com.br/'
        },
        {
          id: 6,
          title: 'Alquimia Diária',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
          description: 'Loja virtual de cosméticos naturais com foco em performance e checkout otimizado.',
          url: 'https://alquimia-diaria.vercel.app/'
        },
        {
          id: 8,
          title: 'Isa Arteira',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=800',
          description: 'Marketplace de artesanato personalizado com estratégia de tráfego de nicho.',
          url: 'https://isaarteira.com.br/'
        },
        {
          id: 12,
          title: 'Evidence Marketing',
          categoryKey: 'marketing',
          originalCategory: 'Marketing',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
          description: 'Presença institucional da agência com foco em prova social e cases.',
          url: 'https://evidencemarketing.com.br/'
        },
        {
          id: 13,
          title: 'Barra Square Joias',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
          description: 'Loja virtual de luxo com integração de catálogo em tempo real e SEO de produto.',
          url: 'https://www.barrasquarejoias.com.br/'
        },
        {
          id: 14,
          title: 'Cadian Solution',
          categoryKey: 'tech',
          originalCategory: 'Tecnologia',
          image: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=800',
          description: 'Otimização de SEO técnico para software de modelagem em engenharia.',
          url: 'https://www.cadian.com.br/'
        },
        {
          id: 17,
          title: 'Curso NR10 Superseg',
          categoryKey: 'institutional',
          originalCategory: 'Educação',
          image: 'https://i.postimg.cc/LXt4y028/curso-nr.png',
          description: 'Página de vendas de alta conversão para certificações de segurança do trabalho.',
          url: 'https://superseg.greennsales.com.br/curso-nr10'
        },
        {
          id: 19,
          title: 'Estância Árvore da Vida',
          categoryKey: 'institutional',
          originalCategory: 'Eventos',
          image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
          description: 'Site institucional para eventos em meio à natureza com tour virtual.',
          url: 'https://estanciaarvoredavida.com.br/'
        },
        {
          id: 20,
          title: 'Clínica Tripoli',
          categoryKey: 'health',
          originalCategory: 'Saúde',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
          description: 'Campanha de lançamento e agendamento digital para clínica odontológica.',
          url: 'https://inauguracao.clinicastripoli.com.br/'
        },
        {
          id: 21,
          title: 'Dra. Amanda Droguetti',
          categoryKey: 'health',
          originalCategory: 'Saúde',
          image: 'https://i.postimg.cc/CKFVhLg5/amanda.png',
          description: 'Consultório médico digital focado em autoridade e conveniência do paciente.',
          url: 'https://draamandadroguetti.com.br/'
        },
        {
          id: 22,
          title: '76 Garage',
          categoryKey: 'institutional',
          originalCategory: 'Automotivo',
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
          description: 'Portal para garagem de carros premium em Portugal com foco em vendas.',
          url: 'https://76garage.pt/'
        },
        {
          id: 23,
          title: 'São Paulo Dental',
          categoryKey: 'health',
          originalCategory: 'Saúde',
          image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
          description: 'Site institucional focado em odontologia de excelência e captação de pacientes.',
          url: 'https://saopaulodental.netlify.app/'
        },
        {
          id: 24,
          title: 'Network Assertiva',
          categoryKey: 'institutional',
          originalCategory: 'Institucional',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
          description: 'Plataforma focada em networking estratégico, conexões de negócios e desenvolvimento profissional.',
          url: 'https://networkassertiva.com/'
        },
        {
          id: 25,
          title: 'Pousada Ykape',
          categoryKey: 'institutional',
          originalCategory: 'Turismo',
          image: 'https://pousadaykape.site/image/pousada.jpg',
          description: 'Portal de pousada focado em reservas diretas e experiência de cliente.',
          url: 'https://pousadaykape.site/'
        }
      ]
    },
    certifications: {
      badge: 'Credibilidade',
      heading: 'Certificações de',
      headingHighlight: 'Elite.',
      viewCert: 'Ver Certificado',
      ctaTitle: 'Pronto para dominar o Google?',
      ctaDesc: 'Minha metodologia comprovada de 20 anos está disponível para seu negócio hoje mesmo. Vamos escalar?',
      ctaButton: 'Agendar Diagnóstico Grátis',
      items: [
        {
          name: 'Google Ads Search',
          issuer: 'Google Digital Academy',
          date: '2024',
          icon: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg'
        },
        {
          name: 'Google Analytics 4',
          issuer: 'Google Digital Academy',
          date: '2024',
          icon: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg'
        },
        {
          name: 'HubSpot SEO Master',
          issuer: 'HubSpot Academy',
          date: '2023',
          icon: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg'
        }
      ]
    },
    contact: {
      badge: 'Contato',
      heading: 'Vamos construir algo',
      headingHighlight: 'lendário.',
      description: 'Não importa o tamanho do seu projeto, o crescimento começa com uma conversa estratégica. Preencha o formulário e fale comigo agora.',
      emailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Localização',
      locationValue: 'São Paulo, SP - Brasil',
      form: {
        title: 'Solicitar Orçamento',
        subtitle: 'Ao clicar em enviar, os dados serão formatados e enviados diretamente para o meu WhatsApp.',
        nameLabel: 'Seu Nome',
        namePlaceholder: 'Ex: João Silva',
        emailLabel: 'E-mail Profissional',
        emailPlaceholder: 'contato@empresa.com',
        companyLabel: 'Site ou Nome da Empresa',
        companyPlaceholder: 'www.suaempresa.com.br',
        serviceLabel: 'Serviço de Interesse',
        serviceOptions: [
          'SEO Estratégico',
          'Tráfego Pago (Google/Meta Ads)',
          'Criação de Site de Alta Performance',
          'Consultoria de Marketing 360º',
          'SEO Internacional / Presença Global'
        ],
        budgetLabel: 'Investimento Mensal',
        budgetOptions: [
          'Até R$ 2.000',
          'R$ 2.000 a R$ 5.000',
          'R$ 5.000 a R$ 15.000',
          'Acima de R$ 15.000'
        ],
        messageLabel: 'Sobre o Projeto',
        messagePlaceholder: 'Conte-nos brevemente seus objetivos principais...',
        submitBtn: 'Enviar para o WhatsApp',
        submittingBtn: 'Preparando mensagem...',
        successTitle: 'Redirecionando...',
        successMessage: 'Seu orçamento foi formatado! Se a conversa não abriu automaticamente, clique no botão acima para concluir.',
        backBtn: 'Voltar ao formulário'
      }
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      privacy: 'Privacidade',
      terms: 'Termos',
      tagline: 'Estrategista Digital & Expert em SEO de Alta Performance'
    },
    whatsapp: {
      tooltip: 'Falar no WhatsApp',
      navMessage: 'Olá! Vi seu site e gostaria de falar sobre um projeto.',
      heroServiceMessage: 'Olá Fernando! Gostaria de saber mais sobre seus serviços de marketing digital.',
      caseMessagePrefix: 'Olá Fernando! Vi o caso de sucesso da {client} e gostaria de algo similar para minha empresa.',
      serviceMessagePrefix: 'Olá Fernando! Gostaria de saber mais detalhes sobre o serviço de {title}.',
      projectMessage: 'Olá Fernando! Gostaria de falar sobre um projeto similar aos do seu portfólio.',
      diagnosticMessage: 'Olá Fernando! Gostaria de agendar um diagnóstico gratuito para meu negócio.',
      contactMessage: 'Olá Fernando! Vi seu portfólio e gostaria de falar sobre um projeto.'
    }
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      cases: 'Cases',
      projects: 'Projects',
      testimonials: 'Testimonials',
      certifications: 'Certifications',
      contact: 'Contact',
      freeConsultation: 'Free Consultation',
      talkToMe: 'Get in Touch'
    },
    hero: {
      badge: 'SEO & Performance Specialist',
      titleLine1: 'YOUR BUSINESS',
      titleHighlight: 'Digital Results',
      description: 'Accelerating company growth through advanced SEO strategies, high-conversion Content Marketing, and Data Intelligence.',
      btnSolutions: 'View Solutions',
      btnCases: 'Success Stories',
      scrollText: 'Scroll to explore',
      stats: {
        seo: { label: 'Organic SEO', value: '+150%' },
        roi: { label: 'Ads ROI', value: '8.5x' },
        growth: { label: 'Growth', value: '24/7' }
      }
    },
    about: {
      badge: 'Professional Journey',
      heading: 'A specialist who understands the',
      headingHighlight: 'path to real growth.',
      bio: 'With over two decades of digital marketing experience, Fernando Carneiro (Nando Silva) is an acknowledged authority in SEO and Performance Marketing. His journey is driven by a relentless focus on high execution standards and tangible business outcomes.',
      experienceYears: '20+',
      experienceLabelLine1: 'Years of',
      experienceLabelLine2: 'Experience',
      features: [
        { title: 'SEO Master', desc: 'Technical and strategic command of search engines.' },
        { title: 'ROI Driven', desc: 'Every marketing dollar must yield positive profit.' },
        { title: 'Data Driven', desc: 'Decisions backed by precise analytics and metrics.' },
        { title: 'Strategic Advisory', desc: 'High-level consulting for founders and teams.' }
      ]
    },
    services: {
      badge: 'Expertise',
      heading: 'Solutions engineered to',
      headingHighlight: 'scale your business.',
      description: 'We leverage state-of-the-art marketing technology and battle-tested strategies so your brand is discovered by high-intent buyers.',
      learnMore: 'Learn more',
      details: {
        backBtn: 'Back to Services',
        whyInvest: 'Why invest in this solution?',
        methodology: 'Our Methodology',
        readyTitle: 'Ready to scale?',
        readyDesc: 'Schedule a free 15-minute strategic audit to review your current growth bottlenecks.',
        whatsappCta: 'Chat on WhatsApp'
      },
      items: [
        {
          id: 'seo',
          title: 'Strategic SEO',
          description: 'On-page and off-page optimization engineered to conquer Google’s top ranking and Google Maps.',
          extendedDescription: 'Beyond simple keywords, we build technical authority and topical depth so your company becomes Google’s premier answer.',
          color: 'bg-blue-600',
          benefits: [
            'Dramatically lowers Customer Acquisition Cost (CAC)',
            'Exponential increase in organic inbound leads',
            'Maximum visibility across local Google Maps',
            'Compounding long-term brand authority'
          ],
          process: [
            { title: 'Technical Audit', desc: 'Deep dive into site health, Core Web Vitals, speed, and indexing.' },
            { title: 'Keyword Intelligence', desc: 'Mapping search intent and buyer persona terminology.' },
            { title: 'Content Clustering', desc: 'Structured topic clusters proving topical authority.' },
            { title: 'Link Building', desc: 'White-hat backlink acquisition from high-tier publications.' }
          ]
        },
        {
          id: 'marketing',
          title: 'Digital Marketing',
          description: 'Full-funnel acquisition and retention strategies designed to expand your market share.',
          extendedDescription: 'Holistic 360º growth planning connecting brand equity, paid performance, and conversion funnels.',
          color: 'bg-indigo-600',
          benefits: [
            'Predictable, scalable growth roadmap',
            'Premium market positioning and trust',
            'Optimized conversion rate optimization (CRO)',
            'Enhanced customer retention and lifetime value (LTV)'
          ],
          process: [
            { title: 'Market Diagnosis', desc: 'Deep competitor benchmark and underserved niche opportunities.' },
            { title: 'Sales Funnel Design', desc: 'Crafting customer journey from awareness to checkout.' },
            { title: 'Growth Experiments', desc: 'Rapid hypothesis testing to uncover scalable channels.' },
            { title: 'Analytics & BI', desc: 'Executive dashboards focused on bottom-line profit.' }
          ]
        },
        {
          id: 'sites',
          title: 'Web Development',
          description: 'High-speed landing pages and e-commerce stores optimized for UX and conversion.',
          extendedDescription: 'We develop beautiful, ultra-fast web experiences built from the ground up as automated selling engines.',
          color: 'bg-sky-600',
          benefits: [
            'Sub-second page loading speed',
            'Engineered for maximum lead conversion',
            'Mobile-first responsive architecture',
            'Clean semantic code loved by search bots'
          ],
          process: [
            { title: 'UI/UX Prototyping', desc: 'Intuitive user interface focused on frictionless persuasion.' },
            { title: 'Modern Engineering', desc: 'High-performance code with enterprise-grade security.' },
            { title: 'Integrations', desc: 'Seamless synchronization with CRMs, payment gateways & pixels.' },
            { title: 'QA & Optimization', desc: 'Rigorous cross-device testing and performance tuning.' }
          ]
        },
        {
          id: 'trafego',
          title: 'Paid Media (PPC)',
          description: 'Expert management of Google Ads and Social Ads with strict discipline on ROAS.',
          extendedDescription: 'We manage your ad budget with the diligence of business owners, focusing on profitable return on ad spend.',
          color: 'bg-violet-600',
          benefits: [
            'Immediate short-term qualified traffic',
            'Ultra-targeted demographic & intent segmentation',
            'Rapid revenue scaling capabilities',
            'Daily monitoring and proactive bid adjustments'
          ],
          process: [
            { title: 'Account Architecture', desc: 'Flawless server-side conversion tracking setup.' },
            { title: 'High-Converting Copy', desc: 'Compelling headlines and creative angles that convert.' },
            { title: 'Ongoing Optimization', desc: 'Daily algorithmic fine-tuning and negative keywords.' },
            { title: 'Smart Retargeting', desc: 'Re-engaging high-intent prospects at the lowest CPA.' }
          ]
        },
        {
          id: 'global',
          title: 'Global Presence',
          description: 'International brand expansion powered by multilingual SEO and cultural localization.',
          extendedDescription: 'Take your business across borders with international SEO and targeted campaigns tailored to foreign markets.',
          color: 'bg-cyan-600',
          benefits: [
            'Access to lucrative foreign markets',
            'International SEO architecture (Hreflang & ccTLDs)',
            'Culturally attuned content localization',
            'Worldwide brand prestige and trust'
          ],
          process: [
            { title: 'Target Market Research', desc: 'Analyzing local search volume, competitors, and habits.' },
            { title: 'Multilingual Architecture', desc: 'Technical setup for seamless language routing.' },
            { title: 'Localization vs Translation', desc: 'Adapting the sales pitch to local cultural nuances.' },
            { title: 'Local Authority', desc: 'Establishing backlinks and regional digital footprint.' }
          ]
        },
        {
          id: 'social',
          title: 'Social Content',
          description: 'Establishing industry authority through high-impact content that attracts and converts.',
          extendedDescription: 'We turn your social media channels into powerful authority engines that generate authentic customer demand.',
          color: 'bg-blue-700',
          benefits: [
            'Elevated market authority and credibility',
            'Engaged and loyal audience community',
            'Strong social proof for brand validation',
            'Organic fuel that multiplies paid advertising efficiency'
          ],
          process: [
            { title: 'Editorial Strategy', desc: 'Mapping high-interest industry themes and problems.' },
            { title: 'Visual Branding', desc: 'Distinctive visual system that stands out in the feed.' },
            { title: 'Consistent Publishing', desc: 'Disciplined editorial calendar driving predictable reach.' },
            { title: 'Community Engagement', desc: 'Authentic interactions converting followers into clients.' }
          ]
        },
        {
          id: 'video',
          title: 'Video Editing & Creation',
          description: 'Strategic videos for ads and social media focused on high conversion.',
          extendedDescription: 'We produce audiovisual content that doesn\'t just capture attention, but converts viewers into customers.',
          color: 'bg-red-600',
          benefits: ['Authority-building videos', 'Conversion-focused', 'Professional design', 'Dynamic editing'],
          process: [
            { title: 'Scripting', desc: 'Scripts focused on psychological triggers.' },
            { title: 'Production', desc: 'Professional recording or editing.' },
            { title: 'Editing', desc: 'Dynamic cuts and motion graphics.' },
            { title: 'Delivery', desc: 'Formats optimized for each network.' }
          ]
        },
        {
          id: 'design',
          title: 'Graphic Design',
          description: 'Visual identity and design materials that professionalize your brand.',
          extendedDescription: 'Strategic design that communicates your company\'s values and attracts your target audience.',
          color: 'bg-amber-600',
          benefits: ['Distinctive identity', 'Consistent design', 'Clear communication', 'Increased value perception'],
          process: [
            { title: 'Briefing', desc: 'Understanding the brand essence.' },
            { title: 'Concept', desc: 'Strategic visual proposal.' },
            { title: 'Design', desc: 'Precision execution of materials.' },
            { title: 'Finalization', desc: 'High-quality delivery.' }
          ]
        },
        {
          id: 'appdev',
          title: 'App Development',
          description: 'Bespoke application development to leverage your business.',
          extendedDescription: 'Robust and intuitive mobile solutions that make your customer\'s life easier and drive revenue.',
          color: 'bg-emerald-600',
          benefits: ['Customized solutions', 'Usability focus', 'Robust security', 'Scalability'],
          process: [
            { title: 'Planning', desc: 'Defining essential functionality.' },
            { title: 'Mobile UI/UX', desc: 'Design focused on mobile experience.' },
            { title: 'Development', desc: 'High-performance code creation.' },
            { title: 'Launch', desc: 'Publication and monitoring.' }
          ]
        }
      ]
    },
    cases: {
      badge: 'Success Stories',
      heading: 'Results that',
      headingHighlight: 'speak for themselves.',
      description: 'We turn complex business challenges into exponential gains. See how we scaled real businesses with our proven methodologies.',
      viewDetails: 'View Case Details',
      details: {
        backBtn: 'Back to Portfolio',
        badgePrefix: 'Case Study',
        primaryMetric: 'Core Metric',
        finalImpact: 'Final Impact',
        directRoi: 'Direct ROI',
        growth: 'Growth',
        zeroLoss: 'Lead Loss',
        zeroText: 'Zero'
      },
      items: [
        {
          id: 'stellar',
          title: 'Luxury Fashion E-commerce',
          client: 'Stellar Style',
          metric: '12.4x ROI',
          description: 'Complete technical SEO restructuring and luxury-focused Google Ads strategy.',
          impact: '+240% organic revenue',
          color: 'from-blue-600 to-indigo-700',
          challengeTitle: 'The Challenge',
          challengeText: 'The brand faced revenue stagnation. Despite having high-end apparel collections, mounting customer acquisition costs (CAC) were eroding margins, and over-reliance on ads left the business vulnerable.',
          challengePoints: ['Low organic search visibility', 'CAC exceeding customer LTV', 'Sub-optimal checkout conversion', 'Aggressive multinational competitors'],
          strategyTitle: 'Our Strategy',
          strategyText: 'We deployed a 3-pillar framework combining technical authority, premium UX, and intent-focused media buying.',
          strategySteps: [
            { title: '1. Authority SEO', desc: 'Complete restructuring of site taxonomy and optimization of high-margin luxury categories.' },
            { title: '2. Luxury CRO & UX', desc: 'Streamlining the customer journey for affluent buyers, eliminating checkout friction.' },
            { title: '3. Scalable Performance Ads', desc: 'High-intent Google Shopping and Search campaigns capturing high-ticket shoppers.' }
          ],
          resultsTitle: 'Consolidated Results',
          resultsSubtitle: 'Audited performance data after 6 months of execution.',
          metricLabel: 'Direct ROI',
          impactLabel: 'Growth',
          zeroLossLabel: 'Lead Loss',
          ctaTitle: 'Ready to achieve similar revenue growth for your store?',
          ctaButton: 'Request a Free Business Audit'
        },
        {
          id: 'sorriso',
          title: 'Dental Clinic Network',
          client: 'Sorriso Ideal',
          metric: '+315% Leads',
          description: 'Local SEO execution across 15 clinics, dominating Google Maps for regional dental searches.',
          impact: 'Cost per Lead down by 45%',
          color: 'from-emerald-500 to-teal-600',
          challengeTitle: 'The Challenge',
          challengeText: 'Operating 15 clinics across multiple metropolitan districts, the network struggled with empty treatment schedules and skyrocketing paid ad costs.',
          challengePoints: ['Fragmented Google Maps presence', 'Exorbitant appointment acquisition cost', 'Unoptimized Google Business profiles', 'Intense local competitive pressure'],
          strategyTitle: 'Our Strategy',
          strategyText: 'Hyperlocal digital dominance paired with dedicated, high-converting location landing pages.',
          strategySteps: [
            { title: '1. Google Business Profile Optimization', desc: 'Standardization, review velocity systems, and sub-specialty categories for each clinic.' },
            { title: '2. Hyperlocal Landing Pages', desc: 'Lightning-fast landing pages routing patients directly to nearby clinic coordinators.' },
            { title: '3. Smart Geofenced PPC', desc: 'Laser-focused Google Ads campaigns within a 2-mile radius of each clinic.' }
          ],
          resultsTitle: 'Consolidated Results',
          resultsSubtitle: 'Aggregated metrics across all 15 operational locations.',
          metricLabel: 'Lead Increase',
          impactLabel: 'CAC Reduction',
          zeroLossLabel: 'Empty Schedules',
          ctaTitle: 'Want to fill the schedule of your clinic or practice?',
          ctaButton: 'Schedule Free Consultation'
        },
        {
          id: 'fintech',
          title: 'Financial SaaS Platform',
          client: 'Fintech Flow',
          metric: 'Top 1 Google',
          description: 'Bottom-of-the-funnel content marketing establishing the software as the benchmark authority.',
          impact: '50k+ qualified monthly visits',
          color: 'from-orange-500 to-red-600',
          challengeTitle: 'The Challenge',
          challengeText: 'The SaaS platform competed against legacy enterprise vendors with multimillion-dollar ad budgets, making keyword bidding financially unsustainable.',
          challengePoints: ['Prohibitive CPCs exceeding $7 per click', 'Low domain rating compared to incumbents', 'Generic content failing to generate signups', 'Long B2B enterprise sales cycles'],
          strategyTitle: 'Our Strategy',
          strategyText: 'Technical topic clustering paired with interactive financial calculator tools that generated massive viral backlinks and compounding leads.',
          strategySteps: [
            { title: '1. Semantic Search Engineering', desc: 'Mapped 400+ high-intent transactional search queries used by financial controllers.' },
            { title: '2. Side-Project Marketing Tools', desc: 'Built free tax and cash flow simulators that ranked #1 and captured thousands of leads.' },
            { title: '3. Tier-1 Backlink PR', desc: 'Secured high-authority media coverage in reputable financial journals.' }
          ],
          resultsTitle: 'Consolidated Results',
          resultsSubtitle: 'Verified data straight from Google Search Console.',
          metricLabel: 'Top 1 Rank',
          impactLabel: 'Organic Traffic',
          zeroLossLabel: 'Ad Dependency',
          ctaTitle: 'Ready to dominate organic search in your industry?',
          ctaButton: 'Build My Growth Strategy'
        }
      ]
    },
    projects: {
      badge: 'Portfolio',
      heading: 'Visual impact,',
      headingHighlight: 'tangible business results.',
      descriptionPrefix: 'A curated selection of ',
      descriptionSuffix: ' client projects where strategic design and performance drove revenue expansion.',
      categories: {
        all: 'All',
        health: 'Healthcare',
        ecommerce: 'E-commerce',
        tech: 'Technology',
        marketing: 'Marketing',
        architecture: 'Architecture',
        institutional: 'Corporate'
      },
      visitWebsite: 'Visit Website',
      ctaButton: 'Request Similar Project',
      items: [
        {
          id: 1,
          title: 'ContabilVision',
          categoryKey: 'institutional',
          originalCategory: 'Accounting',
          image: 'https://i.postimg.cc/VLGtB57Y/contabil.png',
          description: 'Corporate accounting portal engineered for B2B authority and organic inbound leads.',
          url: 'https://contabilvision.com.br/'
        },
        {
          id: 2,
          title: 'MyBNB Flats',
          categoryKey: 'institutional',
          originalCategory: 'Real Estate',
          image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
          description: 'Direct booking real estate platform for vacation flats powered by local SEO.',
          url: 'https://www.mybnb.imb.br/'
        },
        {
          id: 3,
          title: 'Câncer de Pele Brasília',
          categoryKey: 'health',
          originalCategory: 'Healthcare',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
          description: 'High-converting medical portal specialized in clinical oncology dermatology.',
          url: 'https://cancerdepelebrasilia.com/'
        },
        {
          id: 4,
          title: 'Verum Tecnologia',
          categoryKey: 'tech',
          originalCategory: 'Technology',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
          description: 'Robust technical platform for advanced engineering and industrial solutions.',
          url: 'https://verum.tec.br/'
        },
        {
          id: 5,
          title: 'Connecto Arquitetura',
          categoryKey: 'architecture',
          originalCategory: 'Architecture',
          image: 'https://i.postimg.cc/P5yRMWgn/conecto.png',
          description: 'Interactive architectural portfolio emphasizing minimal luxury aesthetics.',
          url: 'https://connectoarquitetura.com.br/'
        },
        {
          id: 6,
          title: 'Alquimia Diária',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
          description: 'Natural skincare store with optimized checkout and performance UX.',
          url: 'https://alquimia-diaria.vercel.app/'
        },
        {
          id: 8,
          title: 'Isa Arteira',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=800',
          description: 'Artisan craft marketplace backed by hyper-segmented traffic funnels.',
          url: 'https://isaarteira.com.br/'
        },
        {
          id: 12,
          title: 'Evidence Marketing',
          categoryKey: 'marketing',
          originalCategory: 'Marketing',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
          description: 'Agency showcase spotlighting social proof, verified cases, and client milestones.',
          url: 'https://evidencemarketing.com.br/'
        },
        {
          id: 13,
          title: 'Barra Square Joias',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
          description: 'High-end jewelry store with real-time stock sync and technical product SEO.',
          url: 'https://www.barrasquarejoias.com.br/'
        },
        {
          id: 14,
          title: 'Cadian Solution',
          categoryKey: 'tech',
          originalCategory: 'Technology',
          image: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=800',
          description: 'Technical SEO optimization for industry-leading CAD engineering software.',
          url: 'https://www.cadian.com.br/'
        },
        {
          id: 17,
          title: 'Curso NR10 Superseg',
          categoryKey: 'institutional',
          originalCategory: 'Education',
          image: 'https://i.postimg.cc/LXt4y028/curso-nr.png',
          description: 'High-conversion sales page for certified industrial workplace safety training.',
          url: 'https://superseg.greennsales.com.br/curso-nr10'
        },
        {
          id: 19,
          title: 'Estância Árvore da Vida',
          categoryKey: 'institutional',
          originalCategory: 'Events',
          image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
          description: 'Scenic event retreat showcase featuring immersive virtual tours and inquiries.',
          url: 'https://estanciaarvoredavida.com.br/'
        },
        {
          id: 20,
          title: 'Clínica Tripoli',
          categoryKey: 'health',
          originalCategory: 'Healthcare',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
          description: 'Grand opening campaign and appointment booking portal for private dental clinic.',
          url: 'https://inauguracao.clinicastripoli.com.br/'
        },
        {
          id: 21,
          title: 'Dra. Amanda Droguetti',
          categoryKey: 'health',
          originalCategory: 'Healthcare',
          image: 'https://i.postimg.cc/CKFVhLg5/amanda.png',
          description: 'Private medical practice portal designed around patient trust and ease of booking.',
          url: 'https://draamandadroguetti.com.br/'
        },
        {
          id: 22,
          title: '76 Garage',
          categoryKey: 'institutional',
          originalCategory: 'Automotive',
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
          description: 'Premium European automotive dealership portal focused on collector car sales.',
          url: 'https://76garage.pt/'
        },
        {
          id: 23,
          title: 'São Paulo Dental',
          categoryKey: 'health',
          originalCategory: 'Healthcare',
          image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
          description: 'Premier dentistry website generating consistent high-ticket patient inquiries.',
          url: 'https://saopaulodental.netlify.app/'
        },
        {
          id: 24,
          title: 'Network Assertiva',
          categoryKey: 'institutional',
          originalCategory: 'Corporate',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
          description: 'Strategic networking and business connection platform fostering executive growth.',
          url: 'https://networkassertiva.com/'
        },
        {
          id: 25,
          title: 'Pousada Ykape',
          categoryKey: 'institutional',
          originalCategory: 'Tourism',
          image: 'https://pousadaykape.site/image/pousada.jpg',
          description: 'Boutique guesthouse portal focused on direct bookings and customer experience.',
          url: 'https://pousadaykape.site/'
        }
      ]
    },
    certifications: {
      badge: 'Credibility',
      heading: 'Elite Industry',
      headingHighlight: 'Certifications.',
      viewCert: 'View Credential',
      ctaTitle: 'Ready to dominate Google search?',
      ctaDesc: 'My 20 years of battle-tested methodology is ready to work for your company today. Shall we scale?',
      ctaButton: 'Schedule Free Audit',
      items: [
        {
          name: 'Google Ads Search',
          issuer: 'Google Digital Academy',
          date: '2024',
          icon: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg'
        },
        {
          name: 'Google Analytics 4',
          issuer: 'Google Digital Academy',
          date: '2024',
          icon: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg'
        },
        {
          name: 'HubSpot SEO Master',
          issuer: 'HubSpot Academy',
          date: '2023',
          icon: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg'
        }
      ]
    },
    contact: {
      badge: 'Contact',
      heading: 'Let’s build something',
      headingHighlight: 'legendary.',
      description: 'Regardless of your project size, meaningful revenue growth begins with a strategic conversation. Fill out the form to connect directly.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Location',
      locationValue: 'São Paulo, Brazil (Global Remote)',
      form: {
        title: 'Request a Strategic Quote',
        subtitle: 'Upon clicking submit, your project scope will be neatly formatted and opened directly on WhatsApp.',
        nameLabel: 'Your Name',
        namePlaceholder: 'e.g. John Doe',
        emailLabel: 'Corporate Email',
        emailPlaceholder: 'john@company.com',
        companyLabel: 'Website or Company Name',
        companyPlaceholder: 'www.yourcompany.com',
        serviceLabel: 'Service of Interest',
        serviceOptions: [
          'Strategic SEO',
          'Paid Traffic (Google/Meta Ads)',
          'High-Performance Web Development',
          '360º Marketing Advisory',
          'International SEO & Global Expansion'
        ],
        budgetLabel: 'Monthly Investment Budget',
        budgetOptions: [
          'Up to $1,000 / mo',
          '$1,000 to $2,500 / mo',
          '$2,500 to $6,000 / mo',
          'Above $6,000 / mo'
        ],
        messageLabel: 'About the Project',
        messagePlaceholder: 'Briefly describe your current goals, challenges, or timeline...',
        submitBtn: 'Send via WhatsApp',
        submittingBtn: 'Formatting request...',
        successTitle: 'Redirecting...',
        successMessage: 'Your quote details have been generated! If WhatsApp does not launch automatically, click the button to proceed.',
        backBtn: 'Back to form'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      tagline: 'Digital Strategist & High-Performance SEO Authority'
    },
    whatsapp: {
      tooltip: 'Chat on WhatsApp',
      navMessage: 'Hello! I saw your website and would like to discuss a project.',
      heroServiceMessage: 'Hello Fernando! I would like to learn more about your digital marketing and SEO services.',
      caseMessagePrefix: 'Hello Fernando! I checked out your case study with {client} and would like something similar for my business.',
      serviceMessagePrefix: 'Hello Fernando! I would like more details about your {title} service.',
      projectMessage: 'Hello Fernando! I would like to discuss a project similar to those in your portfolio.',
      diagnosticMessage: 'Hello Fernando! I would like to schedule a free strategic diagnostic for my business.',
      contactMessage: 'Hello Fernando! I checked your portfolio and would like to talk about a project.'
    }
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      cases: 'Casos',
      projects: 'Proyectos',
      testimonials: 'Testimonios',
      certifications: 'Certificaciones',
      contact: 'Contacto',
      freeConsultation: 'Consultoría Gratuita',
      talkToMe: 'Contáctame'
    },
    hero: {
      badge: 'Especialista en SEO y Rendimiento',
      titleLine1: 'SU EMPRESA',
      titleHighlight: 'Resultados Digitales',
      description: 'Impulsando el crecimiento de empresas mediante estrategias avanzadas de SEO, Marketing de Contenidos e Inteligencia de Datos.',
      btnSolutions: 'Ver Soluciones',
      btnCases: 'Casos de Éxito',
      scrollText: 'Desplaza para descubrir',
      stats: {
        seo: { label: 'SEO Orgánico', value: '+150%' },
        roi: { label: 'ROI en Anuncios', value: '8.5x' },
        growth: { label: 'Crecimiento', value: '24/7' }
      }
    },
    about: {
      badge: 'Trayectoria Profesional',
      heading: 'Un especialista que entiende el',
      headingHighlight: 'camino del crecimiento.',
      bio: 'Con más de dos décadas de experiencia en el mercado digital, Fernando Carneiro (Nando Silva) se ha consolidado como un referente indiscutible en SEO y Marketing de Rendimiento. Su carrera se define por la búsqueda incesante de la excelencia y resultados comprobables.',
      experienceYears: '20+',
      experienceLabelLine1: 'Años de',
      experienceLabelLine2: 'Experiencia',
      features: [
        { title: 'Experto en SEO', desc: 'Dominio técnico y estratégico de algoritmos.' },
        { title: 'Enfoque en ROI', desc: 'Cada centavo invertido debe generar beneficios.' },
        { title: 'Data Driven', desc: 'Decisiones fundamentadas en analítica precisa.' },
        { title: 'Mentoría Estratégica', desc: 'Asesoría de alto nivel para directivos y equipos.' }
      ]
    },
    services: {
      badge: 'Especializaciones',
      heading: 'Soluciones para',
      headingHighlight: 'acelerar su negocio.',
      description: 'Trabajamos con tecnología punta y estrategias probadas para garantizar que su marca sea descubierta por clientes de alto valor.',
      learnMore: 'Saber más',
      details: {
        backBtn: 'Volver a Servicios',
        whyInvest: '¿Por qué invertir en esta solución?',
        methodology: 'Nuestra Metodología',
        readyTitle: '¿Listo para acelerar?',
        readyDesc: 'Agende una consultoría estratégica gratuita de 15 minutos para diagnosticar su situación actual.',
        whatsappCta: 'Hablar por WhatsApp'
      },
      items: [
        {
          id: 'seo',
          title: 'SEO Estratégico',
          description: 'Optimización on-page y off-page para dominar la primera página de Google y Google Maps.',
          extendedDescription: 'Mucho más allá de las palabras clave, construimos autoridad semántica y técnica para que su negocio sea la respuesta número uno en Google.',
          color: 'bg-blue-600',
          benefits: [
            'Reducción drástica del coste de adquisición (CAC)',
            'Incremento exponencial de clientes potenciales orgánicos',
            'Máxima visibilidad en Google Maps local',
            'Autoridad de marca sostenible a largo plazo'
          ],
          process: [
            { title: 'Auditoría Técnica', desc: 'Diagnóstico exhaustivo de indexación, arquitectura y velocidad.' },
            { title: 'Inteligencia de Palabras Clave', desc: 'Mapeo de la intención de compra real de su cliente ideal.' },
            { title: 'Topic Clusters', desc: 'Estructuración de contenidos temáticos de alta autoridad.' },
            { title: 'Link Building Ético', desc: 'Estrategias de enlaces entrantes desde portales de prestigio.' }
          ]
        },
        {
          id: 'marketing',
          title: 'Marketing Digital',
          description: 'Estrategias integrales de captación y fidelización para incrementar su cuota de mercado.',
          extendedDescription: 'Planificación 360º orientada al crecimiento escalable, alineando branding, rendimiento y canales de captación.',
          color: 'bg-indigo-600',
          benefits: [
            'Hoja de ruta clara para escalar su facturación',
            'Posicionamiento de marca premium y de confianza',
            'Optimización sistemática de conversión (CRO)',
            'Mayor retención y valor de vida del cliente (LTV)'
          ],
          process: [
            { title: 'Diagnóstico del Mercado', desc: 'Análisis de competidores y nichos con alta demanda.' },
            { title: 'Embudo de Ventas', desc: 'Diseño integral de la experiencia desde el descubrimiento.' },
            { title: 'Estrategias de Crecimiento', desc: 'Pruebas ágiles para validar canales de tracción rentable.' },
            { title: 'Analítica y BI', desc: 'Cuadros de mando claros con métricas directas de negocio.' }
          ]
        },
        {
          id: 'sites',
          title: 'Desarrollo Web',
          description: 'Landing pages y tiendas online ultrarrápidas enfocadas en alta conversión y UX impecable.',
          extendedDescription: 'Creamos interfaces no solo atractivas, sino auténticas máquinas comerciales optimizadas para vender.',
          color: 'bg-sky-600',
          benefits: [
            'Velocidad de carga extrema e inmediata',
            'Diseño centrado 100% en la conversión',
            'Experiencia fluida mobile-first',
            'Código limpio amigable con los motores de búsqueda'
          ],
          process: [
            { title: 'Diseño UI/UX', desc: 'Prototipado intuitivo centrado en la persuasión.' },
            { title: 'Desarrollo Moderno', desc: 'Implementación técnica segura y de altísimo rendimiento.' },
            { title: 'Integraciones', desc: 'Conexión transparente con CRMs, pasarelas y píxeles.' },
            { title: 'QA y Optimización', desc: 'Pruebas rigurosas de usabilidad multidispositivo.' }
          ]
        },
        {
          id: 'trafego',
          title: 'Tráfico Pagado (Ads)',
          description: 'Gestión profesional de Google Ads y Social Ads con foco inquebrantable en ROAS positivo.',
          extendedDescription: 'Administramos su presupuesto con la máxima prudencia empresarial, maximizando el retorno neto de cada anuncio.',
          color: 'bg-violet-600',
          benefits: [
            'Generación inmediata de tráfico cualificado',
            'Segmentación hiperprecisa por intención y perfil',
            'Escalabilidad acelerada de ventas',
            'Monitorización diaria y optimización proactiva'
          ],
          process: [
            { title: 'Estructuración de Cuentas', desc: 'Configuración técnica impecable del seguimiento de conversiones.' },
            { title: 'Copywriting Persuasivo', desc: 'Mensajes publicitarios diseñados para captar y convertir.' },
            { title: 'Optimización Continua', desc: 'Ajustes sistemáticos de pujas, creativos y palabras negativas.' },
            { title: 'Retargeting Inteligente', desc: 'Reimpactando a usuarios con alta probabilidad de compra.' }
          ]
        },
        {
          id: 'global',
          title: 'Presencia Global',
          description: 'Expansión de marcas hacia mercados internacionales con SEO multilingüe e internacionalización.',
          extendedDescription: 'Llevamos su propuesta más allá de las fronteras con estrategias adaptadas a los hábitos de búsqueda de cada país.',
          color: 'bg-cyan-600',
          benefits: [
            'Apertura de nuevos mercados internacionales',
            'Arquitectura técnica de SEO internacional (Hreflang)',
            'Localización de contenidos según matices culturales',
            'Reconocimiento y prestigio a nivel global'
          ],
          process: [
            { title: 'Estudio de Mercados Objetivo', desc: 'Análisis de demanda local, competidores y modismos.' },
            { title: 'Estrategia Multilingüe', desc: 'Estructura técnica para la navegación en múltiples idiomas.' },
            { title: 'Localización Cultural', desc: 'Adaptación del tono comercial a cada región.' },
            { title: 'Autoridad Regional', desc: 'Generación de enlaces y notoriedad en portales locales.' }
          ]
        },
        {
          id: 'social',
          title: 'Contenido Social',
          description: 'Construcción de autoridad mediante contenidos estratégicos que conectan y venden.',
          extendedDescription: 'Convertimos sus perfiles en canales de referencia que generan demanda continua hacia sus productos o servicios.',
          color: 'bg-blue-700',
          benefits: [
            'Notoriedad y credibilidad destacada en su sector',
            'Conexión auténtica con la audiencia',
            'Creación de una comunidad comprometida con la marca',
            'Soporte orgánico que potencia las campañas de pago'
          ],
          process: [
            { title: 'Línea Editorial', desc: 'Mapeo temático de los puntos de interés del público.' },
            { title: 'Identidad Visual', desc: 'Diseño coherente y atractivo para destacar en el feed.' },
            { title: 'Calendario de Publicaciones', desc: 'Constancia estratégica que genera tracción constante.' },
            { title: 'Gestión de Comunidad', desc: 'Interacción humana que convierte seguidores en clientes.' }
          ]
        },
        {
          id: 'video',
          title: 'Edición y Creación de Videos',
          description: 'Videos estratégicos para anuncios y redes sociales enfocados en alta conversión.',
          extendedDescription: 'Producimos contenido audiovisual que no solo capta la atención, sino que convierte espectadores en clientes.',
          color: 'bg-red-600',
          benefits: ['Videos que generan autoridad', 'Enfoque en conversión', 'Diseño profesional', 'Edición dinámica'],
          process: [
            { title: 'Guionización', desc: 'Scripts centrados en gatillos mentales.' },
            { title: 'Producción', desc: 'Grabación o edición profesional.' },
            { title: 'Edición', desc: 'Cortes dinámicos y motion graphics.' },
            { title: 'Entrega', desc: 'Formatos optimizados para cada red.' }
          ]
        },
        {
          id: 'design',
          title: 'Diseño Gráfico',
          description: 'Identidad visual y materiales de diseño que profesionalizan su marca.',
          extendedDescription: 'Diseño estratégico que comunica los valores de su empresa y atrae a su público objetivo.',
          color: 'bg-amber-600',
          benefits: ['Identidad impactante', 'Diseño consistente', 'Comunicación clara', 'Aumento de percepción de valor'],
          process: [
            { title: 'Briefing', desc: 'Entendimiento de la esencia de la marca.' },
            { title: 'Concepto', desc: 'Propuesta visual estratégica.' },
            { title: 'Diseño', desc: 'Ejecución de piezas con precisión.' },
            { title: 'Finalización', desc: 'Entrega en alta calidad.' }
          ]
        },
        {
          id: 'appdev',
          title: 'Desarrollo de Apps',
          description: 'Desarrollo de aplicaciones a medida para potenciar su negocio.',
          extendedDescription: 'Soluciones móviles robustas e intuitivas que facilitan la vida de su cliente y generan ingresos.',
          color: 'bg-emerald-600',
          benefits: ['Soluciones personalizadas', 'Enfoque en usabilidade', 'Seguridad robusta', 'Escalabilidad'],
          process: [
            { title: 'Planificación', desc: 'Definición de funcionalidades esenciales.' },
            { title: 'UI/UX Móvil', desc: 'Diseño centrado en la experiencia móvil.' },
            { title: 'Desarrollo', desc: 'Creación de código de alto rendimiento.' },
            { title: 'Lanzamiento', desc: 'Publicación y monitoreo.' }
          ]
        }
      ]
    },
    cases: {
      badge: 'Casos de Éxito',
      heading: 'Resultados que',
      headingHighlight: 'hablan por sí mismos.',
      description: 'Transformamos desafíos complejos en incrementos exponenciales. Descubra cómo aceleramos empresas reales con nuestra metodología.',
      viewDetails: 'Ver Detalles del Caso',
      details: {
        backBtn: 'Volver al Portafolio',
        badgePrefix: 'Caso de Estudio',
        primaryMetric: 'Métrica Clave',
        finalImpact: 'Impacto Final',
        directRoi: 'ROI Directo',
        growth: 'Crecimiento',
        zeroLoss: 'Pérdida de Leads',
        zeroText: 'Cero'
      },
      items: [
        {
          id: 'stellar',
          title: 'E-commerce de Moda Premium',
          client: 'Stellar Style',
          metric: '12.4x ROI',
          description: 'Reestructuración integral de SEO técnico y estrategia en Google Ads para público de lujo.',
          impact: '+240% en ventas orgánicas',
          color: 'from-blue-600 to-indigo-700',
          challengeTitle: 'El Desafío',
          challengeText: 'La marca sufría un estancamiento en sus ventas online. A pesar de contar con colecciones exclusivas, el coste de adquisición (CAC) mermaba los márgenes y la dependencia absoluta de los anuncios debilitaba el negocio.',
          challengePoints: ['Escasa visibilidad orgánica', 'CAC superior al valor de vida del cliente', 'Tasa de conversión mejorable', 'Competencia feroz de marcas globales'],
          strategyTitle: 'Nuestra Estrategia',
          strategyText: 'Implementamos un plan en 3 pilares uniendo autoridad técnica, experiencia de compra premium y publicidad enfocada en intención.',
          strategySteps: [
            { title: '1. SEO de Autoridad', desc: 'Reorganización de la arquitectura web y optimización de categorías de alto margen comercial.' },
            { title: '2. CRO y UX de Lujo', desc: 'Simplificación del proceso de compra para clientes de alto poder adquisitivo sin fricción.' },
            { title: '3. Performance Escalable', desc: 'Campañas de Google Shopping orientadas a términos de compra con alta intención transaccional.' }
          ],
          resultsTitle: 'Resultados Consolidados',
          resultsSubtitle: 'Datos auditados tras 6 meses de ejecución continua.',
          metricLabel: 'ROI Directo',
          impactLabel: 'Crecimiento',
          zeroLossLabel: 'Pérdida de Leads',
          ctaTitle: '¿Desea multiplicar las ventas de su comercio electrónico?',
          ctaButton: 'Solicitar Diagnóstico para mi Empresa'
        },
        {
          id: 'sorriso',
          title: 'Red de Clínicas Dentales',
          client: 'Sorriso Ideal',
          metric: '+315% Leads',
          description: 'Implementación de SEO Local en 15 clínicas, dominando Google Maps para búsquedas regionales.',
          impact: 'Coste por Lead reducido un 45%',
          color: 'from-emerald-500 to-teal-600',
          challengeTitle: 'El Desafío',
          challengeText: 'Con 15 clínicas repartidas por distintas zonas urbanas, la red sufría con sillones desocupados y costes desproporcionados en campañas locales.',
          challengePoints: ['Presencia fragmentada en Google Maps', 'Coste de cita muy elevado', 'Fichas sin optimizar ni estandarizar', 'Alta competencia en implantes y estética'],
          strategyTitle: 'Nuestra Estrategia',
          strategyText: 'Dominio territorial hiperlocal combinado con páginas de aterrizaje específicas para cada clínica.',
          strategySteps: [
            { title: '1. Perfil de Empresa en Google', desc: 'Estandarización de fichas, gestión de reseñas y categorías para cada especialidad.' },
            { title: '2. Landing Pages Hiperlocales', desc: 'Páginas rápidas orientadas a la reserva de citas directa vía WhatsApp.' },
            { title: '3. Campañas de Proximidad', desc: 'Google Ads configurados en un radio estricto de 3 km alrededor de cada clínica.' }
          ],
          resultsTitle: 'Resultados Consolidados',
          resultsSubtitle: 'Métricas agregadas en todas las sedes de la red.',
          metricLabel: 'Aumento de Leads',
          impactLabel: 'Reducción de CAC',
          zeroLossLabel: 'Sedes Ociosas',
          ctaTitle: '¿Busca llenar la agenda de su clínica o consulta?',
          ctaButton: 'Agendar Consulta Gratuita'
        },
        {
          id: 'fintech',
          title: 'SaaS de Gestión Financiera',
          client: 'Fintech Flow',
          metric: 'Top 1 Google',
          description: 'Marketing de contenidos para el fondo del embudo, posicionando al software como líder indiscutible.',
          impact: '50k+ visitas mensuales cualificadas',
          color: 'from-orange-500 to-red-600',
          challengeTitle: 'El Desafío',
          challengeText: 'La plataforma competía contra gigantes consolidados con presupuestos multimillonarios, haciendo insostenible depender únicamente de Google Ads.',
          challengePoints: ['Costes por clic prohibitivos superiores a 6 €', 'Baja autoridad de dominio inicial', 'Contenidos generalistas que no convertían', 'Ciclos comerciales largos'],
          strategyTitle: 'Nuestra Estrategia',
          strategyText: 'Topic Clusters hiperespecializados y herramientas interactivas de cálculo que generaron enlaces orgánicos y captaron directores financieros.',
          strategySteps: [
            { title: '1. Ingeniería Semántica', desc: 'Mapeo de más de 400 consultas transaccionales utilizadas por directores financieros.' },
            { title: '2. Simuladores Interactivos', desc: 'Desarrollo de calculadoras de flujo de caja y tributación que se hicieron virales.' },
            { title: '3. Enlaces en Medios de Negocios', desc: 'Apariciones en portales de economía y revistas de negocios de máximo prestigio.' }
          ],
          resultsTitle: 'Resultados Consolidados',
          resultsSubtitle: 'Datos certificados desde Google Search Console.',
          metricLabel: 'Posición Top 1',
          impactLabel: 'Tráfico Orgánico',
          zeroLossLabel: 'Dependencia de Ads',
          ctaTitle: '¿Listo para dominar las búsquedas en su sector?',
          ctaButton: 'Diseñar mi Estrategia'
        }
      ]
    },
    projects: {
      badge: 'Portafolio',
      heading: 'Impacto visual,',
      headingHighlight: 'resultados tangibles.',
      descriptionPrefix: 'Una selección de ',
      descriptionSuffix: ' proyectos donde la estrategia y el diseño impulsaron la facturación de los clientes.',
      categories: {
        all: 'Todos',
        health: 'Salud',
        ecommerce: 'E-commerce',
        tech: 'Tecnología',
        marketing: 'Marketing',
        architecture: 'Arquitectura',
        institutional: 'Institucional'
      },
      visitWebsite: 'Visitar Sitio Web',
      ctaButton: 'Solicitar Proyecto Similar',
      items: [
        {
          id: 1,
          title: 'ContabilVision',
          categoryKey: 'institutional',
          originalCategory: 'Contabilidad',
          image: 'https://i.postimg.cc/VLGtB57Y/contabil.png',
          description: 'Portal de contabilidad enfocado en autoridad y captación orgánica de clientes B2B.',
          url: 'https://contabilvision.com.br/'
        },
        {
          id: 2,
          title: 'MyBNB Flats',
          categoryKey: 'institutional',
          originalCategory: 'Inmobiliaria',
          image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
          description: 'Plataforma de reservas directas para apartamentos vacacionales con SEO local.',
          url: 'https://www.mybnb.imb.br/'
        },
        {
          id: 3,
          title: 'Câncer de Pele Brasília',
          categoryKey: 'health',
          originalCategory: 'Salud',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
          description: 'Portal médico especializado en dermatología oncológica de alta conversión.',
          url: 'https://cancerdepelebrasilia.com/'
        },
        {
          id: 4,
          title: 'Verum Tecnologia',
          categoryKey: 'tech',
          originalCategory: 'Tecnología',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
          description: 'Plataforma técnica robusta para soluciones industriales y de ingeniería.',
          url: 'https://verum.tec.br/'
        },
        {
          id: 5,
          title: 'Connecto Arquitetura',
          categoryKey: 'architecture',
          originalCategory: 'Arquitectura',
          image: 'https://i.postimg.cc/P5yRMWgn/conecto.png',
          description: 'Portafolio interactivo para estudio de arquitectura con enfoque minimalista.',
          url: 'https://connectoarquitetura.com.br/'
        },
        {
          id: 6,
          title: 'Alquimia Diária',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
          description: 'Tienda online de cosmética natural con proceso de compra rápido y optimizado.',
          url: 'https://alquimia-diaria.vercel.app/'
        },
        {
          id: 7,
          title: 'Missão Inclusiva',
          categoryKey: 'institutional',
          originalCategory: 'Social',
          image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
          description: 'Portal de impacto social centrado en accesibilidad y comunicación inclusiva.',
          url: 'https://amissaoinclusiva.com.br/'
        },
        {
          id: 8,
          title: 'Isa Arteira',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=800',
          description: 'Tienda de artesanía personalizada con embudos de tráfico segmentados.',
          url: 'https://isaarteira.com.br/'
        },
        {
          id: 9,
          title: 'Evidence (Nando Silva)',
          categoryKey: 'marketing',
          originalCategory: 'Marketing',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
          description: 'Página de aterrizaje estratégica para contratación de consultorías de marketing.',
          url: 'https://www.nandosilvapro.site/evidence/'
        },
        {
          id: 10,
          title: 'Forjados Brasil',
          categoryKey: 'institutional',
          originalCategory: 'Industrial',
          image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
          description: 'Sitio industrial enfocado en catálogos técnicos y cotizaciones de gran envergadura.',
          url: 'https://forjadosbrasil.com.br/'
        },
        {
          id: 11,
          title: 'Casa Dolores',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://i.postimg.cc/Qt4YrjXy/casas.png',
          description: 'Tienda online de decoración con navegación perfecta en dispositivos móviles.',
          url: 'https://casadolores.com.br/'
        },
        {
          id: 12,
          title: 'Evidence Marketing',
          categoryKey: 'marketing',
          originalCategory: 'Marketing',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
          description: 'Portal de la agencia con foco en prueba social y presentación de casos de éxito.',
          url: 'https://evidencemarketing.com.br/'
        },
        {
          id: 13,
          title: 'Barra Square Joias',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
          description: 'Joyería de lujo con sincronización de catálogo en tiempo real y SEO técnico.',
          url: 'https://www.barrasquarejoias.com.br/'
        },
        {
          id: 14,
          title: 'Cadian Solution',
          categoryKey: 'tech',
          originalCategory: 'Tecnología',
          image: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=800',
          description: 'Optimización de SEO técnico para software de modelado y diseño en ingeniería.',
          url: 'https://www.cadian.com.br/'
        },
        {
          id: 15,
          title: 'Giovani Dobri',
          categoryKey: 'institutional',
          originalCategory: 'Institucional',
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
          description: 'Marca personal para consultor, orientada a la presencia directiva y autoridad.',
          url: 'https://giovanidobri.com.br/'
        },
        {
          id: 16,
          title: 'Monix Eco',
          categoryKey: 'institutional',
          originalCategory: 'Sostenibilidad',
          image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
          description: 'Portal de soluciones ecológicas orientado a la concienciación y conversión corporativa.',
          url: 'https://monixeco.com.br/'
        },
        {
          id: 17,
          title: 'Curso NR10 Superseg',
          categoryKey: 'institutional',
          originalCategory: 'Educación',
          image: 'https://i.postimg.cc/LXt4y028/curso-nr.png',
          description: 'Página de venta de alta conversión para certificaciones laborales de seguridad.',
          url: 'https://superseg.greennsales.com.br/curso-nr10'
        },
        {
          id: 18,
          title: 'Literunico',
          categoryKey: 'ecommerce',
          originalCategory: 'E-commerce',
          image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
          description: 'Plataforma literaria integrada con comercio electrónico para la comunidad lectora.',
          url: 'https://literunico.com.br/'
        },
        {
          id: 19,
          title: 'Estância Árvore da Vida',
          categoryKey: 'institutional',
          originalCategory: 'Eventos',
          image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
          description: 'Sitio para espacio de eventos campestres con tour virtual interactivo.',
          url: 'https://estanciaarvoredavida.com.br/'
        },
        {
          id: 20,
          title: 'Clínica Tripoli',
          categoryKey: 'health',
          originalCategory: 'Salud',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
          description: 'Campaña de inauguración y reserva digital de citas para clínica odontológica.',
          url: 'https://inauguracao.clinicastripoli.com.br/'
        },
        {
          id: 21,
          title: 'Dra. Amanda Droguetti',
          categoryKey: 'health',
          originalCategory: 'Salud',
          image: 'https://i.postimg.cc/CKFVhLg5/amanda.png',
          description: 'Consulta médica digital orientada a la autoridad y cercanía con el paciente.',
          url: 'https://draamandadroguetti.com.br/'
        },
        {
          id: 22,
          title: '76 Garage',
          categoryKey: 'institutional',
          originalCategory: 'Automotriz',
          image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
          description: 'Portal para concesionario de vehículos premium y de colección en Portugal.',
          url: 'https://76garage.pt/'
        },
        {
          id: 23,
          title: 'São Paulo Dental',
          categoryKey: 'health',
          originalCategory: 'Salud',
          image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
          description: 'Sitio institucional centrado en odontología de excelencia y captación de pacientes.',
          url: 'https://saopaulodental.netlify.app/'
        },
        {
          id: 24,
          title: 'Network Assertiva',
          categoryKey: 'institutional',
          originalCategory: 'Institucional',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
          description: 'Plataforma para networking estratégico, alianzas comerciales y crecimiento directivo.',
          url: 'https://networkassertiva.com/'
        },
        {
          id: 25,
          title: 'Pousada Ykape',
          categoryKey: 'institutional',
          originalCategory: 'Turismo',
          image: 'https://pousadaykape.site/image/pousada.jpg',
          description: 'Portal de posada enfocado en reservas directas y experiencia del cliente.',
          url: 'https://pousadaykape.site/'
        }
      ]
    },
    certifications: {
      badge: 'Credibilidad',
      heading: 'Certificaciones de',
      headingHighlight: 'Élite.',
      viewCert: 'Ver Certificado',
      ctaTitle: '¿Listo para dominar Google?',
      ctaDesc: 'Mi metodología comprobada durante 20 años está a disposición de su empresa hoy mismo. ¿Hablamos?',
      ctaButton: 'Agendar Diagnóstico Gratuito',
      items: [
        {
          name: 'Google Ads Search',
          issuer: 'Google Digital Academy',
          date: '2024',
          icon: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg'
        },
        {
          name: 'Google Analytics 4',
          issuer: 'Google Digital Academy',
          date: '2024',
          icon: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg'
        },
        {
          name: 'HubSpot SEO Master',
          issuer: 'HubSpot Academy',
          date: '2023',
          icon: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg'
        }
      ]
    },
    contact: {
      badge: 'Contacto',
      heading: 'Construyamos algo',
      headingHighlight: 'legendario.',
      description: 'Sin importar el tamaño de su proyecto, el crecimiento sostenido comienza con una conversación estratégica. Complete el formulario y hablemos de inmediato.',
      emailLabel: 'Correo Electrónico',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Ubicación',
      locationValue: 'São Paulo, Brasil (Atención Global)',
      form: {
        title: 'Solicitar Presupuesto',
        subtitle: 'Al hacer clic en enviar, la información se formateará y se abrirá directamente en WhatsApp.',
        nameLabel: 'Su Nombre',
        namePlaceholder: 'Ej: Juan Pérez',
        emailLabel: 'Correo Corporativo',
        emailPlaceholder: 'contacto@empresa.com',
        companyLabel: 'Sitio Web o Nombre de la Empresa',
        companyPlaceholder: 'www.suempresa.com',
        serviceLabel: 'Servicio de Interés',
        serviceOptions: [
          'SEO Estratégico',
          'Tráfico de Pago (Google / Meta Ads)',
          'Desarrollo Web de Alto Rendimiento',
          'Consultoría de Marketing 360º',
          'SEO Internacional y Expansión Global'
        ],
        budgetLabel: 'Presupuesto Mensual',
        budgetOptions: [
          'Hasta $1.000 / mes',
          '$1.000 a $2.500 / mes',
          '$2.500 a $6.000 / mes',
          'Más de $6.000 / mes'
        ],
        messageLabel: 'Sobre el Proyecto',
        messagePlaceholder: 'Describa brevemente sus objetivos principales o requerimientos...',
        submitBtn: 'Enviar por WhatsApp',
        submittingBtn: 'Preparando mensaje...',
        successTitle: 'Redirigiendo...',
        successMessage: '¡Su consulta ha sido preparada! Si la conversación no se abrió automáticamente, pulse el botón para continuar.',
        backBtn: 'Volver al formulario'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos',
      tagline: 'Estratega Digital y Experto en SEO de Alto Rendimiento'
    },
    whatsapp: {
      tooltip: 'Hablar por WhatsApp',
      navMessage: '¡Hola! Vi su sitio web y me gustaría hablar sobre un proyecto.',
      heroServiceMessage: '¡Hola Fernando! Me gustaría saber más sobre sus servicios de marketing digital y SEO.',
      caseMessagePrefix: '¡Hola Fernando! Vi el caso de éxito de {client} y me gustaría algo similar para mi empresa.',
      serviceMessagePrefix: '¡Hola Fernando! Me gustaría saber más detalles sobre el servicio de {title}.',
      projectMessage: '¡Hola Fernando! Me gustaría hablar sobre un proyecto similar a los de su portafolio.',
      diagnosticMessage: '¡Hola Fernando! Me gustaría agendar un diagnóstico gratuito para mi negocio.',
      contactMessage: '¡Hola Fernando! Vi su portafolio y me gustaría hablar sobre un proyecto.'
    }
  }
};
