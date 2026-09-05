
import React, { createContext, useContext, useState } from 'react'

type DemoContextType = { isDemoMode: boolean; toggleDemo: () => void }
const DemoContext = createContext<DemoContextType>({ isDemoMode: true, toggleDemo: () => {} })

export const DemoModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDemoMode, setIsDemo] = useState(true)
  const toggleDemo = () => setIsDemo(v => !v)
  return <DemoContext.Provider value={{ isDemoMode, toggleDemo }}>{children}</DemoContext.Provider>
}
export const useDemoMode = () => useContext(DemoContext)
