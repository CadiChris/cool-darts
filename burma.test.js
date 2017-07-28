import { burma } from './burma'

it('retourne le state initial', () => {
  expect(burma(undefined, {})).toMatchSnapshot()
})