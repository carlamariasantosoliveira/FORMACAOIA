import React, { useState } from 'react';
import {
  ChevronUp,
  ChevronDown,
  Target,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../../types';
import { COURSE_INFO } from '../../data/courseData';

interface IAGenerativaPageProps {
  onNavigate?: (pageId: PageId) => void;
}

export const IAGenerativaPage: React.FC<IAGenerativaPageProps> = ({ onNavigate }) => {
  const [isObjectivesOpen, setIsObjectivesOpen] = useState(true);

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical accent line matching imagem_49d88603.png */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#2563EB] rounded-full inline-block"></span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F274E] tracking-tight">
          1. IA Generativa e Modelos Generativos
        </h1>
      </div>

      {/* Main Content Split: Text on Left, Robot on Right */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#1D4ED8]">
              Conceito de IA Generativa
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
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

          {/* Right Robot Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 max-w-sm w-full">
              <img
                src="/assets/aistudio/imagem_49d88603.png"
                alt="Robô Educativo com Lâmpada de Ideias"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Collapsible Card: Objetivos do Módulo 2 matching imagem_49d88603.png */}
        <div className="mt-8 bg-[#EFF6FF] rounded-2xl p-5 border border-blue-100 transition-all">
          <button
            onClick={() => setIsObjectivesOpen(!isObjectivesOpen)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1D4ED8]">
                Objetivos do Módulo 2
              </h3>
            </div>
            {isObjectivesOpen ? (
              <ChevronUp className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            )}
          </button>

          {isObjectivesOpen && (
            <div className="pt-4 pl-13 space-y-2.5 text-xs sm:text-sm text-slate-700 animate-in fade-in">
              {COURSE_INFO.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0"></span>
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
