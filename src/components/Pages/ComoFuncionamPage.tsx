import React from 'react';
import { ModelMechanicsSimulator } from '../Simulators/ModelMechanicsSimulator';

export const ComoFuncionamPage: React.FC = () => {
  const steps = [
    {
      num: 1,
      circleBg: 'bg-[#3B82F6]',
      titleBg: 'bg-[#EFF6FF] text-[#1D4ED8]',
      title: 'Dados de Treino',
      desc: 'A IA é treinada com grandes volumes de textos e imagens (livros, artigos, páginas web, conteúdos educativos). Nesta fase inicial, o modelo apenas "vê" os dados sem ainda aprender.',
    },
    {
      num: 2,
      circleBg: 'bg-[#10B981]',
      titleBg: 'bg-[#ECFDF5] text-[#047857]',
      title: 'Aprendizagem de Padrões (Fase de Treino)',
      desc: 'Processo de aprendizagem a partir dos dados. O modelo identifica regularidades, aprende como os elementos se organizam, estabelece associações e ajusta probabilidades internas.',
    },
    {
      num: 3,
      circleBg: 'bg-[#F59E0B]',
      titleBg: 'bg-[#FFFBEB] text-[#B45309]',
      title: 'Prompt do Utilizador (Ponto de Partida)',
      desc: 'O utilizador escreve uma pergunta, instrução ou descrição. O prompt orienta o cálculo estatístico, mas não garante a verdade.',
    },
    {
      num: 4,
      circleBg: 'bg-[#8B5CF6]',
      titleBg: 'bg-[#F5F3FF] text-[#6D28D9]',
      title: 'Processamento Interno',
      desc: 'Divisão em tokens, cálculo da próxima palavra mais provável e uso de mecanismos de atenção ao contexto.',
    },
    {
      num: 5,
      circleBg: 'bg-[#EF4444]',
      titleBg: 'bg-[#FEF2F2] text-[#B91C1C]',
      title: 'Produção da Resposta (Saída / Output)',
      desc: 'Resposta coerente em linguagem natural (pode conter erros factuais).',
    },
    {
      num: 6,
      circleBg: 'bg-[#F59E0B]',
      titleBg: 'bg-[#FEFCE8] text-[#A16207]',
      title: 'Limitação Fundamental',
      desc: 'Não compreende como um ser humano, não valida factos e não possui consciência. Resposta convincente ≠ Resposta correcta.',
    },
  ];

  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* Title bar with signature blue vertical line matching imagem_6bc26744.png */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-8 bg-[#1E70EB] rounded-full inline-block"></span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1E38] tracking-tight">
            Como Funcionam os Modelos Generativos?
          </h1>
        </div>
        <p className="text-sm font-bold text-slate-800 pl-4.5">
          Ciclo de Funcionamento
        </p>
      </div>

      {/* Vertical Timeline matching imagem_6bc26744.png */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-2xs">
        <div className="space-y-6 relative">
          {/* Vertical connector line */}
          <div className="absolute left-[18px] top-4 bottom-8 w-0.5 bg-slate-200 pointer-events-none"></div>

          {steps.map((s) => (
            <div
              key={s.num}
              className="relative flex flex-col md:flex-row md:items-center gap-4 z-10"
            >
              {/* Number Circle Badge */}
              <div
                className={`w-9 h-9 rounded-full ${s.circleBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs`}
              >
                {s.num}
              </div>

              {/* Title Pill Badge */}
              <div
                className={`md:w-72 shrink-0 ${s.titleBg} rounded-2xl px-5 py-3 font-bold text-xs sm:text-sm border border-black/5`}
              >
                {s.title}
              </div>

              {/* Description text on right */}
              <div className="flex-1 text-xs sm:text-sm text-slate-700 leading-relaxed pl-2 md:pl-0">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Simulator Section */}
      <div className="pt-2">
        <ModelMechanicsSimulator />
      </div>
    </div>
  );
};
