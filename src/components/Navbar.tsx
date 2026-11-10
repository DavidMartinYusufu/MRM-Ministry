import React from 'react';
import { 
  Heart, 
  Send, 
  Menu, 
  X, 
  ChevronRight,
  ExternalLink,
  Flame
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenInvite: () => void;
  onOpenPrayer: () => void;
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenInvite,
  onOpenPrayer,
  onOpenSupport,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About & Mandate' },
    { id: 'hbi', label: 'Bible Institute (HBI)' },
    { id: 'ministries', label: 'Wings & Outreaches' },
    { id: 'juya-ni', label: 'Juya Ni Album' },
    { id: 'politics', label: 'Kingdom Politics (Bauchi)' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 30% Structural Secondary: Deep Globe Indigo Announcement Bar */}
      <aside aria-label="Announcement" className="bg-[#171247] text-stone-200 text-xs py-2 px-4 border-b border-[#231C64]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-stone-200">
            <span className="font-bold text-[#FBBF24] flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#EA580C] fill-current" />
              VISION 20/2107:
            </span>
            <span>Transforming 100 Million Young People into the Image of Christ</span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <a 
              href="https://share.google/s4DlGAaSwr2gmxjuz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FBBF24] transition-colors inline-flex items-center gap-1"
            >
              <span>Renewed Hope Diaspora</span>
              <ExternalLink className="w-3 h-3 text-[#FBBF24]" />
            </a>
            <span className="text-[#322A84]">·</span>
            <button 
              onClick={() => handleNavClick('politics')}
              className="text-[#FBBF24] hover:text-white font-medium cursor-pointer transition-colors"
            >
              Bauchi 20 LGAs Forum →
            </button>
          </div>
        </div>
      </aside>

      {/* Main Top Bar Contract: 60% Canvas / Crisp White, 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E7E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark with Official Logo Image */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
          >
            <div className="w-12 h-12 rounded-xl bg-[#231C64] p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden border border-[#E89619]/40">
              <img 
                src="/assets/aistudio/image_67293e06.png" 
                alt="Majalisar Ruhu Mai Tsarki Official Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<span class="text-[#E89619] font-bold text-xs">MRM</span>';
                  }
                }}
              />
            </div>
            <div>
              <div className="font-serif-title text-base sm:text-lg font-bold tracking-tight text-[#171247] whitespace-nowrap leading-none">
                Majalisar Ruhu Mai Tsarki
              </div>
              <div className="text-[11px] text-[#666170] font-medium tracking-wide mt-1 whitespace-nowrap">
                Holy Ghost Parliament Nigeria
              </div>
            </div>
          </button>

          {/* Zone 2: Clean single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#44403C]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const isPolitics = item.id === 'politics';
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#231C64] font-bold' 
                      : 'hover:text-[#171247]'
                  } ${isPolitics ? 'text-[#231C64] font-semibold' : ''}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E89619] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary 10% Gold Accent Action + Secondary Affordances */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenPrayer}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#231C64] hover:bg-[#EEECF8] bg-[#F1EFF9] rounded-md transition-colors whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5 text-[#231C64]" />
              <span>Prayer Request</span>
            </button>

            <button
              onClick={onOpenSupport}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#231C64] hover:bg-[#EEECF8] bg-[#F1EFF9] rounded-md transition-colors whitespace-nowrap"
            >
              <Heart className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Support</span>
            </button>

            {/* 10% High-Intent Accent Button */}
            <button
              onClick={() => handleNavClick('politics')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md transition-colors whitespace-nowrap shadow-sm"
            >
              Register in Bauchi
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#231C64] hover:text-[#171247] rounded-md hover:bg-[#EEECF8] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F6] border-b border-[#E7E3DA] px-4 pt-3 pb-6 space-y-2">
            <div className="text-xs uppercase tracking-wider text-[#666170] font-semibold px-2 pb-1">
              Main Navigation
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-[#EEECF8] text-[#231C64] font-bold'
                    : 'text-[#44403C] hover:bg-stone-100'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#8C8696]" />
              </button>
            ))}

            <div className="pt-3 border-t border-[#E7E3DA] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInvite();
                }}
                className="w-full text-left px-3 py-2 text-sm text-[#231C64] hover:bg-[#EEECF8] rounded-md font-medium"
              >
                Invite the Apostle
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrayer();
                }}
                className="w-full text-left px-3 py-2 text-sm text-[#231C64] hover:bg-[#EEECF8] rounded-md font-medium"
              >
                Submit Prayer Request
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSupport();
                }}
                className="w-full text-left px-3 py-2 text-sm text-[#231C64] hover:bg-[#EEECF8] rounded-md font-medium"
              >
                Support / Partner
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
