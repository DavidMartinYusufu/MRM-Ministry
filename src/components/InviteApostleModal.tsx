import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface InviteApostleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, eventType: string) => void;
}

export const InviteApostleModal: React.FC<InviteApostleModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  if (!isOpen) return null;

  const [hostName, setHostName] = useState('');
  const [ministryName, setMinistryName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('Youth Revival / Conference');
  const [locationCity, setLocationCity] = useState('');
  const [proposedDates, setProposedDates] = useState('');
  const [eventTheme, setEventTheme] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostName || !phone || !locationCity) return;
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(hostName, eventType);
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-[#FAF9F6] rounded-2xl shadow-2xl max-w-lg w-full max-h-[92vh] flex flex-col border border-[#E7E3DA] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#171247] text-white px-6 py-4 flex items-center justify-between border-b border-[#231C64]">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#FBBF24] font-bold block">
              Official Itinerary Desk · invite.mrm.com.ng
            </span>
            <h3 className="font-serif-title text-xl font-bold text-white">
              Invite the Apostle
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-[#231C64]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {submitted ? (
            <div className="py-10 text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-[#171247] text-base">Invitation Logged!</h4>
              <p className="text-[#666170]">
                Grace and peace, {hostName}. Your ministerial invitation for <strong className="font-semibold">{eventType}</strong> in {locationCity} has reached the Apostle's itinerary desk. Our liaison office will respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-[#F1EFF9] rounded-xl border border-[#231C64]/20 text-[#171247] text-[11px] leading-relaxed">
                Thank you for extending an apostolic invitation. The Apostle ministers at inter-denominational youth revivals, leadership conferences, mission consultations, and kingdom governance summits.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Contact Person / Host *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Pastor / Brother / Sister"
                    value={hostName}
                    onChange={(e) => setHostName(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Church / Ministry Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Grace Assembly"
                    value={ministryName}
                    onChange={(e) => setMinistryName(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="080... or +234..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="host@ministry.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Nature of Program
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  >
                    <option value="Youth Revival / Conference">Youth Revival / Conference</option>
                    <option value="Frontier Mission Outreach">Frontier Mission Outreach</option>
                    <option value="Apostolic Leadership Summit">Apostolic Leadership Summit</option>
                    <option value="Kingdom Politics / Civic Gathering">Kingdom Politics / Civic Gathering</option>
                    <option value="Holy Ghost Fire Vigil">Holy Ghost Fire Vigil</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    City & State / Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bauchi, Jos, Abuja, London..."
                    value={locationCity}
                    onChange={(e) => setLocationCity(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Proposed Date(s)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 14th - 16th October 2026"
                    value={proposedDates}
                    onChange={(e) => setProposedDates(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Event Theme / Focus
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. The Outpouring of the Spirit"
                    value={eventTheme}
                    onChange={(e) => setEventTheme(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#18161B] mb-1">
                  Additional Notes or Logistics Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Expected crowd size, venue type, special requests..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#666170]">
                  Direct Line: 08061557035
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Submit Invitation</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
