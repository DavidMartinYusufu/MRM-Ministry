import React, { useState } from 'react';
import { 
  Flame, 
  Heart, 
  BookOpen, 
  Music, 
  Vote, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck, 
  Users, 
  Sparkles,
  Send,
  Calendar,
  Play,
  Pause,
  ExternalLink,
  GraduationCap,
  HeartHandshake
} from 'lucide-react';
import { 
  MINISTRY_INFO, 
  MINISTRY_PILLARS, 
  HBI_SCHOOLS, 
  MINISTRY_PROGRAMS, 
  JUYA_NI_ALBUM 
} from '../data/ministryData';
import { BAUCHI_LGAS } from '../data/politicsData';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onOpenInvite: () => void;
  onOpenPrayer: () => void;
  onOpenSupport: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenInvite,
  onOpenPrayer,
  onOpenSupport,
}) => {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const toggleTrack = (title: string) => {
    if (playingTrack === title) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(title);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#18161B] pb-24">
      
      {/* 1. Hero Section (Styled after KindFlow & Finsweet in video) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#171247] via-[#231C64] to-[#140F3E] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-[#322A84]/40">
          
          {/* Subtle warm glow background accent matching globe colors */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#E89619]/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#EA580C]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FBBF24] font-bold">
                <Flame className="w-4 h-4 text-[#EA580C] fill-current" />
                <span>HELP MAKE A DIFFERENCE · VISION 20/2107</span>
              </div>

              {/* Main Headline with 10% Gold/Flame Accent (KindFlow layout style) */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-bold tracking-tight text-white leading-tight">
                Lend Your <span className="text-[#E89619]">Heart & Voice</span> To Transform A <span className="text-[#F97316]">Generation</span>
              </h1>

              {/* Mandate Description */}
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-xl">
                We have been chosen and sent by the Lord Jesus Christ as a family of love to this generation and beyond—transforming every young person on our way into the image of Christ, starting from the Hausa-Fulani communities of Northern Nigeria to the entire African continent.
              </p>

              {/* Scripture Citation */}
              <div className="flex items-center gap-2 text-xs text-[#FBBF24] font-mono">
                <span>Reconciliation & Transformation</span>
                <span>·</span>
                <span>2 Corinthians 5:18-19 · Romans 12:1-2</span>
              </div>

              {/* Dual Action Buttons (10% Gold Accent) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('politics')}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md transition-colors shadow-md inline-flex items-center gap-2"
                >
                  <span>Register in Bauchi Forum (20 LGAs)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenSupport}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#322A84]/70 hover:bg-[#322A84] border border-[#E89619]/40 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#EA580C] fill-current" />
                  <span>Support Mission</span>
                </button>

                <button
                  onClick={onOpenPrayer}
                  className="px-4 py-3 text-xs sm:text-sm font-medium text-stone-300 hover:text-white rounded-md transition-colors inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#FBBF24]" />
                  <span>Prayer Request</span>
                </button>
              </div>

            </div>

            {/* Right Column: Hero Visual Feature Box with the Official Emblem */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#171247]/90 rounded-2xl p-6 sm:p-8 border border-[#322A84]/60 shadow-2xl w-full max-w-md backdrop-blur-sm text-center relative group">
                
                {/* Official Logo Display */}
                <div className="w-44 h-44 sm:w-52 sm:h-52 mx-auto relative flex items-center justify-center p-2 rounded-2xl bg-[#231C64]/70 border border-[#E89619]/40 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/assets/aistudio/image_67293e06.png"
                    alt="Majalisar Ruhu Mai Tsarki Emblem"
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>

                <div className="mt-5 space-y-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FBBF24] font-semibold block">
                    The Holy Ghost Parliament Nigeria
                  </span>
                  <h3 className="font-serif-title text-xl font-bold text-white">
                    Majalisar Ruhu Mai Tsarki
                  </h3>
                  <p className="text-xs text-stone-300 italic">
                    "Helping each one, to teach one, to reach one."
                  </p>
                </div>

                {/* Sub-strip inside card */}
                <div className="mt-4 pt-4 border-t border-[#322A84]/70 grid grid-cols-2 gap-2 text-left text-xs">
                  <div className="p-2 bg-[#231C64]/50 rounded">
                    <span className="text-[10px] text-stone-400 block">Mission Base</span>
                    <span className="font-semibold text-white">Bauchi State, NG</span>
                  </div>
                  <div className="p-2 bg-[#231C64]/50 rounded">
                    <span className="text-[10px] text-stone-400 block">Civic Chapter</span>
                    <span className="font-semibold text-[#FBBF24]">20 LGAs Organized</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Quick Metric Strip (Directly below Hero, matching KindFlow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-xl border border-[#E7E3DA] p-6 shadow-2xs grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F1EFF9] text-[#231C64] flex items-center justify-center shrink-0 border border-[#231C64]/10">
              <Users className="w-6 h-6 text-[#231C64]" />
            </div>
            <div>
              <div className="text-xs text-[#666170] uppercase font-semibold tracking-wider">Vision 20/2107</div>
              <div className="text-xl sm:text-2xl font-serif-title font-bold text-[#171247] tabular-nums">
                100 Million Souls
              </div>
              <div className="text-xs text-[#666170]">Target youth across Hausa-Fulani & Africa</div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-l md:border-[#E7E3DA] md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#FFF8EB] text-[#E89619] flex items-center justify-center shrink-0 border border-[#E89619]/20">
              <Vote className="w-6 h-6 text-[#E89619]" />
            </div>
            <div>
              <div className="text-xs text-[#666170] uppercase font-semibold tracking-wider">Kingdom Politics</div>
              <div className="text-xl sm:text-2xl font-serif-title font-bold text-[#171247] tabular-nums">
                20 Bauchi LGAs
              </div>
              <div className="text-xs text-[#666170]">Organised, informed, respected & counted</div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-l md:border-[#E7E3DA] md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#F1EFF9] text-[#231C64] flex items-center justify-center shrink-0 border border-[#231C64]/10">
              <GraduationCap className="w-6 h-6 text-[#231C64]" />
            </div>
            <div>
              <div className="text-xs text-[#666170] uppercase font-semibold tracking-wider">Bible Institute</div>
              <div className="text-xl sm:text-2xl font-serif-title font-bold text-[#171247] tabular-nums">
                13 HBI Schools
              </div>
              <div className="text-xs text-[#666170]">From the Spirit to Kingdom Politics</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. "A Church / Movement That's Relevant" (3 Feature Cards from video & KindFlow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
            OUR THREEFOLD EXPRESSION
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-[#171247] mt-1">
            A Movement That's Relevant
          </h2>
          <p className="text-xs sm:text-sm text-[#666170] mt-2">
            Bringing the eternal truth of Jesus Christ into the daily challenges of youth, governance, and community survival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: About Us / Spiritual Depth */}
          <div className="bg-[#F4F1EA] rounded-2xl p-8 border border-[#E7E3DA] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#E89619] text-white flex items-center justify-center mb-6 shadow-sm">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#171247] mb-3">
                About Our Mandate
              </h3>
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed mb-6">
                Rooted in 2 Corinthians 5:18-19, we are sent to restore broken young lives through the communion of the Holy Spirit, radical intercessory altars, and sound apostolic truth.
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-bold text-[#231C64] hover:text-[#171247] inline-flex items-center gap-1.5 self-start"
            >
              <span>Explore Identity & 9 Pillars</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Get Involved / Youth Skill Academy */}
          <div className="bg-[#F4F1EA] rounded-2xl p-8 border border-[#E7E3DA] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#231C64] text-[#FBBF24] flex items-center justify-center mb-6 shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#171247] mb-3">
                Get Involved & Learn
              </h3>
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed mb-6">
                Holy Ghost Bible Institute (HBI) and hands-on vocational trade bootcamps (solar, agriculture, tailoring) equipping you to be a self-reliant kingdom ambassador.
              </p>
            </div>
            <button
              onClick={() => onNavigate('hbi')}
              className="text-xs font-bold text-[#231C64] hover:text-[#171247] inline-flex items-center gap-1.5 self-start"
            >
              <span>View 13 HBI Schools</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Civic Voice / Giving Back & Governance */}
          <div className="bg-[#F4F1EA] rounded-2xl p-8 border border-[#E7E3DA] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#EA580C] text-white flex items-center justify-center mb-6 shadow-sm">
                <Vote className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#171247] mb-3">
                Civic Voice in Bauchi
              </h3>
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed mb-6">
                The National APC Christian Leaders Forum, Bauchi State Chapter. Organized across all 20 LGAs and wards: "Register. Be counted. Build Bauchi together."
              </p>
            </div>
            <button
              onClick={() => onNavigate('politics')}
              className="text-xs font-bold text-[#231C64] hover:text-[#171247] inline-flex items-center gap-1.5 self-start"
            >
              <span>Find Your LGA & Ward Team</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. "Love and Compassion / Serving The World Around Us" (Split Section from video) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3 Portrait Image Style Containers */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-56 rounded-2xl bg-[#231C64] p-5 flex flex-col justify-between text-white relative overflow-hidden shadow-md">
                <div className="w-10 h-10 rounded-lg bg-[#E89619] p-1 flex items-center justify-center">
                  <img src="/assets/aistudio/image_67293e06.png" alt="Emblem" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#FBBF24]">Mandate</span>
                  <h4 className="font-serif-title font-bold text-base mt-0.5">Family of Love</h4>
                  <p className="text-[11px] text-stone-300 mt-1">Transforming every youth into the image of Christ.</p>
                </div>
              </div>

              <div className="h-44 rounded-2xl bg-white p-5 border border-[#E7E3DA] flex flex-col justify-between shadow-2xs">
                <span className="text-2xl font-serif-title font-bold text-[#E89619] tabular-nums">2107</span>
                <div>
                  <h5 className="font-bold text-xs text-[#171247]">Trans-Generational</h5>
                  <p className="text-[11px] text-[#666170]">A generational covenant of revival.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="h-44 rounded-2xl bg-[#FAF9F6] p-5 border border-[#E7E3DA] flex flex-col justify-between shadow-2xs">
                <HeartHandshake className="w-8 h-8 text-[#EA580C]" />
                <div>
                  <h5 className="font-bold text-xs text-[#171247]">Rural Missions</h5>
                  <p className="text-[11px] text-[#666170]">Hausa-Fulani villages reached with love.</p>
                </div>
              </div>

              <div className="h-56 rounded-2xl bg-[#171247] p-5 flex flex-col justify-between text-white shadow-md">
                <ShieldCheck className="w-8 h-8 text-[#FBBF24]" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#FBBF24]">Jeremiah 29:7</span>
                  <h4 className="font-serif-title font-bold text-base mt-0.5">Seek The City's Peace</h4>
                  <p className="text-[11px] text-stone-300 mt-1">Righteousness exalts Bauchi State and Nigeria.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
              WELCOME TO OUR MOVEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#171247] leading-tight">
              Love, Reconciliation and Transformation
            </h2>
            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Majalisar Ruhu Mai Tsarki Outreach Ministries (Holy Ghost Parliament Ministries) is a Christian Youth inter-denominational outreach and transformation movement. We labor in love, reaching young people through rural and urban outreaches, cross-cultural missions, discipleship, and practical skill acquisition.
            </p>

            {/* The 9 Pillars Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {MINISTRY_PILLARS.slice(0, 6).map((pillar) => (
                <div key={pillar.number} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EEECF8] text-[#231C64] flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-bold text-[#171247]">{pillar.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#231C64] hover:bg-[#171247] rounded transition-colors"
              >
                Read More About Us →
              </button>
              <button
                onClick={onOpenInvite}
                className="text-xs font-semibold text-[#E89619] hover:underline"
              >
                Invite the Apostle to Your City
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. "Watch, Listen & Experience" (4 Media Cards from Finsweet in video) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
              WATCH AND LISTEN
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-[#171247] mt-1">
              Revival Sounds & Messages
            </h2>
          </div>
          <button
            onClick={() => onNavigate('juya-ni')}
            className="text-xs font-bold text-[#231C64] hover:text-[#171247] inline-flex items-center gap-1"
          >
            <span>View Full 7-Track Juya Ni Album</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid (matching the video layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Juya Ni */}
          <div 
            onClick={() => onNavigate('juya-ni')}
            className="group rounded-xl overflow-hidden bg-[#171247] text-white p-6 flex flex-col justify-between h-80 relative cursor-pointer shadow-md hover:scale-[1.02] transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="relative z-20 flex justify-between items-start">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FBBF24]">Track 01 · 6:42</span>
              <Music className="w-5 h-5 text-[#E89619]" />
            </div>
            <div className="relative z-20 space-y-2">
              <h3 className="font-serif-title text-xl font-bold group-hover:text-[#FBBF24] transition-colors">
                Juya Ni (Transform Me)
              </h3>
              <p className="text-xs text-stone-300 line-clamp-2">
                Apostolic revival cry in Hausa calling hearts to personal consecration and Holy Spirit fire.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#FBBF24] font-medium">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Sound Preview</span>
              </div>
            </div>
          </div>

          {/* Card 2: Kasar Bauchi Ta Yesu Ce */}
          <div 
            onClick={() => onNavigate('juya-ni')}
            className="group rounded-xl overflow-hidden bg-[#231C64] text-white p-6 flex flex-col justify-between h-80 relative cursor-pointer shadow-md hover:scale-[1.02] transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="relative z-20 flex justify-between items-start">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FBBF24]">Track 04 · 7:04</span>
              <MapPin className="w-5 h-5 text-[#E89619]" />
            </div>
            <div className="relative z-20 space-y-2">
              <h3 className="font-serif-title text-xl font-bold group-hover:text-[#FBBF24] transition-colors">
                Kasar Bauchi Ta Yesu Ce
              </h3>
              <p className="text-xs text-stone-300 line-clamp-2">
                "From Alkaleri to Katagum, the land of Bauchi belongs to Jesus." Prophetic sound of light.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#FBBF24] font-medium">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Song of Peace</span>
              </div>
            </div>
          </div>

          {/* Card 3: Majalisar Ruhu Fire Altar */}
          <div 
            onClick={() => onNavigate('ministries')}
            className="group rounded-xl overflow-hidden bg-[#171247] text-white p-6 flex flex-col justify-between h-80 relative cursor-pointer shadow-md hover:scale-[1.02] transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="relative z-20 flex justify-between items-start">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FBBF24]">Intercession · 24/7</span>
              <Flame className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div className="relative z-20 space-y-2">
              <h3 className="font-serif-title text-xl font-bold group-hover:text-[#FBBF24] transition-colors">
                Majalisa Apostolic Fire Night
              </h3>
              <p className="text-xs text-stone-300 line-clamp-2">
                Unbroken prayer watches, prophetic declarations, and territorial intercession.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#FBBF24] font-medium">
                <span>View Program Vigil</span>
              </div>
            </div>
          </div>

          {/* Card 4: Biblical Discipleship */}
          <div 
            onClick={() => onNavigate('hbi')}
            className="group rounded-xl overflow-hidden bg-[#231C64] text-white p-6 flex flex-col justify-between h-80 relative cursor-pointer shadow-md hover:scale-[1.02] transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="relative z-20 flex justify-between items-start">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FBBF24]">Discipleship</span>
              <BookOpen className="w-5 h-5 text-[#E89619]" />
            </div>
            <div className="relative z-20 space-y-2">
              <h3 className="font-serif-title text-xl font-bold group-hover:text-[#FBBF24] transition-colors">
                School of Kingdom Politics
              </h3>
              <p className="text-xs text-stone-300 line-clamp-2">
                Sound doctrine for righteous public policy, community development, and moral ethics.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#FBBF24] font-medium">
                <span>Explore Module</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. "Join Us and Become Part of Something Great" (Upcoming Program Spotlight from video) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white rounded-2xl border border-[#E7E3DA] p-8 sm:p-12 shadow-sm">
          
          <div className="flex items-center justify-between pb-6 border-b border-[#E7E3DA] mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
                UPCOMING FEAST & GATHERING
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
                Join Us and Become Part of Something Great
              </h2>
            </div>
            <button
              onClick={() => onNavigate('ministries')}
              className="text-xs font-semibold text-[#231C64] hover:underline hidden sm:block"
            >
              View all programs →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Event Box with Date Badge */}
            <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-xl border border-[#E7E3DA] space-y-4">
              
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#E89619] font-bold uppercase">
                    Upcoming Gathering
                  </span>
                  <h3 className="font-serif-title text-xl font-bold text-[#171247]">
                    Majalisa Apostolic Fire Night
                  </h3>
                </div>
                <div className="bg-[#231C64] text-white px-3 py-2 rounded-lg text-center font-mono shrink-0 shadow-sm">
                  <span className="block text-xl font-bold text-[#FBBF24] leading-none">20</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-200">JULY</span>
                </div>
              </div>

              <p className="text-xs text-[#44403C] leading-relaxed">
                All-night prayer vigil, prophetic declarations, youth impartation, and deep communion with the Holy Spirit.
              </p>

              <div className="space-y-2 text-xs text-[#666170] pt-2 border-t border-[#E7E3DA]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#E89619]" />
                  <span>Every Last Friday of the Month · 9:00 PM (WAT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E89619]" />
                  <span>Main Parliament Sanctuary, Bauchi & Live Stream</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPrayer}
                  className="w-full py-2.5 bg-[#E89619] hover:bg-[#D1830E] text-white text-xs font-semibold rounded transition-colors shadow-sm"
                >
                  Register to Attend / Request Prayer
                </button>
              </div>
            </div>

            {/* Event Media Image Card */}
            <div className="lg:col-span-7 bg-[#171247] rounded-xl p-8 text-white flex flex-col justify-between min-h-[300px] relative overflow-hidden">
              <div className="space-y-2 relative z-10">
                <div className="inline-block px-3 py-1 bg-[#E89619] text-white font-bold text-[11px] rounded uppercase tracking-wider">
                  Vision 20/2107 in Action
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white">
                  Youth Discipleship & Skill Academy
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 max-w-lg leading-relaxed">
                  Equipping young people across Northern Nigeria with practical trades, computer literacy, and apostolic theology to transform families and cities.
                </p>
              </div>

              <div className="pt-6 relative z-10 flex items-center justify-between text-xs">
                <span className="text-[#FBBF24] font-medium">Free Admission · Open to all Christian Youth</span>
                <button
                  onClick={() => onNavigate('hbi')}
                  className="px-4 py-2 bg-white text-[#171247] hover:bg-stone-100 font-bold rounded text-xs transition-colors"
                >
                  Enroll in Academy →
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. "We Want To Serve The World Around Us" Quote / Mission Banner (from video) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative rounded-2xl bg-[#231C64] text-white p-8 sm:p-14 overflow-hidden border border-[#322A84] shadow-lg">
          <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#FBBF24] font-bold">
              THE VISION & PROMISE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-title font-bold tracking-tight">
              "We Want To Serve The World Around Us"
            </h2>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-serif-title italic">
              "Through our lifestyle and Gospel missions’ outreaches, we desire to see the Holy Spirit transforming the lives of 100 million young people into the image of Jesus Christ, beginning from the Hausa-Fulani speaking communities of Northern Nigeria to the entire Continent of Africa at large."
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => onNavigate('politics')}
                className="px-6 py-2.5 bg-[#E89619] hover:bg-[#D1830E] text-white font-semibold text-xs rounded transition-colors shadow-sm"
              >
                Visit Bauchi State Politics Forum
              </button>
              <button
                onClick={onOpenSupport}
                className="px-6 py-2.5 bg-[#171247] hover:bg-[#140F3E] text-white border border-[#322A84] font-semibold text-xs rounded transition-colors"
              >
                Support Outreach Missions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Share, Inspire, Innovate" (Blog / Updates from video) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
            READ OUR UPDATES
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
            Share, Inspire, Transform
          </h2>
          <p className="text-xs text-[#666170] mt-1">
            Dispatches from field missions, the intercessory altar, and the Bauchi State Christian Leaders Forum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-xl border border-[#E7E3DA] p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#E89619] font-bold">
                CIVIC ENGAGEMENT
              </span>
              <h4 className="font-serif-title font-bold text-base text-[#171247] mt-2 mb-2">
                Why Christian Representation Matters in Bauchi
              </h4>
              <p className="text-xs text-[#666170] line-clamp-3">
                Jeremiah 29:7 urges us to seek the welfare of the city where we reside. How the 20 LGAs are organizing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7E3DA] text-[11px] text-[#666170] flex justify-between items-center">
              <span>By Apostle's Secretariat</span>
              <button onClick={() => onNavigate('politics')} className="text-[#231C64] font-bold">Read →</button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E7E3DA] p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#EA580C] font-bold">
                RURAL MISSIONS
              </span>
              <h4 className="font-serif-title font-bold text-base text-[#171247] mt-2 mb-2">
                Reaching the Hausa-Fulani Frontier Villages
              </h4>
              <p className="text-xs text-[#666170] line-clamp-3">
                Field reports from mission trips across Bauchi North and Central. Light breaking into remote areas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7E3DA] text-[11px] text-[#666170] flex justify-between items-center">
              <span>By Mission Director</span>
              <button onClick={() => onNavigate('ministries')} className="text-[#231C64] font-bold">Read →</button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E7E3DA] p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#E89619] font-bold">
                MUSIC & WORSHIP
              </span>
              <h4 className="font-serif-title font-bold text-base text-[#171247] mt-2 mb-2">
                The Story Behind the "Juya Ni" Revival Album
              </h4>
              <p className="text-xs text-[#666170] line-clamp-3">
                How an indigenous Hausa prayer chant became an anthem of national youth consecration.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7E3DA] text-[11px] text-[#666170] flex justify-between items-center">
              <span>By Worship Ministry</span>
              <button onClick={() => onNavigate('juya-ni')} className="text-[#231C64] font-bold">Read →</button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E7E3DA] p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#231C64] font-bold">
                YOUTH EMPOWERMENT
              </span>
              <h4 className="font-serif-title font-bold text-base text-[#171247] mt-2 mb-2">
                "Each One, Teach One, Reach One"
              </h4>
              <p className="text-xs text-[#666170] line-clamp-3">
                Vocational skill acquisition results: equipping youth with electrical, solar, and craft mastery.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7E3DA] text-[11px] text-[#666170] flex justify-between items-center">
              <span>By HBI Faculty</span>
              <button onClick={() => onNavigate('hbi')} className="text-[#231C64] font-bold">Read →</button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
