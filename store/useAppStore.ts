import { create } from 'zustand'

interface User {
  id: string
  email?: string
  displayName?: string
  currentStreak: number
  totalPoints: number
  completedLessons: string[]
}

interface AppState {
  user: User | null
  currentPath: 'basketball' | null
  isLoading: boolean
  
  // Actions
  setUser: (user: User | null) => void
  setCurrentPath: (path: 'basketball' | null) => void
  setLoading: (loading: boolean) => void
  completeLesson: (lessonId: string) => void
  addPoints: (points: number) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  user: null,
  currentPath: null,
  isLoading: false,

  setUser: (user) => set({ user }),
  setCurrentPath: (path) => set({ currentPath: path }),
  setLoading: (loading) => set({ isLoading: loading }),
  
  completeLesson: (lessonId) => set((state) => ({
    user: state.user ? {
      ...state.user,
      completedLessons: [...state.user.completedLessons, lessonId]
    } : null
  })),
  
  addPoints: (points) => set((state) => ({
    user: state.user ? {
      ...state.user,
      totalPoints: state.user.totalPoints + points
    } : null
  }))
}))