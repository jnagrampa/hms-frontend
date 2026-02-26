import { create } from "zustand";

interface FilterTicketState {
  filterTicketByStatus: string;
  setStatus: (status: string) => void;
  resetStatus: () => void;
}

export const useFilterTicketStore = create<FilterTicketState>((set) => ({
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
