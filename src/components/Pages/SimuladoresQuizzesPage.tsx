import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Sliders,
  Terminal,
  Brain,
  Layers,
  FileText,
  Loader2,
  Check,
} from 'lucide-react';
import { QuizInteractive } from '../Simulators/QuizInteractive';
import { PromptLabSimulator } from '../Simulators/PromptLabSimulator';
import { ModelMechanicsSimulator } from '../Simulators/ModelMechanicsSimulator';
import { ImageDiffusionSimulator } from '../Simulators/ImageDiffusionSimulator';
import { PedagogicalResourceCreator } from '../Simulators/PedagogicalResourceCreator';

export const SimuladoresQuizzesPage: React.FC = () => {
  // State for side-by-side comparison from imagem_aa589f90.png
  const [vagueAnswer, setVagueAnswer] = useState<string | null>(null);
  const [vagueLoading, setVagueLoading] = useState(false);

  const [detailedAnswer, setDetailedAnswer] = useState<string | null>(null);
  const [detailedLoading, setDetailedLoading] = useState(false);

  const [expandedLab, setExpandedLab] = useState<string | null>(null);

  const handleGenerateVague = () => {
    setVagueLoading(true);
    setTimeout(() => {
      setVagueAnswer(
        'A água é um recurso natural indispensável à vida. Uma aula sobre a água pode abordar as suas propriedades físicas, os três estados (líquido, sólido e gasoso), a importância para a hidratação dos seres vivos e a necessidade de poupança no dia a dia...'
      );
      setVagueLoading(false);
    }, 400);
  };

  const handleGenerateDetailed = () => {
    setDetailedLoading(true);
    setTimeout(() => {
      setDetailedAnswer(
        '| Fase da Aula (50 min) | Objetivos Específicos | Atividades Pedagógicas | Avaliação Formativa |\n|---|---|---|---|\n| 1. Introdução (10 min) | Ativar conhecimentos prévios | Apresentação de vídeo curto sobre a chuva e debate | Questões orais diagnósticas |\n| 2. Exploração (25 min) | Identificar as 4 fases do ciclo | Construção de esquema gráfico em grupo com setas | Observação direta e apoio |\n| 3. Síntese (15 min) | Consolidar terminologia | Preenchimento de tabela e ficha com legenda do ciclo | Bilhete de saída (Exit Ticket) |'
      );
      setDetailedLoading(false);
    }, 400);
  };

  return (
    <div className="space-y-10 pb-12 font-sans">
      {/* 1. Quiz: Teste os seus conhecimentos matching imagem_aa589f90.png */}
      <QuizInteractive />

      {/* 2. Simulador: Compare os resultados matching imagem_aa589f90.png */}
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-8 bg-[#2563EB] rounded-full inline-block"></span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F274E] tracking-tight">
              Simulador: Compare os resultados
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pl-4.5">
            Veja a diferença entre um prompt vago e um prompt eficaz.
          </p>
        </div>

        {/* Two Columns Comparison matching imagem_aa589f90.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left: Prompt Vago (Pink/Light Red card) */}
          <div className="bg-[#FEF2F2] border border-rose-100 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-2xs">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#DC2626]">
                Prompt vago
              </h3>

              <p className="text-xs sm:text-sm text-slate-800 italic font-medium leading-relaxed">
                &ldquo;Cria um plano de aula sobre a água.&rdquo;
              </p>

              {vagueAnswer && (
                <div className="mt-3 bg-white/90 p-4 rounded-2xl border border-rose-200/60 text-xs text-slate-700 leading-relaxed font-sans animate-in fade-in">
                  <span className="font-bold text-rose-800 block mb-1">
                    Resposta da IA (Genérica):
                  </span>
                  {vagueAnswer}
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleGenerateVague}
                disabled={vagueLoading}
                className="bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors shadow-2xs"
              >
                {vagueLoading ? 'A gerar...' : 'Gerar resposta'}
              </button>
            </div>
          </div>

          {/* Right: Prompt Detalhado (Light Green card) */}
          <div className="bg-[#ECFDF5] border border-emerald-100 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-2xs">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#059669]">
                Prompt detalhado
              </h3>

              <p className="text-xs sm:text-sm text-slate-800 italic font-medium leading-relaxed">
                &ldquo;Cria um plano de aula sobre o ciclo da água para alunos do 5º ano, com objetivos, atividades e a avaliação, em formato de tabela.&rdquo;
              </p>

              {detailedAnswer && (
                <div className="mt-3 bg-white/90 p-4 rounded-2xl border border-emerald-200/60 text-xs text-slate-800 leading-relaxed font-mono whitespace-pre-wrap animate-in fade-in overflow-x-auto">
                  <span className="font-bold text-emerald-800 font-sans block mb-1">
                    Resposta da IA (Estruturada em Tabela):
                  </span>
                  {detailedAnswer}
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleGenerateDetailed}
                disabled={detailedLoading}
                className="bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-colors shadow-2xs"
              >
                {detailedLoading ? 'A gerar...' : 'Gerar resposta'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep Educational Sandboxes (Prompt Lab, Model Mechanics, Diffusion, Resource Creator) */}
      <div className="pt-6 border-t border-slate-100 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Laboratórios Interativos Avançados
            </h3>
            <p className="text-xs text-slate-500">
              Experimente os outros simuladores especializados do Módulo 2:
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setExpandedLab(expandedLab === 'lab' ? null : 'lab')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              expandedLab === 'lab'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Laboratório de Engenharia de Prompts
          </button>
          <button
            onClick={() => setExpandedLab(expandedLab === 'mechanics' ? null : 'mechanics')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              expandedLab === 'mechanics'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Mecânica do Ciclo & Tokenizer
          </button>
          <button
            onClick={() => setExpandedLab(expandedLab === 'diffusion' ? null : 'diffusion')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              expandedLab === 'diffusion'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Difusão de Imagem Didática
          </button>
          <button
            onClick={() => setExpandedLab(expandedLab === 'resources' ? null : 'resources')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              expandedLab === 'resources'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Criador de Recursos Pedagógicos
          </button>
        </div>

        {expandedLab === 'lab' && <PromptLabSimulator />}
        {expandedLab === 'mechanics' && <ModelMechanicsSimulator />}
        {expandedLab === 'diffusion' && <ImageDiffusionSimulator />}
        {expandedLab === 'resources' && <PedagogicalResourceCreator />}
      </div>
    </div>
  );
};
