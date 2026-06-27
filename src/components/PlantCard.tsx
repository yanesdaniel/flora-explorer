import { type FC } from 'react'
import { Heading, Box, Image, Text, Button } from '@chakra-ui/react'
import { type Plant } from '../types.d'
import { toTitleCase } from '@/utils/functions'

interface Props {
  plant: Plant
}

const PlantCard: FC<Props> = ({ plant }) => {
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
      {(plant.default_image != null) ? (
        <Image
          src={plant.default_image.regular_url !== undefined
            ? plant.default_image.regular_url
            : plant.default_image.original_url}
          alt={`${plant.common_name} plant image`}
          loading='lazy'
          objectFit='cover'
          h='250px'
          w='100%'
          />
        ) : (
          <Box
            bg={{ base: 'gray.100', _dark: 'gray.800' }}
            h='250px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            color={{ base: 'gray.700', _dark: 'gray.200' }}
          >
            Image not available
          </Box>
      )}

      <Box p={4}>
        <Heading as='h2' size='xl' mb={2} color={{ base: 'black', _dark: 'white' }}>
          {plant.common_name !== null ? toTitleCase(plant.common_name) : 'Common name not available'}
        </Heading>
        <Text fontSize='lg' color={{ base: 'gray.700', _dark: 'gray.200' }} mb={2}>
          <Box as='span' fontWeight='bold'>Scientific name:</Box> {plant.scientific_name !== null ? plant.scientific_name?.[0] : 'Scientific name not available'}
        </Text>
        <Text fontSize='lg' color={{ base: 'gray.700', _dark: 'gray.200' }} mb={2}>
          <Box as='span' fontWeight='bold'>Family:</Box> {plant.family !== null ? plant.family : 'Family not available'}
        </Text>
        <Text fontSize='lg' color={{ base: 'gray.700', _dark: 'gray.200' }} mb={4}>
          <Box as='span' fontWeight='bold'>Genus:</Box> {plant.genus !== null ? plant.genus : 'Genus not available'}
        </Text>
        <Button
          size='md'
          width='100%'
          bg={{ base: 'gray.800', _dark: 'gray.100' }}
          color={{ base: 'white', _dark: 'gray.900' }}
          _hover={{
            bg: { base: 'gray.900', _dark: 'gray.200' }
          }}
          onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(plant.scientific_name?.[0] ?? '')}`, '_blank')}
        >
          More Information
        </Button>
      </Box>
    </Box>
  )
}

export default PlantCard
