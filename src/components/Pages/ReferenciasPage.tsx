import React, { useState } from 'react';
import {
  FileText,
  Search,
  Copy,
  Check,
  Download,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import {
  BIBLIOGRAPHIC_REFERENCES,
  LLM_TOOLS_LIST,
  COURSE_INFO,
} from '../../data/courseData';

export const ReferenciasPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'etica' | 'prompts' | 'relatorios' | 'ia-geral'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredRefs = BIBLIOGRAPHIC_REFERENCES.filter((ref) => {
    const matchesSearch =
      ref.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.year.includes(searchQuery);

    const matchesCategory =
      categoryFilter === 'all' || ref.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const handleCopyCitation = (id: string, text: string) => {
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
            11. Ferramentas Citadas e Referências Bibliográficas
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Corpus Científico Integral, Ferramentas Referenciadas e Ficha Técnica
          </p>
        </div>
      </div>

      {/* Official Download Banner for Original PDF */}
      <div className="bg-linear-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-semibold text-blue-200 uppercase tracking-wider block">
            Documento de Suporte Oficial
          </span>
          <h2 className="text-lg font-bold text-white">
            Transcrição Pedagógica Original (PDF de 9 Páginas)
          </h2>
          <p className="text-xs text-blue-100/90 leading-relaxed max-w-xl">
            Descarregue o documento de suporte do curso criado por Carla Oliveira para consulta offline ou arquivo.
          </p>
        </div>

        <a
          href="/assets/aistudio/MODULO2_791c8103.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-xs shadow-md transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Descarregar PDF Oficial</span>
        </a>
      </div>

      {/* Section 1: Ferramentas Citadas */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-0.5">
            Módulo 2 (Página 8)
          </span>
          <h2 className="text-lg font-bold text-slate-900">
            Ferramentas de IA Generativa Referenciadas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LLM_TOOLS_LIST.map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 bg-slate-50/50 hover:bg-white transition-all shadow-2xs space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-slate-900">{tool.name}</h3>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-sm">
                    {tool.badge}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-blue-700 block mb-1">
                  {tool.role}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: All 19 Bibliographic References */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-0.5">
              Literatura Científica (Página 9)
            </span>
            <h2 className="text-lg font-bold text-slate-900">
              Referências Bibliográficas do Módulo 2
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Todas as 19 obras citadas no documento original, com formatação bibliográfica rigorosa.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Filtrar por autor, ano, título..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-blue-500"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              categoryFilter === 'all'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todas as Referências ({BIBLIOGRAPHIC_REFERENCES.length})
          </button>
          <button
            onClick={() => setCategoryFilter('prompts')}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              categoryFilter === 'prompts'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Engenharia de Prompts
          </button>
          <button
            onClick={() => setCategoryFilter('etica')}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              categoryFilter === 'etica'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Ética e Diretrizes (CE)
          </button>
          <button
            onClick={() => setCategoryFilter('relatorios')}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              categoryFilter === 'relatorios'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            UNESCO & OCDE
          </button>
          <button
            onClick={() => setCategoryFilter('ia-geral')}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              categoryFilter === 'ia-geral'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Modelos e Aprendizagem
          </button>
        </div>

        {/* List of citations */}
        <div className="space-y-3">
          {filteredRefs.map((ref) => {
            const formattedAPA = `${ref.authors} (${ref.year}). ${ref.title}. ${ref.publication}`;
            return (
              <div
                key={ref.id}
                className="p-4 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50/70 transition-all shadow-2xs flex flex-col sm:flex-row sm:items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      {ref.authors} ({ref.year})
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm">
                      {ref.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-800 italic leading-relaxed">
                    {ref.title}
                  </p>
                  <p className="text-[11px] text-slate-600 font-medium">
                    {ref.publication}
                  </p>
                </div>

                <button
                  onClick={() => handleCopyCitation(ref.id, formattedAPA)}
                  className="self-start inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 px-2.5 py-1 rounded-md shrink-0 transition-colors"
                  title="Copiar citação em estilo APA"
                >
                  {copiedId === ref.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar APA</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Ficha Técnica e Créditos Oficiais */}
      <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 text-xs text-slate-700 space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
          Ficha Técnica e Créditos Oficiais:
        </h3>
        <p className="leading-relaxed">
          <strong>Conteúdo original:</strong> Carla Oliveira (criado em 26 de janeiro de 2026).
        </p>
        <p className="leading-relaxed">
          <strong>Enquadramento Institucional:</strong> Documento estruturado para o Curso de Inteligência Artificial na Educação. Formato web interativo autónomo concebido para capacitação docente à distância.
        </p>
      </div>
    </div>
  );
};
