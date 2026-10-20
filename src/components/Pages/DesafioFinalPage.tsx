import React, { useState } from 'react';
import {
  Award,
  FileCheck,
  Download,
  Copy,
  Check,
  Sparkles,
  History,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';
import { NoticeBanner } from '../Common/NoticeBanner';

export const DesafioFinalPage: React.FC = () => {
  const [resourceType, setResourceType] = useState('Cenário de Aprendizagem Interativo');
  const [discipline, setDiscipline] = useState('Português / Cidadania');
  const [grade, setGrade] = useState('8.º Ano');
  const [topic, setTopic] = useState('Literacia Mediática e Combate à Desinformação Digital');

  const [promptV1, setPromptV1] = useState(
    'Cria uma atividade sobre fake news para alunos do 8.º ano.'
  );
  const [critiqueV1, setCritiqueV1] = useState(
    'O primeiro resultado foi muito genérico: a IA sugeriu apenas uma conversa aberta sem guião nem critérios de verificação.'
  );

  const [promptV2, setPromptV2] = useState(
    'Age como professor de TIC e Cidadania do 8.º ano. Cria um cenário de roleplay pedagógico de 50 minutos onde os alunos atuam como "detetives da verdade", analisando 3 notícias fictícias sobre tecnologia. Inclui uma checklist de verificação de fontes (autor, data, evidência) e uma grelha de avaliação com 3 níveis.'
  );
  const [critiqueV2, setCritiqueV2] = useState(
    'A adição de uma persona docente, o enquadramento de roleplay e o pedido explícito de checklist e rubrica elevaram imediatamente o rigor didático.'
  );

  const [finalProduct, setFinalProduct] = useState(
    `# PRODUTO FINAL: CENÁRIO DE APRENDIZAGEM - DETETIVES DA VERDADE
**Disciplina:** Português / Cidadania | **Nível:** 8.º Ano (13-14 anos)
**Tempo:** 50 minutos | **Alinhamento:** Estratégia Nacional de Educação para a Cidadania

---

### DESAFIO DA MISSÃO
"Uma agência de notícias fictícia divulgou três comunicados sensacionalistas sobre a proibição de inteligência artificial em todas as escolas. O vosso grupo de detetives tem 30 minutos para cruzar factos, analisar as fontes e elaborar um despacho com o veredicto de veracidade."

---

### DOCUMENTOS DE TRABALHO
• Caso A: Notícia anónima sem data em rede social.
• Caso B: Artigo científico com referência a estudo universitário.
• Caso C: Comunicado institucional com declarações descontextualizadas.

---

### CHECKLIST DO DETETIVE (4 CRITÉRIOS)
1. Quem é o autor e qual a sua autoridade no assunto?
2. Em que data foi publicado e os factos mantêm-se atuais?
3. São apresentadas provas independentes ou apenas opiniões emotivas?
4. Outros órgãos de comunicação social credíveis confirmam a notícia?

---

### GRELHA FORMATIVA
• Nível Avançado (3 pts): Identifica todas as falhas lógicas e justifica com recurso à checklist.
• Nível Médio (2 pts): Deteta o rumor mas apresenta justificações parciais.
• Nível Inicial (1 pt): Aceita a notícia sem aplicação sistemática da checklist.`
  );

  const [copied, setCopied] = useState(false);

  const exportPortfolio = () => {
    const portfolioText = `# PORTFÓLIO DE ENTREGA — DESAFIO PRÁTICO DO MÓDULO 2
**Curso:** Inteligência Artificial na Educação
**Módulo 2:** IA Generativa e Prompts
**Formador:** Carla Oliveira | **Ano:** 2026

============================================================
1. IDENTIFICAÇÃO DO RECURSO PEDAGÓGICO
============================================================
• Tipo de Recurso: ${resourceType}
• Disciplina / Área: ${discipline}
• Ano de Escolaridade: ${grade}
• Conteúdo Curricular: ${topic}

============================================================
2. HISTÓRICO DE PROMPTS E AJUSTES CRÍTICOS
============================================================
[Versão Inicial - Prompt 1]
${promptV1}

[Reflexão Crítica sobre o Resultado Inicial]:
${critiqueV1}

------------------------------------------------------------
[Versão Iterada e Otimizada - Prompt 2]
${promptV2}

[Reflexão Crítica sobre o Refinamento]:
${critiqueV2}

============================================================
3. PRODUTO FINAL OBTIDO
============================================================
${finalProduct}
`;

    const element = document.createElement('a');
    const file = new Blob([portfolioText], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `DesafioFinal_Modulo2_${discipline.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(finalProduct);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Title bar */}
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-blue-600 rounded-full inline-block"></span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            10. Atividade Prática Final do Módulo 2
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Criação de Recurso Pedagógico Real, Registo de Histórico de Prompts e Entrega
          </p>
        </div>
      </div>

      {/* Official Guidelines from PDF */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-900">
          <Award className="w-5 h-5 text-amber-600" />
          <span>Enunciado Oficial do Desafio Prático</span>
        </div>

        <div className="bg-white/90 p-4 rounded-xl border border-amber-200/60 space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
          <p>
            &ldquo;Apliquem os vossos conhecimentos sobre a construção de prompts para criar um recurso pedagógico relacionado com um conteúdo que irão lecionar nas próximas aulas. Podem escolher entre criar um cenário de aprendizagem, um quiz, uma apresentação, entre outros.&rdquo;
          </p>
          <p className="pt-2 border-t border-amber-100 text-amber-950 font-bold">
            Produto a Entregar / Apresentar: O produto final obtido e o histórico dos prompts que utilizaram e ajustaram criticamente até chegar ao resultado pretendido.
          </p>
        </div>
      </div>

      {/* Interactive Portfolio Builder */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
              Caderno de Trabalho do Professor
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Estruturação do Portfólio do Desafio
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-2 rounded-lg shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Produto'}</span>
            </button>
            <button
              onClick={exportPortfolio}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Exportar Pacote de Entrega (.md)</span>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Step 1: Identification */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-bold">
                1
              </span>
              <span>Identificação do Recurso e Nível Escolar</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tipo de Recurso
                </label>
                <input
                  type="text"
                  value={resourceType}
                  onChange={(e) => setResourceType(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Disciplina
                </label>
                <input
                  type="text"
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ano de Escolaridade
                </label>
                <input
                  type="text"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Conteúdo Curricular
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Prompt History */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-bold">
                2
              </span>
              <span>Histórico de Prompts e Ajustes Críticos</span>
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Round 1 */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-800 block">
                  Prompt Inicial (Versão 1):
                </span>
                <textarea
                  rows={3}
                  value={promptV1}
                  onChange={(e) => setPromptV1(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-mono"
                />
                <span className="text-xs font-bold text-slate-800 block pt-1">
                  Crítica / Por que precisou de ajuste?
                </span>
                <textarea
                  rows={2}
                  value={critiqueV1}
                  onChange={(e) => setCritiqueV1(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>

              {/* Round 2 */}
              <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 space-y-2">
                <span className="text-xs font-bold text-emerald-950 block">
                  Prompt Otimizado (Versão 2 / Final):
                </span>
                <textarea
                  rows={3}
                  value={promptV2}
                  onChange={(e) => setPromptV2(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-emerald-300 bg-white font-mono"
                />
                <span className="text-xs font-bold text-emerald-950 block pt-1">
                  Ganhos Pedagógicos Obtidos:
                </span>
                <textarea
                  rows={2}
                  value={critiqueV2}
                  onChange={(e) => setCritiqueV2(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-emerald-300 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Final Deliverable */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-bold">
                3
              </span>
              <span>Produto Final a Entregar / Apresentar</span>
            </span>

            <textarea
              rows={14}
              value={finalProduct}
              onChange={(e) => setFinalProduct(e.target.value)}
              className="w-full text-xs font-mono p-4 rounded-xl border border-slate-300 bg-slate-50/60 leading-relaxed text-slate-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
