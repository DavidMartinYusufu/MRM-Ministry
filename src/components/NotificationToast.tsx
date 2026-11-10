import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
}

interface NotificationToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  toast,
  onDismiss,
}) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-stone-900 text-stone-100 p-4 rounded-xl shadow-2xl border border-stone-700 flex items-start gap-3 animate-slide-up">
      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
      <div className="flex-1 text-xs">
        <h4 className="font-semibold text-white text-sm">{toast.title}</h4>
        <p className="text-stone-300 mt-0.5 leading-relaxed">{toast.description}</p>
      </div>
      <button
        onClick={onDismiss}
        className="text-stone-400 hover:text-white p-1"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
