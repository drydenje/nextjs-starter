import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import NavBar from '@/navigation/NavBar'
import ThemeProvider from '@/base/theme-provider'
import mediaQuery from 'css-mediaquery'

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addListener: () => {},
    removeListener: () => {},
  })
}

function Wrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

describe('My Tests', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth)
  })

  test('renders NavBar with ThemeProvider: Dark', () => {
    // const { debug } = render(
    {
      /* <ThemeProvider attribute="class" defaultTheme="dark"> */
    }
    const { container, rerender } = render(<NavBar />, { wrapper: Wrapper })
    rerender(<NavBar />)
    // debug()
    expect(container).toMatchInlineSnapshot(`
<div>
  <script>
    !function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');var e=localStorage.getItem('theme');if('system'===e||(!e&&false)){var t='(prefers-color-scheme: dark)',m=window.matchMedia(t);if(m.media!==t||m.matches){d.style.colorScheme = 'dark';c.add('dark')}else{d.style.colorScheme = 'light';c.add('light')}}else if(e){c.add(e|| '')}else{c.add('dark')}if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'dark'}catch(e){}}()
  </script>
  <nav>
    Nav
  </nav>
</div>
`)
  })
})
