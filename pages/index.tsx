import { fetcher } from '../helpers/fetcher'

const API = `https://swapi.dev/api/starships/`

export async function getStaticProps() {
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
    <div data-testid='main page' className='p-8'>
      <h1 className='text-3xl mb-4'>Star Wars starships:</h1>
      <div className='columns-2'>
        {starships.results.map((starship: any) => (
          <div key={starship.name} data-testid='starship' className='p-2 mb-2 last:mb-0 shadow-xl'>
            <p className='text-2xl'>{starship.name}</p>
            <p>{starship.manufacturer}</p>
            <p>Cost: {starship['cost_in_credits']}</p>
            <p>Crew: {starship.crew}</p>
          </div>
        ))}
      </div>
      {error && <p>{error.message}</p>}
    </div>
  )
}
