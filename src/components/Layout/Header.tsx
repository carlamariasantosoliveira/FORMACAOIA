import React from 'react';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Sun,
  Brain,
  Search,
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../../types';
import { PAGES_NAV } from '../../data/courseData';

interface HeaderProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onSelectPage,
  onOpenMobileMenu,
  onOpenSearch,
}) => {
  const currentIndex = PAGES_NAV.findIndex((p) => p.id === currentPage);
  const currentPageMeta = PAGES_NAV[currentIndex] || PAGES_NAV[0];

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectPage(PAGES_NAV[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < PAGES_NAV.length - 1) {
      onSelectPage(PAGES_NAV[currentIndex + 1].id);
    }
  };

  const isHome = currentPage === 'home';

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-100 px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
      {/* Left side: Mobile button + Breadcrumb */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onOpenMobileMenu}
          className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 lg:hidden"
          title="Abrir menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs sm:text-sm truncate">
          <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Brain className="w-4 h-4" />
          </div>

          <button
            onClick={() => onSelectPage('home')}
            className="font-bold text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            Módulo 2
          </button>

          {!isHome && (
            <>
              <span className="text-slate-400 font-bold">&gt;</span>
              <span className="text-slate-800 font-bold truncate">
                {currentPageMeta.title}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Right side: Header controls */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Search button */}
        <button
          onClick={onOpenSearch}
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-full transition-colors"
          title="Pesquisar (Ctrl+K)"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Sun / Theme icon */}
        <button
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-full transition-colors"
          title="Modo de Visualização"
        >
          <Sun className="w-4 h-4" />
        </button>

        {isHome ? (
          /* Módulo 2 Pill Button on Home */
          <button
            onClick={() => onSelectPage('ia-generativa')}
            className="inline-flex items-center gap-1.5 bg-blue-100/80 hover:bg-blue-200 text-blue-700 font-semibold text-xs px-4 py-1.5 rounded-full transition-colors"
          >
            <span>Módulo 2</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          /* Navigation Arrow & Step Counter matching content screenshots */
          <div className="flex items-center gap-2 text-slate-700">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-1 text-slate-500 hover:text-slate-900 disabled:opacity-20 transition-colors"
              title="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs sm:text-sm font-semibold text-slate-800">
              {currentIndex} / {PAGES_NAV.length - 1}
            </span>

            <button
              onClick={handleNext}
              disabled={currentIndex === PAGES_NAV.length - 1}
              className="p-1 text-slate-500 hover:text-slate-900 disabled:opacity-20 transition-colors"
              title="Seguinte"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
