import styled from 'styled-components'
import { fetcher } from '../helpers/fetcher'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Name = styled.h2`
  font-size: 20px;
  margin-top: 10px;
`

const Page = styled.div`
  padding: 20px;
  p {
    margin: 0;
  }
`

const API = `https://swapi.dev/api/starships/`

export async function getServerSideProps() {
  try {
    const starships = await fetcher(API)
    return {
      props: {
        starships,
        error: null,
      },
    }
  } catch (error) {
    return {
      props: {
        starships: null,
        error,
      },
    }
  }
}

export default function Home({ starships, error }: { starships: any; error: any }) {
  return (
    <Page>
      <Title>Star Wars starships:</Title>
      {starships.results.map((starship: any) => (
        <div key={starship.name} data-testid='starship'>
          <Name>{starship.name}</Name>
          <p>{starship.manufacturer}</p>
          <p>Cost: {starship['cost_in_credits']}</p>
          <p>Crew: {starship.crew}</p>
        </div>
      ))}
      {error && <p>{error.message}</p>}
    </Page>
  )
}
