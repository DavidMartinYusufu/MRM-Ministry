import React, { useState } from 'react';
import { X, Heart, Copy, Check, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPledgeSuccess: (name: string, project: string) => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  onPledgeSuccess,
}) => {
  if (!isOpen) return null;

  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [targetProject, setTargetProject] = useState('Frontier Hausa-Fulani Rural Missions');
  const [amount, setAmount] = useState('₦25,000');
  const [frequency, setFrequency] = useState('One-Time');
  const [copiedBank, setCopiedBank] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const bankDetails = {
    bankName: 'First Bank of Nigeria',
    accountName: 'Majalisar Ruhu Mai Tsarki Outreach Ministries Inc',
    accountNumber: '2034891102',
  };

  const copyAccount = () => {
    navigator.clipboard?.writeText(bankDetails.accountNumber);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      onPledgeSuccess(donorName, targetProject);
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
              Kingdom Partnership & Stewardship · support.mrm.com.ng
            </span>
            <h3 className="font-serif-title text-xl font-bold text-white">
              Support Vision 20/2107
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

        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {/* Official Bank Account Information */}
          <div className="bg-white p-4 rounded-xl border border-[#E7E3DA] shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#666170] uppercase tracking-wider">
                Official Ministry Account
              </span>
              <button
                type="button"
                onClick={copyAccount}
                className="text-xs font-bold text-[#231C64] hover:underline inline-flex items-center gap-1"
              >
                {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBank ? 'Copied Number!' : 'Copy Account'}</span>
              </button>
            </div>

            <div className="text-[#18161B]">
              <div className="text-lg font-bold font-mono tracking-wider text-[#171247]">{bankDetails.accountNumber}</div>
              <div className="text-xs font-semibold">{bankDetails.accountName}</div>
              <div className="text-xs text-[#666170]">{bankDetails.bankName}</div>
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-[#171247] text-base">Pledge Received!</h4>
              <p className="text-[#666170] leading-relaxed">
                Thank you, {donorName}. Your covenant pledge to sponsor <strong className="font-semibold">{targetProject}</strong> has been noted. May the Lord multiply your seed sown (2 Cor. 9:10).
              </p>
            </div>
          ) : (
            <form onSubmit={handlePledgeSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block font-semibold text-[#18161B]">
                  Select Cause / Project
                </label>
                <select
                  value={targetProject}
                  onChange={(e) => setTargetProject(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                >
                  <option value="Frontier Hausa-Fulani Rural Missions">Frontier Hausa-Fulani Rural Missions</option>
                  <option value="Youth Vocational Skill Toolkits & Agribusiness">Youth Vocational Skill Toolkits & Agribusiness</option>
                  <option value="Holy Ghost Bible Institute (HBI) Student Scholarships">Holy Ghost Bible Institute (HBI) Student Scholarships</option>
                  <option value="Juya Ni Audio Cards & Indigenous Literature Distribution">Juya Ni Audio Cards & Indigenous Literature Distribution</option>
                  <option value="General Ministry & Sanctuary Development">General Ministry & Sanctuary Development</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Pledge Amount / Currency
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₦10,000, $50..."
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64] bg-white"
                  >
                    <option value="One-Time">One-Time Contribution</option>
                    <option value="Monthly Covenant Partner">Monthly Covenant Partner</option>
                    <option value="Quarterly Outreach Sponsor">Quarterly Outreach Sponsor</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#18161B] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="080... or +234..."
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#18161B] mb-1">
                  Email (Optional for Receipt)
                </label>
                <input
                  type="email"
                  placeholder="donor@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-[#E7E3DA] rounded-md focus:ring-1 focus:ring-[#231C64]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#666170]">
                  Enquiries: majalisa2050@gmail.com
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E89619] hover:bg-[#D1830E] rounded-md transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Confirm Partner Pledge</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
