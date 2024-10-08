import { create } from 'zustand';

export const useToastStore = create((set) => ({
  isShowing: false,
  showToast: () => set((state) => ({ isShowing: true })),
  removeToast: () => set((state) => ({ isShowing: false })),
  isNotificationShowing: false,
  showNotification: () => set((state) => ({ isNotificationShowing: true })),
  removeNotification: () => set((state) => ({ isNotificationShowing: false })),
}));

export const useSidebarStore = create((set) => ({
  isSidebarShowing: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarShowing: !state.isSidebarShowing })),
}));
