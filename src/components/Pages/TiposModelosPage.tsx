import React, { useState } from 'react';
import {
  FileText,
  Image as ImageIcon,
  Mic,
  Video,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { PageId } from '../../types';

interface TiposModelosPageProps {
  onNavigate?: (pageId: PageId) => void;
}

export const TiposModelosPage: React.FC<TiposModelosPageProps> = ({ onNavigate }) => {
  const [selectedType, setSelectedType] = useState<number>(0);

  const modelTypes = [
    {
      id: 'llm',
      name: 'Modelos de Linguagem (LLMs)',
      fullTitle: 'Modelos de Linguagem (LLMs – Large Language Models)',
      icon: FileText,
      color: 'blue',
      whatTheyDo:
        'Processam e geram texto em linguagem natural (resumos, código, poesia, planos de aula).',
      howTheyWork: [
        'Tokens: O texto é fatiado em tokens (unidades semânticas).',
        'Arquitetura Transformer: Utilizam o mecanismo de "Atenção" para perceber a relação entre palavras distantes numa frase.',
        'Predição: Calcula qual é o próximo token mais provável numa sequência, dado o contexto anterior.',
      ],
      educationalApps: [
        'Apoio ao planeamento de aulas;',
        'Criação de exercícios diferenciados;',
        'Adaptação de textos a diferentes níveis de leitura;',
        'Apoio à escrita e revisão de textos.',
      ],
      classroomExample:
        '“Age como professor de História. Cria uma versão adaptada da Revolução Industrial em 200 palavras para alunos com vocabulário em desenvolvimento.”',
    },
    {
      id: 'imagem',
      name: 'Modelos Generativos de Imagem',
      fullTitle: 'Modelos Generativos de Imagem',
      icon: ImageIcon,
      color: 'emerald',
      whatTheyDo: 'Criam imagens a partir de descrições textuais.',
      howTheyWork: [
        'Muitos destes modelos utilizam modelos de difusão, que começam com ruído aleatório, refinam progressivamente a imagem e produzem uma imagem coerente com a descrição fornecida.',
      ],
      educationalApps: [
        'Criação de imagens para apresentações;',
        'Ilustração de conceitos abstratos;',
        'Apoio à explicação visual de conteúdos.',
      ],
      classroomExample:
        '“Age como ilustrador educativo. Descreve uma imagem que represente o ciclo da água, destinada a alunos do 5.º ano...”',
    },
    {
      id: 'audio',
      name: 'Modelos de Áudio e Voz',
      fullTitle: 'Modelos Generativos de Áudio e Voz',
      icon: Mic,
      color: 'amber',
      whatTheyDo: 'Geram voz sintética, música e narração automática.',
      howTheyWork: [
        'Aprendem padrões presentes em gravações de voz ou música e conseguem gerar novos sons ou converter texto em fala.',
      ],
      educationalApps: [
        'Leitura em voz alta de textos (promovendo a inclusão);',
        'Produção de materiais acessíveis;',
        'Apoio a atividades de expressão oral.',
      ],
      classroomExample:
        'Criação de podcasts educativos para apoio a alunos com necessidades de acessibilidade na leitura.',
    },
    {
      id: 'video',
      name: 'Modelos Generativos de Vídeo',
      fullTitle: 'Modelos Generativos de Vídeo',
      icon: Video,
      color: 'purple',
      whatTheyDo: 'Criam pequenos vídeos a partir de texto ou imagens.',
      howTheyWork: [
        'Utilizam modelos capazes de gerar sequências de imagens ao longo do tempo, mantendo a coerência visual e narrativa.',
      ],
      educationalApps: [
        'Criação de vídeos explicativos;',
        'Storytelling digital;',
        'Projetos multimédia com alunos.',
      ],
      classroomExample:
        'Geração de pequenas animações históricas ou diálogos entre avatares educativos sobre cidadania digital.',
    },
    {
      id: 'multimodal',
      name: 'Modelos Generativos Multimodais',
      fullTitle: 'Modelos Generativos Multimodais',
      icon: Layers,
      color: 'rose',
      whatTheyDo:
        'Processam e relacionam vários tipos de dados em simultâneo (texto, imagem, áudio).',
      howTheyWork: [
        'Por exemplo, podem analisar uma imagem complexa ou gráfico e descrevê-la detalhadamente em linguagem natural.',
      ],
      educationalApps: [
        'Análise de imagens, gráficos ou esquemas;',
        'Apoio à compreensão visual;',
        'Ensino mais inclusivo e diversificado;',
        'Desenvolvimento de atividades mais interativas.',
      ],
      classroomExample:
        'Submeter a fotografia de um esquema do aparelho digestivo e pedir à IA que elabore perguntas formativas baseadas na imagem.',
    },
  ];

  const current = modelTypes[selectedType];

  return (
    <div className="space-y-8 pb-12">
      {/* Title bar */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-blue-600 rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            3. Tipos de Modelos Generativos e Aplicações Educativas
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Texto (LLMs), Imagem, Áudio/Voz, Vídeo e Modelos Multimodais
          </p>
        </div>
      </div>

      {/* Type Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80">
        {modelTypes.map((t, idx) => {
          const Icon = t.icon;
          const isSelected = selectedType === idx;
          return (
            <button
              key={t.id}
              onClick={() => setSelectedType(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-white text-blue-900 shadow-xs ring-1 ring-slate-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{t.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Model Detail Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <current.icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Categoria do Módulo 2
              </span>
              <h2 className="text-xl font-bold text-slate-900">{current.fullTitle}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* What they do & How they work (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  O Que Fazem:
                </span>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {current.whatTheyDo}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Como Funcionam:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {current.howTheyWork.map((hw, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                      <span>{hw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200/60 text-xs space-y-1">
                <span className="font-bold text-blue-900 block">
                  Exemplo de Aplicação Prática:
                </span>
                <p className="text-blue-950 font-mono text-[11px] leading-relaxed bg-white/80 p-2.5 rounded-lg border border-blue-200/50">
                  {current.classroomExample}
                </p>
              </div>
            </div>

            {/* Educational Applications (5 cols) */}
            <div className="lg:col-span-5 bg-linear-to-br from-slate-50 to-blue-50/40 p-5 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                    Aplicações Educativas (PDF Oficial)
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  {current.educationalApps.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>5 Categorias de Modelos</span>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('exemplos-disciplina')}
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    <span>Ver Prompts Reais</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
