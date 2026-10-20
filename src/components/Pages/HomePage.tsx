import React from 'react';
import {
  Brain,
  Lightbulb,
  Settings,
  Users,
  Check,
  Download,
  Target,
  Clock,
  BarChart3,
  Monitor,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../../types';
import { COURSE_INFO } from '../../data/courseData';

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* 1. Large Hero Banner matching Dashboard_de_IA_na_Educa__o_4d994aa9.png */}
      <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-[#0F2244] min-h-[300px] sm:min-h-[340px] flex items-center">
        {/* Background Image of Educator & AI Network */}
        <img
          src="/assets/aistudio/Dashboard_de_IA_na_Educa__o_4d994aa9.png"
          alt="Módulo 2: IA Generativa e Prompts na Educação"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
        />

        {/* Gradient Overlay to guarantee text legibility on left */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0D1F3D]/95 via-[#0D1F3D]/80 to-transparent"></div>

        {/* Content on left */}
        <div className="relative z-10 p-6 sm:p-10 max-w-xl text-white space-y-4">
          <div className="text-[11px] sm:text-xs font-bold tracking-wider text-blue-200 uppercase">
            CURSO: INTELIGÊNCIA ARTIFICIAL NA EDUCAÇÃO
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Módulo 2
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              IA Generativa e Prompts
            </div>
          </div>

          <p className="text-xs sm:text-sm text-blue-100 font-medium tracking-wide">
            Explorar • Experimentar • Aplicar na Educação
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('ia-generativa')}
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Começar a explorar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Four Action / Pillar Cards in a Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Compreender (Blue) */}
        <div
          onClick={() => onNavigate('como-funcionam')}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Brain className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-bold text-slate-900">Compreender</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              O funcionamento dos modelos generativos.
            </p>
          </div>
        </div>

        {/* Card 2: Aprender (Purple) */}
        <div
          onClick={() => onNavigate('prompts')}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-bold text-slate-900">Aprender</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              A formular prompts claros e eficazes.
            </p>
          </div>
        </div>

        {/* Card 3: Aplicar (Green) */}
        <div
          onClick={() => onNavigate('tecnicas')}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Settings className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-bold text-slate-900">Aplicar</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Boas práticas para otimizar a qualidade dos resultados.
            </p>
          </div>
        </div>

        {/* Card 4: Explorar (Orange) */}
        <div
          onClick={() => onNavigate('magicschool')}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <Users className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-bold text-slate-900">Explorar</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Exemplos e ferramentas com aplicações educativas.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Three Middle Cards from Reference Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Card 1 (Left, 4 cols): O que vai encontrar neste módulo? */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              O que vai encontrar neste módulo?
            </h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Conteúdos teóricos e explicações simples</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Exemplos práticos por disciplina</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Atividades e ferramentas interativas</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Quizzes com correção automática</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Simuladores e desafios práticos</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Referências e bibliografia</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50/80 rounded-full px-4 py-2.5 flex items-center gap-2.5 text-blue-900 text-[11px] font-medium">
            <Download className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Tudo o que precisa para usar a IA com confiança na sua prática docente.</span>
          </div>
        </div>

        {/* Card 2 (Center, 4 cols): Está pronto para começar? */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>

            <h3 className="text-base font-bold text-slate-900">
              Está pronto para começar?
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Explore cada secção, experimente as ferramentas e descubra como a IA pode transformar a sua forma de ensinar e aprender.
            </p>

            <button
              onClick={() => onNavigate('ia-generativa')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs py-2.5 px-5 rounded-full transition-colors"
            >
              <span>Iniciar o módulo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center text-slate-600 text-[11px]">
            <div>
              <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="font-normal text-[10px] text-slate-400">Duração estimada</div>
              <div className="font-semibold text-slate-800">~ 2–3 horas</div>
            </div>
            <div>
              <BarChart3 className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="font-normal text-[10px] text-slate-400">Nível</div>
              <div className="font-semibold text-slate-800">Introdução</div>
            </div>
            <div>
              <Monitor className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <div className="font-normal text-[10px] text-slate-400">Formato</div>
              <div className="font-semibold text-slate-800">100% online</div>
            </div>
          </div>
        </div>

        {/* Card 3 (Right, 4 cols): George Couros Quote with Desk Photo */}
        <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-slate-100 shadow-2xs min-h-[260px] flex flex-col justify-between p-6 bg-[#F8FAFC]">
          <div className="space-y-3 relative z-10">
            <span className="text-3xl font-serif text-blue-300 block leading-none">“</span>
            <blockquote className="text-xs sm:text-sm font-medium text-slate-800 italic leading-relaxed">
              A tecnologia não substitui o professor, mas o professor que usa tecnologia pode substituir aquele que não usa.
            </blockquote>
          </div>

          <div className="relative z-10 pt-4 text-xs font-semibold text-slate-600">
            — George Couros
          </div>
        </div>
      </div>

      {/* 4. Bottom Bar: Comece agora with Step indicators */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Rocket className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-tight">
              Comece agora
            </h4>
            <p className="text-xs text-slate-500">
              Veja em que ponto está e continue a sua aprendizagem.
            </p>
          </div>
        </div>

        {/* Numbered Dots 1 to 9 */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((stepNum) => (
            <button
              key={stepNum}
              onClick={() => {
                const targetPages: PageId[] = [
                  'ia-generativa',
                  'como-funcionam',
                  'tipos-modelos',
                  'prompts',
                  'tecnicas',
                  'exemplos-disciplina',
                  'atividades-sala',
                  'magicschool',
                  'simuladores-quizzes',
                ];
                onNavigate(targetPages[stepNum - 1]);
              }}
              className={`w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center transition-colors ${
                stepNum === 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {stepNum}
            </button>
          ))}
        </div>

        <button
          onClick={() => onNavigate('ia-generativa')}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors"
        >
          <span>Ver próximo tema</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
