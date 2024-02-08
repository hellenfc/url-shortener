import { renderHook } from '@testing-library/react'
import Layout from '../components/Layout'

describe('Layout', () => {
  it('should render', () => {
    const { result } = renderHook(() => Layout())
    expect(result).toBeDefined()
  })
})