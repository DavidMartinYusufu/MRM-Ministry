import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, category: string) => void;
}

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Spiritual Renewal & Fire');
  const [requestText, setRequestText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestText) return;
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(isAnonymous ? 'Beloved in Christ' : name || 'Intercessor', category);
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
        <div className="bg-[#171247] text-white px-6 py-4 flex items-center justify-between border-b border-[#231C64]">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#FBBF24] font-bold block">
              Intercessory Altar Desk · prayer.mrm.com.ng
            </span>
            <h3 className="font-serif-title text-xl font-bold text-white">
              Send Your Prayer Request
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

        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {submitted ? (
            <div className="py-10 text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-[#171247] text-base">Placed Upon the Altar</h4>
              <p className="text-[#666170] leading-relaxed">
                Your petition under <strong className="font-semibold">{category}</strong> has been transmitted directly to the Majalisar Ruhu Mai Tsarki 24/7 Intercessory Night Watch altar. We agree with you in prayer in Jesus' name.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-[#F1EFF9] rounded-xl border border-[#231C64]/20 text-[#171247] text-[11px] leading-relaxed flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E89619] shrink-0 mt-0.5" />
                <span>
                  All prayer requests are handled with absolute pastoral confidentiality by the consecrated intercessors of The Holy Ghost Parliament.
                </span>
              </div>

              <div className="flex items-center justify-between">
                <label className="font-semibold text-[#18161B]">
                  Your Name
                </label>
                <label className="flex items-center gap-1.5 text-[#666170] cursor-pointer text-[11px]">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="rounded text-[#231C64] focus:ring-[#231C64]"
                  />
                  <span>Keep Anonymous</span>
                </label>
              </div>

              {!isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your First & Last Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp (Optional)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block font-semibold text-[#18161B] mb-1">
                  Prayer Focus / Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                >
                  <option value="Spiritual Renewal & Fire">Spiritual Renewal & Fire</option>
                  <option value="Deliverance & Freedom from Bondage">Deliverance & Freedom from Bondage</option>
                  <option value="Healing & Divine Health">Healing & Divine Health</option>
                  <option value="Family, Marriage & Childbearing">Family, Marriage & Childbearing</option>
                  <option value="Youth Career & Skill Breakthrough">Youth Career & Skill Breakthrough</option>
                  <option value="Salvation of Loved Ones">Salvation of Loved Ones</option>
                  <option value="Peace & Protection in Bauchi State / Northern Nigeria">Peace & Protection in Bauchi State / Northern Nigeria</option>
                  <option value="National Governance & Civic Righteousness">National Governance & Civic Righteousness</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#18161B] mb-1">
                  Your Petition / Situation *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Pour out your heart with specifics so we can stand in targeted agreement with you..."
                  value={requestText}
                  onChange={(e) => setRequestText(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#666170] italic">
                  Matthew 18:19 · "If two of you shall agree on earth..."
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Submit to the Altar</span>
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
