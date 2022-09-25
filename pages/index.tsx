import { fetcher } from '../helpers/fetcher'

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
    <div data-testid='main page'>
      <h1>Star Wars starships:</h1>
      {starships.results.map((starship: any) => (
        <div key={starship.name} data-testid='starship'>
          <p>{starship.name}</p>
          <p>{starship.manufacturer}</p>
          <p>Cost: {starship['cost_in_credits']}</p>
          <p>Crew: {starship.crew}</p>
        </div>
      ))}
      {error && <p>{error.message}</p>}
    </div>
  )
}
