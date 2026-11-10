import React, { useState } from 'react';
import { 
  Users, 
  Flame, 
  MapPin, 
  HeartHandshake, 
  Calendar, 
  ShieldCheck,
  Send,
  Heart
} from 'lucide-react';
import { MINISTRY_PROGRAMS } from '../data/ministryData';

interface MinistriesViewProps {
  onOpenInvite: () => void;
  onOpenPrayer: () => void;
  onOpenSupport: () => void;
}

export const MinistriesView: React.FC<MinistriesViewProps> = ({
  onOpenInvite,
  onOpenPrayer,
  onOpenSupport,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'maidens' | 'priests' | 'outreaches' | 'programs'>('all');

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#18161B] pb-24">
      
      {/* 30% Structural Secondary: Deep Indigo Header */}
      <section className="bg-gradient-to-br from-[#171247] via-[#231C64] to-[#140F3E] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#322A84]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FBBF24] font-bold mb-3">
            <Flame className="w-4 h-4 text-[#E89619]" />
            <span>Specialized Ministry Wings & Outreaches · mrm.com.ng</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-title font-bold tracking-tight text-white mb-4">
            Arms of Transformation & Labor
          </h1>

          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-3xl">
            Reaching young men, young women, rural ethnic villages, and urban student campuses through targeted discipleship, intense intercessory altars, and practical skill development.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#E89619] text-white'
                  : 'bg-[#231C64] text-stone-200 hover:bg-[#322A84]'
              }`}
            >
              All Ministry Arms
            </button>
            <button
              onClick={() => setActiveTab('maidens')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'maidens'
                  ? 'bg-[#E89619] text-white'
                  : 'bg-[#231C64] text-stone-200 hover:bg-[#322A84]'
              }`}
            >
              The Maidens (maidens.mrm)
            </button>
            <button
              onClick={() => setActiveTab('priests')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'priests'
                  ? 'bg-[#E89619] text-white'
                  : 'bg-[#231C64] text-stone-200 hover:bg-[#322A84]'
              }`}
            >
              The Priests (priests.mrm)
            </button>
            <button
              onClick={() => setActiveTab('outreaches')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'outreaches'
                  ? 'bg-[#E89619] text-white'
                  : 'bg-[#231C64] text-stone-200 hover:bg-[#322A84]'
              }`}
            >
              Field Outreaches (outreach.mrm)
            </button>
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'programs'
                  ? 'bg-[#E89619] text-white'
                  : 'bg-[#231C64] text-stone-200 hover:bg-[#322A84]'
              }`}
            >
              Calendar & Programs (program.mrm)
            </button>
          </div>
        </div>
      </section>

      {/* 60% Canvas Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* The Maidens Wing */}
        {(activeTab === 'all' || activeTab === 'maidens') && (
          <div className="bg-white rounded-2xl border border-[#E7E3DA] p-8 shadow-2xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E7E3DA]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
                  Young Women & Sisters Wing · maidens.mrm.com.ng
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
                  The Maidens Circle
                </h2>
                <p className="text-xs sm:text-sm text-[#44403C] mt-1 max-w-2xl leading-relaxed">
                  Raising holy, virtuous, entrepreneurial young women rooted in biblical modesty, intercession, intellectual competence, and emotional wholeness.
                </p>
              </div>
              <button
                onClick={onOpenPrayer}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md shrink-0 self-start lg:self-center shadow-sm"
              >
                Join Maidens Intercession
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs text-[#44403C]">
              <div className="p-5 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA] space-y-1.5">
                <strong className="block text-[#171247] font-bold text-sm">Purity & Character:</strong>
                <p className="leading-relaxed">
                  Equipping sisters to overcome modern peer pressure, fostering godly self-worth and sanctified purpose.
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA] space-y-1.5">
                <strong className="block text-[#171247] font-bold text-sm">Vocational Skills:</strong>
                <p className="leading-relaxed">
                  Practical bootcamps in fashion design, culinary catering, graphics, and agribusiness to foster financial self-reliance.
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA] space-y-1.5">
                <strong className="block text-[#171247] font-bold text-sm">Maternal Prayer Altar:</strong>
                <p className="leading-relaxed">
                  Regular prophetic prayer vigils interceding for children, broken homes, moral restoration, and future Christian families.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* The Priests Wing */}
        {(activeTab === 'all' || activeTab === 'priests') && (
          <div className="bg-white rounded-2xl border border-[#E7E3DA] p-8 shadow-2xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E7E3DA]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#231C64] font-bold">
                  Young Men & Altar Ministers · priests.mrm.com.ng
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
                  The Priests Assembly (Men of Valor)
                </h2>
                <p className="text-xs sm:text-sm text-[#44403C] mt-1 max-w-2xl leading-relaxed">
                  Challenging young men to spiritual manhood, moral discipline, financial integrity, and bold community leadership across Northern Nigeria.
                </p>
              </div>
              <button
                onClick={onOpenPrayer}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#231C64] hover:bg-[#171247] rounded-md shrink-0 self-start lg:self-center shadow-sm"
              >
                Join the Watchmen Altar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs text-[#44403C]">
              <div className="p-5 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA] space-y-1.5">
                <strong className="block text-[#171247] font-bold text-sm">Spiritual Priesthood:</strong>
                <p className="leading-relaxed">
                  Restoring men as altar-builders, priests of their homes, and fearless defenders of righteousness in society.
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA] space-y-1.5">
                <strong className="block text-[#171247] font-bold text-sm">Leadership & Mentorship:</strong>
                <p className="leading-relaxed">
                  Rigorous coaching in integrity, business ethics, emotional discipline, and spiritual accountability.
                </p>
              </div>

              <div className="p-5 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA] space-y-1.5">
                <strong className="block text-[#171247] font-bold text-sm">Night Watches & Warfare:</strong>
                <p className="leading-relaxed">
                  Unbroken intercessory shifts maintaining fire on the altar, breaking drug addiction and criminal temptations.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Field Outreaches */}
        {(activeTab === 'all' || activeTab === 'outreaches') && (
          <div className="bg-white rounded-2xl border border-[#E7E3DA] p-8 shadow-2xs space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
                Cross-Cultural & Rural Missions · outreach.mrm.com.ng
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
                Gospel Outreaches & Frontier Missions
              </h2>
              <p className="text-xs sm:text-sm text-[#44403C] mt-1 max-w-3xl leading-relaxed">
                Reaching out to the young people with the Gospel of Jesus Christ through rural/urban outreach, cross-cultural missions, discipleship, and skill acquisition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#FAF9F6] border border-[#E7E3DA] space-y-2">
                <h3 className="font-serif-title text-base font-bold text-[#171247]">
                  Hausa-Fulani Rural Expeditions
                </h3>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  Trained mission teams travel into remote pastoral and agricultural villages equipped with the Gospel in native tongues, the Jesus Film in Hausa/Fulfulde, clothing aid, and clean water assistance.
                </p>
                <div className="pt-2 text-[11px] text-[#231C64] font-bold">
                  Primary Zones: Bauchi North, Bauchi Central, and Border Settlements.
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#FAF9F6] border border-[#E7E3DA] space-y-2">
                <h3 className="font-serif-title text-base font-bold text-[#171247]">
                  Youth Skill Acquisition Bootcamps
                </h3>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  "Helping each one, to teach one, to reach one." Free vocational training camps teaching youth solar power assembly, modern crop irrigation, phone repair, carpentry, and small enterprise bookkeeping.
                </p>
                <div className="pt-2 text-[11px] text-[#E89619] font-bold">
                  Impact: Hundreds of youth transformed from joblessness into kingdom entrepreneurs.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#E7E3DA]">
              <span className="text-xs text-[#666170]">
                Want to sponsor a rural village outreach or donate relief supplies?
              </span>
              <button
                onClick={onOpenSupport}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md shadow-sm"
              >
                Sponsor Mission Outreach
              </button>
            </div>
          </div>
        )}

        {/* Regular Programs Schedule */}
        {(activeTab === 'all' || activeTab === 'programs') && (
          <div className="bg-white rounded-2xl border border-[#E7E3DA] p-8 shadow-2xs space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
                Gatherings & Feasts · program.mrm.com.ng
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
                Calendar of Ministry Programs
              </h2>
            </div>

            <div className="divide-y divide-[#E7E3DA]">
              {MINISTRY_PROGRAMS.map((prog) => (
                <div key={prog.id} className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#E89619] block font-mono">
                      {prog.schedule}
                    </span>
                    <h3 className="font-serif-title text-lg font-bold text-[#171247]">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-[#44403C] max-w-2xl leading-relaxed">
                      {prog.description}
                    </p>
                    <div className="text-[11px] text-[#666170] pt-1">
                      <span>Venue: {prog.location}</span> · <span>Target: {prog.audience}</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenPrayer}
                    className="px-4 py-2 text-xs bg-[#FAF9F6] hover:bg-[#F1EFF9] text-[#231C64] border border-[#E7E3DA] rounded-md font-semibold self-start md:self-center shrink-0 transition-colors"
                  >
                    Attend / Inquire
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

    </div>
  );
};
