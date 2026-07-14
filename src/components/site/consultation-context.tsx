"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type ConsultationContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openConsultation: (opts?: { service?: string }) => void;
  presetService?: string;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);

  const openConsultation = useCallback((opts?: { service?: string }) => {
    setPresetService(opts?.service);
    setOpen(true);
  }, []);

  return (
    <ConsultationContext.Provider value={{ open, setOpen, openConsultation, presetService }}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return ctx;
}
