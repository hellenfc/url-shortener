import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import AppProviders from './providers/app-providers'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AppProviders, ...options })
// returns a function that wraps the ui in AppProviders and passes the options to render

export * from '@testing-library/react'
export { customRender as render }