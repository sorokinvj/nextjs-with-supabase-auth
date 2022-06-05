import Home from '../pages/index'
import { render, screen } from '../utils/test-utils'
import starships from './starships.json'

describe('Home', () => {
  test('it renders and containes starships', () => {
    render(<Home starships={starships} error={null} />)
    const ships = screen.getAllByTestId('starship')
    expect(ships).toHaveLength(starships.results.length)
  })
})
