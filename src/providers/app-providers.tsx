import { NextUIProvider } from '@nextui-org/react'

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

export default AppProviders