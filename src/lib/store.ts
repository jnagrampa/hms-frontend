import { create } from "zustand";

interface CounterState {
  filterTicketByStatus: string;
  setStatus: (status: string) => void;
  resetStatus: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  filterTicketByStatus: "",
  setStatus: (status: string) =>
    set(() => ({
      filterTicketByStatus: status,
    })),

  resetStatus: () =>
    set(() => ({
      filterTicketByStatus: "",
    })),
}));
