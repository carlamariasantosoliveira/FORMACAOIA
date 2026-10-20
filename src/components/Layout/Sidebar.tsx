import React from 'react';
import {
  Home,
  Cpu,
  GitBranch,
  Layers,
  Terminal,
  PenTool,
  BookOpen,
  FileCheck,
  Settings,
  Gamepad2,
  Briefcase,
  FileText,
  Brain,
  X,
} from 'lucide-react';
import { PageId } from '../../types';
import { PAGES_NAV } from '../../data/courseData';

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
  { id: 'home', label: 'Página Inicial', icon: Home },
  { id: 'ia-generativa', label: '1. IA Generativa', icon: Home },
  { id: 'como-funcionam', label: '2. Como funcionam', icon: GitBranch },
  { id: 'tipos-modelos', label: '3. Tipos de modelos', icon: Layers },
  { id: 'prompts', label: '4. Prompts', icon: Terminal },
  { id: 'tecnicas', label: '5. Técnicas e exemplos', icon: PenTool },
  { id: 'exemplos-disciplina', label: '6. Exemplos por disciplina', icon: BookOpen },
  { id: 'atividades-sala', label: '7. Atividades práticas', icon: FileCheck },
  { id: 'magicschool', label: '8. MagicSchool.ai', icon: Settings },
  { id: 'simuladores-quizzes', label: '9. Quizzes e simuladores', icon: Gamepad2 },
  { id: 'desafio-final', label: '10. Desafio final', icon: Briefcase },
  { id: 'ferramentas-referencias', label: '11. Referências', icon: FileText },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onSelectPage,
  isMobileOpen,
  onCloseMobile,
}) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Clean White Sidebar matching all reference screenshots */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-100 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 pb-3 flex items-center justify-between">
          <div
            onClick={() => {
              onSelectPage('home');
              onCloseMobile();
            }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[13px] font-bold text-slate-900 leading-tight block">
                Inteligência Artificial
              </span>
              <span className="text-[12px] font-semibold text-slate-700 leading-tight block">
                na Educação
              </span>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className="p-1 text-slate-400 hover:text-slate-600 lg:hidden rounded-lg hover:bg-slate-100"
            title="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPage(item.id);
                  onCloseMobile();
                }}
                className={`w-full text-left flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                  isActive
                    ? item.id === 'home'
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-blue-100/80 text-blue-800 font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/50 font-medium'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive
                      ? item.id === 'home'
                        ? 'text-white'
                        : 'text-blue-700'
                      : 'text-slate-400 group-hover:text-blue-600'
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer with Dark Blue Decorative Quote Card */}
        <div className="p-3">
          <div className="relative rounded-2xl bg-linear-to-b from-[#0F274E] via-[#0B1E3E] to-[#08152B] p-4 text-white overflow-hidden shadow-sm">
            {/* Background subtle radial glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl pointer-events-none"></div>

            <p className="text-[11px] text-blue-100/90 leading-relaxed italic mb-3 relative z-10">
              &ldquo;A IA generativa é uma aliada poderosa para potenciar a criatividade, a inclusão e a qualidade da aprendizagem.&rdquo;
            </p>

            {/* Glowing Face Silhouette with Brain SVG */}
            <div className="flex justify-center pt-1 opacity-80">
              <svg
                className="w-10 h-10 text-blue-300"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 54c0-4 3-8 8-8h8c5 0 8 4 8 8" />
                <path d="M22 46V36c0-6 4-10 10-10s10 4 10 10v10" />
                <circle cx="32" cy="22" r="10" strokeDasharray="3 3" />
                <circle cx="32" cy="22" r="3" fill="currentColor" />
                <line x1="32" y1="12" x2="32" y2="16" />
                <line x1="42" y1="22" x2="38" y2="22" />
                <line x1="22" y1="22" x2="26" y2="22" />
              </svg>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
