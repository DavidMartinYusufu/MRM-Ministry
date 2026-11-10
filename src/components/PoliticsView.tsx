import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  Search, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  ChevronRight,
  Sparkles,
  Flame,
  Vote
} from 'lucide-react';
import { BAUCHI_LGAS, SENATORIAL_DISTRICTS, LGAData } from '../data/politicsData';
import { LgaDetailModal } from './LgaDetailModal';

interface PoliticsViewProps {
  onOpenRegisterModal?: () => void;
  onRegisteredSuccess: (name: string, lgaName: string, ward: string) => void;
}

export const PoliticsView: React.FC<PoliticsViewProps> = ({
  onRegisteredSuccess,
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState<'All' | 'Bauchi South' | 'Bauchi Central' | 'Bauchi North'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLga, setActiveLga] = useState<LGAData | null>(null);
  const [contactCoordinatorModalOpen, setContactCoordinatorModalOpen] = useState(false);

  // Filter LGAs based on district and search
  const filteredLgas = BAUCHI_LGAS.filter((lga) => {
    const matchesDistrict = selectedDistrict === 'All' || lga.senatorialDistrict === selectedDistrict;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesDistrict;
    
    const matchesName = lga.name.toLowerCase().includes(query);
    const matchesHq = lga.headquarters.toLowerCase().includes(query);
    const matchesWard = lga.wards.some((w) => w.toLowerCase().includes(query));
    return matchesDistrict && (matchesName || matchesHq || matchesWard);
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#18161B] pb-24">
      
      {/* 1. Header Banner & Civic Orientation (30% Structural Secondary: Deep Indigo) */}
      <section className="bg-gradient-to-br from-[#171247] via-[#231C64] to-[#140F3E] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#322A84] relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#FBBF24] font-bold mb-3">
            <Vote className="w-4 h-4 text-[#E89619]" />
            <span>The National APC Christian Leaders Forum of Nigeria</span>
            <span className="text-[#322A84]">·</span>
            <span>Bauchi State Chapter</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-title font-bold tracking-tight text-white mb-6 leading-tight">
            Welcome to the Christian Family of Bauchi State
          </h1>

          <div className="text-base sm:text-lg text-stone-200 leading-relaxed space-y-4 max-w-3xl">
            <p>
              Bauchi State is called the <strong className="text-[#FBBF24] font-semibold">Pearl of Tourism</strong>, and it is also a pearl of promise for the Church. It is a land of about 49,000 square kilometres, with rolling savannah, the green hills of the Jos Plateau edge, warm springs, rivers and the famous Yankari Game Reserve. More than 50 ethnic groups live here, speaking many languages and keeping many traditions.
            </p>
            <p className="text-sm sm:text-base text-stone-300">
              This is the home state of Sir Abubakar Tafawa Balewa, the first and only Prime Minister of Nigeria. It is a land where believers have prayed, taught, built schools and churches, and served their neighbours across generations.
            </p>
            <p className="text-sm sm:text-base text-stone-200">
              The National APC Christian Leaders Forum of Nigeria, Bauchi State Chapter, exists so that the Christian voice in Bauchi is <strong className="text-white font-medium">organised, informed, respected and counted</strong>. We are present in all 20 Local Government Areas, across three senatorial districts: Bauchi South, Bauchi Central and Bauchi North.
            </p>
          </div>

          {/* Scripture Foundations */}
          <div className="mt-8 p-5 rounded-xl bg-[#171247]/90 border border-[#322A84] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-300 shadow-md">
            <div>
              <div className="font-semibold text-[#FBBF24] mb-1">Jeremiah 29:7</div>
              <p className="italic text-stone-200">
                "And seek the peace and prosperity of the city where we live... for in the peace thereof shall ye have peace."
              </p>
            </div>
            <div>
              <div className="font-semibold text-[#FBBF24] mb-1">Proverbs 14:34</div>
              <p className="italic text-stone-200">
                "Righteousness exalts a nation, but sin is a reproach to any people."
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#322A84]">
            <div className="font-serif-title text-base sm:text-lg font-bold text-[#FBBF24]">
              Register. Be counted. Build Bauchi together.
            </div>

            {/* Suggested Buttons: Find My LGA, Register as a Member, Join My Ward Team, Contact My Coordinator */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#lga-directory"
                className="px-4 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded transition-colors whitespace-nowrap shadow-sm"
              >
                Find My LGA
              </a>
              <button
                onClick={() => {
                  const defaultLga = BAUCHI_LGAS[0];
                  setActiveLga(defaultLga);
                }}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-[#231C64] hover:bg-[#171247] border border-[#322A84] rounded transition-colors whitespace-nowrap"
              >
                Register as a Member
              </button>
              <button
                onClick={() => {
                  const bogoro = BAUCHI_LGAS.find((l) => l.id === 'bogoro') || BAUCHI_LGAS[0];
                  setActiveLga(bogoro);
                }}
                className="px-4 py-2.5 text-xs font-semibold text-stone-200 hover:text-white bg-[#171247] hover:bg-[#231C64] rounded border border-[#322A84] transition-colors whitespace-nowrap"
              >
                Join My Ward Team
              </button>
              <button
                onClick={() => setContactCoordinatorModalOpen(true)}
                className="px-4 py-2.5 text-xs font-semibold text-stone-300 hover:text-white bg-[#171247] hover:bg-[#231C64] rounded border border-[#322A84] transition-colors whitespace-nowrap"
              >
                Contact My Coordinator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bauchi State at a Glance Fact Strip (60% Canvas) */}
      <section className="bg-[#F4F1EA] border-b border-[#E7E3DA] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
                PART TWO: OVERVIEW
              </span>
              <h2 className="text-2xl font-serif-title font-bold text-[#171247] mt-1">
                Bauchi State at a Glance
              </h2>
            </div>
            <div className="text-xs text-[#666170] max-w-md">
              Demographic, geographical and historical foundations informing strategic Christian participation in governance.
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            <div className="p-4 bg-white rounded-xl border border-[#E7E3DA] shadow-2xs">
              <span className="text-[#666170] block">State Capital</span>
              <span className="font-semibold text-[#18161B] text-sm mt-1 block">Bauchi City</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E7E3DA] shadow-2xs">
              <span className="text-[#666170] block">Creation</span>
              <span className="font-semibold text-[#18161B] text-sm mt-1 block">3 Feb 1976</span>
              <span className="text-[10px] text-[#666170]">From North-Eastern State</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E7E3DA] shadow-2xs">
              <span className="text-[#666170] block">Local Govts</span>
              <span className="font-semibold text-[#231C64] text-sm mt-1 block font-mono">20 LGAs</span>
              <span className="text-[10px] text-[#666170]">3 Senatorial Districts</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E7E3DA] shadow-2xs">
              <span className="text-[#666170] block">Population</span>
              <span className="font-semibold text-[#18161B] text-sm mt-1 block">~8 Million</span>
              <span className="text-[10px] text-[#666170]">2022 Estimate</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E7E3DA] shadow-2xs">
              <span className="text-[#666170] block">Ethnic Groups</span>
              <span className="font-semibold text-[#18161B] text-sm mt-1 block">~55 Groups</span>
              <span className="text-[10px] text-[#666170]">Sayawa, Hausa, Fulani...</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E7E3DA] shadow-2xs">
              <span className="text-[#666170] block">Major Rivers</span>
              <span className="font-semibold text-[#18161B] text-sm mt-1 block">Gongola & Jama'are</span>
              <span className="text-[10px] text-[#666170]">Agriculture & Fishing</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-white rounded-xl border border-[#E7E3DA] text-xs text-[#44403C] flex flex-wrap items-center justify-between gap-2">
            <div>
              <strong className="text-[#171247]">Famous Landmarks:</strong> Yankari Game Reserve, Wikki Warm Spring, Gubi Dam, Abubakar Tafawa Balewa University (ATBU), Federal Polytechnic Bauchi, BASUG Gadau.
            </div>
            <div className="text-[11px] text-[#666170]">
              Languages: Hausa, English, Fulfulde and indigenous mother tongues.
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3 Senatorial Districts & 20 LGAs Interactive Directory */}
      <section id="lga-directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E7E3DA]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
              PARTS THREE, FOUR & FIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
              The 20 Local Government Areas
            </h2>
            <p className="text-xs sm:text-sm text-[#666170] mt-1">
              Select your senatorial district or search by LGA or ward name to view histories, Christian population estimates, official wards, and to register.
            </p>
          </div>

          {/* Search Bar for LGA or Ward */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search LGA or Ward name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-[#E7E3DA] rounded-md focus:outline-none focus:ring-1 focus:ring-[#231C64]"
            />
          </div>
        </div>

        {/* Senatorial District Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <button
            onClick={() => setSelectedDistrict('All')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              selectedDistrict === 'All'
                ? 'bg-[#231C64] text-white font-bold'
                : 'bg-white hover:bg-stone-100 text-[#44403C] border border-[#E7E3DA]'
            }`}
          >
            All 20 LGAs (Statewide)
          </button>

          {(['Bauchi South', 'Bauchi Central', 'Bauchi North'] as const).map((dist) => {
            const count = SENATORIAL_DISTRICTS[dist].lgaCount;
            return (
              <button
                key={dist}
                onClick={() => setSelectedDistrict(dist)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  selectedDistrict === dist
                    ? 'bg-[#E89619] text-white font-bold'
                    : 'bg-white hover:bg-stone-100 text-[#44403C] border border-[#E7E3DA]'
                }`}
              >
                {dist} ({count} LGAs)
              </button>
            );
          })}
        </div>

        {/* Context Intro for Selected District */}
        {selectedDistrict !== 'All' && (
          <div className="mt-4 p-4 bg-[#F1EFF9] rounded-xl border border-[#231C64]/20 text-xs sm:text-sm text-[#171247]">
            <strong className="font-bold block mb-0.5 text-[#231C64]">
              {SENATORIAL_DISTRICTS[selectedDistrict].name} Overview:
            </strong>
            <p className="leading-relaxed text-[#44403C]">
              {SENATORIAL_DISTRICTS[selectedDistrict].introduction}
            </p>
          </div>
        )}

        {/* LGA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredLgas.map((lga) => (
            <div
              key={lga.id}
              className="bg-white rounded-xl border border-[#E7E3DA] hover:border-[#231C64]/40 hover:shadow-md transition-all p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-[#666170] uppercase tracking-wider">
                    {lga.senatorialDistrict}
                  </span>
                  <span className="text-[11px] font-semibold text-[#231C64] bg-[#EEECF8] px-2 py-0.5 rounded border border-[#231C64]/20">
                    {lga.numberOfWards} Wards
                  </span>
                </div>

                <h3 className="font-serif-title text-xl font-bold text-[#171247] group-hover:text-[#231C64] transition-colors">
                  {lga.name}
                </h3>

                <div className="text-xs text-[#666170] mt-0.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E89619]" />
                  <span>HQ: {lga.headquarters}</span>
                </div>

                {/* Welcome Line Snippet */}
                <p className="text-xs italic text-[#44403C] mt-3 line-clamp-2 bg-[#FAF9F6] p-3 rounded-lg border border-[#E7E3DA]">
                  "{lga.welcomeLine}"
                </p>

                {/* Estimated Christian Population */}
                <div className="mt-3 pt-3 border-t border-[#E7E3DA] text-xs">
                  <span className="text-[#666170] block text-[11px]">Christian Population (Estimated):</span>
                  <span className="font-semibold text-[#18161B]">{lga.estimatedChristianPopulation}</span>
                </div>

                {/* History snippet */}
                <p className="text-xs text-[#666170] mt-2 line-clamp-2 leading-relaxed">
                  {lga.briefHistory}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-[#E7E3DA] flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveLga(lga)}
                  className="text-xs font-bold text-[#231C64] hover:text-[#171247] inline-flex items-center gap-1"
                >
                  <span>View Wards & History</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setActiveLga(lga)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredLgas.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E7E3DA] my-8">
            <p className="text-sm text-[#666170]">No LGA or Ward matched your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDistrict('All');
              }}
              className="mt-3 text-xs font-semibold text-[#231C64] hover:underline"
            >
              Reset filters and view all 20 LGAs
            </button>
          </div>
        )}
      </section>

      {/* 4. Strategic Objectives / Why We Are Organized */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-[#E7E3DA]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#E89619] font-bold">
            CIVIC MANDATE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#171247] mt-1">
            Organised, Informed, Respected, Counted
          </h2>
          <p className="text-xs sm:text-sm text-[#666170] mt-2">
            Equipping believers across Northern Nigeria to influence public policy, defend religious liberty, promote community development, and advance peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E7E3DA] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F1EFF9] flex items-center justify-center text-[#231C64]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-base font-bold text-[#171247]">
              1. Ward-Level Grassroots Mobilization
            </h3>
            <p className="text-xs text-[#44403C] leading-relaxed">
              Every polling unit and ward in Bauchi State must have informed Christian liaisons and intercessory coordinators who monitor public welfare and mobilize lawful participation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7E3DA] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F1EFF9] flex items-center justify-center text-[#231C64]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-base font-bold text-[#171247]">
              2. Civic & Voter Literacy
            </h3>
            <p className="text-xs text-[#44403C] leading-relaxed">
              Educating the flock that civic responsibility and voting are biblical stewardship. Providing neutral analysis on governance, policies, and community empowerment initiatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E7E3DA] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F1EFF9] flex items-center justify-center text-[#231C64]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-base font-bold text-[#171247]">
              3. Peace & Inter-Religious Harmony
            </h3>
            <p className="text-xs text-[#44403C] leading-relaxed">
              Living out Jeremiah 29:7. Building respectful dialogues with traditional rulers, state institutions, and diverse communities across all 55 ethnic entities in Bauchi.
            </p>
          </div>
        </div>
      </section>

      {/* Dedicated LGA Details Modal */}
      {activeLga && (
        <LgaDetailModal
          lga={activeLga}
          onClose={() => setActiveLga(null)}
          onRegisteredSuccess={onRegisteredSuccess}
        />
      )}

      {/* Contact Coordinator Modal */}
      {contactCoordinatorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 border border-[#E7E3DA]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7E3DA]">
              <h3 className="font-serif-title text-lg font-bold text-[#171247]">
                Contact Your Bauchi Coordinator
              </h3>
              <button
                onClick={() => setContactCoordinatorModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="py-4 space-y-3 text-xs text-[#44403C]">
              <p>
                To connect with the Senatorial or Local Government Area coordinator for your zone, please contact our secretariat:
              </p>
              <div className="p-3 bg-[#FAF9F6] rounded-xl border border-[#E7E3DA] space-y-1.5 font-medium text-[#18161B]">
                <div>State Secretariat Line: 08061557035</div>
                <div>Bauchi Central & North Help Desk: 08072448718</div>
                <div>Bauchi South Mobilization: 08085844858</div>
                <div>Official Email: majalisa2050@gmail.com</div>
              </div>
              <p className="text-[11px] text-[#666170]">
                Please mention your Local Government Area and Ward when calling or sending a message.
              </p>
            </div>
            <button
              onClick={() => setContactCoordinatorModalOpen(false)}
              className="w-full py-2.5 bg-[#231C64] hover:bg-[#171247] text-white text-xs font-semibold rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
