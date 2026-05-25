import { useSyncExternalStore } from "react";

type State = { selectedSurveys: string[]; firmId?: string; lotCount?: number };
const STORAGE_KEY = "falcon-booking";

const load = (): State => {
  if (typeof window === "undefined") return { selectedSurveys: [] };
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as State;
  } catch {
    /* ignore */
  }
  return { selectedSurveys: [] };
};

let state: State = load();
const listeners = new Set<() => void>();

export const bookingStore = {
  get: () => state,
  set: (next: Partial<State>) => {
    state = { ...state, ...next };
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        /* ignore */
      }
    }
    listeners.forEach((l) => l());
  },
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
};

export const useBooking = () =>
  useSyncExternalStore(bookingStore.subscribe, bookingStore.get, bookingStore.get);
