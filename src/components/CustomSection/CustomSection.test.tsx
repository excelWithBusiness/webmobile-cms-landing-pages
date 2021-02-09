import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { CustomSection } from './index'
import { mountWithTheme } from 'webmobile-sc-components'

describe('Content:Common:Components:CustomSection', () => {
  afterEach(cleanup)

  it('renders a section', () => {
    const component = mountWithTheme(<CustomSection>Test</CustomSection>)
    const section = component.find('section')
    expect(section).toHaveLength(1)
  })
})
