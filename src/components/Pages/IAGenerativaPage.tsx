import React, { useState } from 'react';
import {
  ChevronUp,
  ChevronDown,
  Target,
  Bot,
  Lightbulb,
  BookOpen,
  Info,
  Calendar,
  User,
  GraduationCap,
} from 'lucide-react';
import { COURSE_INFO } from '../../data/courseData';

export const IAGenerativaPage: React.FC = () => {
  const [isObjectivesOpen, setIsObjectivesOpen] = useState(true);

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical accent line matching reference screenshots (imagem_49d88603.png) */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
          1. IA Generativa e Modelos Generativos
        </h1>
      </div>

      {/* Official Module Meta Card from Page 1 */}
      <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#1E70EB]" />
          <span><strong>Curso:</strong> {COURSE_INFO.courseTitle}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-slate-500" />
          <span><strong>Autora:</strong> {COURSE_INFO.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-500" />
          <span><strong>Data de Criação:</strong> {COURSE_INFO.date}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] bg-blue-50 text-[#1D4ED8] px-2.5 py-1 rounded-md font-semibold border border-blue-200/60">
          <span>{COURSE_INFO.scope}</span>
        </div>
      </div>

      {/* Main Content Card matching imagem_49d88603.png and Curso_de_IA_na_Educa__o__1__f7e93860.png */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-2xs space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E70EB]">
              Conceito de IA Generativa
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              A IA Generativa refere-se a sistemas de Inteligência Artificial capazes de produzir novos conteúdos (texto, imagens, áudio ou vídeo) com base em padrões aprendidos durante o treino com vastos conjuntos de dados (Big Data).
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0"></span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Tecnologia:</strong> Utiliza redes neuronais profundas (<em>Deep Learning</em>).
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0"></span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Lógica:</strong> Identifica padrões estatísticos para gerar respostas que pareçam humanas e coerentes, embora resultem de cálculos de probabilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean SVG Educational AI Robot Illustration (Vector UI, NO Raw Mockup Screenshot) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-linear-to-b from-[#0F274E] to-[#0A1C36] p-6 text-white shadow-md border border-slate-200/20 flex flex-col items-center justify-center text-center space-y-4 min-h-[250px] relative overflow-hidden">
              {/* Background Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Robot with Lightbulb Graphic */}
              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg">
                  <Bot className="w-12 h-12 text-blue-300" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg animate-pulse">
                  <Lightbulb className="w-6 h-6 text-slate-950" />
                </div>
              </div>

              <div className="space-y-1 relative z-10">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block">
                  Inteligência Artificial na Educação
                </span>
                <p className="text-[11px] text-blue-100/80 leading-relaxed max-w-xs">
                  Apoio à diferenciação curricular, personalização pedagógica e criação de materiais interativos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Card: Objetivos do Módulo 2 matching imagem_49d88603.png */}
        <div className="bg-[#EFF6FF] rounded-2xl p-5 border border-blue-100 transition-all">
          <button
            onClick={() => setIsObjectivesOpen(!isObjectivesOpen)}
            className="w-full flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-[#1E70EB] shrink-0">
                <Target className="w-5 h-5 text-[#1E70EB]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1E70EB]">
                Objetivos do Módulo 2
              </h3>
            </div>
            {isObjectivesOpen ? (
              <ChevronUp className="w-5 h-5 text-[#1E70EB]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#1E70EB]" />
            )}
          </button>

          {isObjectivesOpen && (
            <div className="pt-4 pl-12 space-y-2.5 text-xs sm:text-sm text-slate-700 animate-in fade-in">
              {COURSE_INFO.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{obj}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
