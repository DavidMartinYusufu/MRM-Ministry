import React, { useState } from 'react';
import { 
  Music, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Share2, 
  Disc, 
  Heart, 
  Check
} from 'lucide-react';
import { JUYA_NI_ALBUM } from '../data/ministryData';

interface JuyaNiAlbumViewProps {
  onOpenSupport: () => void;
}

export const JuyaNiAlbumView: React.FC<JuyaNiAlbumViewProps> = ({
  onOpenSupport,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedTracks, setLikedTracks] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const currentTrack = JUYA_NI_ALBUM.tracks[currentTrackIndex];

  const togglePlay = (index?: number) => {
    if (index !== undefined && index !== currentTrackIndex) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % JUYA_NI_ALBUM.tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + JUYA_NI_ALBUM.tracks.length) % JUYA_NI_ALBUM.tracks.length);
    setIsPlaying(true);
  };

  const toggleLike = (num: number) => {
    setLikedTracks((prev) => 
      prev.includes(num) ? prev.filter(t => t !== num) : [...prev, num]
    );
  };

  const copyShareLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#18161B] pb-24">
      
      {/* 30% Structural Secondary Header Banner */}
      <section className="bg-gradient-to-br from-[#171247] via-[#231C64] to-[#140F3E] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#322A84]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FBBF24] font-bold mb-3">
            <Music className="w-4 h-4 text-[#E89619]" />
            <span>Apostolic Revival Music Release · juyanialbum.com.ng</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Vinyl / Cover Art Container with Official Logo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-[#171247] p-6 flex flex-col justify-between shadow-2xl border border-[#E89619]/40 relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#E89619]/10 blur-xl pointer-events-none" />
                
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FBBF24] font-semibold">
                    Holy Ghost Parliament
                  </span>
                  <Disc className={`w-6 h-6 text-[#E89619] ${isPlaying ? 'animate-spin' : ''}`} />
                </div>

                <div className="text-center my-auto z-10 space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#231C64] p-1 border border-[#E89619]/30 shadow-md">
                    <img src="/assets/aistudio/image_67293e06.png" alt="Emblem" className="w-full h-full object-contain" />
                  </div>
                  <h1 className="font-serif-title text-3xl sm:text-4xl font-extrabold text-white tracking-wider">
                    JUYA NI
                  </h1>
                  <p className="text-xs text-[#FBBF24] font-serif-title italic">
                    "Transform Me"
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-300 z-10 pt-4 border-t border-[#322A84]">
                  <span>Hausa & English</span>
                  <span>7 Revival Tracks</span>
                </div>
              </div>
            </div>

            {/* Album Metadata & Description */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
                Juya Ni: Songs of Intercession & Territorial Awakening
              </h2>

              <p className="text-sm text-stone-200 leading-relaxed">
                {JUYA_NI_ALBUM.description}
              </p>

              <div className="p-4 bg-[#171247]/90 rounded-xl border border-[#322A84] text-xs text-stone-300 space-y-1">
                <strong className="text-[#FBBF24] block font-semibold">
                  Spiritual Meaning:
                </strong>
                <p className="text-stone-300">
                  "Juya Ni" is a heartfelt cry in Hausa meaning "Turn Me Around / Consecrate and Transform Me". Just as Romans 12:2 declares, this sound calls an entire generation of Northern Nigerian youth out of darkness into divine alignment with Christ.
                </p>
              </div>

              {/* Action Buttons (10% Gold Accent) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => togglePlay(0)}
                  className="px-5 py-2.5 bg-[#E89619] hover:bg-[#D1830E] text-white font-semibold text-xs rounded transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'Pause Album' : 'Play Track 1 (Juya Ni)'}</span>
                </button>

                <button
                  onClick={copyShareLink}
                  className="px-4 py-2.5 bg-[#231C64] hover:bg-[#171247] text-stone-200 text-xs font-medium rounded border border-[#322A84] transition-colors inline-flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Link Copied!' : 'Share Album'}</span>
                </button>

                <button
                  onClick={onOpenSupport}
                  className="px-4 py-2.5 bg-[#231C64] hover:bg-[#171247] text-stone-200 text-xs font-medium rounded border border-[#322A84] transition-colors inline-flex items-center gap-1.5"
                >
                  <Heart className="w-4 h-4 text-[#EA580C]" />
                  <span>Support Album Outreach</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Interactive Player Deck & Tracklist (60% Canvas) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Sticky Active Track Console */}
        <div className="bg-white rounded-2xl border border-[#E7E3DA] p-6 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => togglePlay()}
              className="w-12 h-12 rounded-full bg-[#E89619] hover:bg-[#D1830E] text-white flex items-center justify-center shrink-0 shadow transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>
            <div>
              <div className="text-[11px] text-[#666170] font-mono">
                Now Playing · Track {currentTrack.trackNumber} of {JUYA_NI_ALBUM.tracks.length}
              </div>
              <h3 className="font-serif-title text-xl font-bold text-[#171247]">
                {currentTrack.title}
              </h3>
              <p className="text-xs text-[#231C64] font-medium mt-0.5">
                {currentTrack.theme}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 self-end md:self-center">
            <div className="flex items-center gap-2">
              <button
                onClick={prevTrack}
                className="p-2 text-[#44403C] hover:text-[#171247] rounded-lg hover:bg-stone-100"
                aria-label="Previous track"
              >
                <SkipBack className="w-4 h-4" />
              </button>
              <button
                onClick={nextTrack}
                className="p-2 text-[#44403C] hover:text-[#171247] rounded-lg hover:bg-stone-100"
                aria-label="Next track"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs font-mono text-[#666170] tabular-nums">
              {isPlaying ? '02:45' : '00:00'} / {currentTrack.duration}
            </div>

            <button
              onClick={() => toggleLike(currentTrack.trackNumber)}
              className="p-2 text-stone-500 hover:text-red-600 rounded-lg hover:bg-stone-100"
              aria-label="Like track"
            >
              <Heart className={`w-4 h-4 ${likedTracks.includes(currentTrack.trackNumber) ? 'fill-red-600 text-red-600' : ''}`} />
            </button>
          </div>
        </div>

        {/* Complete 7-Track List */}
        <div className="bg-white rounded-2xl border border-[#E7E3DA] overflow-hidden shadow-2xs">
          <div className="px-6 py-4 bg-[#F4F1EA] border-b border-[#E7E3DA] flex items-center justify-between text-xs font-bold text-[#666170]">
            <span>Track & Title</span>
            <div className="flex items-center gap-8">
              <span className="hidden sm:inline">Language & Spiritual Focus</span>
              <span>Duration</span>
            </div>
          </div>

          <div className="divide-y divide-[#E7E3DA] text-xs">
            {JUYA_NI_ALBUM.tracks.map((track, idx) => {
              const isSelected = idx === currentTrackIndex;
              const isLiked = likedTracks.includes(track.trackNumber);

              return (
                <div
                  key={track.trackNumber}
                  onClick={() => togglePlay(idx)}
                  className={`px-6 py-4 flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                    isSelected ? 'bg-[#EEECF8] text-[#231C64] font-bold' : 'hover:bg-stone-50 text-[#18161B]'
                  }`}
                >
                  <div className="flex items-center gap-4 truncate">
                    <span className="w-6 text-center text-stone-400 font-mono text-xs">
                      {isSelected && isPlaying ? (
                        <Disc className="w-4 h-4 text-[#E89619] animate-spin mx-auto" />
                      ) : (
                        track.trackNumber
                      )}
                    </span>
                    <div>
                      <div className="font-serif-title text-sm font-semibold text-[#171247]">
                        {track.title}
                      </div>
                      <div className="text-[11px] text-[#666170] sm:hidden mt-0.5">
                        {track.language} · {track.theme}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 shrink-0">
                    <div className="hidden sm:block text-right max-w-xs truncate text-[11px] text-[#666170]">
                      <span className="font-semibold text-[#18161B]">{track.language}</span> — {track.theme}
                    </div>

                    <span className="font-mono text-[#666170] tabular-nums text-xs">
                      {track.duration}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(track.trackNumber);
                      }}
                      className="text-stone-400 hover:text-red-500 p-1"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-600 text-red-600' : ''}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lyrics & Testimonial Callout */}
        <div className="mt-10 p-6 bg-[#F4F1EA] rounded-2xl border border-[#E7E3DA] grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#44403C]">
          <div>
            <h4 className="font-serif-title font-bold text-[#171247] text-sm mb-2">
              Featured Track: Kasar Bauchi Ta Yesu Ce
            </h4>
            <p className="italic leading-relaxed text-[#18161B]">
              "Daga Alkaleri zuwa Katagum, daga Bogoro zuwa Ningi, kasar Bauchi ta Yesu ce... Hasken Almasihu yana haskaka duhu."
            </p>
            <p className="text-[11px] text-[#666170] mt-2">
              (Translation: "From Alkaleri to Katagum, from Bogoro to Ningi, the land of Bauchi belongs to Jesus... The light of Christ illuminates the shadows.")
            </p>
          </div>

          <div>
            <h4 className="font-serif-title font-bold text-[#171247] text-sm mb-2">
              Free Distribution in Rural Outreaches
            </h4>
            <p className="leading-relaxed text-[#44403C]">
              MRM distributes physical audio cards, flash drives, and radio broadcasts of the Juya Ni album across motor parks, student campuses, and village fellowships free of charge to spread the aroma of worship.
            </p>
            <button
              onClick={onOpenSupport}
              className="mt-3 text-xs font-bold text-[#231C64] hover:underline"
            >
              Sponsor audio distribution →
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
