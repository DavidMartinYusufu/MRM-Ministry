import React, { useState } from 'react';
import { Phone, Mail, Globe, Heart, ChevronRight, Send, Check } from 'lucide-react';
import { MINISTRY_INFO } from '../data/ministryData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenInvite: () => void;
  onOpenPrayer: () => void;
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenInvite,
  onOpenPrayer,
  onOpenSupport,
}) => {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailSub('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#171247] text-stone-300 border-t border-[#231C64] text-sm">
      
      {/* Newsletter Subscription Strip (from video) */}
      <div className="bg-[#140F3E] border-b border-[#231C64]/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif-title text-lg font-bold text-white">
              Subscribe to Get Latest Updates & News
            </h3>
            <p className="text-xs text-stone-400">
              Receive monthly mission reports, intercessory alerts, and Bauchi State civic bulletins.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full md:w-auto">
            {subscribed ? (
              <div className="px-4 py-2 bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs rounded-md flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="px-3.5 py-2.5 bg-[#231C64] border border-[#322A84] rounded-md text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#E89619] w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#E89619] hover:bg-[#D1830E] text-white font-semibold text-xs rounded-md transition-colors whitespace-nowrap shadow-sm"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Ministry Identity with Official Emblem */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#231C64] p-1 flex items-center justify-center shrink-0 border border-[#E89619]/40 shadow-sm overflow-hidden">
                <img
                  src="/assets/aistudio/image_67293e06.png"
                  alt="MRM Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif-title text-base font-bold text-white block leading-tight">
                  Majalisar Ruhu Mai Tsarki
                </span>
                <span className="text-[11px] text-[#FBBF24]">Holy Ghost Parliament Nigeria</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              A Christian Youth inter-denominational outreach and transformation movement. Reconciliation and Transformation (2 Cor. 5:18-19, Rom. 12:1-2).
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-stone-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E89619]" />
                <span>08061557035 · 08072448718 · 08085844858</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E89619]" />
                <span>majalisa2050@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#E89619]" />
                <span>mrm.com.ng</span>
              </div>
            </div>
          </div>

          {/* Col 2: Suggested Pages / Subdomains Ecosystem */}
          <div>
            <h4 className="font-serif-title text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Ministry Subdomains & Portals
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onNavigate('politics')} 
                  className="hover:text-[#FBBF24] text-left transition-colors flex items-center justify-between w-full"
                >
                  <span>Kingdom Politics (Bauchi 20 LGAs)</span>
                  <span className="text-[10px] text-stone-500">invite.mrm</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('hbi')} 
                  className="hover:text-[#FBBF24] text-left transition-colors flex items-center justify-between w-full"
                >
                  <span>Holy Ghost Bible Institute (13 Schools)</span>
                  <span className="text-[10px] text-stone-500">hbi.mrm</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('juya-ni')} 
                  className="hover:text-[#FBBF24] text-left transition-colors flex items-center justify-between w-full"
                >
                  <span>Juya Ni Revival Album</span>
                  <span className="text-[10px] text-stone-500">juyanialbum.com</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ministries')} 
                  className="hover:text-[#FBBF24] text-left transition-colors flex items-center justify-between w-full"
                >
                  <span>The Maidens & The Priests Wings</span>
                  <span className="text-[10px] text-stone-500">maidens/priests</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ministries')} 
                  className="hover:text-[#FBBF24] text-left transition-colors flex items-center justify-between w-full"
                >
                  <span>Outreaches & Missions</span>
                  <span className="text-[10px] text-stone-500">outreach.mrm</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#FBBF24] text-left transition-colors flex items-center justify-between w-full"
                >
                  <span>Spiritual Fatherhood & Heritage</span>
                  <span className="text-[10px] text-stone-500">fatherhood.mrm</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Kingdom Politics & Civic Action */}
          <div>
            <h4 className="font-serif-title text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Civic Action: Bauchi State
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              The National APC Christian Leaders Forum of Nigeria, Bauchi State Chapter. Organised, informed, respected, and counted across all 3 Senatorial Districts and 20 LGAs.
            </p>
            <div className="text-xs text-stone-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-medium">Jeremiah 29:7:</span>
                <span className="italic">Seek the peace of the city.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FBBF24] font-medium">Proverbs 14:34:</span>
                <span className="italic">Righteousness exalts a nation.</span>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => onNavigate('politics')}
                className="text-xs font-semibold text-[#FBBF24] hover:text-white inline-flex items-center gap-1"
              >
                <span>Find Your LGA & Ward Team</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 4: Quick Engagement */}
          <div className="space-y-4">
            <h4 className="font-serif-title text-sm font-semibold text-white uppercase tracking-wider">
              Get Involved
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenInvite}
                className="w-full text-left px-3.5 py-2 text-xs bg-[#231C64] hover:bg-[#322A84] text-stone-200 rounded transition-colors"
              >
                Invite the Apostle to Your City/Church
              </button>
              <button
                onClick={onOpenPrayer}
                className="w-full text-left px-3.5 py-2 text-xs bg-[#231C64] hover:bg-[#322A84] text-stone-200 rounded transition-colors"
              >
                Submit a Prayer Request to the Altar
              </button>
              <button
                onClick={onOpenSupport}
                className="w-full text-left px-3.5 py-2 text-xs bg-[#E89619] hover:bg-[#D1830E] text-white font-semibold rounded transition-colors flex items-center justify-between shadow-sm"
              >
                <span>Support Vision 20/2107</span>
                <Heart className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
            <div className="pt-2 text-[11px] text-stone-400">
              Vision 20/2107: Reaching 100 Million young people across Hausa-Fulani communities and Africa by 2107.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#231C64] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Majalisar Ruhu Mai Tsarki Outreach Ministries Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span>Reconciliation & Transformation</span>
            <span>·</span>
            <span>Bauchi State, Nigeria</span>
            <span>·</span>
            <span className="text-[#FBBF24]">mrm.com.ng</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
