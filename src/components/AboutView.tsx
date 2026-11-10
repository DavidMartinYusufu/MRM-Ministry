import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  ChevronRight,
  Flame,
  UserCheck
} from 'lucide-react';
import { MINISTRY_INFO, MINISTRY_PILLARS } from '../data/ministryData';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
  onOpenInvite: () => void;
  onOpenSupport: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenInvite,
  onOpenSupport,
}) => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#18161B] pb-24">
      
      {/* 30% Structural Secondary: Deep Indigo Header */}
      <section className="bg-gradient-to-br from-[#171247] via-[#231C64] to-[#140F3E] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#322A84]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          
          <div className="w-28 h-28 rounded-2xl bg-[#171247] p-2 border border-[#E89619]/40 shadow-xl shrink-0 flex items-center justify-center">
            <img src="/assets/aistudio/image_67293e06.png" alt="Official Logo" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FBBF24] font-bold">
              <span>About Us & Identity · about.mrm.com.ng</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif-title font-bold tracking-tight text-white">
              Who Are We?
            </h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-2xl">
              Majalisar Ruhu Mai Tsarki Outreach Ministries (The Holy Ghost Parliament Nigeria) is a Christian Youth inter-denominational outreach and transformation movement ignited with apostolic passion for revival, character reform, and nation-building.
            </p>
          </div>

        </div>
      </section>

      {/* Core Catechism & Identity Grid (60% Canvas) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Driving Force & Motto */}
        <div className="bg-white p-8 rounded-2xl border border-[#E7E3DA] shadow-2xs space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
            What is Our Driving Force?
          </div>
          <h2 className="text-2xl font-serif-title font-bold text-[#171247]">
            Our Motto: Reconciliation and Transformation
          </h2>
          <div className="text-xs text-[#231C64] font-mono font-semibold">
            2 Corinthians 5:18-19 · Romans 12:1-2
          </div>
          <p className="text-sm text-[#44403C] leading-relaxed">
            "And all things are of God, who hath reconciled us to himself by Jesus Christ, and hath given to us the ministry of reconciliation... And be not conformed to this world: but be ye transformed by the renewing of your mind."
          </p>
        </div>

        {/* Authority Backup & Mandate */}
        <div className="bg-white p-8 rounded-2xl border border-[#E7E3DA] shadow-2xs space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
            What is Our Authority Backup?
          </div>
          <h2 className="text-2xl font-serif-title font-bold text-[#171247]">
            Our Divine Mandate
          </h2>
          <p className="text-sm sm:text-base text-[#18161B] leading-relaxed font-serif-title italic bg-[#FAF9F6] p-4 rounded-xl border border-[#E7E3DA]">
            "{MINISTRY_INFO.mandate}"
          </p>
          <p className="text-xs text-[#666170] leading-relaxed">
            We are not merely an organization; we are an apostolic family committed to the radical restoration of youth destiny, tearing down moral corruption, religious apathy, and ethnic division through the life and power of Jesus Christ.
          </p>
        </div>

        {/* Vision 20/2107 */}
        <div className="bg-[#171247] text-white p-8 sm:p-10 rounded-2xl border border-[#322A84] shadow-md space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#FBBF24] font-bold">
            What Are We Seeing?
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-white">
            Our Vision: Vision 20/2107
          </h2>
          <p className="text-base text-stone-200 leading-relaxed">
            "{MINISTRY_INFO.vision.text}"
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#322A84] text-xs">
            <div className="p-4 bg-[#231C64]/70 rounded-xl border border-[#322A84]">
              <span className="text-[#FBBF24] font-bold block mb-1">Strategic Epicenter</span>
              <span>Reaching into the Hausa-Fulani speaking heartlands, establishing vibrant indigenous disciples who disciple others in their native dialects.</span>
            </div>
            <div className="p-4 bg-[#231C64]/70 rounded-xl border border-[#322A84]">
              <span className="text-[#FBBF24] font-bold block mb-1">Continental Scope</span>
              <span>Spreading across Sub-Saharan Africa and the global African diaspora with sustainable leadership and spiritual fervor.</span>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white p-8 rounded-2xl border border-[#E7E3DA] shadow-2xs space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
            What Are We Doing?
          </div>
          <h2 className="text-2xl font-serif-title font-bold text-[#171247]">
            Our Mission: Labor in Love
          </h2>
          <p className="text-sm sm:text-base text-[#18161B] leading-relaxed">
            "{MINISTRY_INFO.mission.statement}"
          </p>
          <div className="p-4 bg-[#F1EFF9] rounded-xl border border-[#231C64]/20 text-xs font-serif-title text-[#171247] font-semibold">
            Core Philosophy: "Helping each one, to teach one, to reach one."
          </div>
        </div>

        {/* Spiritual Fatherhood (fatherhood.mrm.com.ng) */}
        <div className="bg-white p-8 rounded-2xl border border-[#E7E3DA] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#231C64] font-bold">
            <UserCheck className="w-4 h-4 text-[#E89619]" />
            <span>Spiritual Fatherhood & Apostolic Covering · fatherhood.mrm.com.ng</span>
          </div>
          <h2 className="text-2xl font-serif-title font-bold text-[#171247]">
            Honoring Apostolic Heritage & Lineage
          </h2>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            Majalisar Ruhu Mai Tsarki Outreach Ministries stands under clear apostolic authority and generational blessing. We believe spiritual fatherhood is biblical protocol (1 Corinthians 4:15, Malachi 4:6) that provides accountability, doctrinal purity, trans-generational wisdom, and protective covering for every minister and wing in our family.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#44403C] pt-2">
            <div className="p-4 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA]">
              <strong className="block text-[#171247] mb-0.5">Apostolic Counsel:</strong>
              Continuous spiritual guidance from fathers of the faith across the body of Christ in Nigeria.
            </div>
            <div className="p-4 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA]">
              <strong className="block text-[#171247] mb-0.5">Inter-Denominational Harmony:</strong>
              Partnering with all biblical church bodies without theological sectarianism or pride.
            </div>
          </div>
        </div>

        {/* Detailed 9 Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
              FOUNDATIONAL ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
              The 9 Divine Pillars
            </h2>
          </div>

          <div className="space-y-3">
            {MINISTRY_PILLARS.map((pillar) => (
              <div 
                key={pillar.number}
                className="bg-white p-5 rounded-xl border border-[#E7E3DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:border-[#231C64]/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#231C64] text-[#FBBF24] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-serif-title text-sm font-bold text-[#171247]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#666170] mt-0.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 bg-[#F4F1EA] rounded-2xl border border-[#E7E3DA] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-title text-base font-bold text-[#171247]">
              Want to Host or Partner with MRM?
            </h3>
            <p className="text-xs text-[#666170]">
              Invite the Apostle for conferences, join the intercessory prayer network, or partner in missions.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenInvite}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md transition-colors shadow-sm"
            >
              Invite Apostle
            </button>
            <button
              onClick={onOpenSupport}
              className="px-5 py-2.5 text-xs font-semibold text-[#171247] bg-white border border-[#E7E3DA] hover:bg-stone-50 rounded-md transition-colors"
            >
              Support Vision
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
