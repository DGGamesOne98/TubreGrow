'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { CONTENT_TYPES } from '@/lib/constants';

export default function CadastroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: '',
    contentType: '',
    channelName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você faria a integração com o backend
    console.log('Dados do cadastro:', formData);
    // Simular cadastro bem-sucedido
    router.push('/dashboard');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">TubeGrow</h1>
          </div>
        </div>

        {/* Cadastro Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-red-100">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Crie sua conta
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Preencha seus dados para começar a fazer seu canal crescer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    Dados Pessoais
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="border-red-200 focus:border-red-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="border-red-200 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Sua senha"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        required
                        className="border-red-200 focus:border-red-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">Data de Nascimento</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        required
                        className="border-red-200 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Sexo</Label>
                    <Select onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger className="border-red-200 focus:border-red-500">
                        <SelectValue placeholder="Selecione seu sexo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Dados do Canal */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    Sobre seu Canal
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="channelName">Nome do Canal</Label>
                    <Input
                      id="channelName"
                      type="text"
                      placeholder="Nome do seu canal no YouTube"
                      value={formData.channelName}
                      onChange={(e) => handleInputChange('channelName', e.target.value)}
                      required
                      className="border-red-200 focus:border-red-500"
                    />
                    <p className="text-sm text-gray-500">
                      Usaremos isso para conectar com seu canal e analisar seus vídeos
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contentType">Tipo de Conteúdo</Label>
                    <Select onValueChange={(value) => handleInputChange('contentType', value)}>
                      <SelectTrigger className="border-red-200 focus:border-red-500">
                        <SelectValue placeholder="Que tipo de conteúdo você cria?" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONTENT_TYPES.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Botão de Cadastro */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-lg py-6"
                    size="lg"
                  >
                    Criar Conta e Começar
                  </Button>
                </div>

                {/* Link para Login */}
                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Já tem uma conta?{' '}
                    <Link href="/login" className="text-red-600 hover:text-red-700 font-semibold">
                      Faça login
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}