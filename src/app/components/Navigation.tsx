import { Radio, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Головна' },
    { href: '#generations', label: 'Покоління' },
    { href: '#equipment', label: 'Обладнання' },
    { href: '#news', label: 'Новини' },
    { href: '#gallery', label: 'Галерея' },
    { href: '#contact', label: 'Контакти' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-[#00d4ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#06b6d4] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.4)]">
              <Radio className="w-6 h-6 text-[#0a0e27]" />
            </div>
            <span className="font-bold text-lg text-white">TelecomNet</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#8b93b0] hover:text-[#00d4ff] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00d4ff] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#1a1f3a] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-[#00d4ff]" /> : <Menu className="w-6 h-6 text-[#00d4ff]" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[#00d4ff]/20 bg-[#0f1429]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-[#8b93b0] hover:text-[#00d4ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}