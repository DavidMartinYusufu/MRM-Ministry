/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { PoliticsView } from './components/PoliticsView';
import { AboutView } from './components/AboutView';
import { HbiView } from './components/HbiView';
import { MinistriesView } from './components/MinistriesView';
import { JuyaNiAlbumView } from './components/JuyaNiAlbumView';
import { InviteApostleModal } from './components/InviteApostleModal';
import { PrayerRequestModal } from './components/PrayerRequestModal';
import { SupportModal } from './components/SupportModal';
import { NotificationToast, ToastMessage } from './components/NotificationToast';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [prayerModalOpen, setPrayerModalOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (title: string, description: string) => {
    setToast({
      id: Date.now().toString(),
      title,
      description,
    });
  };

  const handleLgaRegisteredSuccess = (name: string, lgaName: string, ward: string) => {
    showToast(
      'Registration Successful',
      `Welcome ${name}. You are registered with the Christian Leaders Forum in ${lgaName} LGA (${ward} Ward).`
    );
  };

  const handleEnrollSuccess = (name: string, schoolName: string) => {
    showToast(
      'HBI Application Received',
      `Application for ${name} in ${schoolName} has been submitted to the academic board.`
    );
  };

  const handleInviteSuccess = (hostName: string, eventType: string) => {
    showToast(
      'Apostle Invitation Received',
      `Thank you ${hostName}. Your invitation for ${eventType} has been queued for review.`
    );
  };

  const handlePrayerSuccess = (name: string, category: string) => {
    showToast(
      'Prayer Request Received',
      `Petition under "${category}" has been placed upon the 24/7 intercessory altar.`
    );
  };

  const handlePledgeSuccess = (donorName: string, project: string) => {
    showToast(
      'Support Pledge Confirmed',
      `Thank you ${donorName} for partnering with Vision 20/2107 in "${project}".`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenInvite={() => setInviteModalOpen(true)}
        onOpenPrayer={() => setPrayerModalOpen(true)}
        onOpenSupport={() => setSupportModalOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={setActiveTab}
            onOpenInvite={() => setInviteModalOpen(true)}
            onOpenPrayer={() => setPrayerModalOpen(true)}
            onOpenSupport={() => setSupportModalOpen(true)}
          />
        )}

        {activeTab === 'politics' && (
          <PoliticsView
            onRegisteredSuccess={handleLgaRegisteredSuccess}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            onNavigate={setActiveTab}
            onOpenInvite={() => setInviteModalOpen(true)}
            onOpenSupport={() => setSupportModalOpen(true)}
          />
        )}

        {activeTab === 'hbi' && (
          <HbiView
            onNavigate={setActiveTab}
            onEnrollSuccess={handleEnrollSuccess}
          />
        )}

        {activeTab === 'ministries' && (
          <MinistriesView
            onOpenInvite={() => setInviteModalOpen(true)}
            onOpenPrayer={() => setPrayerModalOpen(true)}
            onOpenSupport={() => setSupportModalOpen(true)}
          />
        )}

        {activeTab === 'juya-ni' && (
          <JuyaNiAlbumView
            onOpenSupport={() => setSupportModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setActiveTab}
        onOpenInvite={() => setInviteModalOpen(true)}
        onOpenPrayer={() => setPrayerModalOpen(true)}
        onOpenSupport={() => setSupportModalOpen(true)}
      />

      {/* Interactive Global Modals */}
      <InviteApostleModal
        isOpen={inviteModalOpen}
        onClose={() => setInviteModalOpen(false)}
        onSuccess={handleInviteSuccess}
      />

      <PrayerRequestModal
        isOpen={prayerModalOpen}
        onClose={() => setPrayerModalOpen(false)}
        onSuccess={handlePrayerSuccess}
      />

      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        onPledgeSuccess={handlePledgeSuccess}
      />

      {/* Interactive Toast */}
      <NotificationToast
        toast={toast}
        onDismiss={() => setToast(null)}
      />

    </div>
  );
}
