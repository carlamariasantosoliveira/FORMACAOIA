import React from 'react';
import {
  Brain,
  Lightbulb,
  Settings,
  Users,
  CheckCircle2,
  Clock,
  BarChart2,
  Laptop,
  ArrowRight,
  Bot,
  GraduationCap,
  MessageSquare,
  BookOpen,
  Volume2,
  GitBranch,
  Layers,
  PenTool,
  Wand2,
  HelpCircle,
  Award,
  Sparkles,
  Rocket,
  Download,
} from 'lucide-react';
import { PageId } from '../../types';

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-12 font-sans">
      {/* 1. Hero Banner matching exact layout in Dashboard_de_IA_na_Educa__o_4d994aa9.png and Curso_de_IA_na_Educa__o__1__f7e93860.png */}
      <div className="relative rounded-3xl overflow-hidden shadow-xs bg-linear-to-r from-[#0C1E3C] via-[#0E2448] to-[#133360] text-white p-7 sm:p-10 md:p-12 min-h-[300px] flex flex-col md:flex-row md:items-center justify-between gap-8 border border-white/10">
        {/* Left Side: Typography & CTA */}
        <div className="space-y-4 max-w-xl z-10">
          <div className="text-[11px] sm:text-xs font-bold tracking-wider text-blue-300 uppercase">
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

          <p className="text-xs sm:text-sm text-blue-200 font-medium tracking-wide">
            Explorar &bull; Experimentar &bull; Aplicar na Educação
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('ia-generativa')}
              className="inline-flex items-center gap-2.5 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer"
            >
              <span>Começar a explorar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side: Educational AI Hologram Illustration (Pure Vector & CSS, NO Raw Screenshots) */}
        <div className="relative z-10 w-full md:w-80 h-64 flex items-center justify-center">
          <div className="relative w-52 h-52 rounded-full border border-blue-400/30 flex items-center justify-center bg-blue-500/10 backdrop-blur-xs shadow-2xl shadow-blue-500/20">
            {/* Center Robot Educator Icon */}
            <div className="w-18 h-18 rounded-3xl bg-[#1E70EB] text-white flex items-center justify-center shadow-xl border border-blue-300/40 transform hover:scale-105 transition-transform">
              <Bot className="w-10 h-10 text-white" />
            </div>

            {/* Orbiting Node 1: Brain (Top) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0E2448] border border-blue-400 text-blue-300 flex items-center justify-center shadow-md">
              <Brain className="w-4 h-4" />
            </div>

            {/* Orbiting Node 2: Lightbulb (Top Right) */}
            <div className="absolute top-1/4 -right-3 w-9 h-9 rounded-full bg-[#0E2448] border border-blue-400 text-amber-300 flex items-center justify-center shadow-md">
              <Lightbulb className="w-4 h-4" />
            </div>

            {/* Orbiting Node 3: Graduation Cap (Bottom Right) */}
            <div className="absolute bottom-1/4 -right-3 w-9 h-9 rounded-full bg-[#0E2448] border border-blue-400 text-emerald-300 flex items-center justify-center shadow-md">
              <GraduationCap className="w-4 h-4" />
            </div>

            {/* Orbiting Node 4: Speech Bubble (Bottom) */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0E2448] border border-blue-400 text-purple-300 flex items-center justify-center shadow-md">
              <MessageSquare className="w-4 h-4" />
            </div>

            {/* Orbiting Node 5: Book (Left) */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0E2448] border border-blue-400 text-cyan-300 flex items-center justify-center shadow-md">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Four Action Pillar Cards matching Dashboard_de_IA_na_Educa__o_4d994aa9.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Compreender */}
        <div
          onClick={() => onNavigate('como-funcionam')}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
              Compreender
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              O funcionamento dos modelos generativos.
            </p>
          </div>
        </div>

        {/* Card 2: Aprender */}
        <div
          onClick={() => onNavigate('prompts')}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-[#FAF5FF] text-[#9333EA] flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#9333EA] transition-colors">
              Aprender
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              A formular prompts claros e eficazes.
            </p>
          </div>
        </div>

        {/* Card 3: Aplicar */}
        <div
          onClick={() => onNavigate('tecnicas')}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#059669] transition-colors">
              Aplicar
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Boas práticas para otimizar a qualidade dos resultados.
            </p>
          </div>
        </div>

        {/* Card 4: Explorar */}
        <div
          onClick={() => onNavigate('magicschool')}
          className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="w-7 h-7 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors">
              Explorar
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Exemplos e ferramentas com aplicações educativas.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Three Summary & Welcome Cards matching Dashboard_de_IA_na_Educa__o_4d994aa9.png */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Card Left: O que vai encontrar neste módulo? (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-2xs flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              O que vai encontrar neste módulo?
            </h3>
            <div className="space-y-3">
              {[
                'Conteúdos teóricos e explicações simples',
                'Exemplos práticos por disciplina',
                'Atividades e ferramentas interativas',
                'Quizzes com correção automática',
                'Simuladores e desafios práticos',
                'Referências e bibliografia',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#1E70EB] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-slate-700 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#EFF6FF] rounded-2xl p-3.5 border border-blue-100 text-[11px] text-[#1D4ED8] flex items-center gap-2.5">
            <Download className="w-4 h-4 shrink-0 text-[#1E70EB]" />
            <span>Tudo o que precisa para usar a IA com confiança na sua prática docente.</span>
          </div>
        </div>

        {/* Card Center: Está pronto para começar? (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-2xs flex flex-col justify-between space-y-5 text-center">
          <div className="space-y-3 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1E70EB] flex items-center justify-center shadow-xs">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-base font-bold text-slate-900">
              Está pronto para começar?
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              Explore cada secção, experimente as ferramentas e descubra como a IA pode transformar a sua forma de ensinar e aprender.
            </p>

            <button
              onClick={() => onNavigate('ia-generativa')}
              className="w-full py-2.5 px-6 rounded-full bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer mt-2"
            >
              Iniciar o módulo &rarr;
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
            <div>
              <Clock className="w-4 h-4 mx-auto text-slate-400 mb-1" />
              <span className="text-[10px] text-slate-400 block">Duração</span>
              <strong className="text-[11px] text-slate-800">~ 2–3 horas</strong>
            </div>
            <div>
              <BarChart2 className="w-4 h-4 mx-auto text-slate-400 mb-1" />
              <span className="text-[10px] text-slate-400 block">Nível</span>
              <strong className="text-[11px] text-slate-800">Introdução</strong>
            </div>
            <div>
              <Laptop className="w-4 h-4 mx-auto text-slate-400 mb-1" />
              <span className="text-[10px] text-slate-400 block">Formato</span>
              <strong className="text-[11px] text-slate-800">100% online</strong>
            </div>
          </div>
        </div>

        {/* Card Right: Quote from George Couros (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-2xs flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-3 relative z-10">
            <span className="text-2xl font-serif text-[#1E70EB] block leading-none">“</span>
            <blockquote className="text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed">
              A tecnologia não substitui o professor, mas o professor que usa tecnologia pode substituir aquele que não usa.
            </blockquote>
            <p className="text-xs font-bold text-slate-900">— George Couros</p>
          </div>

          {/* Decorative Book & Study Illustration in Vector */}
          <div className="pt-4 flex items-center justify-end opacity-70">
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span>Educação &amp; Inovação Digital</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. "Navegue pelos temas" - The 9 Numbered Pastel Cards matching Curso_de_IA_na_Educa__o__1__f7e93860.png */}
      <div className="space-y-4 pt-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Navegue pelos temas
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Clique num tema ou utilize os botões para explorar o módulo.
          </p>
        </div>

        {/* The 9 Numbered Theme Cards in Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {/* Card 1 */}
          <button
            onClick={() => onNavigate('ia-generativa')}
            className="group text-center bg-[#F0F9FF] border border-[#BAE6FD] hover:border-blue-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#38BDF8] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              1
            </div>
            <Lightbulb className="w-6 h-6 text-[#0284C7] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              IA Generativa e conceitos
            </span>
          </button>

          {/* Card 2 */}
          <button
            onClick={() => onNavigate('como-funcionam')}
            className="group text-center bg-[#ECFDF5] border border-[#A7F3D0] hover:border-emerald-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#10B981] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              2
            </div>
            <GitBranch className="w-6 h-6 text-[#059669] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              Como funcionam os modelos
            </span>
          </button>

          {/* Card 3 */}
          <button
            onClick={() => onNavigate('tipos-modelos')}
            className="group text-center bg-[#F0FDFA] border border-[#99F6E4] hover:border-teal-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#14B8A6] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              3
            </div>
            <Layers className="w-6 h-6 text-[#0D9488] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              Tipos de modelos e aplicações
            </span>
          </button>

          {/* Card 4 */}
          <button
            onClick={() => onNavigate('prompts')}
            className="group text-center bg-[#F5F3FF] border border-[#DDD6FE] hover:border-purple-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#8B5CF6] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              4
            </div>
            <MessageSquare className="w-6 h-6 text-[#7C3AED] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              Prompts e engenharia
            </span>
          </button>

          {/* Card 5 */}
          <button
            onClick={() => onNavigate('tecnicas')}
            className="group text-center bg-[#FFFBEB] border border-[#FDE68A] hover:border-amber-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#F59E0B] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              5
            </div>
            <PenTool className="w-6 h-6 text-[#D97706] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              Técnicas e exemplos
            </span>
          </button>

          {/* Card 6 */}
          <button
            onClick={() => onNavigate('atividades-sala')}
            className="group text-center bg-[#FDF2F8] border border-[#FBCFE8] hover:border-pink-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#EC4899] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              6
            </div>
            <Users className="w-6 h-6 text-[#DB2777] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              Atividades práticas
            </span>
          </button>

          {/* Card 7 */}
          <button
            onClick={() => onNavigate('magicschool')}
            className="group text-center bg-[#F5F3FF] border border-[#DDD6FE] hover:border-violet-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              7
            </div>
            <Wand2 className="w-6 h-6 text-[#7C3AED] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              MagicSchool.ai
            </span>
          </button>

          {/* Card 8 */}
          <button
            onClick={() => onNavigate('simuladores-quizzes')}
            className="group text-center bg-[#EEF2FF] border border-[#C7D2FE] hover:border-indigo-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#6366F1] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              8
            </div>
            <HelpCircle className="w-6 h-6 text-[#4F46E5] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              Quizzes e simuladores
            </span>
          </button>

          {/* Card 9 */}
          <button
            onClick={() => onNavigate('desafio-final')}
            className="group text-center bg-[#ECFDF5] border border-[#A7F3D0] hover:border-emerald-400 p-3 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex flex-col items-center justify-between min-h-[140px] cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#10B981] text-white text-[11px] font-bold flex items-center justify-center mb-1">
              9
            </div>
            <Award className="w-6 h-6 text-[#059669] my-auto group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold text-slate-800 leading-tight">
              Desafio final e referências
            </span>
          </button>
        </div>
      </div>

      {/* 5. Stepper Bar at bottom matching Dashboard_de_IA_na_Educa__o_4d994aa9.png */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E70EB] flex items-center justify-center shrink-0">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Comece agora</h4>
            <p className="text-xs text-slate-500">
              Veja em que ponto está e continue a sua aprendizagem.
            </p>
          </div>
        </div>

        {/* Stepper Dots 1-9 */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => {
            const isFirst = step === 1;
            return (
              <React.Fragment key={step}>
                <button
                  onClick={() => {
                    const pages: PageId[] = [
                      'ia-generativa',
                      'como-funcionam',
                      'tipos-modelos',
                      'prompts',
                      'tecnicas',
                      'atividades-sala',
                      'magicschool',
                      'simuladores-quizzes',
                      'desafio-final',
                    ];
                    onNavigate(pages[step - 1]);
                  }}
                  className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                    isFirst
                      ? 'bg-[#1E70EB] text-white shadow-xs ring-2 ring-blue-200'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                  title={`Ir para Tema ${step}`}
                >
                  {step}
                </button>
                {step < 9 && <span className="text-slate-300 text-xs">—</span>}
              </React.Fragment>
            );
          })}
        </div>

        <button
          onClick={() => onNavigate('ia-generativa')}
          className="inline-flex items-center justify-center gap-2 bg-[#1E70EB] hover:bg-blue-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
        >
          <span>Ver próximo tema</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
