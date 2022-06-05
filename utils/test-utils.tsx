import { render, queries, RenderOptions } from '@testing-library/react'
import React, { ReactElement, FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

const StyledThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: StyledThemeProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }
