'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  TrendingUp, 
  MessageSquare, 
  Lightbulb, 
  Upload, 
  BarChart3,
  Settings,
  User,
  Crown,
  Send,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { SAMPLE_CONTENT_IDEAS, SAMPLE_ANALYSIS_SUGGESTIONS } from '@/lib/constants';

export default function DashboardPage() {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');
  const [videoUrl, setVideoUrl] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  // Simular análise de vídeo
  const handleVideoAnalysis = () => {
    if (!videoUrl) return;
    
    setAnalysisResult({
      title: 'Como TRIPLICAR suas views no YouTube em 30 dias',
      engagementScore: 8.5,
      suggestions: SAMPLE_ANALYSIS_SUGGESTIONS,
      keywords: ['youtube', 'crescimento', 'views', 'engajamento', 'viral'],
      thumbnailTips: [
        'Use cores contrastantes (vermelho e branco)',
        'Adicione sua foto com expressão surpresa',
        'Inclua o número "30 dias" em destaque'
      ]
    });
  };

  const isPremium = selectedPlan === 'premium';

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">TubeGrow</h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge className={`${isPremium ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gray-500'} text-white`}>
              <Crown className="w-4 h-4 mr-1" />
              {isPremium ? 'Premium' : 'Básico'}
            </Badge>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Perfil
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bem-vindo ao seu Dashboard! 🚀
          </h1>
          <p className="text-gray-600">
            Aqui você pode analisar seus vídeos, otimizar conteúdo e receber ideias personalizadas.
          </p>
        </div>

        {/* Plan Selector (Simulação) */}
        <div className="mb-8">
          <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Teste os Planos</h3>
                  <p className="text-gray-600">Alterne entre os planos para ver as funcionalidades</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={selectedPlan === 'basic' ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan('basic')}
                    size="sm"
                  >
                    Plano Básico
                  </Button>
                  <Button 
                    variant={selectedPlan === 'premium' ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan('premium')}
                    size="sm"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                  >
                    <Crown className="w-4 h-4 mr-1" />
                    Premium
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="analise" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analise">Análise de Vídeos</TabsTrigger>
            <TabsTrigger value="ideias">Ideias de Conteúdo</TabsTrigger>
            <TabsTrigger value="chat" disabled={!isPremium}>
              Chat IA {!isPremium && '(Premium)'}
            </TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          {/* Análise de Vídeos */}
          <TabsContent value="analise" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Análise de Engajamento
                </CardTitle>
                <CardDescription>
                  Cole o link do seu vídeo para receber uma análise completa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="https://youtube.com/watch?v=..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleVideoAnalysis} className="bg-gradient-to-r from-red-500 to-red-600">
                    <Upload className="w-4 h-4 mr-2" />
                    Analisar
                  </Button>
                </div>

                {analysisResult && (
                  <div className="space-y-4 mt-6">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Resultado da Análise</h4>
                      <p className="text-green-700 mb-2">Título: {analysisResult.title}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-green-700">Score de Engajamento:</span>
                        <Badge className="bg-green-500">{analysisResult.engagementScore}/10</Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Sugestões de Melhoria</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {analysisResult.suggestions.slice(0, isPremium ? 6 : 3).map((suggestion: string, index: number) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{suggestion}</span>
                              </li>
                            ))}
                            {!isPremium && (
                              <li className="text-sm text-gray-500 italic">
                                + 3 sugestões adicionais no plano Premium
                              </li>
                            )}
                          </ul>
                        </CardContent>
                      </Card>

                      {isPremium && (
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              Dicas de Thumbnail
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {analysisResult.thumbnailTips.map((tip: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      )}
                    </div>

                    {isPremium && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Palavras-chave Otimizadas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {analysisResult.keywords.map((keyword: string, index: number) => (
                              <Badge key={index} variant="outline" className="border-red-200">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ideias de Conteúdo */}
          <TabsContent value="ideias" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Ideias Diárias de Conteúdo
                </CardTitle>
                <CardDescription>
                  {isPremium ? 'Ideias personalizadas baseadas no seu nicho' : 'Ideias gerais de conteúdo'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SAMPLE_CONTENT_IDEAS.slice(0, isPremium ? 6 : 2).map((idea) => (
                    <Card key={idea.id} className="border-red-100">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant={idea.trending ? 'default' : 'secondary'} className="text-xs">
                            {idea.trending ? '🔥 Trending' : idea.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {idea.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{idea.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{idea.description}</p>
                        <Button size="sm" className="w-full bg-gradient-to-r from-red-500 to-red-600">
                          Usar Esta Ideia
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {!isPremium && (
                    <Card className="border-dashed border-gray-300 bg-gray-50">
                      <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                        <Crown className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-2">
                          +4 ideias personalizadas
                        </p>
                        <Button size="sm" variant="outline">
                          Upgrade para Premium
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Chat com IA */}
          <TabsContent value="chat" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Chat com IA para Criação de Conteúdo
                </CardTitle>
                <CardDescription>
                  Tire dúvidas e receba dicas personalizadas para seu conteúdo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 bg-gray-50 rounded-lg p-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">IA Assistant</p>
                      <p className="text-gray-800">
                        Olá! Sou sua assistente de criação de conteúdo. Como posso ajudar você hoje?
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Digite sua pergunta sobre criação de conteúdo..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1 min-h-[60px]"
                  />
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 self-end">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Relatórios */}
          <TabsContent value="relatorios" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Vídeos Analisados</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Score Médio</p>
                      <p className="text-2xl font-bold text-gray-900">7.8</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Ideias Usadas</p>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                    </div>
                    <Lightbulb className="w-8 h-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Dias Ativos</p>
                      <p className="text-2xl font-bold text-gray-900">15</p>
                    </div>
                    <Play className="w-8 h-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Histórico de Análises</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'Como TRIPLICAR suas views no YouTube', score: 8.5, date: '2024-01-15' },
                    { title: '5 ERROS que estão matando seu canal', score: 9.2, date: '2024-01-14' },
                    { title: 'Minha rotina de criador de conteúdo', score: 7.1, date: '2024-01-13' }
                  ].map((analysis, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{analysis.title}</p>
                        <p className="text-sm text-gray-500">{analysis.date}</p>
                      </div>
                      <Badge className="bg-green-500">{analysis.score}/10</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}