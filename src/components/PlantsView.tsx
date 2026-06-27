import { type FC } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { type Plant } from '../types.d'
import PlantCard from './PlantCard'

interface Props {
  plants: Plant[]
}

const PlantsView: FC<Props> = ({ plants }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {plants.map((plant) =>
        <PlantCard key={plant.id} plant={plant}></PlantCard>
      )}
    </SimpleGrid>
  )
}

export default PlantsView
