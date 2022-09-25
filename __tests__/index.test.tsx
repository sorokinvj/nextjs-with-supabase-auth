import Home from 'pages'
import { render, screen } from '@testing-library/react'
import starships from './starships.json'

describe('Home', () => {
  test('it renders and contains starships', () => {
    // arrange
    render(<Home starships={starships} error={null} />)

    // act
    const page = screen.getByTestId('main page')
    const ships = screen.getAllByTestId('starship')

    // assert
    expect(page).toBeInTheDocument()
    expect(ships).toHaveLength(starships.results.length)
  })
})
