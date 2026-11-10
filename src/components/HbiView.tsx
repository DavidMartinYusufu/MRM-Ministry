import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Search,
  ArrowRight
} from 'lucide-react';
import { HBI_SCHOOLS, HBISchool } from '../data/ministryData';

interface HbiViewProps {
  onNavigate: (tab: string) => void;
  onEnrollSuccess: (name: string, schoolName: string) => void;
}

export const HbiView: React.FC<HbiViewProps> = ({
  onNavigate,
  onEnrollSuccess,
}) => {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Form states
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [targetSchool, setTargetSchool] = useState(HBI_SCHOOLS[0].name);
  const [mode, setMode] = useState('Online / Virtual');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredSchools = HBI_SCHOOLS.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      onEnrollSuccess(studentName, targetSchool);
      setIsSubmitted(false);
      setEnrollModalOpen(false);
      setStudentName('');
      setStudentPhone('');
      setStudentEmail('');
    }, 1200);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#18161B] pb-24">
      
      {/* 30% Structural Secondary: Deep Indigo Header */}
      <section className="bg-gradient-to-br from-[#171247] via-[#231C64] to-[#140F3E] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#322A84]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FBBF24] font-bold mb-3">
            <GraduationCap className="w-4 h-4 text-[#E89619]" />
            <span>Holy Ghost Bible Institute (HBI) · hbi.mrm.com.ng</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-title font-bold tracking-tight text-white mb-4">
            The 13 Specialized Schools of HBI
          </h1>

          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-3xl">
            A comprehensive apostolic curriculum structured to transform raw youth passion into mature spiritual character, ministerial capability, practical enterprise, and righteous governance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setTargetSchool(HBI_SCHOOLS[0].name);
                setEnrollModalOpen(true);
              }}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded transition-colors shadow-sm"
            >
              Apply for Enrollment
            </button>
            <button
              onClick={() => onNavigate('politics')}
              className="px-6 py-2.5 text-xs font-semibold text-stone-200 bg-[#231C64] hover:bg-[#171247] border border-[#322A84] rounded transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore School of Kingdom Politics</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FBBF24]" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid (60% Canvas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E3DA]">
          <div>
            <h2 className="text-2xl font-serif-title font-bold text-[#171247]">
              Curriculum Directory (13 Schools)
            </h2>
            <p className="text-xs text-[#666170] mt-0.5">
              Select any school to view focus areas, study requirements, and enrollment paths.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search school name or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-[#E7E3DA] rounded-md focus:outline-none focus:ring-1 focus:ring-[#231C64]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredSchools.map((school, index) => {
            const isKingdomPolitics = school.id === 'politics';
            return (
              <div
                key={school.id}
                className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all hover:shadow-md ${
                  isKingdomPolitics 
                    ? 'border-[#231C64] ring-1 ring-[#231C64]/20' 
                    : 'border-[#E7E3DA] hover:border-[#231C64]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#E89619] font-bold uppercase tracking-wider">
                      Module {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[11px] text-[#666170] font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#666170]" />
                      <span>{school.duration}</span>
                    </span>
                  </div>

                  <h3 className="font-serif-title text-lg font-bold text-[#171247] mb-2">
                    {school.name}
                  </h3>

                  <p className="text-xs text-[#44403C] leading-relaxed mb-3">
                    {school.summary}
                  </p>

                  <div className="p-3 bg-[#FAF9F6] rounded-lg border border-[#E7E3DA] text-[11px] text-[#44403C]">
                    <strong className="text-[#171247] block mb-0.5">Core Focus:</strong>
                    <span>{school.focus}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E7E3DA] flex items-center justify-between">
                  {isKingdomPolitics ? (
                    <button
                      onClick={() => onNavigate('politics')}
                      className="text-xs font-bold text-[#231C64] hover:text-[#171247] inline-flex items-center gap-1"
                    >
                      <span>Connect to Bauchi Forum</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setTargetSchool(school.name);
                        setEnrollModalOpen(true);
                      }}
                      className="text-xs font-bold text-[#231C64] hover:text-[#171247]"
                    >
                      Enroll in School →
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setTargetSchool(school.name);
                      setEnrollModalOpen(true);
                    }}
                    className="px-3.5 py-1.5 text-xs bg-[#E89619] hover:bg-[#D1830E] text-white rounded font-semibold transition-colors shadow-2xs"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application / Enrollment Modal */}
      {enrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E7E3DA]">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7E3DA]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#E89619] font-bold">
                  HBI Admission Form
                </span>
                <h3 className="font-serif-title text-xl font-bold text-[#171247]">
                  Student Enrollment
                </h3>
              </div>
              <button
                onClick={() => setEnrollModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 font-bold"
              >
                ✕
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-[#171247] text-base">Application Received!</h4>
                <p className="text-xs text-[#666170]">
                  Thank you, {studentName}. Your application for <strong className="font-semibold">{targetSchool}</strong> has been logged. The registrar will contact you on WhatsApp/SMS.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className="space-y-4 pt-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Select School *
                  </label>
                  <select
                    value={targetSchool}
                    onChange={(e) => setTargetSchool(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-[#FAF9F6]"
                  >
                    {HBI_SCHOOLS.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your legal or baptismal name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#18161B] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0806 000 0000"
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#18161B] mb-1">
                      Study Mode
                    </label>
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-[#FAF9F6]"
                    >
                      <option value="Online / Virtual">Virtual / Telegram</option>
                      <option value="Physical Bauchi Campus">Physical Bauchi Campus</option>
                      <option value="Weekend Intensive">Weekend Intensive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#666170]">
                    Tuition is subsidized through ministry partners.
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
