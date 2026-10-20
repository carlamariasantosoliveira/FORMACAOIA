import React from 'react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { PageId } from '../../types';
import { PAGES_NAV } from '../../data/courseData';

interface BottomNavProps {
  currentPage: PageId;
  onSelectPage: (pageId: PageId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPage,
  onSelectPage,
}) => {
  const currentIndex = PAGES_NAV.findIndex((p) => p.id === currentPage);
  const prevPage = currentIndex > 0 ? PAGES_NAV[currentIndex - 1] : null;
  const nextPage =
    currentIndex < PAGES_NAV.length - 1 ? PAGES_NAV[currentIndex + 1] : null;

  return (
    <nav aria-label="Navegação entre páginas" className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Previous Button */}
      {prevPage ? (
        <button
          onClick={() => onSelectPage(prevPage.id)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 px-5 py-3 rounded-xl shadow-2xs transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
          <div className="text-left">
            <span className="block text-[10px] text-slate-400 font-normal uppercase">
              Anterior
            </span>
            <span className="block text-xs font-semibold text-slate-800">
              {prevPage.title}
            </span>
          </div>
        </button>
      ) : (
        <div className="hidden sm:block"></div>
      )}

      {/* Return to Home Quick Button */}
      {currentPage !== 'home' && (
        <button
          onClick={() => onSelectPage('home')}
          className="text-xs text-slate-500 hover:text-blue-700 flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Voltar à Página Inicial</span>
        </button>
      )}

      {/* Next Button */}
      {nextPage ? (
        <button
          onClick={() => onSelectPage(nextPage.id)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-xs hover:shadow-md transition-all ml-auto"
        >
          <div className="text-right">
            <span className="block text-[10px] text-blue-200 font-normal uppercase">
              Seguinte
            </span>
            <span className="block text-xs font-semibold text-white">
              {nextPage.title}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      ) : (
        <div className="hidden sm:block"></div>
      )}
    </nav>
  );
};
