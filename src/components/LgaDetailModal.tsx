import React, { useState } from 'react';
import { X, MapPin, Building, Users, CheckCircle2, Send, Info } from 'lucide-react';
import { LGAData } from '../data/politicsData';

interface LgaDetailModalProps {
  lga: LGAData | null;
  onClose: () => void;
  onRegisteredSuccess: (name: string, lgaName: string, ward: string) => void;
}

export const LgaDetailModal: React.FC<LgaDetailModalProps> = ({
  lga,
  onClose,
  onRegisteredSuccess,
}) => {
  if (!lga) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedWard, setSelectedWard] = useState(lga.wards[0] || '');
  const [churchDenomination, setChurchDenomination] = useState('');
  const [interestRole, setInterestRole] = useState('Member / Voter');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !selectedWard) return;
    setSubmitted(true);
    setTimeout(() => {
      onRegisteredSuccess(fullName, lga.name, selectedWard);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="bg-[#FAF9F6] text-[#18161B] rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-[#E7E3DA] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 30% Structural Secondary: Deep Globe Indigo Header */}
        <div className="bg-[#171247] text-white px-6 py-5 flex items-center justify-between border-b border-[#231C64]">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#FBBF24] font-semibold">
              Bauchi State · {lga.senatorialDistrict}
            </div>
            <h2 className="text-2xl font-serif-title font-bold tracking-tight text-white mt-0.5">
              {lga.name} Local Government Area
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#231C64] text-stone-300 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body (60% Canvas) */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* 1. Welcome Line */}
          <div className="p-4 bg-[#F1EFF9] rounded-xl border border-[#231C64]/20">
            <p className="font-serif-title text-base sm:text-lg text-[#171247] italic font-medium">
              "{lga.welcomeLine}"
            </p>
          </div>

          {/* 2. Fact Sheet */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#666170] mb-3">
              LGA Fact Sheet
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-white rounded-lg border border-[#E7E3DA] shadow-2xs">
                <div className="text-[11px] text-[#666170]">Headquarters</div>
                <div className="font-semibold text-[#18161B] text-sm mt-0.5">{lga.headquarters}</div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E7E3DA] shadow-2xs">
                <div className="text-[11px] text-[#666170]">Senatorial District</div>
                <div className="font-semibold text-[#18161B] text-sm mt-0.5">{lga.senatorialDistrict}</div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E7E3DA] shadow-2xs">
                <div className="text-[11px] text-[#666170]">Number of Wards</div>
                <div className="font-semibold text-[#231C64] text-sm mt-0.5">{lga.numberOfWards} Wards</div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E7E3DA] shadow-2xs">
                <div className="text-[11px] text-[#666170]">Christian Population</div>
                <div className="font-semibold text-[#E89619] text-sm mt-0.5">
                  <span className="text-xs text-[#666170] uppercase tracking-tight block">Estimated:</span>
                  {lga.estimatedChristianPopulation}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-[#666170] mt-2 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#231C64] shrink-0" />
              <span>All Christian population figures are labeled "Estimated" to maintain empirical transparency and demographic diligence.</span>
            </p>
          </div>

          {/* 3. Brief History */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#666170] mb-2">
              Brief History & Community Profile
            </h3>
            <div className="bg-white p-4 rounded-xl border border-[#E7E3DA] text-sm text-[#44403C] leading-relaxed">
              {lga.briefHistory}
            </div>
          </div>

          {/* 4. Complete Ward List (Exact spellings with slashes preserved) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#666170]">
                Official Wards ({lga.numberOfWards})
              </h3>
              <span className="text-[11px] text-[#666170]">Preserved official INEC/administrative naming</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {lga.wards.map((ward, idx) => (
                <div 
                  key={ward} 
                  className="px-3 py-2 bg-white rounded-lg border border-[#E7E3DA] text-xs font-medium text-[#18161B] flex items-center gap-2 shadow-2xs"
                >
                  <span className="text-[#E89619] text-[10px] font-mono font-bold">{idx + 1}.</span>
                  <span className="truncate">{ward}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Registration Form with Ward Dropdown */}
          <div className="pt-4 border-t border-[#E7E3DA]">
            <div className="mb-4">
              <h3 className="font-serif-title text-lg font-bold text-[#171247]">
                Register as a Christian Forum Member in {lga.name}
              </h3>
              <p className="text-xs text-[#666170] mt-0.5">
                Join your ward team, ensure you are counted, and receive updates on prayer networks, voter education, and civic representation.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-semibold text-emerald-950 text-base">Registration Recorded!</h4>
                <p className="text-xs text-emerald-800">
                  Welcome, <strong className="font-semibold">{fullName}</strong>. You are now registered under <strong className="font-semibold">{selectedWard} Ward</strong> in {lga.name} LGA. The Local Government Coordinator will be notified.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 rounded-xl border border-[#E7E3DA] shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#18161B] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Yakubu"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18161B] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0806 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#18161B] mb-1">
                      Select Your Ward ({lga.numberOfWards}) *
                    </label>
                    <select
                      value={selectedWard}
                      onChange={(e) => setSelectedWard(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] focus:outline-none bg-[#FAF9F6]"
                    >
                      {lga.wards.map((ward) => (
                        <option key={ward} value={ward}>
                          {ward}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18161B] mb-1">
                      Church / Denomination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. COCIN, ECWA, Anglican..."
                      value={churchDenomination}
                      onChange={(e) => setChurchDenomination(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18161B] mb-1">
                      Role / Service Preference
                    </label>
                    <select
                      value={interestRole}
                      onChange={(e) => setInterestRole(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] focus:outline-none bg-[#FAF9F6]"
                    >
                      <option value="Member / Voter">General Member / Voter</option>
                      <option value="Ward Team Volunteer">Ward Team Volunteer</option>
                      <option value="Prayer Intercessor">Prayer Altar Intercessor</option>
                      <option value="Youth Mobilizer">Youth Mobilizer</option>
                      <option value="Community Outreach">Community Outreach</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18161B] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. member@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-[#666170]">
                    "Register. Be counted. Build Bauchi together."
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Complete Registration</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF9F6] px-6 py-3 border-t border-[#E7E3DA] flex items-center justify-between text-xs text-[#666170]">
          <span>The National APC Christian Leaders Forum · Bauchi State Chapter</span>
          <button
            onClick={onClose}
            className="text-[#231C64] hover:underline font-semibold"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
