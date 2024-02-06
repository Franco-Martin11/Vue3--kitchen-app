import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TitleHeadingVue from '../TitleHeading.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(TitleHeadingVue, { props: { headingText: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
