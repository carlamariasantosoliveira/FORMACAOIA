import React, { useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { PROMPT_TECHNIQUES } from '../../data/courseData';
import { PageId } from '../../types';

interface TecnicasPageProps {
  onNavigate?: (pageId: PageId) => void;
}

export const TecnicasPage: React.FC<TecnicasPageProps> = ({ onNavigate }) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Title bar */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-blue-600 rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            5. Técnicas de Formulação de Prompts
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            As Oito Estratégias Pedagógicas e Comparação Integral Vago vs. Otimizado
          </p>
        </div>
      </div>

      {/* Intro card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
          Princípio Fundamental de Otimização
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Quanto mais precisa, delimitada e rica em contexto for a instrução, menor é a dispersão estatística do modelo de IA e mais relevante e rigorosa é a resposta pedagógica obtida. Abaixo encontram-se as 8 estratégias estruturadas no documento oficial do curso:
        </p>
      </div>

      {/* 8 Techniques Cards */}
      <div className="space-y-6">
        {PROMPT_TECHNIQUES.map((tech) => (
          <div
            key={tech.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
          >
            {/* Header of technique */}
            <div className="p-5 sm:p-6 bg-slate-50/80 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-0.5">
                  Estratégia {tech.id} de 8
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {tech.name}
                </h3>
              </div>
              <button
                onClick={() => handleCopy(tech.id, tech.optimizedPrompt)}
                className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
              >
                {copiedId === tech.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Otimizado</span>
                  </>
                )}
              </button>
            </div>

            {/* Content body */}
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {tech.description}
              </p>

              {/* Side-by-side comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Vague */}
                <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-800">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Prompt Vago / Inadequado:</span>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg border border-rose-200/60 font-mono text-xs text-rose-950 leading-relaxed">
                    {tech.vaguePrompt}
                  </div>
                  {tech.vagueContext && (
                    <p className="text-[11px] text-rose-900/80 leading-relaxed italic">
                      {tech.vagueContext}
                    </p>
                  )}
                </div>

                {/* Optimized */}
                <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Prompt Otimizado / Eficaz:</span>
                  </div>
                  <div className="bg-white/80 p-3 rounded-lg border border-emerald-200/60 font-mono text-xs text-emerald-950 leading-relaxed whitespace-pre-wrap">
                    {tech.optimizedPrompt}
                  </div>
                  {tech.optimizedNotes && (
                    <p className="text-[11px] text-emerald-900/90 leading-relaxed">
                      <strong>Por que é eficaz:</strong> {tech.optimizedNotes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
