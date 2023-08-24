import React from 'react'
import { render } from '@testing-library/react'
import CalculatorDisplay from './calculator-display'

test('it renders', () => {
  const { container } = render(<CalculatorDisplay value="0" />)
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    css="[object Object]"
  >
    <div
      class="autoScalingText"
      data-testid="total"
      style="transform: scale(1,1);"
    >
      0
    </div>
  </div>
</div>
`)
})
