import { useEffect, useState } from 'react'
import { type Plant } from './types'
import { API_URL, API_KEY } from './constants'
import {
  Box,
  SimpleGrid,
  Skeleton,
  Alert
} from '@chakra-ui/react'
import PlantsView from '@components/PlantsView'
import { getRandomPage } from '@utils/functions'
import Layout from '@components/Layout'

function App () {
  const [plants, setPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response: Response = await fetch(`${API_URL}?key=${API_KEY}&page=${getRandomPage()}`)
        if (!response.ok) {
          throw new Error('Error while loading data')
        }
        const data: { data: Plant[] } = await response.json()
        setPlants(data.data || [])
      } catch (err) {
        setError('Error while loading plants data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }, [])

  if (error) {
    return (
      <Layout>
        <Alert.Root status='error' title='Error' width='sm' margin='auto' borderRadius='lg'>
          <Alert.Indicator />
          <Alert.Title>Error loading plants data</Alert.Title>
        </Alert.Root>
      </Layout>
    )
  }

  return (
    <Layout>
      {loading
        ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {[...Array(6)].map((_, i) => (
              <Box key={i} p={4} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Skeleton height='200px' mb={4} />
                <Skeleton height='20px' mb={2} />
                <Skeleton height='16px' width='80%' />
              </Box>
            ))}
          </SimpleGrid>
          )
        : (
          <PlantsView plants={plants} />
          )}
    </Layout>
  )
}

export default App
