import create from 'zustand';

export const useAppStore = create(set => ({
  lightTheme: true,
  toggleTheme: () => set(state => ({ lightTheme: !state.lightTheme })),
}));
