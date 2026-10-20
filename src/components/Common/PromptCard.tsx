import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpen, Layers } from 'lucide-react';

interface PromptCardProps {
  title: string;
  discipline?: string;
  grade?: string;
  prompt: string;
  category?: string;
  keyAspects?: string[];
  onUseInSimulator?: (prompt: string) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  title,
  discipline,
  grade,
  prompt,
  keyAspects,
  onUseInSimulator,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.replace(/^“|”$/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 hover:border-blue-300 transition-all p-5 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
            {discipline && <span>{discipline}</span>}
            {grade && (
              <>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-normal">{grade}</span>
              </>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 px-2.5 py-1 rounded-md bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-200/60"
            title="Copiar prompt"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        <h3 className="text-base font-semibold text-slate-900 mb-3">{title}</h3>

        <div className="bg-slate-50/90 rounded-lg p-3.5 border border-slate-200/70 font-mono text-xs leading-relaxed text-slate-800 mb-3 select-all">
          {prompt}
        </div>

        {keyAspects && keyAspects.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {keyAspects.map((aspect, idx) => (
              <span
                key={idx}
                className="text-xs text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded-sm"
              >
                {aspect}
              </span>
            ))}
          </div>
        )}
      </div>

      {onUseInSimulator && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={() => onUseInSimulator(prompt)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Abrir no Simulador de Prompts</span>
          </button>
        </div>
      )}
    </div>
  );
};
