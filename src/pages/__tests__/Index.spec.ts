import App from 'src/App.vue'
import { render } from 'test/helper'
import { fireEvent } from '@testing-library/vue'

test('renders index page', async () => {
  const { findByText, findByAltText } = await render(App, { route: '/' })

  expect(await findByAltText('Vue logo')).toBeInTheDocument()
  expect(await findByText('count is: 0')).toBeInTheDocument()
})

test('increment count on button clicked', async () => {
  const { findByText, findByTestId } = await render(App, { route: '/' })

  const btn = await findByTestId('count-btn')

  await fireEvent.click(btn)
  expect(await findByText('count is: 1')).toBeInTheDocument()
})
