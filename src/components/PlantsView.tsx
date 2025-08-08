import { type FC } from 'react'
import { Heading, SimpleGrid, Box, Image, Text } from '@chakra-ui/react'
import { type Plant } from '../types'

interface Props {
  plants: Plant[]
}

const PlantsView: FC<Props> = ({ plants }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {plants.map((plant) => {
        return (
          <Box
            key={plant.id}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            boxShadow='md'
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            transition='all 0.2s'
            bg={{ base: 'white', _dark: 'gray.800' }}
            borderColor={{ base: 'gray.200', _dark: 'gray.600' }}
          >
            {(plant.default_image != null)
              ? (
                <Image
                  src={plant.default_image.regular_url !== undefined ? plant.default_image.regular_url : plant.default_image.original_url}
                  alt={`${plant.common_name} plant image`}
                  loading='lazy'
                  objectFit='cover'
                  h='250px'
                  w='100%'
                />
                )
              : (
                <Box
                  bg={{ base: 'gray.100', _dark: 'gray.800' }}
                  h='250px'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  color={{ base: 'gray.700', _dark: 'gray.200' }}
                >
                  Image not available for this plant
                </Box>
                )}
            <Box p={4}>
              <Heading as='h2' size='xl' mb={2} color={{ base: 'black', _dark: 'white' }}>
                Common name: {plant.common_name !== null ? plant.common_name : 'Common name not available'}
              </Heading>
              <Text fontSize='lg' color={{ base: 'gray.700', _dark: 'gray.200' }} mb={2} fontStyle='italic'>
                Scientific name: {plant.scientific_name !== null ? plant.scientific_name?.[0] : 'Scientific name not available'}
              </Text>
              <Text fontSize='lg' color={{ base: 'gray.700', _dark: 'gray.200' }} fontStyle='italic' mb={2}>
                Family: {plant.family !== null ? plant.family : 'Family not available'}
              </Text>
              <Text fontSize='lg' color={{ base: 'gray.700', _dark: 'gray.200' }} fontStyle='italic'>
                Genus: {plant.genus !== null ? plant.genus : 'Genus not available'}
              </Text>
            </Box>
          </Box>
        )
      })}
    </SimpleGrid>
  )
}

export default PlantsView
