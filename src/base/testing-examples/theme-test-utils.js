import React from 'react'
import PropTypes from 'prop-types'
import { render as rtlRender } from '@testing-library/react'
import ThemeProvider from '@/base/theme-provider'
import mediaQuery from 'css-mediaquery'

// matchMedia polyfill
// https://github.com/ericf/css-mediaquery (actual polyfill)
// https://mui.com/material-ui/react-use-media-query/#testing (usage example)
function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addListener: () => {},
    removeListener: () => {},
  })
}

function render(ui, options) {
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

function Wrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

export * from '@testing-library/react'
export { render, createMatchMedia }
