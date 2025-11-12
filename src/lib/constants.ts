import { Plan, ContentIdea } from './types';

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Plano Básico',
    price: 19.99,
    features: [
      'Análise de vídeos postados',
      'Avaliação de potencial de engajamento',
      'Dicas para melhorar títulos',
      'Relatórios básicos de performance',
      'Suporte por email'
    ]
  },
  {
    id: 'premium',
    name: 'Plano Premium',
    price: 29.99,
    popular: true,
    features: [
      'Tudo do Plano Básico',
      'Otimização de palavras-chave',
      'Dicas personalizadas de capas',
      'Chat com IA para criação de conteúdo',
      'Ideias diárias de conteúdo',
      'Análise de tendências do nicho',
      'Suporte prioritário',
      'Relatórios avançados'
    ]
  }
];

export const CONTENT_TYPES = [
  'Gaming',
  'Tecnologia',
  'Lifestyle',
  'Educação',
  'Entretenimento',
  'Música',
  'Culinária',
  'Fitness',
  'Beleza',
  'Viagem',
  'Negócios',
  'Arte e Design',
  'Comédia',
  'Vlogs',
  'Tutoriais',
  'Reviews',
  'Outros'
];

export const SAMPLE_CONTENT_IDEAS: ContentIdea[] = [
  {
    id: '1',
    title: '10 Tendências que vão dominar 2024',
    description: 'Fale sobre as principais tendências do seu nicho para o próximo ano',
    category: 'Tendências',
    trending: true,
    difficulty: 'médio'
  },
  {
    id: '2',
    title: 'Minha rotina matinal para produtividade',
    description: 'Compartilhe sua rotina e dicas para ser mais produtivo',
    category: 'Lifestyle',
    trending: false,
    difficulty: 'fácil'
  },
  {
    id: '3',
    title: 'Reagindo aos meus primeiros vídeos',
    description: 'Reaja aos seus vídeos antigos e mostre sua evolução',
    category: 'Entretenimento',
    trending: true,
    difficulty: 'fácil'
  }
];

export const SAMPLE_ANALYSIS_SUGGESTIONS = [
  'Adicione números no título para aumentar o CTR',
  'Use palavras de impacto como "INCRÍVEL" ou "SURPREENDENTE"',
  'Crie uma thumbnail com contraste alto',
  'Adicione sua foto na thumbnail para conexão pessoal',
  'Use hashtags relevantes na descrição',
  'Publique entre 14h e 16h para melhor alcance'
];