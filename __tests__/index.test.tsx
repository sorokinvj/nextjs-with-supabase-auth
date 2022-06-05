import Home from 'pages'
import { render, screen } from 'test-utils'
import starships from './starships.json'

describe('Home', () => {
  test('it renders and contains starships', () => {
    render(<Home starships={starships} error={null} />)
    const page = screen.getByTestId('main page')
    expect(page).toBeInTheDocument()
    const ships = screen.getAllByTestId('starship')
    expect(ships).toHaveLength(starships.results.length)
  })
})
