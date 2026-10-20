import React from 'react';
import {
  Home,
  Cpu,
  GitBranch,
  Layers,
  Terminal,
  PenTool,
  FileCheck,
  Settings,
  Gamepad2,
  Award,
  FileText,
  Brain,
  X,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../../types';

interface SidebarProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

const MENU_ITEMS: Array<{
  id: PageId;
  label: string;
  icon: React.ElementType;
}> = [
  { id: 'home', label: 'Início', icon: Home },
  { id: 'ia-generativa', label: '1. IA Generativa', icon: Cpu },
  { id: 'como-funcionam', label: '2. Como funcionam', icon: GitBranch },
  { id: 'tipos-modelos', label: '3. Tipos de modelos', icon: Layers },
  { id: 'prompts', label: '4. Prompts', icon: Terminal },
  { id: 'tecnicas', label: '5. Técnicas e exemplos', icon: PenTool },
  { id: 'atividades-sala', label: '6. Atividades práticas', icon: FileCheck },
  { id: 'magicschool', label: '7. MagicSchool.ai', icon: Settings },
  { id: 'simuladores-quizzes', label: '8. Quizzes e simuladores', icon: Gamepad2 },
  { id: 'desafio-final', label: '9. Desafio final', icon: Award },
  { id: 'ferramentas-referencias', label: 'Referências', icon: FileText },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onSelectPage,
  isMobileOpen,
  onCloseMobile,
}) => {
  const isHome = currentPage === 'home';

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* 
        Sidebar Styling:
        - When on Home: Dark Navy `#0A1E38` matching Curso_de_IA_na_Educa__o__1__f7e93860.png and Dashboard_de_IA_na_Educa__o_4d994aa9.png
        - When on Content Pages: Crisp White/Slate `#FFFFFF` / `#F8FAFC` matching imagem_ca72888b.png, imagem_6bc26744.png, imagem_aa589f90.png, imagem_49d88603.png
      */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        } ${
          isHome
            ? 'bg-[#0A1E38] text-white border-r border-[#162D4E]'
            : 'bg-white text-slate-700 border-r border-slate-200/80 shadow-xs'
        }`}
      >
        {/* Brand Header */}
        <div
          className={`p-5 pb-4 flex items-center justify-between border-b ${
            isHome ? 'border-white/10' : 'border-slate-100'
          }`}
        >
          <div
            onClick={() => {
              onSelectPage('home');
              onCloseMobile();
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                isHome
                  ? 'border-white/20 bg-white/5 text-white'
                  : 'border-blue-200 bg-blue-50 text-[#1E70EB]'
              }`}
            >
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span
                className={`text-[11px] font-extrabold tracking-wider uppercase block leading-tight ${
                  isHome ? 'text-white' : 'text-[#0C1E38]'
                }`}
              >
                INTELIGÊNCIA ARTIFICIAL
              </span>
              <span
                className={`text-[11px] font-extrabold tracking-wider uppercase block leading-tight ${
                  isHome ? 'text-white' : 'text-[#0C1E38]'
                }`}
              >
                NA EDUCAÇÃO
              </span>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className={`p-1 lg:hidden rounded-lg ${
              isHome
                ? 'text-slate-400 hover:text-white hover:bg-white/10'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list matching exact labels in reference screenshot */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            let buttonClass = '';
            let iconClass = '';

            if (isHome) {
              // Dark mode sidebar rules
              if (isActive) {
                buttonClass = 'bg-[#1E70EB] text-white font-semibold shadow-md';
                iconClass = 'text-white';
              } else {
                buttonClass = 'text-slate-300 hover:text-white hover:bg-white/10';
                iconClass = 'text-slate-400 group-hover:text-white';
              }
            } else {
              // Light mode sidebar rules (matching imagem_ca72888b, etc.)
              if (isActive) {
                buttonClass =
                  'bg-[#DCEBFE] text-[#1D4ED8] font-bold border border-blue-200/70 shadow-2xs';
                iconClass = 'text-[#1D4ED8]';
              } else {
                buttonClass =
                  'text-slate-600 hover:text-[#0C1E38] hover:bg-slate-50 font-medium';
                iconClass = 'text-slate-500 group-hover:text-[#0C1E38]';
              }
            }

            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPage(item.id);
                  onCloseMobile();
                }}
                className={`w-full text-left flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs transition-all ${buttonClass}`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${iconClass}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom Quote Box matching Curso_de_IA_na_Educa__o__1__f7e93860.png */}
        <div
          className={`p-4 border-t ${
            isHome
              ? 'border-white/10 bg-black/20 text-blue-100/90'
              : 'border-slate-100 bg-slate-50 text-slate-600'
          }`}
        >
          <div className="text-[11px] leading-relaxed italic space-y-1.5">
            <span
              className={`text-xl font-serif leading-none block ${
                isHome ? 'text-blue-300' : 'text-[#1E70EB]'
              }`}
            >
              “
            </span>
            <p>
              A IA generativa é uma aliada poderosa para potenciar a criatividade, a inclusão e a qualidade da aprendizagem.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
