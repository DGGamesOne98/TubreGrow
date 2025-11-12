// Tipos para o app de crescimento no YouTube

export interface User {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  gender: 'masculino' | 'feminino' | 'outro';
  contentType: string;
  channelName: string;
  plan: 'basic' | 'premium' | null;
  createdAt: string;
}

export interface VideoAnalysis {
  id: string;
  userId: string;
  videoTitle: string;
  videoUrl: string;
  engagementScore: number;
  suggestions: string[];
  keywords: string[];
  thumbnailSuggestions?: string[];
  analyzedAt: string;
}

export interface ContentIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  trending: boolean;
  difficulty: 'fácil' | 'médio' | 'difícil';
}

export interface Plan {
  id: 'basic' | 'premium';
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface ChatMessage {
  id: string;
  message: string;
  response: string;
  timestamp: string;
}